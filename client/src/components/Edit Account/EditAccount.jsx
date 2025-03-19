import { useEffect, useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Formik } from 'formik';
import { editAccountValidationSchema } from '../../lib/validate';
import AuthContext from "../../contexts/AuthProvider";
import { editProfile, profile } from "../../services/authService";
import MetaTags from '../Meta Tags/MetaTags';

export default function EditAccount() {
    const location = useLocation();
    const navigate = useNavigate();

    const { userProfile, updateUserProfile } = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const formatPhoneNumber = (value) => {
        const digits = value.replace(/\D/g, '');
        if (digits.length <= 3) return digits;
        if (digits.length <= 6) return `${digits.slice(0, 3)} ${digits.slice(3)}`;
        return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 9)}`;
    };

    const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        setIsLoading(true);
        setError(null);

        const payload = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phoneNumber: '+359 ' + values.phoneNumber,
            address: values.address,
            region: values.region,
            city: values.city
        };

        try {
            const response = await editProfile(
                payload.firstName,
                payload.lastName,
                payload.email,
                payload.phoneNumber,
                payload.address,
                payload.region,
                payload.city
            );

            if (response.status === "success") {
                const updatedProfile = await profile();

                updateUserProfile(updatedProfile);
                navigate("/account");
            } else {
                if (response.errors && Array.isArray(response.errors)) {
                    const fieldErrors = {};
                    response.errors.forEach(error => {
                        const field = error.toLowerCase()
                            .replace(' cannot be empty', '')
                            .replace(' ', '');
                        fieldErrors[field] = error;
                    });
                    setErrors(fieldErrors);
                } else {
                    setError(response.message || 'Възникна грешка при обновяването на профила.');
                }
            }
        } catch (error) {
            console.error("Update error:", error);
            setError(error.message || 'Възникна грешка при обновяването на профила.');
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

    return (
        <>
            <MetaTags
                title="Fabric | Редактиране на профил"
                description="Редактирайте вашия профил във Fabric. Актуализирайте личната си информация, адреса и предпочитанията за по-лесно пазаруване."
                keywords="Fabric, редактиране на профил, лична информация, адрес, предпочитания, онлайн магазин, дрехи, мода, edit profile, personal information, address, preferences, online store, clothes, fashion"
            />
            <div className="account-register layout-2 left-col">
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
                            <Link to="/"><i className="fa fa-home" /></Link>
                        </li>
                        <li>
                            <Link to="/edit-account">Редактиране на профил</Link>
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
                                                    src="/images/left-banner-272x340.jpg"
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
                            <h1>Редактиране на профил</h1>
                            {error && (
                                <div className="invalid-feedback" style={{ color: 'red', display: 'block', fontSize: '16px', fontWeight: 'bold', marginBottom: '20px' }}>
                                    {error}
                                </div>
                            )}
                            {isLoading ? (
                                <div style={{ margin: '10% auto' }} className="text-center">
                                    <img src="/images/loader.gif" alt="Loading..." />
                                </div>
                            ) : (
                                <Formik
                                    initialValues={{
                                        firstName: userProfile.firstName,
                                        lastName: userProfile.lastName,
                                        email: userProfile.email,
                                        phoneNumber: userProfile.phoneNumber.replace('+359 ', ''),
                                        address: userProfile.address,
                                        region: userProfile.region,
                                        city: userProfile.city,
                                    }}
                                    validationSchema={editAccountValidationSchema}
                                    onSubmit={handleSubmit}
                                >
                                    {({ values, errors, touched, handleChange, handleSubmit, setFieldValue }) => (
                                        <form className="form-horizontal" onSubmit={handleSubmit}>
                                            <fieldset id="account">
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

                                            <div className="buttons">
                                                <div className="pull-right">
                                                    <input
                                                        type="submit"
                                                        value="Запази промените"
                                                        className="btn btn-primary"
                                                        disabled={isLoading}
                                                    />
                                                </div>
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
}