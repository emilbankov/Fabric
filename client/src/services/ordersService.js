import { get, post, put, del } from '../lib/request.js';

const baseUrl = 'https://tshirt-latest.onrender.com/orders';

export const createOrder = async (orderData) => await post(`${baseUrl}/create`, orderData);
export const ordersHistory = async (page = 1, status = "") => await get(`${baseUrl}/list?page=${page}${status ? `&status=${status}` : ""}`);
export const orderDetails = async (orderId) => await get(`${baseUrl}/${orderId}`);
export const confirmOrder = async (orderId) => await put(`${baseUrl}/${orderId}?status=confirm`);
export const rejectOrder = async (orderId) => await put(`${baseUrl}/${orderId}?status=reject`);
