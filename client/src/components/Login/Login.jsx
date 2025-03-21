import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import AuthContext from "../../contexts/AuthProvider";
import { Formik } from "formik";
import MetaTags from '../Meta Tags/MetaTags';

export default function Login() {
    const location = useLocation();
    const { loginSubmitHandler, authError, clearAuthError } = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState(false);

    const { values, onChange, onSubmit } = useForm(async (data) => {
        setIsLoading(true);
        try {
            await loginSubmitHandler(data);
        } catch (error) {
            console.error("Login error:", error);
        } finally {
            setIsLoading(false);
        }
    }, {
        email: '',
        password: ''
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

    useEffect(() => {
        return () => clearAuthError();
    }, [location.pathname]);

    return (
        <>
            <MetaTags
                title="Fabric | Вход"
                description="Влезте във вашия акаунт във Fabric. Пазарувайте по-бързо, следете поръчките си и управлявайте предпочитанията си."
                keywords="Fabric, вход, акаунт, пазаруване, поръчки, предпочитания, login, account, shopping, orders, preferences"
            />
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
                        <li><Link to="/login">Вход</Link></li>
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
                            <h1>Влизане в акаунт</h1>
                            {isLoading && (<div style={{ margin: '10% auto' }} className="text-center"><img src="/images/loader.gif" alt="Loading..." /></div>)}
                            {!isLoading && (
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="well">
                                            <h2>Нов потребител</h2>
                                            <p>
                                                <strong>Регистрация на акаунт</strong>
                                            </p>
                                            <p className="form-group">
                                                Създавайки акаунт, вие ще можете да пазарувате по-бързо, да сте в течение на статуса на поръчката и да следите поръчките, които сте направили преди това.
                                            </p>
                                            <Link to="/register" className="btn btn-primary">
                                                Продължи към регистрация
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="well">
                                            <h2>Завръщащ се потребител</h2>
                                            {authError && (
                                                <div style={{ marginBottom: '10px', color: "red", fontSize: "16px" }}>
                                                    {authError}
                                                </div>
                                            )}
                                            <Formik
                                                onSubmit={onSubmit}
                                            >
                                                {({ isSubmitting }) => (
                                                    <form onSubmit={onSubmit}>
                                                        <div className="form-group">
                                                            <label className="control-label" htmlFor="email">E-mail</label>
                                                            <input
                                                                className="form-control"
                                                                type="email"
                                                                id="email"
                                                                name="email"
                                                                placeholder="E-mail"
                                                                onChange={onChange}
                                                                value={values.email}
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="control-label" htmlFor="password">
                                                                Парола
                                                            </label>
                                                            <input
                                                                className="form-control mb-5"
                                                                type="password"
                                                                id="password"
                                                                name="password"
                                                                placeholder="Парола"
                                                                onChange={onChange}
                                                                value={values.password}
                                                            />
                                                            <Link className="forgotten-password" to="/forgotten-password">Забравена парола?</Link>
                                                        </div>
                                                        <input type="submit" value="Вход" className="btn btn-primary login-fr" disabled={isSubmitting || isLoading} />
                                                    </form>
                                                )}
                                            </Formik>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};