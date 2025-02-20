import { get, post, put, del } from '../lib/request.js';

const baseUrl = 'https://tshirt-latest.onrender.com/orders';

export const createOrder = async (orderData) => await post(`${baseUrl}/create`, orderData);