import { get, post, put } from '../lib/request.js';

const baseUrl = 'https://hidden-reef-10886-655e0b2ab112.herokuapp.com/users';

export const login = (email, password) => {
    return post(`${baseUrl}/login`, {
        email,
        password,
    });
};

export const register = (firstName, lastName, email, phoneNumber, address, region, city, password) => {
    return post(`${baseUrl}/register`, {
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
        region,
        city,
        password,
    });
};

export const profile = async () => await get(`${baseUrl}/profile`);
export const editProfile = async (firstName, lastName, email, phoneNumber, address, region, city) => await put(`${baseUrl}/edit`, {
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    region,
    city
});

export const forgottenPassword = async (email) => await post(`${baseUrl}/forgot-password`, { email });
export const resetPassword = async (password, token) => await post(`${baseUrl}/reset-password`, { password, token });

export const getWishlist = async () => await get(`${baseUrl}/wishlist`);
export const addToWishlist = async (id) => await put(`${baseUrl}/wishlist`, { id });
export const removeFromWishlist = async (id) => await put(`${baseUrl}/wishlist/${id}`);

