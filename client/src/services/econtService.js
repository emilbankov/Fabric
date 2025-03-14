import { get, post, put, del } from '../lib/request.js';

const baseUrl = 'https://hidden-reef-10886-655e0b2ab112.herokuapp.com/econt';

export const getCities = async () => await get(`${baseUrl}/cities`);
export const getOffices = async (name) => await get(`${baseUrl}/offices/search?name=${name}`);
