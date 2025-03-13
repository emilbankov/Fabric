import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Formik } from 'formik';
import { registerValidationSchema } from '../../lib/validate';
import AuthContext from "../../contexts/AuthProvider";

export default function Register() {
    const location = useLocation();
    const { registerSubmitHandler, authError, clearAuthError } = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState(false);

    const formatPhoneNumber = (value) => {
        const digits = value.replace(/\D/g, '');

        if (digits.length <= 3) return digits;
        if (digits.length <= 6) return `${digits.slice(0, 3)} ${digits.slice(3)}`;
        return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 9)}`;
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        setIsLoading(true);
        const formattedValues = {
            ...values,
            phoneNumber: '+359 ' + values.phoneNumber
        };
        try {
            await registerSubmitHandler(formattedValues);
        } catch (error) {
            console.error("Registration error:", error);
        } finally {
            setIsLoading(false);
            setSubmitting(false);
        }
    };

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

    useEffect(() => {
        return () => clearAuthError();
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
                            <Link to="/register">Регистрация</Link>{" "}
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
                            <h1>Регистрация на акаунт</h1>
                            {authError && (
                                <div className="alert alert-danger" role="alert" style={{ textAlign: 'center' }}>
                                    {authError}
                                </div>
                            )}
                            {isLoading && (<div style={{ margin: '10% auto' }} className="text-center"><img src="/images/loading.gif" alt="Loading..." /></div>)}
                            {!isLoading && (
                                <Formik
                                    initialValues={{
                                        firstName: '',
                                        lastName: '',
                                        email: '',
                                        phoneNumber: '',
                                        address: '',
                                        region: '',
                                        city: '',
                                        password: '',
                                        confirmPassword: ''
                                    }}
                                    validationSchema={registerValidationSchema}
                                    onSubmit={handleSubmit}
                                >
                                    {({ values, errors, touched, handleChange, handleSubmit, setFieldValue }) => (
                                        <form className="form-horizontal" onSubmit={handleSubmit}>
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
                                                            className={`form-control ${errors.firstName && touched.firstName ? 'is-invalid' : ''}`}
                                                            type="text"
                                                            id="firstName"
                                                            name="firstName"
                                                            placeholder="Име"
                                                            onChange={handleChange}
                                                            value={values.firstName}
                                                        />
                                                        {errors.firstName && touched.firstName && (
                                                            <div className="invalid-feedback" style={{ color: 'red', display: 'block' }}>
                                                                {errors.firstName}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="form-group required">
                                                    <label className="col-sm-2 control-label" htmlFor="lastName">Фамилия</label>
                                                    <div className="col-sm-10">
                                                        <input
                                                            className={`form-control ${errors.lastName && touched.lastName ? 'is-invalid' : ''}`}
                                                            type="text"
                                                            id="lastName"
                                                            name="lastName"
                                                            placeholder="Фамилия"
                                                            onChange={handleChange}
                                                            value={values.lastName}
                                                        />
                                                        {errors.lastName && touched.lastName && (
                                                            <div className="invalid-feedback" style={{ color: 'red', display: 'block' }}>
                                                                {errors.lastName}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="form-group required">
                                                    <label className="col-sm-2 control-label" htmlFor="email">E-mail</label>
                                                    <div className="col-sm-10">
                                                        <input
                                                            className={`form-control ${errors.email && touched.email ? 'is-invalid' : ''}`}
                                                            type="email"
                                                            id="email"
                                                            name="email"
                                                            placeholder="E-mail"
                                                            onChange={handleChange}
                                                            value={values.email}
                                                        />
                                                        {errors.email && touched.email && (
                                                            <div className="invalid-feedback" style={{ color: 'red', display: 'block' }}>
                                                                {errors.email}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="form-group required">
                                                    <label className="col-sm-2 control-label" htmlFor="phoneNumber">Телефонен номер</label>
                                                    <div className="col-sm-10">
                                                        <div className="input-with-prefix">
                                                            <input
                                                                className={`form-control phone-field ${errors.phoneNumber && touched.phoneNumber ? 'is-invalid' : ''}`}
                                                                type="tel"
                                                                id="phoneNumber"
                                                                name="phoneNumber"
                                                                placeholder="8** *** ***"
                                                                onChange={(e) => {
                                                                    const cleanValue = e.target.value.replace(/\s/g, '');
                                                                    if (cleanValue.length <= 9) {
                                                                        const formatted = formatPhoneNumber(cleanValue);
                                                                        setFieldValue('phoneNumber', formatted);
                                                                    }
                                                                }}
                                                                value={values.phoneNumber}
                                                                maxLength="11"
                                                            />
                                                        </div>
                                                        {errors.phoneNumber && touched.phoneNumber && (
                                                            <div className="invalid-feedback" style={{ color: 'red', display: 'block' }}>
                                                                {errors.phoneNumber}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="form-group required">
                                                    <label className="col-sm-2 control-label" htmlFor="region">Област</label>
                                                    <div className="col-sm-10">
                                                        <input
                                                            className={`form-control ${errors.region && touched.region ? 'is-invalid' : ''}`}
                                                            type="text"
                                                            id="region"
                                                            name="region"
                                                            placeholder="Област"
                                                            onChange={handleChange}
                                                            value={values.region}
                                                        />
                                                        {errors.region && touched.region && (
                                                            <div className="invalid-feedback" style={{ color: 'red', display: 'block' }}>
                                                                {errors.region}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="form-group required">
                                                    <label className="col-sm-2 control-label" htmlFor="city">Град</label>
                                                    <div className="col-sm-10">
                                                        <input
                                                            className={`form-control ${errors.city && touched.city ? 'is-invalid' : ''}`}
                                                            type="text"
                                                            id="city"
                                                            name="city"
                                                            placeholder="Град"
                                                            onChange={handleChange}
                                                            value={values.city}
                                                        />
                                                        {errors.city && touched.city && (
                                                            <div className="invalid-feedback" style={{ color: 'red', display: 'block' }}>
                                                                {errors.city}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="form-group required">
                                                    <label className="col-sm-2 control-label" htmlFor="address">Адрес</label>
                                                    <div className="col-sm-10">
                                                        <input
                                                            className={`form-control ${errors.address && touched.address ? 'is-invalid' : ''}`}
                                                            type="text"
                                                            id="address"
                                                            name="address"
                                                            placeholder="ул. Улица"
                                                            onChange={handleChange}
                                                            value={values.address}
                                                        />
                                                        {errors.address && touched.address && (
                                                            <div className="invalid-feedback" style={{ color: 'red', display: 'block' }}>
                                                                {errors.address}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <fieldset>
                                                <legend>Вашата парола</legend>
                                                <div className="form-group required">
                                                    <label className="col-sm-2 control-label" htmlFor="password">Парола</label>
                                                    <div className="col-sm-10">
                                                        <input
                                                            className={`form-control ${errors.password && touched.password ? 'is-invalid' : ''}`}
                                                            type="password"
                                                            id="password"
                                                            name="password"
                                                            placeholder="Парола"
                                                            onChange={handleChange}
                                                            value={values.password}
                                                        />
                                                        {errors.password && touched.password && (
                                                            <div className="invalid-feedback" style={{ color: 'red', display: 'block' }}>
                                                                {errors.password}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="form-group required">
                                                    <label className="col-sm-2 control-label" htmlFor="confirmPassword">Потвърди парола</label>
                                                    <div className="col-sm-10">
                                                        <input
                                                            className={`form-control ${errors.confirmPassword && touched.confirmPassword ? 'is-invalid' : ''}`}
                                                            type="password"
                                                            id="confirmPassword"
                                                            name="confirmPassword"
                                                            placeholder="Потвърди парола"
                                                            onChange={handleChange}
                                                            value={values.confirmPassword}
                                                        />
                                                        {errors.confirmPassword && touched.confirmPassword && (
                                                            <div className="invalid-feedback" style={{ color: 'red', display: 'block' }}>
                                                                {errors.confirmPassword}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <div className="buttons">
                                                <div className="pull-right"><input type="submit" value="Регистрация" className="btn btn-primary" disabled={isLoading} /></div>
                                                <p>Вече имате акаунт? Влезте {" "}<Link className="bold" to="/login">тук</Link>.</p>
                                            </div>
                                        </form>
                                    )}
                                </Formik>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};