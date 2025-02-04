import { get, post } from '../lib/request.js';

const baseUrl = 'https://tshirt-latest.onrender.com/users';

const getDeviceInfo = () => {
    const screenResolution = `${window.screen.width}x${window.screen.height}`;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const plugins = JSON.stringify(
        Array.from(navigator.plugins).map(plugin => ({
            name: plugin.name,
            description: plugin.description,
            filename: plugin.filename,
        }))
    );
    const hardwareConcurrency = navigator.hardwareConcurrency;
    const deviceMemory = navigator.deviceMemory;

    return { screenResolution, timezone, plugins, hardwareConcurrency, deviceMemory };
};

export const login = (email, password) => {
    const deviceInfo = getDeviceInfo();

    return post(`${baseUrl}/login`, {
        email,
        password,
        deviceInfo,
    });
};

export const register = (firstName, lastName, email, phoneNumber, address, password) => {
    const deviceInfo = getDeviceInfo();

    return post(`${baseUrl}/register`, {
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
        password,
        deviceInfo,
    });
};