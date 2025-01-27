import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Login() {
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
            <div className="account-login   layout-2 left-col">
                <div className="content_headercms_bottom" />
                <div className="content-top-breadcum">
                    <div className="container">
                        <div className="row">
                            <div id="title-content"></div>
                        </div>
                    </div>
                </div>
                <div id="account-login" className="container">
                    <ul className="breadcrumb">
                        <li><Link to="/"><i className="fa fa-home" /></Link></li>
                        <li><Link to="/login">Login</Link></li>
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
                                    <a href="/forgotten" className="list-group-item">
                                        Forgotten Password{" "}
                                    </a>
                                    <Link to="/account" className="list-group-item">
                                        My Account{" "}
                                    </Link>
                                    <Link to="/address" className="list-group-item">
                                        Address Book
                                    </Link>
                                    <Link to="/wishlist " className="list-group-item">
                                        Wish List{" "}
                                    </Link>
                                    <Link to="/order " className="list-group-item">
                                        Order History{" "}
                                    </Link>
                                    <Link to="/download" className="list-group-item">
                                        Downloads{" "}
                                    </Link>
                                    <Link to="/recurring" className="list-group-item">
                                        Recurring payments{" "}
                                    </Link>
                                    <Link to="/reward " className="list-group-item">
                                        Reward Points{" "}
                                    </Link>
                                    <Link to="/return" className="list-group-item">
                                        Returns{" "}
                                    </Link>
                                    <Link to="/transaction" className="list-group-item">
                                        Transactions{" "}
                                    </Link>
                                    <Link to="/newsletter" className="list-group-item">
                                        Newsletter{" "}
                                    </Link>
                                </div>
                            </div>
                            <div className="swiper-viewport">
                                <div id="banner0" className="swiper-container  single-banner ">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <a href="#">
                                                <img
                                                    src="/images/left-banner-272x340.jpg"
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
                                    <Link className="list-group-item" to="/about">
                                        About Us{" "}
                                    </Link>
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
                            <h1>Account Login</h1>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="well">
                                        <h2>New Customer</h2>
                                        <p>
                                            <strong>Register Account</strong>
                                        </p>
                                        <p>
                                            By creating an account you will be able to shop faster, be up to
                                            date on an order's status, and keep track of the orders you have
                                            previously made.
                                        </p>
                                        <Link to="/register" className="btn btn-primary">
                                            Continue
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="well">
                                        <h2>Returning Customer</h2>
                                        <p>
                                            <strong>I am a returning customer</strong>
                                        </p>
                                        <form
                                            action="account/login"
                                            method="post"
                                            encType="multipart/form-data"
                                        >
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="input-email">
                                                    E-Mail Address
                                                </label>
                                                <input
                                                    type="text"
                                                    name="email"
                                                    defaultValue=""
                                                    placeholder="E-Mail Address"
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
                                                <a href="account/forgotten">Forgotten Password</a>
                                            </div>
                                            <input
                                                type="submit"
                                                value="Login"
                                                className="btn btn-primary"
                                            />
                                        </form>
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