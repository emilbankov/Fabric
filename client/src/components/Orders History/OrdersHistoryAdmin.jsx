import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import OrderDetailsModal from "./Order Details/OrderDetails";
import * as ordersService from "../../services/ordersService";

export default function OrdersHistoryAdmin() {
    const location = useLocation();
    const [showModal, setShowModal] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        Promise.all([
            ordersService.ordersHistoryAdmin(),
        ])
            .then(([orders]) => {
                setOrders(orders);
            })
            .catch(err => {
                console.error('Search Error:', err);
            })
    }, [location.pathname]);

    useEffect(() => {
        const existingScript = document.querySelector('script[src="/js/custom.js"]');
        if (existingScript && existingScript.parentNode) {
            existingScript.parentNode.removeChild(existingScript);
        }

        const script = document.createElement('script');
        script.src = '/js/custom.js';
        script.async = true;

        document.body.appendChild(script);

        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, [location.pathname]);

    const handleViewOrder = (orderId) => {
        setSelectedOrder(orderId);
        setShowModal(true);
    };

    return (
        <>
            <div className="account-order   layout-2 left-col">
                <div className="content_headercms_bottom" />
                <div className="content-top-breadcum">
                    <div className="container">
                        <div className="row">
                            <div id="title-content"></div>
                        </div>
                    </div>
                </div>
                <div id="account-order" className="container">
                    <ul className="breadcrumb">
                        <li><Link to="/"><i className="fa fa-home" /></Link></li>
                        <li><Link to="/orders-history-admin">Поръчки</Link></li>
                    </ul>
                    <div className="row">
                        <aside id="column-left" className="col-sm-3 hidden-xs">
                            <div className="box">
                                <div className="box-heading">Account</div>
                                <div className="list-group">
                                    <a
                                        href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=account/account "
                                        className="list-group-item"
                                    >
                                        My Account{" "}
                                    </a>
                                    <a
                                        href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=account/edit "
                                        className="list-group-item"
                                    >
                                        Edit Account
                                    </a>{" "}
                                    <a
                                        href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=account/password"
                                        className="list-group-item"
                                    >
                                        Password
                                    </a>
                                    <a
                                        href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=account/address"
                                        className="list-group-item"
                                    >
                                        Address Book
                                    </a>{" "}
                                    <a
                                        href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=account/wishlist "
                                        className="list-group-item"
                                    >
                                        Wish List{" "}
                                    </a>{" "}
                                    <a
                                        href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=account/order "
                                        className="list-group-item"
                                    >
                                        Order History{" "}
                                    </a>{" "}
                                    <a
                                        href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=account/download"
                                        className="list-group-item"
                                    >
                                        Downloads{" "}
                                    </a>
                                    <a
                                        href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=account/recurring"
                                        className="list-group-item"
                                    >
                                        Recurring payments{" "}
                                    </a>{" "}
                                    <a
                                        href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=account/reward "
                                        className="list-group-item"
                                    >
                                        Reward Points{" "}
                                    </a>{" "}
                                    <a
                                        href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=account/return"
                                        className="list-group-item"
                                    >
                                        Returns{" "}
                                    </a>{" "}
                                    <a
                                        href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=account/transaction"
                                        className="list-group-item"
                                    >
                                        Transactions{" "}
                                    </a>{" "}
                                    <a
                                        href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=account/newsletter"
                                        className="list-group-item"
                                    >
                                        Newsletter{" "}
                                    </a>
                                    <a
                                        href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=account/logout"
                                        className="list-group-item"
                                    >
                                        Logout{" "}
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-viewport">
                                <div id="banner0" className="swiper-container  single-banner ">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <a href="#">
                                                <img
                                                    src="./images/left-banner-272x340.jpg"
                                                    alt="Left Banner1"
                                                    className="img-responsive"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    {/* If we need pagination */}
                                    <div className="swiper-pagination" />
                                </div>
                            </div>
                            <div className="box">
                                <div className="box-heading">Information</div>
                                <div className="list-group">
                                    <a
                                        className="list-group-item"
                                        href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=information/information&information_id=4"
                                    >
                                        About Us{" "}
                                    </a>
                                    <a
                                        className="list-group-item"
                                        href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=information/information&information_id=6"
                                    >
                                        Delivery Information{" "}
                                    </a>
                                    <a
                                        className="list-group-item"
                                        href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=information/information&information_id=3"
                                    >
                                        Privacy Policy{" "}
                                    </a>
                                    <a
                                        className="list-group-item"
                                        href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=information/information&information_id=5"
                                    >
                                        Terms &amp; Conditions{" "}
                                    </a>
                                    <a
                                        className="list-group-item"
                                        href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=information/contact"
                                    >
                                        Contact Us{" "}
                                    </a>
                                    <a
                                        className="list-group-item"
                                        href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=information/sitemap"
                                    >
                                        Site Map{" "}
                                    </a>
                                </div>
                            </div>
                        </aside>
                        <div id="content" className="col-sm-9">
                            <h1>Поръчки</h1>
                            <div className="table-responsive">
                                <table className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <td className="text-center">Order ID</td>
                                            <td className="text-center">Клиент</td>
                                            <td className="text-center">Брой продукти</td>
                                            <td className="text-center">Статус</td>
                                            <td className="text-center">Общо</td>
                                            <td className="text-center">Дата на поръчка</td>
                                            <td className="text-center">Детайли</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.orders && orders.orders.map(order => (
                                            <tr key={order.id}>
                                                <td className="text-center">#{order.id}</td>
                                            <td className="text-center">{order.customer}</td>
                                            <td className="text-center">{order.quantity}</td>
                                            <td className="text-center">{order.status}</td>
                                            <td className="text-center">{order.totalPrice} лв.</td>
                                            <td className="text-center">{order.createdAt.split(' ')[0]}</td>
                                            <td className="text-center">
                                                <button
                                                    onClick={() => handleViewOrder(order.id)}
                                                    className="btn btn-info"
                                                >
                                                    <i className="fa fa-eye" />
                                                </button>
                                            </td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 text-left" />
                                <div className="col-sm-6 text-right pages-left">
                                    Showing {orders.total_items} of 10 ({orders.total_pages} Pages)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <OrderDetailsModal 
                show={showModal}
                onClose={() => setShowModal(false)}
                orderId={selectedOrder}
            />
        </>
    );
}
