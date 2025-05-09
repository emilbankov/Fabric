import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import OrderDetailsModal from "./Order Details/OrderDetails";
import * as ordersService from "../../services/ordersService";
import MetaTags from '../Meta Tags/MetaTags';

export default function OrdersHistory() {
    const location = useLocation();
    const [showModal, setShowModal] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [orders, setOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [orderStatus, setOrderStatus] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchOrders = async () => {
            setIsLoading(true)
            try {
                const response = await ordersService.ordersHistory(currentPage, orderStatus);
                setOrders(response.orders);
                setTotalPages(response.total_pages);
            } catch (err) {
                console.error("Search Error:", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchOrders();
    }, [location.pathname, currentPage, orderStatus]);

    const handleViewOrder = (orderId) => {
        setSelectedOrder(orderId);
        setShowModal(true);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleStatusChange = (e) => {
        setOrderStatus(e.target.value);
        setCurrentPage(1);
    };

    const handleReload = async () => {
        setIsLoading(true);
        try {
            const response = await ordersService.ordersHistory(currentPage, orderStatus);
            setOrders(response.orders);
            setTotalPages(response.total_pages);
        } catch (err) {
            console.error("Reload Error:", err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const existingScript = document.querySelector('script[src="/js/custom.js"]');
        if (existingScript && existingScript.parentNode) {
            existingScript.parentNode.removeChild(existingScript);
        }

        const script = document.createElement("script");
        script.src = "/js/custom.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, [location.pathname]);

    return (
        <>
            <MetaTags
                title="Fabric | История на поръчките"
                description="Прегледайте историята на вашите поръчки във Fabric. Следете статуса на поръчките и преглеждайте детайлите им."
                keywords="Fabric, история на поръчките, поръчки, статус, детайли, orders history, orders, status, details"
            />
            <div className="account-order layout-2 left-col">
                <div className="content_headercms_bottom" />
                <div className="content-top-breadcum">
                    <div className="container">
                        <div className="row">
                            <div id="title-content" />
                        </div>
                    </div>
                </div>
                <div id="account-order" className="container">
                    <ul className="breadcrumb">
                        <li>
                            <Link to="/">
                                <i className="fa fa-home" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/orders-history">Поръчки</Link>
                        </li>
                    </ul>
                    <div className="row">
                        <aside id="column-left" className="col-sm-3 hidden-xs">
                            <div className="box">
                                <div className="box-heading">Акаунт</div>
                                <div className="list-group">
                                    <Link to="/login" className="list-group-item">Вход</Link>
                                    <Link to="/register" className="list-group-item">Регистрация</Link>
                                    <Link to="/forgotten-password" className="list-group-item">Забравена парола</Link>
                                    <Link to="/account" className="list-group-item">Акаунт</Link>
                                    <Link to="/wishlist" className="list-group-item">Любими</Link>
                                    <Link to="/orders-history" className="list-group-item">Мои поръчки</Link>
                                </div>
                            </div>
                            {/* <div className="swiper-viewport">
                                <div id="banner0" className="swiper-container single-banner">
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
                                    <div className="swiper-pagination" />
                                </div>
                            </div> */}
                            <div className="box">
                                <div className="box-heading">Информация</div>
                                <div className="list-group">
                                    <Link className="list-group-item" to="/about">За нас</Link>
                                    <Link className="list-group-item" to="/contact">Контакти</Link>
                                    <Link className="list-group-item" to="/sitemap">Карта на сайта</Link>
                                    <Link className="list-group-item" to="/privacy-policy">Политика за поверителност</Link>
                                    <Link className="list-group-item" to="/terms-and-conditions">Общи условия</Link>
                                </div>
                            </div>
                        </aside>
                        <div id="content" className="col-sm-9">
                            <h1>Поръчки</h1>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div className="form-group" style={{ flex: 1, marginRight: '10px' }}>
                                    <label htmlFor="orderStatus">Статус:</label>
                                    <select
                                        id="orderStatus"
                                        className="form-control"
                                        value={orderStatus}
                                        onChange={handleStatusChange}
                                    >
                                        <option value="all">Всички</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Confirmed">Confirmed</option>
                                        <option value="Rejected">Rejected</option>
                                    </select>
                                </div>
                                <button
                                    onClick={handleReload}
                                    className="btn btn-primary"
                                >
                                    <i className="fa fa-refresh"></i> Обнови
                                </button>
                            </div>
                            <div className="table-responsive">
                                {isLoading ? (
                                    <div style={{ margin: '10% auto' }} className="text-center"><img src="/images/loader.gif" alt="Loading..." /></div>
                                ) : (
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
                                            {orders.map((order) => (
                                                <tr key={order.id}>
                                                    <td className="text-center">#{order.id + 600}</td>
                                                    <td className="text-center">{order.customer}</td>
                                                    <td className="text-center">{order.quantity}</td>
                                                    <td className="text-center">{order.status}</td>
                                                    <td className="text-center">{order.totalPrice.toFixed(2)} лв.</td>
                                                    <td className="text-center">
                                                        {order.createdAt.split(" ")[0]}
                                                    </td>
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
                                )}
                            </div>

                            {/* Updated Pagination Section */}
                            <div className="pagination-wrapper">
                                <div className="col-sm-6 text-right page-link">
                                    <ul className="pagination">
                                        {currentPage > 1 && (
                                            <>
                                                <li>
                                                    <a
                                                        onClick={() => handlePageChange(1)}
                                                        role="button"
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        |&lt;
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        onClick={() => handlePageChange(currentPage - 1)}
                                                        role="button"
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        &lt;
                                                    </a>
                                                </li>
                                            </>
                                        )}
                                        {(() => {
                                            const totalPagesCalc = Math.max(1, totalPages || 1);
                                            let startPage = Math.max(1, currentPage - 1);
                                            let endPage = Math.min(totalPagesCalc, startPage + 2);

                                            if (endPage - startPage < 2) {
                                                startPage = Math.max(1, endPage - 2);
                                            }

                                            return [...Array(Math.max(0, endPage - startPage + 1))].map(
                                                (_, index) => {
                                                    const pageNumber = startPage + index;
                                                    return (
                                                        <li
                                                            key={pageNumber}
                                                            className={currentPage === pageNumber ? "active" : ""}
                                                        >
                                                            <a
                                                                onClick={() => handlePageChange(pageNumber)}
                                                                role="button"
                                                                style={{ cursor: "pointer" }}
                                                            >
                                                                {pageNumber}
                                                            </a>
                                                        </li>
                                                    );
                                                }
                                            );
                                        })()}
                                        {currentPage < totalPages && (
                                            <>
                                                <li>
                                                    <a
                                                        onClick={() => handlePageChange(currentPage + 1)}
                                                        role="button"
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        &gt;
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        onClick={() => handlePageChange(totalPages)}
                                                        role="button"
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        &gt;|
                                                    </a>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                                <div className="col-sm-6 text-left page-result">
                                    Показвани {orders.length} от 10 поръчки ({totalPages} Страници)
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
                refreshOrders={handleReload}
            />
        </>
    );
}
