import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/AuthProvider";
import Search from "../Search/Search";
import $ from 'jquery';
import Cart from "../Cart/Cart";
import { useWishlist } from "../../contexts/WishlistProvider";

export default function Header() {
    const { isAuthenticated, isAdmin, isModerator } = useContext(AuthContext);
    const { wishlistCount } = useWishlist();

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

        $(".main-navigation").hide();
        $(".expandable").removeClass("active");
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
                                            <a href="https://www.facebook.com/profile.php?id=61572836782465&mibextid=wwXIfr&rdid=E9FAPL9UceYYdXk1&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1HnqLb5ty4%2F%3Fmibextid%3DwwXIfr" target="_blanc" title="Facebook" className="facebook icon">
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
                        {!isAuthenticated && (
                            <div className="nav_right">
                                <Link to="/login">Вход</Link> / <Link to="/register">Регистрация</Link>
                            </div>
                        )}
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
                                                title="Fabric"
                                                alt="Fabric"
                                                className="img-responsive"
                                                style={{ width: '200px', marginTop: "2.5px" }}
                                            />
                                        </Link>
                                    </div>
                                </div>

                                <Search />

                                <div className="header_center">
                                    <div className="header-cartright">
                                        <div className="compare"><Link to="/account" id="compare-total" title="account" />{" "}</div>
                                        <div className="whishlist">
                                            <span>{wishlistCount}</span>
                                            <Link to="/wishlist" id="wishlist-total" title={wishlistCount} />{" "}
                                        </div>

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
                                        <li className="top_level"><Link to="/catalog?type=t_shirt&sort=new&size=20">Тениски</Link></li>
                                        <li className="top_level"><Link to="/catalog?type=long_t_shirt&sort=new&size=20">Блузи</Link></li>
                                        <li className="top_level"><Link to="/catalog?type=sweatshirt&sort=new&size=20">Суитчъри</Link></li>
                                        <li className="top_level"><Link to="/catalog?type=shorts&sort=new&size=20">Къси панталони</Link></li>
                                        <li className="top_level"><Link to="/catalog?type=kit&sort=new&size=20">Комплекти</Link></li>
                                        <li className="top_level"><Link to="/catalog?type=towels&sort=new&size=20">Плажни кърпи</Link></li>
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
                                                    <span>Меню</span>
                                                    <div className="expandable" />
                                                </div>
                                                <ul className="main-navigation">
                                                    <li className="top_level"><Link to="/catalog?type=t_shirt&sort=new&size=20">Тениски</Link></li>
                                                    <li className="top_level"><Link to="/catalog?type=long_t_shirt&sort=new&size=20">Блузи</Link></li>
                                                    <li className="top_level"><Link to="/catalog?type=sweatshirt&sort=new&size=20">Суитчъри</Link></li>
                                                    <li className="top_level"><Link to="/catalog?type=shorts&sort=new&size=20">Къси панталони</Link></li>
                                                    <li className="top_level"><Link to="/catalog?type=kit&sort=new&size=20">Комплекти</Link></li>
                                                    <li className="top_level"><Link to="/catalog?type=towels&sort=new&size=20">Плажни кърпи</Link></li>
                                                    <li className="top_level"><Link to="/">Начало</Link></li>
                                                    <li className="top_level"><Link to="/contact">Контакти</Link></li>
                                                    {(isAdmin || isModerator) && (<li className="top_level"><Link to="/orders-history">Поръчки</Link></li>)}
                                                    {isAuthenticated && !isAdmin && !isModerator && (<li className="top_level"><Link to="/orders-history">Мои поръчки</Link></li>)}
                                                </ul>
                                            </div>
                                            <div className="static-menu">
                                                <ul id="static-menu">
                                                    <li>
                                                        <Link to="/">Начало</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/contact">Контакти</Link>
                                                    </li>
                                                    {isAdmin && (
                                                        <li className="toplink">
                                                            <Link to="/add-clothing">Добавяне на продукт</Link>
                                                        </li>
                                                    )}
                                                    {isAdmin && (
                                                        <li className="toplink">
                                                            <Link to="/prices">Цени</Link>
                                                        </li>
                                                    )}
                                                    {isModerator && (
                                                        <li className="toplink">
                                                            <Link to="/orders-history">Поръчки</Link>
                                                        </li>
                                                    )}
                                                    {isAuthenticated && !isAdmin && !isModerator && (
                                                        <li className="toplink">
                                                            <Link to="/orders-history">Мои поръчки</Link>
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