const getDeviceInfo = () => {
    const screenResolution = `${window.screen.width}x${window.screen.height}`;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const hardwareConcurrency = navigator.hardwareConcurrency || 'Unknown Hardware';
    const deviceMemory = navigator.deviceMemory || 'Unknown Memory';
  
    return { screenResolution, timezone, hardwareConcurrency, deviceMemory };
  };
  
  const isTokenExpired = (token) => {
    if (!token) return true;
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.exp * 1000 < Date.now() + 30000; // 30 second buffer
    } catch (error) {
        return true;
    }
  };
  
  let isRefreshing = false;
  let refreshQueue = [];
  
  const buildOptions = (data, customHeaders = {}) => {
    const options = {
        headers: {
            ...customHeaders,
        },
    };
  
    if (data) {
        if (data instanceof FormData) {
            options.body = data;
        } else {
            options.body = JSON.stringify(data);
            options.headers['Content-Type'] = 'application/json';
        }
    }
  
    const deviceInfo = getDeviceInfo();
    options.headers['screenResolution'] = deviceInfo.screenResolution;
    options.headers['timezone'] = deviceInfo.timezone;
    options.headers['hardwareConcurrency'] = String(deviceInfo.hardwareConcurrency);
    options.headers['deviceMemory'] = String(deviceInfo.deviceMemory);
  
    const token = localStorage.getItem('accessToken');
    if (token && !isTokenExpired(token)) {
        options.headers['Authorization'] = `Bearer ${token}`;
    }
  
    return options;
  };
  
  const refreshToken = async () => {
    try {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) {
            localStorage.removeItem('accessToken');
            throw new Error('No refresh token available');
        }

        const options = buildOptions({}, {
            'Content-Type': 'application/json',
            'Refresh-Token': refreshToken
        });

        const response = await fetch('https://tshirt-latest.onrender.com/refresh-token', {
            ...options,
            method: 'POST',
        });

        if (!response.ok) {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            throw new Error('Failed to refresh token');
        }

        const data = await response.json();
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        return data.accessToken;
    } catch (error) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        throw error;
    }
  };
  
  const requestWithRetry = async (method, url, data, customHeaders, retries = 3) => {
    try {
        return await request(method, url, data, customHeaders);
    } catch (error) {
        if (retries > 0 && error.message.includes('Token')) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            return requestWithRetry(method, url, data, customHeaders, retries - 1);
        }
        throw error;
    }
  };
  
  const request = async (method, url, data, customHeaders) => {
    let response = await fetch(url, {
        ...buildOptions(data, customHeaders),
        method,
    });
  
    if (response.status === 204) {
        return {};
    }
  
    let result = await response.json();
  
    if (!response.ok) {
        if (response.status === 401 && result?.error === "Token has expired") {
            if (!isRefreshing) {
                isRefreshing = true;
                try {
                    const newAccessToken = await refreshToken();
                    isRefreshing = false;
                    
                    // Process queued requests
                    refreshQueue.forEach(cb => cb(newAccessToken));
                    refreshQueue = [];

                    // Retry original request
                    const retryResponse = await fetch(url, {
                        ...buildOptions(data, { 
                            ...customHeaders, 
                            Authorization: `Bearer ${newAccessToken}` 
                        }),
                        method,
                    });

                    if (retryResponse.status === 204) return {};
                    const retryResult = await retryResponse.json();
                    if (!retryResponse.ok) throw retryResult;
                    return retryResult;
                } catch (refreshError) {
                    isRefreshing = false;
                    refreshQueue = [];
                    throw refreshError;
                }
            } else {
                // Add request to queue
                return new Promise((resolve, reject) => {
                    refreshQueue.push((newToken) => {
                        fetch(url, {
                            ...buildOptions(data, { 
                                ...customHeaders, 
                                Authorization: `Bearer ${newToken}` 
                            }),
                            method,
                        })
                        .then(res => res.json())
                        .then(resolve)
                        .catch(reject);
                    });
                });
            }
        }
        throw result;
    }
  
    return result;
  };
  
  export const get = requestWithRetry.bind(null, 'GET');
  export const post = requestWithRetry.bind(null, 'POST');
  export const put = requestWithRetry.bind(null, 'PUT');
  export const del = requestWithRetry.bind(null, 'DELETE');