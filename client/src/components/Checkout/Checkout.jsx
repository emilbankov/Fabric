import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Checkout() {
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
            <div className="checkout-checkout   layout-2 left-col">
                <div id="checkout-checkout" className="container">
                    <div className="row">
                        <aside id="column-left" className="col-sm-3 hidden-xs">
                            <div className="box">
                                <div className="box-heading">Account</div>
                                <div className="list-group">
                                    <a
                                        href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=account/login"
                                        className="list-group-item"
                                    >
                                        Login{" "}
                                    </a>{" "}
                                    <a
                                        href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=account/register"
                                        className="list-group-item"
                                    >
                                        Register
                                    </a>{" "}
                                    <a
                                        href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=account/forgotten"
                                        className="list-group-item"
                                    >
                                        Forgotten Password{" "}
                                    </a>
                                    <a
                                        href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=account/account "
                                        className="list-group-item"
                                    >
                                        My Account{" "}
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
                                </div>
                            </div>
                            <div className="swiper-viewport">
                                <div
                                    id="banner0"
                                    className="swiper-container  single-banner  swiper-container-horizontal"
                                >
                                    <div className="swiper-wrapper">
                                        <div
                                            className="swiper-slide swiper-slide-active"
                                            style={{ width: 272 }}
                                        >
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
                                    <div className="swiper-pagination swiper-pagination-bullets">
                                        <span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
                                    </div>
                                </div>
                            </div>
                            <div className="box latest">
                                <div className="box-heading">Latest Product</div>
                                <div className="box-content">
                                    <div className="box-product  productbox-grid" id=" latest-grid">
                                        <div className="product-items">
                                            <div className="product-items">
                                                <div className="product-block product-thumb transition">
                                                    <div className="product-block-inner">
                                                        <div className="image">
                                                            <a href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=product/product&product_id=49">
                                                                <img
                                                                    src="https://opc.webdigify.com/OPC02/OPC037_vesture/image/cache/catalog/8-70x70.jpg"
                                                                    title="tote bags for women"
                                                                    alt="tote bags for women"
                                                                    className="img-responsive reg-image"
                                                                />
                                                                <img
                                                                    className="img-responsive hover-image"
                                                                    src="https://opc.webdigify.com/OPC02/OPC037_vesture/image/cache/catalog/13-70x70.jpg"
                                                                    title="tote bags for women"
                                                                    alt="tote bags for women"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="product-details">
                                                            <div className="caption">
                                                                <div className="rating">
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                </div>
                                                                <h4>
                                                                    <a href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=product/product&product_id=49 ">
                                                                        tote bags for women{" "}
                                                                    </a>
                                                                </h4>
                                                                <p className="price">
                                                                    $241.99
                                                                    <span className="price-tax">Ex Tax: $199.99</span>
                                                                </p>
                                                            </div>
                                                            <div className="product_hover_block">
                                                                <div className="action">
                                                                    <button
                                                                        type="button"
                                                                        className="cart_button"
                                                                        onclick="cart.add('49 ');"
                                                                        title="Add to Cart"
                                                                    >
                                                                        <i
                                                                            className="fa fa-shopping-cart"
                                                                            area-hidden="true"
                                                                        />{" "}
                                                                    </button>
                                                                    <div className="quickview-button">
                                                                        <a
                                                                            className="quickbox"
                                                                            title="Add To quickview"
                                                                            href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=product/quick_view&product_id=49"
                                                                        >
                                                                            <i className="fa fa-eye" />
                                                                        </a>
                                                                    </div>
                                                                    <button
                                                                        className="wishlist"
                                                                        type="button"
                                                                        title="Add to Wish List "
                                                                        onclick="wishlist.add('49 ');"
                                                                    >
                                                                        <i className="fa fa-heart" />
                                                                    </button>
                                                                    <button
                                                                        className="compare_button"
                                                                        type="button"
                                                                        title="Add to compare "
                                                                        onclick="compare.add('49 ');"
                                                                    >
                                                                        <i className="fa fa-exchange" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-items">
                                            <div className="product-items">
                                                <div className="product-block product-thumb transition">
                                                    <div className="product-block-inner">
                                                        <div className="image">
                                                            <a href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=product/product&product_id=48">
                                                                <img
                                                                    src="https://opc.webdigify.com/OPC02/OPC037_vesture/image/cache/catalog/11-70x70.jpg"
                                                                    title="Men's lace up Shoes"
                                                                    alt="Men's lace up Shoes"
                                                                    className="img-responsive reg-image"
                                                                />
                                                                <img
                                                                    className="img-responsive hover-image"
                                                                    src="https://opc.webdigify.com/OPC02/OPC037_vesture/image/cache/catalog/17-70x70.jpg"
                                                                    title="Men's lace up Shoes"
                                                                    alt="Men's lace up Shoes"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="product-details">
                                                            <div className="caption">
                                                                <div className="rating">
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                </div>
                                                                <h4>
                                                                    <a href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=product/product&product_id=48 ">
                                                                        Men's lace up Shoes{" "}
                                                                    </a>
                                                                </h4>
                                                                <p className="price">
                                                                    $122.00
                                                                    <span className="price-tax">Ex Tax: $100.00</span>
                                                                </p>
                                                            </div>
                                                            <div className="product_hover_block">
                                                                <div className="action">
                                                                    <button
                                                                        type="button"
                                                                        className="cart_button"
                                                                        onclick="cart.add('48 ');"
                                                                        title="Add to Cart"
                                                                    >
                                                                        <i
                                                                            className="fa fa-shopping-cart"
                                                                            area-hidden="true"
                                                                        />{" "}
                                                                    </button>
                                                                    <div className="quickview-button">
                                                                        <a
                                                                            className="quickbox"
                                                                            title="Add To quickview"
                                                                            href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=product/quick_view&product_id=48"
                                                                        >
                                                                            <i className="fa fa-eye" />
                                                                        </a>
                                                                    </div>
                                                                    <button
                                                                        className="wishlist"
                                                                        type="button"
                                                                        title="Add to Wish List "
                                                                        onclick="wishlist.add('48 ');"
                                                                    >
                                                                        <i className="fa fa-heart" />
                                                                    </button>
                                                                    <button
                                                                        className="compare_button"
                                                                        type="button"
                                                                        title="Add to compare "
                                                                        onclick="compare.add('48 ');"
                                                                    >
                                                                        <i className="fa fa-exchange" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-items">
                                            <div className="product-items">
                                                <div className="product-block product-thumb transition">
                                                    <div className="product-block-inner">
                                                        <div className="image">
                                                            <a href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=product/product&product_id=47">
                                                                <img
                                                                    src="https://opc.webdigify.com/OPC02/OPC037_vesture/image/cache/catalog/4-70x70.jpg"
                                                                    title="round toe Shoes"
                                                                    alt="round toe Shoes"
                                                                    className="img-responsive reg-image"
                                                                />
                                                                <img
                                                                    className="img-responsive hover-image"
                                                                    src="https://opc.webdigify.com/OPC02/OPC037_vesture/image/cache/catalog/6-70x70.jpg"
                                                                    title="round toe Shoes"
                                                                    alt="round toe Shoes"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="product-details">
                                                            <div className="caption">
                                                                <div className="rating">
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                </div>
                                                                <h4>
                                                                    <a href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=product/product&product_id=47 ">
                                                                        round toe Shoes{" "}
                                                                    </a>
                                                                </h4>
                                                                <p className="price">
                                                                    $122.00
                                                                    <span className="price-tax">Ex Tax: $100.00</span>
                                                                </p>
                                                            </div>
                                                            <div className="product_hover_block">
                                                                <div className="action">
                                                                    <button
                                                                        type="button"
                                                                        className="cart_button"
                                                                        onclick="cart.add('47 ');"
                                                                        title="Add to Cart"
                                                                    >
                                                                        <i
                                                                            className="fa fa-shopping-cart"
                                                                            area-hidden="true"
                                                                        />{" "}
                                                                    </button>
                                                                    <div className="quickview-button">
                                                                        <a
                                                                            className="quickbox"
                                                                            title="Add To quickview"
                                                                            href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=product/quick_view&product_id=47"
                                                                        >
                                                                            <i className="fa fa-eye" />
                                                                        </a>
                                                                    </div>
                                                                    <button
                                                                        className="wishlist"
                                                                        type="button"
                                                                        title="Add to Wish List "
                                                                        onclick="wishlist.add('47 ');"
                                                                    >
                                                                        <i className="fa fa-heart" />
                                                                    </button>
                                                                    <button
                                                                        className="compare_button"
                                                                        type="button"
                                                                        title="Add to compare "
                                                                        onclick="compare.add('47 ');"
                                                                    >
                                                                        <i className="fa fa-exchange" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span
                                className="latest_default_width"
                                style={{ display: "none", visibility: "hidden" }}
                            />
                        </aside>
                        <div id="content" className="col-sm-9">
                            <ul className="breadcrumb">
                                <li>
                                    <a href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=common/home">
                                        <i className="fa fa-home" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=checkout/cart">
                                        Shopping Cart
                                    </a>
                                </li>
                                <li>
                                    <a href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=checkout/checkout">
                                        Checkout
                                    </a>
                                </li>
                            </ul>
                            <h1>Checkout</h1>
                            <div className="panel-group" id="accordion">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a
                                                href="#collapse-checkout-option"
                                                data-toggle="collapse"
                                                data-parent="#accordion"
                                                className="accordion-toggle collapsed"
                                                aria-expanded="false"
                                            >
                                                Step 1: Checkout Options <i className="fa fa-caret-down" />
                                            </a>
                                        </h4>
                                    </div>
                                    <div
                                        className="panel-collapse collapse"
                                        id="collapse-checkout-option"
                                        aria-expanded="false"
                                        style={{ height: 0 }}
                                    >
                                        <div className="panel-body">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <h2>New Customer</h2>
                                                    <p>Checkout Options:</p>
                                                    <div className="radio">
                                                        <label>
                                                            {" "}
                                                            <input
                                                                type="radio"
                                                                name="account"
                                                                defaultValue="register"
                                                                defaultChecked="checked"
                                                            />
                                                            Register Account
                                                        </label>
                                                    </div>
                                                    <div className="radio">
                                                        <label>
                                                            {" "}
                                                            <input type="radio" name="account" defaultValue="guest" />
                                                            Guest Checkout
                                                        </label>
                                                    </div>
                                                    <p>
                                                        By creating an account you will be able to shop faster, be
                                                        up to date on an order's status, and keep track of the
                                                        orders you have previously made.
                                                    </p>
                                                    <input
                                                        type="button"
                                                        defaultValue="Continue"
                                                        id="button-account"
                                                        data-loading-text="Loading..."
                                                        className="btn btn-primary"
                                                    />
                                                </div>
                                                <div className="col-sm-6">
                                                    <h2>Returning Customer</h2>
                                                    <p>I am a returning customer</p>
                                                    <div className="form-group">
                                                        <label className="control-label" htmlFor="input-email">
                                                            E-Mail
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="email"
                                                            defaultValue=""
                                                            placeholder="E-Mail"
                                                            id="input-email"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="control-label" htmlFor="input-password">
                                                            Password
                                                        </label>
                                                        <input
                                                            type="password"
                                                            name="password"
                                                            defaultValue=""
                                                            placeholder="Password"
                                                            id="input-password"
                                                            className="form-control"
                                                        />
                                                        <a href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=account/forgotten">
                                                            Forgotten Password
                                                        </a>
                                                    </div>
                                                    <input
                                                        type="button"
                                                        defaultValue="Login"
                                                        id="button-login"
                                                        data-loading-text="Loading..."
                                                        className="btn btn-primary"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a
                                                href="#collapse-payment-address"
                                                data-toggle="collapse"
                                                data-parent="#accordion"
                                                className="accordion-toggle collapsed"
                                                aria-expanded="false"
                                            >
                                                Step 2: Billing Details <i className="fa fa-caret-down" />
                                            </a>
                                        </h4>
                                    </div>
                                    <div
                                        className="panel-collapse collapse"
                                        id="collapse-payment-address"
                                        aria-expanded="false"
                                        style={{ height: 0 }}
                                    >
                                        <div className="panel-body">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <fieldset id="account">
                                                        <legend>Your Personal Details</legend>
                                                        <div className="form-group" style={{ display: "none" }}>
                                                            <label className="control-label">Customer Group</label>
                                                            <div className="radio">
                                                                <label>
                                                                    <input
                                                                        type="radio"
                                                                        name="customer_group_id"
                                                                        defaultValue={1}
                                                                        defaultChecked="checked"
                                                                    />
                                                                    Default
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="form-group required">
                                                            <label
                                                                className="control-label"
                                                                htmlFor="input-payment-firstname"
                                                            >
                                                                First Name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="firstname"
                                                                defaultValue=""
                                                                placeholder="First Name"
                                                                id="input-payment-firstname"
                                                                className="form-control"
                                                            />
                                                        </div>
                                                        <div className="form-group required">
                                                            <label
                                                                className="control-label"
                                                                htmlFor="input-payment-lastname"
                                                            >
                                                                Last Name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="lastname"
                                                                defaultValue=""
                                                                placeholder="Last Name"
                                                                id="input-payment-lastname"
                                                                className="form-control"
                                                            />
                                                        </div>
                                                        <div className="form-group required">
                                                            <label
                                                                className="control-label"
                                                                htmlFor="input-payment-email"
                                                            >
                                                                E-Mail
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="email"
                                                                defaultValue=""
                                                                placeholder="E-Mail"
                                                                id="input-payment-email"
                                                                className="form-control"
                                                            />
                                                        </div>
                                                        <div className="form-group required">
                                                            <label
                                                                className="control-label"
                                                                htmlFor="input-payment-telephone"
                                                            >
                                                                Telephone
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="telephone"
                                                                defaultValue=""
                                                                placeholder="Telephone"
                                                                id="input-payment-telephone"
                                                                className="form-control"
                                                            />
                                                        </div>
                                                    </fieldset>
                                                </div>
                                                <div className="col-sm-6">
                                                    <fieldset id="address" className="">
                                                        <legend>Your Address</legend>
                                                        <div className="form-group required">
                                                            <label
                                                                className="control-label"
                                                                htmlFor="input-payment-address-1"
                                                            >
                                                                Address 1
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="address_1"
                                                                defaultValue=""
                                                                placeholder="Address 1"
                                                                id="input-payment-address-1"
                                                                className="form-control"
                                                            />
                                                        </div>
                                                        <div className="form-group required">
                                                            <label
                                                                className="control-label"
                                                                htmlFor="input-payment-city"
                                                            >
                                                                City
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="city"
                                                                defaultValue=""
                                                                placeholder="City"
                                                                id="input-payment-city"
                                                                className="form-control"
                                                            />
                                                        </div>
                                                        <div className="form-group required">
                                                            <label
                                                                className="control-label"
                                                                htmlFor="input-payment-postcode"
                                                            >
                                                                Post Code
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="postcode"
                                                                defaultValue=""
                                                                placeholder="Post Code"
                                                                id="input-payment-postcode"
                                                                className="form-control"
                                                            />
                                                        </div>
                                                    </fieldset>
                                                </div>
                                            </div>
                                            <div className="buttons">
                                                <div className="pull-right">
                                                    <input
                                                        type="button"
                                                        defaultValue="Continue"
                                                        id="button-guest"
                                                        data-loading-text="Loading..."
                                                        className="btn btn-primary"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a
                                                href="#collapse-checkout-confirm"
                                                data-toggle="collapse"
                                                data-parent="#accordion"
                                                className="accordion-toggle"
                                                aria-expanded="true"
                                            >
                                                Step 3: Confirm Order <i className="fa fa-caret-down" />
                                            </a>
                                        </h4>
                                    </div>
                                    <div
                                        className="panel-collapse collapse in"
                                        id="collapse-checkout-confirm"
                                        aria-expanded="true"
                                        style={{}}
                                    >
                                        <div className="panel-body">
                                            <table className="table table-bordered shopping-cart responsive">
                                                <tbody>
                                                    <tr>
                                                        <td className="text-center">Product Name</td>
                                                        <td className="text-center">
                                                            <a href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=product/product&product_id=48">
                                                                Men's lace up Shoes
                                                            </a>{" "}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">Model</td>
                                                        <td className="text-center">product 20</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">Quantity</td>
                                                        <td className="text-center">1</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">Unit Price</td>
                                                        <td className="text-center">$100.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">Total</td>
                                                        <td className="text-center">$100.00</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table className="table table-bordered shopping-cart responsive">
                                                <tbody>
                                                    <tr>
                                                        <td className="text-right">
                                                            <strong>Sub-Total:</strong>
                                                        </td>
                                                        <td className="text-right">$100.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-right">
                                                            <strong>Flat Shipping Rate:</strong>
                                                        </td>
                                                        <td className="text-right">$5.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-right">
                                                            <strong>Total:</strong>
                                                        </td>
                                                        <td className="text-right">$105.00</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className="table-responsive">
                                                <table className="table table-bordered table-hover shopping-cart">
                                                    <thead>
                                                        <tr>
                                                            <td className="text-left">Product Name</td>
                                                            <td className="text-left">Model</td>
                                                            <td className="text-right">Quantity</td>
                                                            <td className="text-right">Unit Price</td>
                                                            <td className="text-right">Total</td>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-left">
                                                                <a href="https://opc.webdigify.com/OPC02/OPC037_vesture/index.php?route=product/product&product_id=48">
                                                                    Men's lace up Shoes
                                                                </a>{" "}
                                                            </td>
                                                            <td className="text-left">product 20</td>
                                                            <td className="text-right">1</td>
                                                            <td className="text-right">$100.00</td>
                                                            <td className="text-right">$100.00</td>
                                                        </tr>
                                                    </tbody>
                                                    <tfoot>
                                                        <tr>
                                                            <td colSpan={4} className="text-right">
                                                                <strong>Sub-Total:</strong>
                                                            </td>
                                                            <td className="text-right total">$100.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={4} className="text-right">
                                                                <strong>Flat Shipping Rate:</strong>
                                                            </td>
                                                            <td className="text-right total">$5.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={4} className="text-right">
                                                                <strong>Total:</strong>
                                                            </td>
                                                            <td className="text-right total">$105.00</td>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                            <div className="buttons">
                                                <div className="pull-right">
                                                    <input
                                                        type="button"
                                                        defaultValue="Confirm Order"
                                                        id="button-confirm"
                                                        data-loading-text="Loading..."
                                                        className="btn btn-primary"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};