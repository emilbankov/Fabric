import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../../contexts/AuthProvider";

export default function Sitemap() {
    const location = useLocation();
    const { isAuthenticated } = useContext(AuthContext);

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
            <div className="information-information-3 layout-2 left-col">
                <div className="content_headercms_bottom" />
                <div className="content-top-breadcum">
                    <div className="container">
                        <div className="row">
                            <div id="title-content"></div>
                        </div>
                    </div>
                </div>
                <div id="information-information" className="container">
                    <ul className="breadcrumb">
                        <li style={{ listStyle: "disc" }}>
                            <Link to="/">
                                <i className="fa fa-home" />
                            </Link>
                        </li>
                        <li style={{ listStyle: "disc" }}>
                            <Link to="/sitemap">
                                Карта на сайта
                            </Link>
                        </li>
                    </ul>
                    <div className="row">
                        <aside id="column-left" className="col-sm-3 hidden-xs">
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
                                        href="information/information&information_id=6"
                                    >
                                        Delivery Information{" "}
                                    </a>
                                    <Link
                                        className="list-group-item"
                                        to="/privacy-policy"
                                    >
                                        Политика за поверителност{" "}
                                    </Link>
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
                                <div className="box-heading">Account</div>
                                <div className="list-group">
                                    <a
                                        href="account/login"
                                        className="list-group-item"
                                    >
                                        Login{" "}
                                    </a>{" "}
                                    <a
                                        href="account/register"
                                        className="list-group-item"
                                    >
                                        Register
                                    </a>{" "}
                                    <a
                                        href="account/forgotten"
                                        className="list-group-item"
                                    >
                                        Forgotten Password{" "}
                                    </a>
                                    <a
                                        href="account/account "
                                        className="list-group-item"
                                    >
                                        My Account{" "}
                                    </a>
                                    <a
                                        href="account/address"
                                        className="list-group-item"
                                    >
                                        Address Book
                                    </a>{" "}
                                    <a
                                        href="account/wishlist "
                                        className="list-group-item"
                                    >
                                        Wish List{" "}
                                    </a>{" "}
                                    <a
                                        href="account/order "
                                        className="list-group-item"
                                    >
                                        Order History{" "}
                                    </a>{" "}
                                    <a
                                        href="account/download"
                                        className="list-group-item"
                                    >
                                        Downloads{" "}
                                    </a>
                                    <a
                                        href="account/recurring"
                                        className="list-group-item"
                                    >
                                        Recurring payments{" "}
                                    </a>{" "}
                                    <a
                                        href="account/reward "
                                        className="list-group-item"
                                    >
                                        Reward Points{" "}
                                    </a>{" "}
                                    <a
                                        href="account/return"
                                        className="list-group-item"
                                    >
                                        Returns{" "}
                                    </a>{" "}
                                    <a
                                        href="account/transaction"
                                        className="list-group-item"
                                    >
                                        Transactions{" "}
                                    </a>{" "}
                                    <a
                                        href="account/newsletter"
                                        className="list-group-item"
                                    >
                                        Newsletter{" "}
                                    </a>
                                </div>
                            </div>
                        </aside>
                        <div id="content" className="col-sm-9">
                            <h1 className="page-title">Карта на сайта</h1>

                            <div className="aboutus">
                                <h3>Основни страници</h3>
                                <ul>
                                    <li><Link to="/">Начало</Link></li>
                                    <li><Link to="/catalog?type=t_shirt&sort=new&size=20">Каталог</Link></li>
                                    <li><Link to="/about">За нас</Link></li>
                                    <li><Link to="/contact">Контакти</Link></li>
                                    <li><Link to="/privacy-policy">Политика за поверителност</Link></li>
                                    <li><Link to="/terms-and-conditions">Общи условия</Link></li>
                                </ul>
                            </div>

                            <div className="aboutus">
                                <h3>Акаунт</h3>
                                <ul>
                                    {!isAuthenticated ? (
                                        <>
                                            <li><Link to="/login">Вход</Link></li>
                                            <li><Link to="/register">Регистрация</Link></li>
                                            <li><Link to="/forgotten-password">Забравена парола</Link></li>
                                            <li><span style={{ color: '#999', cursor: 'not-allowed' }}>Моят акаунт</span></li>
                                            <li><span style={{ color: '#999', cursor: 'not-allowed' }}>Редактиране на акаунт</span></li>
                                            <li><span style={{ color: '#999', cursor: 'not-allowed' }}>Любими продукти</span></li>
                                            <li><span style={{ color: '#999', cursor: 'not-allowed' }}>Изход</span></li>
                                        </>
                                    ) : (
                                        <>
                                            <li><span style={{ color: '#999', cursor: 'not-allowed' }}>Вход</span></li>
                                            <li><span style={{ color: '#999', cursor: 'not-allowed' }}>Регистрация</span></li>
                                            <li><span style={{ color: '#999', cursor: 'not-allowed' }}>Забравена парола</span></li>
                                            <li><Link to="/account">Моят акаунт</Link></li>
                                            <li><Link to="/edit-account">Редактиране на акаунт</Link></li>
                                            <li><Link to="/wishlist">Любими продукти</Link></li>
                                            <li><Link to="/logout">Изход</Link></li>
                                        </>
                                    )}

                                </ul>
                            </div>

                            <div className="aboutus">
                                <h3>Поръчки</h3>
                                <ul>
                                    <li><Link to="/view-cart">Количка</Link></li>

                                    {isAuthenticated ? (
                                        <li><Link to="/orders-history">История на поръчките</Link></li>
                                    ) : (
                                        <li><span style={{ color: '#999', cursor: 'not-allowed' }}>История на поръчките</span></li>
                                    )}
                                </ul>
                            </div>

                            <div className="aboutus">
                                <h3>Грешки</h3>
                                <ul>
                                    <li><Link to="/404">404 Грешка</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
