import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import AuthContext from "../../contexts/AuthProvider";

export default function Register() {
    let location = useLocation();
    const { registerSubmitHandler } = useContext(AuthContext);

    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
        region: '',
        city: '',
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
                            <h1>Регистрация на акаунт</h1>
                            <form className="form-horizontal" onSubmit={onSubmit}>
                                <fieldset id="account">
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
                                        <label className="col-sm-2 control-label" htmlFor="firstName">Име</label>
                                        <div className="col-sm-10">
                                            <input
                                                className="form-control"
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                placeholder="Име"
                                                onChange={onChange}
                                                values={values.firstName}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="lastName">Фамилия</label>
                                        <div className="col-sm-10">
                                            <input
                                                className="form-control"
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                placeholder="Фамилия"
                                                onChange={onChange}
                                                values={values.lastName}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="email">E-mail</label>
                                        <div className="col-sm-10">
                                            <input
                                                className="form-control"
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="E-mail"
                                                onChange={onChange}
                                                values={values.email}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="phoneNumber">Телефонен номер</label>
                                        <div className="col-sm-10">
                                            <div className="input-with-prefix">
                                                <input
                                                    className="form-control phone-field"
                                                    type="tel"
                                                    id="phoneNumber"
                                                    name="phoneNumber"
                                                    placeholder="Телефонен номер"
                                                    onChange={onChange}
                                                    values={values.phoneNumber}
                                                    pattern="[0-9]{9}"
                                                    title="Please enter 9 digits (without the country code)"
                                                    maxLength="9"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="address">Адрес</label>
                                        <div className="col-sm-10">
                                            <input
                                                className="form-control"
                                                type="text"
                                                id="address"
                                                name="address"
                                                placeholder="Адрес"
                                                onChange={onChange}
                                                values={values.address}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="region">Област</label>
                                        <div className="col-sm-10">
                                            <input
                                                className="form-control"
                                                type="text"
                                                id="region"
                                                name="region"
                                                placeholder="Област"
                                                onChange={onChange}
                                                values={values.region}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="city">Град</label>
                                        <div className="col-sm-10">
                                            <input
                                                className="form-control"
                                                type="text"
                                                id="city"
                                                name="city"
                                                placeholder="Град"
                                                onChange={onChange}
                                                values={values.city}
                                            />
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend>Вашата парола</legend>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="password">Парола</label>
                                        <div className="col-sm-10">
                                            <input
                                                className="form-control"
                                                type="password"
                                                id="password"
                                                name="password"
                                                placeholder="Парола"
                                                onChange={onChange}
                                                values={values.password}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="confirmPassword">Потвърди парола</label>
                                        <div className="col-sm-10">
                                            <input
                                                className="form-control"
                                                type="password"
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                placeholder="Потвърди парола"
                                                onChange={onChange}
                                                values={values.confirmPassword}
                                            />
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="buttons">
                                    <div className="pull-right"><input type="submit" value="Регистрация" className="btn btn-primary" /></div>
                                    <p>Вече имате акаунт? Влезте {" "}<Link className="bold" to="/login">тук</Link>.</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};