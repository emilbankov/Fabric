import { get, post, put, del } from '../lib/request.js';

const baseUrl = 'https://tshirt-latest.onrender.com/orders';

export const createOrder = async (orderData) => await post(`${baseUrl}/create`, orderData);
export const ordersHistoryAdmin = async () => await get(`${baseUrl}/list`);
export const orderDetails = async (orderId) => await get(`${baseUrl}/${orderId}`);