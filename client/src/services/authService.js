import { get, post } from '../lib/request.js';

const baseUrl = 'http://localhost:8081/users';

export const login = (email, password) => post(`${baseUrl}/login`, {
    email,
    password
});

export const register = (email, password, address) => post(`${baseUrl}/register`, {
    email,
    password,
    address
});