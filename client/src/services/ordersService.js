import { get, post, put, del } from '../lib/request.js';

const baseUrl = 'https://hidden-reef-10886-655e0b2ab112.herokuapp.com/orders';

export const createOrder = async (orderData) => await post(`${baseUrl}/create`, orderData);
export const ordersHistory = async (page = 1, status = "") => await get(`${baseUrl}/list?page=${page}${status ? `&status=${status}` : ""}`);
export const orderDetails = async (orderId) => await get(`${baseUrl}/${orderId}`);
export const confirmOrder = async (orderId) => await put(`${baseUrl}/${orderId}?status=confirm`);
export const rejectOrder = async (orderId) => await put(`${baseUrl}/${orderId}?status=reject`);
