import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/AuthProvider";
import Search from "../Search/Search";
import $ from 'jquery';
import Cart from "../Cart/Cart";

export default function Header() {
    const { isAuthenticated, isAdmin } = useContext(AuthContext);

    useEffect(() => {
        $(".box-category-top").click(function () {
            $(this).toggleClass("active");
            $(".box-content-category").slideToggle(800);
        });

        return () => {
            $(".box-category-top").off("click");
        };
    }, []);

    useEffect(() => {
        $(".box-content-category").hide();
        $(".box-category-top").removeClass("active");
    }, [location.pathname, location.search]);

    useEffect(() => {
        const existingScript = document.querySelector('script[src="/js/navigation.js"]');
        if (existingScript && existingScript.parentNode) {
            existingScript.parentNode.removeChild(existingScript);
        }

        const script = document.createElement('script');
        script.src = '/js/navigation.js';
        script.async = true;

        document.body.appendChild(script);

        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, [location]);

    return (
        <>
            <div className="account-login   layout-2 left-col">
                <nav id="top">
                    <div className="container">
                        <div className="nav_left">
                            <div className="social-icons col-sm-3 column">
                                <a className="mobile_togglemenu" />
                                <div id="follow_us" className="follow-us">
                                    <ul className="toggle-block">
                                        <li>
                                            <a href="#" title="Facebook" className="facebook icon">
                                                <i className="fa-brands fa-facebook-f"></i>
                                            </a>
                                            <a href="#" title="Twitter" className="twitter icon">
                                                <i className="fa fa-twitter" />
                                            </a>
                                            <a href="#" title="RSS" className="rss icon">
                                                <i className="fa fa-rss" />
                                            </a>
                                            <a href="#" title="Pinterest" className="pinterest icon">
                                                <i className="fa-brands fa-pinterest" />
                                            </a>
                                            <a href="#" title="Google Plus " className="google-plus icon">
                                                <i className="fa-brands fa-google-plus" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="offer-title">
                                Безплатна доставка за поръчки над 100 лв.
                            </div>
                        </div>
                        <div className="nav_right">
                            <div className="account">
                                <li className="dropdown myaccount">
                                    <Link
                                        to="/account"
                                        title="My Account"
                                        className="dropdown-toggle"
                                        data-toggle="dropdown"
                                    >
                                        <span className="hidden-xs hidden-sm hidden-md">My Account</span>
                                        <i className="fa fa-caret-down" aria-hidden="true" />
                                    </Link>
                                    <ul className="dropdown-menu dropdown-menu-right myaccount-menu">
                                        <div className="drop_account">
                                            <div className="login_acc">
                                                <li>
                                                    <Link className="login" to="/login">
                                                        Login
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="reg" to="/register">
                                                        Register
                                                    </Link>
                                                </li>
                                                <li>
                                                    <a href="/checkout" title="Checkout">
                                                        <span className="checkout">Checkout</span>
                                                    </a>
                                                </li>
                                            </div>
                                        </div>
                                    </ul>
                                </li>
                            </div>
                            <div className="lang-curr-wrapper">
                                <div className="pull-left wd-language">
                                    <form
                                        action="/language/language"
                                        method="post"
                                        encType="multipart/form-data"
                                        id="form-language"
                                    >
                                        <div className="btn-group">
                                            <button
                                                className="btn btn-link dropdown-toggle"
                                                data-toggle="dropdown"
                                            >
                                                <span className="hidden-xs hidden-sm hidden-md">
                                                    <img
                                                        src="/images/en-gb.png"
                                                        alt="English"
                                                        title="English"
                                                    />
                                                    Lang
                                                    <i className="fa fa-caret-down" aria-hidden="true" />
                                                </span>
                                            </button>
                                            <ul className="dropdoen-menu language-menu">
                                                <li>
                                                    <button
                                                        className="btn btn-link btn-block language-select"
                                                        type="button"
                                                        name="en-gb"
                                                    >
                                                        <img
                                                            src="/images/en-gb.png"
                                                            alt="English"
                                                            title="English"
                                                        />{" "}
                                                        English
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        className="btn btn-link btn-block language-select"
                                                        type="button"
                                                        name="ar"
                                                    >
                                                        <img
                                                            src="/images/ar.png"
                                                            alt="Arabic"
                                                            title="Arabic"
                                                        />
                                                        Arabic
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                        <input type="hidden" name="code" defaultValue="" />
                                        <input type="hidden" name="redirect" defaultValue="/home" />
                                    </form>
                                </div>
                                <div className="pull-left wd-currency">
                                    <form
                                        action="/currency/currency"
                                        method="post"
                                        encType="multipart/form-data"
                                        id="form-currency"
                                    >
                                        <div className="btn-group">
                                            <button
                                                className="btn btn-link dropdown-toggle"
                                                data-toggle="dropdown"
                                            >
                                                <span className="hidden-xs hidden-sm hidden-md">
                                                    <strong>$</strong>
                                                    Curr
                                                    <i className="fa fa-caret-down" aria-hidden="true" />
                                                </span>
                                            </button>
                                            <ul className="dropdoen-menu currency-menu">
                                                <li>
                                                    <button
                                                        className="currency-select btn btn-link btn-block"
                                                        type="button"
                                                        name="EUR"
                                                    >
                                                        € Euro
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        className="currency-select btn btn-link btn-block"
                                                        type="button"
                                                        name="GBP"
                                                    >
                                                        £ Pound Sterling
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        className="currency-select btn btn-link btn-block"
                                                        type="button"
                                                        name="USD"
                                                    >
                                                        $ US Dollar
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                        <input type="hidden" name="code" defaultValue="" />
                                        <input type="hidden" name="redirect" defaultValue="/home" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <header>
                    <div className="header_top">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-4 header-logo">
                                    <div id="logo">
                                        <Link to="/">
                                            <img
                                                src="/images/logo.png"
                                                title="Vesture"
                                                alt="Vesture"
                                                className="img-responsive"
                                            />
                                        </Link>
                                    </div>
                                </div>

                                <Search />

                                <div className="header_center">
                                    <div className="header-cartright">
                                        {/* {isAuthenticated && <div className="compare"><Link to="/account" id="compare-total" title="Product Compare" />{" "}</div>} */}
                                        <div className="compare"><Link to="/account" id="compare-total" title="Product Compare" />{" "}</div>
                                        <div className="whishlist"><span>0</span><a href="/wishlist" id="wishlist-total" title={0} />{" "}</div>

                                        <Cart />

                                        {isAuthenticated && <div className="compare logout"><Link to="/logout" id="compare-total" title="Product Compare" />{" "}</div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header_bottom">
                        <div className="container">
                            <div className="row">
                                <div className="box-category-top"><div className="box-heading">Пазарувай по категории</div></div>
                                <div className="box-content-category">
                                    <ul id="nav-one" className="dropmenu box-category">
                                        <li className="top_level"><Link to="/catalog?sort=new&size=20">Най-нови</Link></li>
                                        <li className="top_level"><Link to="/catalog?sort=most-sold&size=20">Най-продавани</Link></li>
                                        <li className="top_level"><Link to="/catalog?type=t_shirt&sort=new&size=20">Тениски</Link></li>
                                        <li className="top_level"><Link to="/catalog?type=long_t_shirt&sort=new&size=20">Блузи</Link></li>
                                        <li className="top_level"><Link to="/catalog?type=sweatshirt&sort=new&size=20">Суитчъри</Link></li>
                                        <li className="top_level"><Link to="/catalog?type=shorts&sort=new&size=20">Къси панталони</Link></li>
                                        <li className="top_level"><Link to="/catalog?type=kit&sort=new&size=20">Комплекти</Link></li>
                                    </ul>
                                </div>
                                <nav className="nav-container" role="navigation">
                                    <div className="nav-inner">
                                        <div id="menu" className="main-menu">
                                            <div
                                                id="res-menu"
                                                className="main-menu nav-container1 responsive-menu"
                                            >
                                                <div className="nav-responsive">
                                                    <span>Menu</span>
                                                    <div className="expandable" />
                                                </div>
                                                <ul className="main-navigation">
                                                    <li className="top_level"><Link to="/">Начало</Link></li>
                                                    <li className="top_level"><Link to="/contact">Контакти</Link></li>
                                                    <li className="top_level"><Link to="/blogs">Блог</Link></li>
                                                    <li className="top_level"><Link to="/catalog?sort=new&size=20">Най-нови</Link></li>
                                                    <li className="top_level"><Link to="/catalog?sort=most-sold&size=20">Най-продавани</Link></li>
                                                    <li className="top_level"><Link to="/catalog?type=t_shirt&sort=new&size=20">Тениски</Link></li>
                                                    <li className="top_level"><Link to="/catalog?type=long_t_shirt&sort=new&size=20">Блузи</Link></li>
                                                    <li className="top_level"><Link to="/catalog?type=sweatshirt&sort=new&size=20">Суитчъри</Link></li>
                                                    <li className="top_level"><Link to="/catalog?type=shorts&sort=new&size=20">Къси панталони</Link></li>
                                                    <li className="top_level"><Link to="/catalog?type=kit&sort=new&size=20">Комплекти</Link></li>
                                                </ul>
                                            </div>
                                            <div className="static-menu">
                                                <ul id="static-menu">
                                                    <li>
                                                        <Link to="/">Начало</Link>
                                                    </li>
                                                    <li className="new menu-item">
                                                        <Link to="/catalog?sort=new&size=20">Нова колекция</Link>
                                                    </li>
                                                    <li className="hot menu-item">
                                                        <Link to="/catalog?sort=most-sold&size=20">Специални</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/contact">Контакти</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/blogs">Блог</Link>
                                                    </li>
                                                    {isAdmin && (
                                                        <li className="toplink">
                                                            <Link to="/add-clothing">Добавяне на продукт</Link>
                                                        </li>
                                                    )}
                                                    {isAdmin && (
                                                        <li className="toplink">
                                                            <Link to="/orders-history-admin">Поръчки</Link>
                                                        </li>
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
};