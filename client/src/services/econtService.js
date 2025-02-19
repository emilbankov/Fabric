import { get, post, put, del } from '../lib/request.js';

const baseUrl = 'https://tshirt-latest.onrender.com/econt';

export const getCities = async () => await get(`${baseUrl}/cities`);
export const getOffices = async (name) => await get(`${baseUrl}/offices/search?name=${name}`);
