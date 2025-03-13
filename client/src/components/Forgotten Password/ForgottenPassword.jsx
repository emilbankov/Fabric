import './ForgottenPassword.css';

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import { forgottenPasswordSchema } from '../../lib/validate';
import { forgottenPassword } from '../../services/authService';

export default function ForgottenPassword() {
    const location = useLocation();
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (values, { resetForm }) => {
        forgottenPassword(values.email);
        setShowSuccess(true);
        resetForm();
        setTimeout(() => {
            setShowSuccess(false);
        }, 5000);
    }

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
            <div className="account-forgotten   layout-2 left-col">
                <div className="content_headercms_bottom" />
                <div className="content-top-breadcum">
                    <div className="container">
                        <div className="row">
                            <div id="title-content"></div>
                        </div>
                    </div>
                </div>
                <div id="account-forgotten" className="container">
                    <ul className="breadcrumb">
                        <li><Link to="/"><i className="fa fa-home" /></Link></li>
                        <li><Link to="/forgotten-password">Забравена парола</Link></li>
                    </ul>
                    <div className="row">
                        <div className={`alert alert-success alert-dismissible style={} ${showSuccess ? 'show-alert' : 'hide-alert'}`}>
                            <i className="fa fa-check-circle" /> Линк за подновяване на паролата е изпратен на вашият имейл.
                        </div>
                        <aside id="column-left" className="col-sm-3 hidden-xs">
                            <div className="box">
                                <div className="box-heading">Account</div>
                                <div className="list-group">
                                    <a
                                        href="/login"
                                        className="list-group-item"
                                    >
                                        Login{" "}
                                    </a>{" "}
                                    <a
                                        href="/register"
                                        className="list-group-item"
                                    >
                                        Register
                                    </a>{" "}
                                    <a
                                        href="/forgotten"
                                        className="list-group-item"
                                    >
                                        Forgotten Password{" "}
                                    </a>
                                    <a
                                        href="/account "
                                        className="list-group-item"
                                    >
                                        My Account{" "}
                                    </a>
                                    <a
                                        href="/address"
                                        className="list-group-item"
                                    >
                                        Address Book
                                    </a>{" "}
                                    <a
                                        href="/wishlist "
                                        className="list-group-item"
                                    >
                                        Wish List{" "}
                                    </a>{" "}
                                    <a
                                        href="/order "
                                        className="list-group-item"
                                    >
                                        Order History{" "}
                                    </a>{" "}
                                    <a
                                        href="/download"
                                        className="list-group-item"
                                    >
                                        Downloads{" "}
                                    </a>
                                    <a
                                        href="/recurring"
                                        className="list-group-item"
                                    >
                                        Recurring payments{" "}
                                    </a>{" "}
                                    <a
                                        href="/reward "
                                        className="list-group-item"
                                    >
                                        Reward Points{" "}
                                    </a>{" "}
                                    <a
                                        href="/return"
                                        className="list-group-item"
                                    >
                                        Returns{" "}
                                    </a>{" "}
                                    <a
                                        href="/transaction"
                                        className="list-group-item"
                                    >
                                        Transactions{" "}
                                    </a>{" "}
                                    <a
                                        href="/newsletter"
                                        className="list-group-item"
                                    >
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
                                    <Link
                                        className="list-group-item"
                                        to="/about"
                                    >
                                        За нас{" "}
                                    </Link>
                                    <a
                                        className="list-group-item"
                                        href="/information&information_id=6"
                                    >
                                        Delivery Information{" "}
                                    </a>
                                    <a
                                        className="list-group-item"
                                        href="/information&information_id=3"
                                    >
                                        Политика за поверителност{" "}
                                    </a>
                                    <Link
                                        className="list-group-item"
                                        to="/terms-and-conditions"
                                    >
                                        Общи условия{" "}
                                    </Link>
                                    <Link
                                        className="list-group-item"
                                        to="/contact"
                                    >
                                        Контакти{" "}
                                    </Link>
                                    <Link
                                        className="list-group-item"
                                        to="/sitemap"
                                    >
                                        Карта на сайта{" "}
                                    </Link>
                                </div>
                            </div>
                        </aside>
                        <div id="content" className="col-sm-9">
                            <h1>Забравена парола</h1>
                            <p>
                                Въведете имейл адреса, който е свързан с вашия акаунт. Кликнете на "Изпрати" за да получите линк за подновяване на паролата на имейл.
                            </p>
                            <Formik
                                initialValues={{ email: '' }}
                                validationSchema={forgottenPasswordSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ errors, touched }) => (
                                    <Form className="form-horizontal">
                                        <fieldset>
                                            <legend>Вашият E-mail</legend>
                                            <div className="form-group required">
                                                <label className="col-sm-2 control-label" htmlFor="input-email">
                                                    E-mail
                                                </label>
                                                <div className="col-sm-10">
                                                    <Field
                                                        type="text"
                                                        name="email"
                                                        placeholder="E-mail"
                                                        id="input-email"
                                                        className={`form-control ${errors.email && touched.email ? 'is-invalid' : ''}`}
                                                    />
                                                    {errors.email && touched.email && (
                                                        <div className="invalid-feedback" style={{ color: 'red', display: 'block' }}>
                                                            {errors.email}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </fieldset>
                                        <div className="buttons clearfix">
                                            <div className="pull-left"><Link to={-1} className="btn btn-default">Назад</Link></div>
                                            <div className="pull-right"><input type="submit" value="Изпрати" className="btn btn-default" /></div>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
