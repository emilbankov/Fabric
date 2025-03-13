import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import { resetPasswordSchema } from '../../lib/validate';
import { resetPassword } from '../../services/authService';

export default function ResetPassword() {
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');
    console.log(token);

    useEffect(() => {
        if (!token) {
            navigate('/');
        }
    }, [token, navigate]);

    const handleSubmit = async (values) => {
        try {
            await resetPassword(values.password, token);
            navigate('/login');
        } catch (error) {
            console.error(error);
        }
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
                        <aside id="column-left" className="col-sm-3 hidden-xs">
                            <div className="box">
                                <div className="box-heading">Акаунт</div>
                                <div className="list-group">
                                    <Link to="/login" className="list-group-item">Вход</Link>
                                    <Link to="/register" className="list-group-item">Регистрация</Link>
                                    <Link to="/forgotten" className="list-group-item">Забравена парола</Link>
                                    <Link to="/account" className="list-group-item">Акаунт</Link>
                                    <Link to="/wishlist " className="list-group-item">Любими</Link>
                                    <Link to="/order " className="list-group-item">Мои поръчки</Link>
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
                            <h1>Промяна на парола</h1>
                            <p>
                                Моля въведете нова парола за вашия акаунт.
                            </p>
                            <Formik
                                initialValues={{ password: '', confirmPassword: '' }}
                                validationSchema={resetPasswordSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ errors, touched }) => (
                                    <Form className="form-horizontal">
                                        <fieldset>
                                            <legend>Вашите данни</legend>
                                            <div className="form-group required">
                                                <label className="col-sm-2 control-label" htmlFor="input-password">
                                                    Нова парола
                                                </label>
                                                <div className="col-sm-10">
                                                    <Field
                                                        type="password"
                                                        name="password"
                                                        placeholder="Нова парола"
                                                        id="input-password"
                                                        className={`form-control ${errors.password && touched.password ? 'is-invalid' : ''}`}
                                                    />
                                                    {errors.password && touched.password && (
                                                        <div className="invalid-feedback" style={{ color: 'red', display: 'block' }}>
                                                            {errors.password}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="form-group required">
                                                <label className="col-sm-2 control-label" htmlFor="input-confirm-password">
                                                    Потвърди паролата
                                                </label>
                                                <div className="col-sm-10">
                                                    <Field
                                                        type="password"
                                                        name="confirmPassword"
                                                        placeholder="Потвърди паролата"
                                                        id="input-confirm-password"
                                                        className={`form-control ${errors.confirmPassword && touched.confirmPassword ? 'is-invalid' : ''}`}
                                                    />
                                                    {errors.confirmPassword && touched.confirmPassword && (
                                                        <div className="invalid-feedback" style={{ color: 'red', display: 'block' }}>
                                                            {errors.confirmPassword}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </fieldset>
                                        <div className="buttons clearfix">
                                            <div className="pull-left"><Link to={-1} className="btn btn-default">Назад</Link></div>
                                            <div className="pull-right"><input type="submit" value="Промени паролата" className="btn btn-default" /></div>
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
