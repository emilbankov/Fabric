import { get, post, put, del } from '../lib/request.js';

const baseUrl = 'https://hidden-reef-10886-655e0b2ab112.herokuapp.com/clothes';

export const getNewest = async () => await get(`${baseUrl}/catalog?sort=new`);
export const getMostSold = async () => await get(`${baseUrl}/catalog?sort=most-sold`);
export const getOne = async (clothingId) => await get(`${baseUrl}/${clothingId}`);
export const getCatalog = async (type, sort, size, page, category) => await get(`${baseUrl}/catalog?type=${type}&sort=${sort}&size=${size}&page=${page}&category=${category}`);
export const getCategories = async (type) => await get(`${baseUrl}/category?type=${type}`);
export const getHomeCategories = async () => await get(`${baseUrl}/categories`);

export const search = async (name) => {
    const response = await fetch(`${baseUrl}/search?name=${name}`);
    const result = await response.json();
    return result;
};

export const searchWithFilters = async (name, sort, size, page, type) => {
    try {
        const response = await fetch(`${baseUrl}/search?name=${name}&sort=${sort}&type=${type}&size=${size}&page=${page}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Search error:', error);
        throw error;
    }
};

export const similarProducts = async (name, sort, size, page) => {
    try {
        const response = await fetch(`${baseUrl}/search?name=${name}&sort=${sort}&size=${size}&page=${page}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Search error:', error);
        throw error;
    }
};

export const create = (name, description, price, type, category, model, frontImage, backImage) => {
    const formData = new FormData();

    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('type', type);
    formData.append('category', category);
    formData.append('model', model);

    formData.append('frontImage', frontImage);
    if (backImage) {
        formData.append('backImage', backImage);
    }

    return post(`${baseUrl}/add`, formData);
};

export const edit = async (clothingId, clothData) => {
    const result = await put(`${baseUrl}/${clothingId}`, clothData);

    return result;
};

export const deleteProduct = (clothingId) => {
    const result = put(`${baseUrl}/delete/${clothingId}`);

    return result;
};

export const getPrice = async () => await get(`${baseUrl}/prices`);
export const getDiscountPrice = async () => await get(`${baseUrl}/prices-discount`);
export const changePrices = async (type, price, discountPrice) => await put(`${baseUrl}/prices?type=${type}`, { price, discountPrice });