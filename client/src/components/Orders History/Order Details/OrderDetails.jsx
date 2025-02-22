import React, { useEffect, useState } from 'react';
import * as ordersService from '../../../services/ordersService';
import { gender } from '../../../lib/dictionary';

export default function OrderDetailsModal({ show, onClose, orderId, refreshOrders }) {
    const [order, setOrder] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showRejectModal, setShowRejectModal] = useState(false);

    useEffect(() => {
        if (show) {
            setIsLoading(true);
            setOrder(null);
        }

        if (show && orderId) {
            const fetchOrderDetails = async () => {
                try {
                    const data = await ordersService.orderDetails(orderId);
                    setOrder(data.order);
                } catch (error) {
                    console.error('Failed to fetch order details:', error);
                } finally {
                    setIsLoading(false);
                }
            };

            fetchOrderDetails();
        }
    }, [show, orderId]);

    const handleConfirmOrder = async () => {
        try {
            await ordersService.confirmOrder(orderId);
            console.log('Order confirmed successfully');
            onClose();
            refreshOrders();
        } catch (error) {
            console.error('Error confirming order:', error);
        }
    };

    const handleRejectOrder = async () => {
        try {
            await ordersService.rejectOrder(orderId);
            console.log('Order rejected successfully');
            onClose();
            refreshOrders();
        } catch (error) {
            console.error('Error rejecting order:', error);
        }
    };

    if (!show) return null;

    return (
        <>
            <div
                className="modal"
                style={{
                    display: 'block',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1000
                }}
                onClick={onClose}
            >
                <div
                    className="modal-dialog"
                    style={{
                        backgroundColor: 'white',
                        margin: '5% auto',
                        padding: '20px',
                        width: '80%',
                        maxWidth: '1000px',
                        borderRadius: '5px'
                    }}
                    onClick={e => e.stopPropagation()}
                >
                    <div className="modal-content">
                        {isLoading && <div style={{ margin: '10% auto' }} className="text-center"><img src="/images/loading.gif" alt="Loading..." /></div>}
                        {!isLoading && order && (
                            <div>
                                <div className="modal-header text-center" style={{ position: 'relative' }}>
                                    <h4>Детайли за поръчка #{order.id}</h4>
                                    <button
                                        onClick={onClose}
                                        className="close"
                                        style={{
                                            position: 'absolute',
                                            right: '10px',
                                            top: '10px',
                                            cursor: 'pointer',
                                            border: 'none',
                                            background: 'none',
                                            fontSize: '20px'
                                        }}
                                    >
                                        ×
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div style={{ overflowX: 'auto', width: '100%' }}>
                                        <table className="table table-bordered table-hover table-order-details">
                                            <tbody>
                                                <tr>
                                                    <td className="text-center" style={{ width: '25%' }}>
                                                        <b>Order ID:</b> #{order.id}
                                                    </td>
                                                    <td className="text-center" style={{ width: '25%' }}>
                                                        <b>Статус:</b> {order.status}
                                                    </td>
                                                    <td className="text-center" style={{ width: '25%' }}>
                                                        <b>Дата на поръчка:</b> <br /> {order.createdAt}
                                                    </td>
                                                    <td className="text-center" style={{ width: '25%' }}>
                                                        <b>Последно обновяване:</b> <br /> {order.updatedAt}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h4 className='text-center' style={{ marginTop: '20px', fontWeight: 'bold' }}>Детайли на клиент</h4>
                                    <div style={{ overflowX: 'auto', width: '100%' }}>
                                        <table className="table table-bordered table-hover table-order-details">
                                            <thead>
                                                <tr>
                                                    <td className="text-center" style={{ width: '25%', verticalAlign: 'middle' }}>Имена</td>
                                                    <td className="text-center" style={{ width: '45%', verticalAlign: 'middle' }}>Адрес</td>
                                                    <td className="text-center" style={{ width: '20%', verticalAlign: 'middle' }}>Телефон</td>
                                                    <td className="text-center" style={{ width: '10%', verticalAlign: 'middle' }}>Доставка</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="text-center" style={{ verticalAlign: 'middle' }}>
                                                        {order.customer}<br />
                                                        {order.email}
                                                    </td>
                                                    <td className="text-center" style={{ verticalAlign: 'middle' }}>{order.address}</td>
                                                    <td className="text-center" style={{ verticalAlign: 'middle' }}>{order.phoneNumber}</td>
                                                    <td className="text-center" style={{ verticalAlign: 'middle' }}>{order.selectedOffice ? "До офис" : "До адрес"}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div style={{ overflowX: 'auto', width: '100%' }}>
                                        <table className="table table-bordered table-hover table-order-details">
                                            <thead>
                                                <tr>
                                                    <td className="text-center">Продукт</td>
                                                    <td className="text-center">Модел</td>
                                                    <td className="text-center">Количество</td>
                                                    <td className="text-center">Цена</td>
                                                    <td className="text-center">Общо</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {order.items && order.items.map(item => (
                                                    <tr key={item.id}>
                                                        <td className="text-center">
                                                            {item.name}<br />
                                                            &nbsp;<small>Тип: {item.type === null ? "-" : item.type}</small><br />
                                                            &nbsp;<small>Размер: {item.size === null ? "-" : item.size}</small><br />
                                                            &nbsp;<small>Пол: {gender[item.gender]}</small><br />
                                                        </td>
                                                        <td className="text-center">#{item.model}</td>
                                                        <td className="text-center">{item.quantity}</td>
                                                        <td className="text-center">{item.price} лв.</td>
                                                        <td className="text-center">{item.quantity * item.price} лв.</td>
                                                    </tr>
                                                ))}
                                            </tbody>

                                        </table>
                                    </div>
                                    <table className="table table-bordered table-hover table-order-details">
                                        <tbody>
                                            <tr>
                                                <td colSpan={4} className="text-right" style={{ width: '70%' }}><b>Междинна сума</b></td>
                                                <td className="text-center" style={{ width: '30%', whiteSpace: 'nowrap' }}>{order.totalPrice.toFixed(2)} лв.</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={4} className="text-right" style={{ width: '70%' }}><b>Доставка</b></td>
                                                <td className="text-center" style={{ width: '30%', whiteSpace: 'nowrap' }}>{order.deliveryCost === 0 ? "Безплатна" : `${order.deliveryCost.toFixed(2)} лв.`}</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={4} className="text-right" style={{ width: '70%' }}><b>Общо</b></td>
                                                <td className="text-center" style={{ width: '30%', whiteSpace: 'nowrap' }}>{order.finalPrice.toFixed(2)} лв.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {order.status !== "Confirmed" && order.status !== "Rejected" && (
                                        <div className="modal-footer">
                                            <button className="btn btn-danger" onClick={() => setShowRejectModal(true)}>Отхвърли поръчка</button>
                                            <button className="btn btn-primary" onClick={() => setShowConfirmModal(true)}>Потвърди поръчка</button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {showConfirmModal && (
                <div className="confirmation-modal-overlay" style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1100
                }}>
                    <div className="confirmation-modal" style={{
                        backgroundColor: 'white',
                        padding: '20px',
                        borderRadius: '5px',
                        maxWidth: '400px',
                        width: '100%'
                    }}>
                        <h3>Потвърждаване на поръчка</h3>
                        <p>Сигурни ли сте, че искате да потвърдите поръчка #{order.id}?</p>
                        <div className="modal-buttons" style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '20px' }}>
                            <button onClick={() => setShowConfirmModal(false)} className="btn btn-secondary">ОТКАЗ</button>
                            <button onClick={() => {
                                handleConfirmOrder();
                                setShowConfirmModal(false);
                            }} className="btn btn-primary">Потвърди</button>
                        </div>
                    </div>
                </div>
            )}

            {showRejectModal && (
                <div className="confirmation-modal-overlay" style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1100
                }}>
                    <div className="confirmation-modal" style={{
                        backgroundColor: 'white',
                        padding: '20px',
                        borderRadius: '5px',
                        maxWidth: '400px',
                        width: '100%'
                    }}>
                        <h3>Отхвърляне на поръчка</h3>
                        <p>Сигурни ли сте, че искате да отхвърлите поръчка #{order.id}?</p>
                        <div className="modal-buttons" style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '20px' }}>
                            <button onClick={() => setShowRejectModal(false)} className="btn btn-secondary">ОТКАЗ</button>
                            <button onClick={() => {
                                handleRejectOrder();
                                setShowRejectModal(false);
                            }} className="btn btn-danger">Отхвърли</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}