const getDeviceInfo = () => {
    const screenResolution = `${window.screen.width}x${window.screen.height}`;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const hardwareConcurrency = navigator.hardwareConcurrency || 'Unknown Hardware';
    const deviceMemory = navigator.deviceMemory || 'Unknown Memory';
  
    return { screenResolution, timezone, hardwareConcurrency, deviceMemory };
  };
  
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
    if (token) {
        options.headers['Authorization'] = `Bearer ${token}`;
    }
  
    return options;
  };
  
  const refreshToken = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
  
    if (!refreshToken) {
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
      throw new Error('Failed to refresh token');
    }
  
    const data = await response.json();
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    return data.accessToken;
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
      if (response.status === 401 && result && result.error === "Token has expired") {
            try {
                const newAccessToken = await refreshToken();
  
                const retryResponse = await fetch(url, {
                    ...buildOptions(data, { ...customHeaders, Authorization: `Bearer ${newAccessToken}` }),
                    method,
                });
  
                if (retryResponse.status === 204) {
                    return {};
                }
  
                const retryResult = await retryResponse.json();
  
                if (!retryResponse.ok) {
                    throw retryResult;
                }
  
                return retryResult;
            } catch (refreshError) {
                console.error('Token refresh failed:', refreshError);
                throw refreshError;
            }
        }
  
        throw result;
    }
  
    return result;
  };
  
  export const get = request.bind(null, 'GET');
  export const post = request.bind(null, 'POST');
  export const put = request.bind(null, 'PUT');
  export const del = request.bind(null, 'DELETE');