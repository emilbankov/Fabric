import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Register() {
    let location = useLocation();

    useEffect(() => {
        const handleLoad = () => {
            const existingScript = document.querySelector('script[src="/js/custom.js"]');
            if (existingScript) {
                existingScript.remove();
            }

            const script = document.createElement('script');
            script.src = '/js/custom.js';
            script.async = true;
            document.body.appendChild(script);
        };

        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, [location]);

    return (
        <>
            <div className="account-register   layout-2 left-col">
                <div className="content_headercms_bottom" />
                <div className="content-top-breadcum">
                    <div className="container">
                        <div className="row">
                            <div id="title-content"></div>
                        </div>
                    </div>
                </div>
                <div id="account-register" className="container">
                    <ul className="breadcrumb">
                        <li>
                            <a href="index.html">
                                <i className="fa fa-home" />
                            </a>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>{" "}
                        </li>
                    </ul>
                    <div className="row">
                        <aside id="column-left" className="col-sm-3 hidden-xs">
                            <div className="box">
                                <div className="box-heading">Account</div>
                                <div className="list-group">
                                    <Link to="/login" className="list-group-item">
                                        Login{" "}
                                    </Link>
                                    <Link to="/register" className="list-group-item">
                                        Register
                                    </Link>
                                    <a href="account/forgotten" className="list-group-item">
                                        Forgotten Password{" "}
                                    </a>
                                    <Link to="/account" className="list-group-item">
                                        My Account{" "}
                                    </Link>
                                    <a href="account/address" className="list-group-item">
                                        Address Book
                                    </a>
                                    <a href="account/wishlist " className="list-group-item">
                                        Wish List{" "}
                                    </a>
                                    <a href="account/order " className="list-group-item">
                                        Order History{" "}
                                    </a>
                                    <a href="account/download" className="list-group-item">
                                        Downloads{" "}
                                    </a>
                                    <a href="account/recurring" className="list-group-item">
                                        Recurring payments{" "}
                                    </a>
                                    <a href="account/reward " className="list-group-item">
                                        Reward Points{" "}
                                    </a>
                                    <a href="account/return" className="list-group-item">
                                        Returns{" "}
                                    </a>
                                    <a href="account/transaction" className="list-group-item">
                                        Transactions{" "}
                                    </a>
                                    <a href="account/newsletter" className="list-group-item">
                                        Newsletter{" "}
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
                                    <a className="list-group-item" href="about.html">
                                        About Us{" "}
                                    </a>
                                    <a
                                        className="list-group-item"
                                        href="information/information&information_id=6"
                                    >
                                        Delivery Information{" "}
                                    </a>
                                    <a
                                        className="list-group-item"
                                        href="information/information&information_id=3"
                                    >
                                        Privacy Policy{" "}
                                    </a>
                                    <a
                                        className="list-group-item"
                                        href="information/information&information_id=5"
                                    >
                                        Terms &amp; Conditions{" "}
                                    </a>
                                    <Link className="list-group-item" to="/contact">
                                        Contact Us{" "}
                                    </Link>
                                    <a className="list-group-item" href="information/sitemap">
                                        Site Map{" "}
                                    </a>
                                </div>
                            </div>
                        </aside>
                        <div id="content" className="col-sm-9">
                            <h1>Register Account</h1>
                            <p>
                                If you already have an account with us, please login at the{" "}
                                <Link to="/login">login page</Link>.
                            </p>
                            <form
                                action="/register"
                                method="post"
                                encType="multipart/form-data"
                                className="form-horizontal"
                            >
                                <fieldset id="account">
                                    <legend>Your Personal Details</legend>
                                    <div className="form-group required" style={{ display: "none" }}>
                                        <label className="col-sm-2 control-label">Customer Group</label>
                                        <div className="col-sm-10">
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
                                    </div>
                                    <div className="form-group required">
                                        <label
                                            className="col-sm-2 control-label"
                                            htmlFor="input-firstname"
                                        >
                                            First Name
                                        </label>
                                        <div className="col-sm-10">
                                            <input
                                                type="text"
                                                name="firstname"
                                                defaultValue=""
                                                placeholder="First Name"
                                                id="input-firstname"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label
                                            className="col-sm-2 control-label"
                                            htmlFor="input-lastname"
                                        >
                                            Last Name
                                        </label>
                                        <div className="col-sm-10">
                                            <input
                                                type="text"
                                                name="lastname"
                                                defaultValue=""
                                                placeholder="Last Name"
                                                id="input-lastname"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="input-email">
                                            E-Mail
                                        </label>
                                        <div className="col-sm-10">
                                            <input
                                                type="email"
                                                name="email"
                                                defaultValue=""
                                                placeholder="E-Mail"
                                                id="input-email"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label
                                            className="col-sm-2 control-label"
                                            htmlFor="input-telephone"
                                        >
                                            Telephone
                                        </label>
                                        <div className="col-sm-10">
                                            <input
                                                type="tel"
                                                name="telephone"
                                                defaultValue=""
                                                placeholder="Telephone"
                                                id="input-telephone"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend>Your Password</legend>
                                    <div className="form-group required">
                                        <label
                                            className="col-sm-2 control-label"
                                            htmlFor="input-password"
                                        >
                                            Password
                                        </label>
                                        <div className="col-sm-10">
                                            <input
                                                type="password"
                                                name="password"
                                                defaultValue=""
                                                placeholder="Password"
                                                id="input-password"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="input-confirm">
                                            Password Confirm
                                        </label>
                                        <div className="col-sm-10">
                                            <input
                                                type="password"
                                                name="confirm"
                                                defaultValue=""
                                                placeholder="Password Confirm"
                                                id="input-confirm"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend>Newsletter</legend>
                                    <div className="form-group">
                                        <label className="col-sm-2 control-label">Subscribe</label>
                                        <div className="col-sm-10">
                                            {" "}
                                            <label className="radio-inline">
                                                <input type="radio" name="newsletter" defaultValue={1} />
                                                Yes
                                            </label>
                                            <label className="radio-inline">
                                                <input
                                                    type="radio"
                                                    name="newsletter"
                                                    defaultValue={0}
                                                    defaultChecked="checked"
                                                />
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend>Captcha</legend>
                                    <div className="form-group required">
                                        <label className="col-sm-3 control-label" htmlFor="input-captcha">
                                            Enter the code in the box below
                                        </label>
                                        <div className="col-sm-8">
                                            <input
                                                type="text"
                                                name="captcha"
                                                id="input-captcha"
                                                className="form-control"
                                            />
                                            <img src="/captcha" alt="" />
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="buttons">
                                    <div className="pull-right">
                                        I have read and agree to the{" "}
                                        <a
                                            href="information/information/agree&information_id=3"
                                            className="agree"
                                        >
                                            <b>Privacy Policy</b>
                                        </a>
                                        <input type="checkbox" name="agree" defaultValue={1} />
                                        &nbsp;
                                        <input
                                            type="submit"
                                            value="Register"
                                            className="btn btn-primary"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};