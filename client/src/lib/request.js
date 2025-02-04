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
  
  const request = async (method, url, data, customHeaders) => {
    const response = await fetch(url, {
      ...buildOptions(data, customHeaders),
      method,
    });
  
    if (response.status === 204) {
      return {};
    }
  
    const result = await response.json();
  
    if (!response.ok) {
      throw result;
    }
  
    return result;
  };
  
  export const get = request.bind(null, 'GET');
  export const post = request.bind(null, 'POST');
  export const put = request.bind(null, 'PUT');
  export const del = request.bind(null, 'DELETE');