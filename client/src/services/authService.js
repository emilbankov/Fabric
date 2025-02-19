import { get, post } from '../lib/request.js';

const baseUrl = 'https://tshirt-latest.onrender.com/users';

export const login = (email, password) => {
    return post(`${baseUrl}/login`, {
        email,
        password,
    });
};

export const register = (firstName, lastName, email, phoneNumber, address, password) => {
    return post(`${baseUrl}/register`, {
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
        password,
    });
};

export const profile = async () => await get(`${baseUrl}/profile`);