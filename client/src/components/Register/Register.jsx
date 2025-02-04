import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";

export default function Register() {
    let location = useLocation();
    const { registerSubmitHandler } = useContext(AuthContext);

    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        firstName: '',
        lastName: '',
        email: '',
        telephone: '',
        password: '',
        confirmPassword: ''
    });

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
                            <Link to="/">
                                <i className="fa fa-home" />
                            </Link>
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
                                    <Link to="/forgotten" className="list-group-item">
                                        Forgotten Password{" "}
                                    </Link>
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
                            <h1>Register Account</h1>
                            <p>Already have an account? Log in {" "}<Link className="bold" to="/login">here</Link>.</p>
                            <form className="form-horizontal" onSubmit={onSubmit}>
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
                                        <label className="col-sm-2 control-label" htmlFor="firstName">First Name</label>
                                        <div className="col-sm-10">
                                            <input
                                                className="form-control"
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                placeholder="First Name"
                                                onChange={onChange}
                                                values={values.firstName}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="lastName">Last Name</label>
                                        <div className="col-sm-10">
                                            <input
                                                className="form-control"
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                placeholder="Last Name"
                                                onChange={onChange}
                                                values={values.lastName}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="email">E-Mail</label>
                                        <div className="col-sm-10">
                                            <input
                                                className="form-control"
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="E-Mail"
                                                onChange={onChange}
                                                values={values.email}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="telephone">Telephone</label>
                                        <div className="col-sm-10">
                                            <input
                                                className="form-control"
                                                type="tel"
                                                id="telephone"
                                                name="telephone"
                                                placeholder="Telephone"
                                                onChange={onChange}
                                                values={values.telephone}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="address">Address</label>
                                        <div className="col-sm-10">
                                            <input
                                                className="form-control"
                                                type="text"
                                                id="address"
                                                name="address"
                                                placeholder="Address"
                                                onChange={onChange}
                                                values={values.address}
                                            />
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend>Your Password</legend>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="password">Password</label>
                                        <div className="col-sm-10">
                                            <input
                                                className="form-control"
                                                type="password"
                                                id="password"
                                                name="password"
                                                placeholder="Password"
                                                onChange={onChange}
                                                values={values.password}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="confirmPassword">Confirm Password</label>
                                        <div className="col-sm-10">
                                            <input
                                                className="form-control"
                                                type="password"
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                placeholder="Confirm Password"
                                                onChange={onChange}
                                                values={values.confirmPassword}
                                            />
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="buttons">
                                    <div className="pull-right"><input type="submit" value="Register" className="btn btn-primary" /></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};