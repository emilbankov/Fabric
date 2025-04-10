import { useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../../contexts/AuthProvider";
import { profile } from "../../services/authService";
import MetaTags from '../Meta Tags/MetaTags';

export default function Account() {
    const location = useLocation();
    const { isAuthenticated, userProfile, updateUserProfile } = useContext(AuthContext);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const profileData = await profile();
                updateUserProfile(profileData);
                
            } catch (error) {
                console.error("Failed to fetch profile:", error);
            }
        };

        if (isAuthenticated) {
            fetchProfile();
        }
    }, [location.pathname]);

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
                title="Fabric | Акаунт"
                description="Управлявайте вашия акаунт във Fabric. Прегледайте и редактирайте вашата лична информация, поръчки и предпочитания."
                keywords="Fabric, акаунт, лична информация, поръчки, предпочитания, онлайн магазин, профил, account, profile, personal information, orders, e-shop, clothing website"
            />
            <div className="account-login layout-2 left-col">
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
                        <li>
                            <Link to="/">
                                <i className="fa fa-home" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/account">Профил</Link>
                        </li>
                    </ul>
                    <div className="row">
                        <aside id="column-left" className="col-sm-3 hidden-xs">
                            <div className="box">
                                <div className="box-heading" style={{ textAlign: "center" }}>Профил</div>
                                <div className="user-profile">
                                    <div className="user-avatar">
                                        <img src="/images/no-image.jpg" alt="User Avatar" />
                                    </div>
                                    {isAuthenticated && userProfile && (
                                        <>
                                            <h2 className="user-name">{`${userProfile.firstName} ${userProfile.lastName}`}</h2>
                                            <h3 className="user-email">{userProfile.email}</h3>
                                        </>
                                    )}
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
                            <h1>Лична информация</h1>
                            <div className="row">
                                <div className="card h-100">
                                    <div className="card-body">
                                        {isAuthenticated && userProfile ? (
                                            <div className="row gutters">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="fullName">Име</label>
                                                        <span>{userProfile.firstName}</span>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="fullName">Фамилия</label>
                                                        <span>{userProfile.lastName}</span>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="street">Град</label>
                                                        <span>{userProfile.city}</span>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="email">E-mail</label>
                                                        <span>{userProfile.email}</span>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="city">Област</label>
                                                        <span>{userProfile.region}</span>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="phone">Телефон</label>
                                                        <span>{userProfile.phoneNumber}</span>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="city">Адрес</label>
                                                        <span>{userProfile.address}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div>Please log in to view your profile information.</div>
                                        )}
                                        <div className="row gutters">
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="text-right w-85m-30">
                                                    <Link
                                                        to="/edit-account"
                                                        type="button"
                                                        id="submit"
                                                        name="submit"
                                                        className="btn btn-primary"
                                                    >
                                                        Редактиране
                                                    </Link>
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
}