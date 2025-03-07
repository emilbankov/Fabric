import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Wishlist() {
    const location = useLocation();

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

    return (
        <>
            <div className="account-wishlist   layout-2 left-col">
                <div className="content_headercms_bottom" />
                <div className="content-top-breadcum">
                    <div className="container">
                        <div className="row">
                            <div id="title-content"></div>
                        </div>
                    </div>
                </div>
                <div id="account-wishlist" className="container">
                    <ul className="breadcrumb">
                        <li>
                            <a href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=common/home">
                                <i className="fa fa-home" />
                            </a>
                        </li>
                        <li>
                            <a href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=account/account">
                                Account
                            </a>
                        </li>
                        <li>
                            <a href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=account/wishlist">
                                My Wish List
                            </a>
                        </li>
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
                                                    src="https://opc.webdigify.com/OPC02/OPC037_vesture/image/cache/catalog/left-banner-272x340.jpg"
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
                            <h2>My Wish List</h2>
                            <div className="table-responsive">
                                <table className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <td className="text-center">Image</td>
                                            <td className="text-left">Product Name</td>
                                            <td className="text-left">Model</td>
                                            <td className="text-right">Stock</td>
                                            <td className="text-right">Unit Price</td>
                                            <td className="text-right">Action</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-center">
                                                <a href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=product/product&product_id=48">
                                                    <img
                                                        src="https://opc.webdigify.com/OPC02/OPC037_vesture/image/cache/catalog/11-47x68.jpg"
                                                        alt="Men's lace up Shoes"
                                                        title="Men's lace up Shoes"
                                                    />
                                                </a>
                                            </td>
                                            <td className="text-left">
                                                <a href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=product/product&product_id=48">
                                                    Men's lace up Shoes
                                                </a>
                                            </td>
                                            <td className="text-left">product 20</td>
                                            <td className="text-right">In Stock</td>
                                            <td className="text-right">
                                                {" "}
                                                <div className="price"> $100.00</div>
                                            </td>
                                            <td className="text-right">
                                                <button
                                                    type="button"
                                                    onclick="cart.add('48');"
                                                    data-toggle="tooltip"
                                                    title="Add to Cart"
                                                    className="btn btn-primary"
                                                >
                                                    <i className="fa fa-shopping-cart" />
                                                </button>
                                                <a
                                                    href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=account/wishlist&remove=48"
                                                    data-toggle="tooltip"
                                                    title="Remove"
                                                    className="btn btn-danger"
                                                >
                                                    <i className="fa fa-times" />
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};