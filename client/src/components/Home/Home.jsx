import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        const handleLoad = () => {
            const existingScript = document.querySelector('script[src="/js/custom.js"]');
            if (existingScript) {
                existingScript.remove();
            }

            const script = document.createElement('script');
            script.src = '/js/custom.js';
            script.async = true;
            document.body.appendChild(script);
        };

        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        <>
            <nav id="top">
                <div className="container">
                    <div className="nav_left">
                        <div className="social-icons col-sm-3 column">
                            <a className="mobile_togglemenu" />
                            <div id="follow_us" className="follow-us">
                                <ul className="toggle-block">
                                    <li>
                                        <a href="#" title="Facebook" className="facebook icon">
                                            <i className="fa fa-facebook" />
                                        </a>
                                        <a href="#" title="Twitter" className="twitter icon">
                                            <i className="fa fa-twitter" />
                                        </a>
                                        <a href="#" title="RSS" className="rss icon">
                                            <i className="fa fa-rss" />
                                        </a>
                                        <a href="#" title="Pinterest" className="pinterest icon">
                                            <i className="fa fa-pinterest" />
                                        </a>
                                        <a href="#" title="Google Plus " className="google-plus icon">
                                            <i className="fa fa-google-plus" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="offer-title">
                            Free Coupne Code : Summer Sale On Selected Items Use : New 27
                        </div>
                    </div>
                    <div className="nav_right">
                        <div className="account">
                            <li className="dropdown myaccount">
                                <a
                                    href="/account.html"
                                    title="My Account"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                >
                                    <span className="hidden-xs hidden-sm hidden-md">My Account</span>
                                    <i className="fa fa-caret-down" aria-hidden="true" />
                                </a>
                                <ul className="dropdown-menu dropdown-menu-right myaccount-menu">
                                    <div className="drop_account">
                                        <div className="login_acc">
                                            <li>
                                                <a className="login" href="/login.html">
                                                    Login
                                                </a>
                                            </li>
                                            <li>
                                                <a className="reg" href="/register.html">
                                                    Register
                                                </a>
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
                                    <a href="index.html">
                                        <img
                                            src="/images/logo.png"
                                            title="Vesture"
                                            alt="Vesture"
                                            className="img-responsive"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-5 header_search">
                                <div id="search">
                                    <div id="searchbox" className="input-group searchtoggle">
                                        <input
                                            type="text"
                                            name="search"
                                            defaultValue=""
                                            placeholder="Search for products..."
                                            className="form-control input-lg"
                                        />
                                        <span className="input-group-btn">
                                            <button type="button" className="btn btn-default btn-lg">
                                                {" "}
                                                Search
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="header_center">
                                <div className="header-cartright">
                                    <div className="compare">
                                        <a
                                            href="account.html"
                                            id="compare-total"
                                            title="Product Compare"
                                        />{" "}
                                    </div>
                                    <div className="whishlist">
                                        <span>0</span>
                                        <a href="/wishlist" id="wishlist-total" title={0} />{" "}
                                    </div>
                                    <div className="col-sm-3 header_cart">
                                        <div id="cart" className="btn-group btn-block">
                                            <button
                                                type="button"
                                                data-toggle="dropdown"
                                                data-loading-text="Loading..."
                                                className="btn btn-inverse btn-block btn-lg dropdown-toggle"
                                            >
                                                <div className="cart_detail">
                                                    <div className="cart_image" />
                                                    <span id="cart-total">
                                                        <span className="item-count">0</span>
                                                        <span className="price"> $0.00 </span>
                                                        <span className="mycart">My cart</span>
                                                    </span>
                                                </div>
                                            </button>
                                            <ul className="dropdown-menu pull-right cart-menu">
                                                <li>
                                                    <p className="text-center">
                                                        Your shopping cart is empty!
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header_bottom">
                    <div className="container">
                        <div className="row">
                            <div className="box-category-top">
                                <div className="box-heading">Shop By Categories</div>
                            </div>
                            <div className="box-content-category">
                                <ul id="nav-one" className="dropmenu box-category">
                                    <li className="top_level">
                                        <a href="/category&path=53">Festive Sarees</a>
                                    </li>
                                    <li className="top_level">
                                        <a href="/category&path=44">Slipcover</a>
                                    </li>
                                    <li className="top_level">
                                        <a href="/category&path=37">WesternWear</a>
                                    </li>
                                    <li className="top_level">
                                        <a href="/category&path=42">Zink</a>
                                    </li>
                                    <li className="top_level">
                                        <a href="/category&path=31">Bags</a>
                                    </li>
                                    <li className="top_level">
                                        <a href="/category&path=30">Bay 2 Get 1 FREE</a>
                                    </li>
                                    <li className="top_level dropdown">
                                        <a href="catalog.html">Men</a>
                                        <span className="cat" />
                                        <div className="dropdown-menu megamenu column3">
                                            <div className="dropdown-inner">
                                                <ul className="list-unstyled childs_1">
                                                    <li className="dropdown">
                                                        <a href="/category&path=20_59">Pocket Squares (2)</a>
                                                        <div className="dropdown-menu">
                                                            <div className="dropdown-inner">
                                                                <ul className="list-unstyled childs_2">
                                                                    <li>
                                                                        <a href="/category&path=20_59_61">
                                                                            Bags &amp; Backpacks (1)
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/category&path=20_59_60">Caps (2)</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/category&path=20_59_62">Socks (2)</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <ul className="list-unstyled childs_1">
                                                    <li className="dropdown">
                                                        <a href="/category&path=20_26">Luxe (2)</a>
                                                        <div className="dropdown-menu">
                                                            <div className="dropdown-inner">
                                                                <ul className="list-unstyled childs_2">
                                                                    <li>
                                                                        <a href="/category&path=20_26_65">
                                                                            Convertible (2)
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/category&path=20_26_66">
                                                                            Netbook (0)
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/category&path=20_26_63">
                                                                            Peter England (2)
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <ul className="list-unstyled childs_1">
                                                    <li className="dropdown">
                                                        <a href="/category&path=20_27">Topwear (2)</a>
                                                        <div className="dropdown-menu">
                                                            <div className="dropdown-inner">
                                                                <ul className="list-unstyled childs_2">
                                                                    <li>
                                                                        <a href="/category&path=20_27_67">
                                                                            Allen Solly (2)
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/category&path=20_27_68">Belts (1)</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/category&path=20_27_64">
                                                                            Louis Philippe (2)
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="top_level dropdown">
                                        <a href="/category&path=18">Indian Wear</a>
                                        <span className="cat" />
                                        <div className="dropdown-menu megamenu column1">
                                            <div className="dropdown-inner">
                                                <ul className="list-unstyled childs_1">
                                                    <li>
                                                        <a href="/category&path=18_46">Biba (10)</a>
                                                    </li>
                                                    <li>
                                                        <a href="/category&path=18_45">Choli &amp; Gaun (1)</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="top_level">
                                        <a href="/category&path=57">Jaipur Kurti</a>
                                    </li>
                                    <li className="top_level dropdown">
                                        <a href="/category&path=25">Women</a>
                                        <span className="cat" />
                                        <div className="dropdown-menu megamenu column1">
                                            <div className="dropdown-inner">
                                                <ul className="list-unstyled childs_1">
                                                    <li>
                                                        <a href="/category&path=25_32">Handbags (2)</a>
                                                    </li>
                                                    <li>
                                                        <a href="/category&path=25_29">Printers (9)</a>
                                                    </li>
                                                    <li className="dropdown">
                                                        <a href="/category&path=25_28">Tota Bags (9)</a>
                                                        <div className="dropdown-menu">
                                                            <div className="dropdown-inner">
                                                                <ul className="list-unstyled childs_2">
                                                                    <li>
                                                                        <a href="/category&path=25_28_36">
                                                                            Jumpsuits (3)
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/category&path=25_28_35">
                                                                            T - Shirts (9)
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    {/* 2 Level Sub Categories END */}
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="top_level">
                                        <a href="/category&path=17">Festive Sarees</a>
                                    </li>
                                    <li className="top_level">
                                        <a href="/category&path=24">Skirts</a>
                                    </li>
                                    <li className="top_level">
                                        <a href="/category&path=33">Shoes</a>
                                    </li>
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
                                                <li>
                                                    <a href="/home">Home</a>
                                                </li>
                                                <li>
                                                    <a href="/category&path=53">Festive Sarees</a>
                                                </li>
                                                <li>
                                                    <a href="/category&path=44">Slipcover</a>
                                                </li>
                                                <li>
                                                    <a href="/category&path=37">Western Wear</a>
                                                </li>
                                                <li>
                                                    <a href="/category&path=42">Zink</a>
                                                </li>
                                                <li>
                                                    <a href="/category&path=31">Bags</a>
                                                </li>
                                                <li>
                                                    <a href="/category&path=30">Bay 2 Get 1 FREE</a>
                                                </li>
                                                <li>
                                                    <a href="catalog.html">Men</a>
                                                    <ul>
                                                        {/* 2 Level Sub Categories START */}
                                                        <li className="dropdown">
                                                            <a href="/category&path=20_59">Pocket Squares (5)</a>
                                                            <img
                                                                src="/images/category-baner-225x155.jpg"
                                                                alt="Pocket Squares (5)"
                                                            />
                                                            <ul className="col14">
                                                                <li>
                                                                    <a href="/category&path=20_59_61">
                                                                        Bags &amp; Backpacks (1)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/category&path=20_59_60">Caps (2)</a>
                                                                </li>
                                                                <li>
                                                                    <a href="/category&path=20_59_62">Socks (2)</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        {/* 2 Level Sub Categories END */}
                                                    </ul>
                                                    <ul>
                                                        {/* 2 Level Sub Categories START */}
                                                        <li className="dropdown">
                                                            <a href="/category&path=20_26">Luxe (4)</a>
                                                            <img
                                                                src="/images/category-baner-225x155.jpg"
                                                                alt="Luxe (4)"
                                                            />
                                                            <ul className="col14">
                                                                <li>
                                                                    <a href="/category&path=20_26_65">
                                                                        Convertible (2)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/category&path=20_26_66">Netbook (0)</a>
                                                                </li>
                                                                <li>
                                                                    <a href="/category&path=20_26_63">
                                                                        Peter England (2)
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        {/* 2 Level Sub Categories END */}
                                                    </ul>
                                                    <ul>
                                                        {/* 2 Level Sub Categories START */}
                                                        <li className="dropdown">
                                                            <a href="/category&path=20_27">Topwear (6)</a>
                                                            <img
                                                                src="/images/category-baner-225x155.jpg"
                                                                alt="Topwear (6)"
                                                            />
                                                            <ul className="col14">
                                                                <li>
                                                                    <a href="/category&path=20_27_67">
                                                                        Allen Solly (2)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/category&path=20_27_68">Belts (1)</a>
                                                                </li>
                                                                <li>
                                                                    <a href="/category&path=20_27_64">
                                                                        Louis Philippe (2)
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        {/* 2 Level Sub Categories END */}
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="/category&path=18">Indian Wear</a>
                                                    <ul>
                                                        {/* 2 Level Sub Categories START */}
                                                        <li>
                                                            <a href="/category&path=18_46">Biba (10)</a>
                                                        </li>
                                                        {/* 2 Level Sub Categories END */}
                                                        {/* 2 Level Sub Categories START */}
                                                        <li>
                                                            <a href="/category&path=18_45">
                                                                Choli &amp; Gaun (1)
                                                            </a>
                                                        </li>
                                                        {/* 2 Level Sub Categories END */}
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="/category&path=57">Jaipur Kurti</a>
                                                </li>
                                                <li>
                                                    <a href="/category&path=25">Women</a>
                                                    <ul>
                                                        {/* 2 Level Sub Categories START */}
                                                        <li>
                                                            <a href="/category&path=25_32">Handbags (2)</a>
                                                        </li>
                                                        {/* 2 Level Sub Categories END */}
                                                        {/* 2 Level Sub Categories START */}
                                                        <li>
                                                            <a href="/category&path=25_29">Printers (9)</a>
                                                        </li>
                                                        {/* 2 Level Sub Categories END */}
                                                        {/* 2 Level Sub Categories START */}
                                                        <li className="dropdown">
                                                            <a href="/category&path=25_28">Tota Bags (19)</a>
                                                            <img
                                                                src="/images/category-baner-225x155.jpg"
                                                                alt="Tota Bags (19)"
                                                            />
                                                            <ul className="col14">
                                                                <li>
                                                                    <a href="/category&path=25_28_36">
                                                                        Jumpsuits (3)
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/category&path=25_28_35">
                                                                        T - Shirts (9)
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        {/* 2 Level Sub Categories END */}
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="/category&path=17">Festive Sarees</a>
                                                </li>
                                                <li>
                                                    <a href="/category&path=24">Skirts</a>
                                                </li>
                                                <li>
                                                    <a href="/category&path=33">Shoes</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="static-menu">
                                            <ul id="static-menu">
                                                <li>
                                                    <a href="index.html">Home</a>
                                                </li>
                                                <li className="new menu-item">
                                                    <a href="catalog.html">New collection</a>
                                                </li>
                                                <li className="hot menu-item">
                                                    <a href="catalog.html">Specials</a>
                                                </li>
                                                <li>
                                                    <a href="contact.html">Contact Us</a>
                                                </li>
                                                <li className="toplink">
                                                    <a href="blogs.html">Blogs </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <div className="content_headercms_bottom" />
            <div className="content-top-breadcum">
                <div className="container">
                    <div className="row">
                        <div id="title-content"></div>
                    </div>
                </div>
            </div>
            <div className="content-top" id="content">
                <div className="main-slider">
                    <div id="spinner" />
                    <div className="swiper-viewport">
                        <div
                            id="slideshow0"
                            className="swiper-container"
                            style={{ opacity: 1 }}
                        >
                            <div className="swiper-wrapper">
                                <div className="swiper-slide text-center">
                                    <a href="#">
                                        <img
                                            src="/images/Main-banner-2-1903x637.jpg"
                                            alt="UP to 40% Discount"
                                            className="img-responsive"
                                        />
                                    </a>
                                    <div className="slider-content">
                                        <div className="slider-description">
                                            By Trendy T-Shirts For Men
                                        </div>
                                        <div className="slider-title">UP to 40% Discount</div>
                                        <div className="slider-button">
                                            {" "}
                                            <a href="#">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide text-center">
                                    <a href="#">
                                        <img
                                            src="/images/Main-banner-1-1903x637.jpg"
                                            alt="UP to 60% Discount"
                                            className="img-responsive"
                                        />
                                    </a>
                                    <div className="slider-content">
                                        <div className="slider-description">
                                            By Trendy Clothes For Women
                                        </div>
                                        <div className="slider-title">UP to 60% Discount</div>
                                        <div className="slider-button">
                                            {" "}
                                            <a href="#">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination slideshow0" />
                        <div className="swiper-pager">
                            <div className="swiper-button-next" />
                            <div className="swiper-button-prev" />
                        </div>
                    </div>
                </div>
            </div>
            <div id="content" className="col-sm-12">
                <div className="category_list_cms bottom-to-top hb-animate-element">
                    <div className="container">
                        <div className="row">
                            <div className="category_title_cms">
                                <div className="category_title">Shop By Category</div>
                                <div className="category_desc">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's have lorem available{" "}
                                </div>
                            </div>
                            <div className="category-list-carousel">
                                <div className="category_list1 box">
                                    <div className="list_inner">
                                        <div className="category_img">
                                            <a href="/category&path=69" title="banner1">
                                                <img
                                                    src="/images/Cat-1-pro-447x550.jpg"
                                                    alt="Women Jacket"
                                                    title="Women Jacket"
                                                    className="cat_image1"
                                                />
                                            </a>
                                            <div className="category_list_inner">
                                                <div className="box-heading">
                                                    <a href="/category&path=69">Women Jacket</a>
                                                </div>
                                                <div className="product-item">
                                                    <p className="desc">
                                                        {" "}
                                                        (6)<span> items</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="category_list1 box">
                                    <div className="list_inner">
                                        <div className="category_img">
                                            <a href="/category&path=70" title="banner1">
                                                <img
                                                    src="/images/Cat-2-pro-447x550.jpg"
                                                    alt="Mens T-shirt"
                                                    title="Mens T-shirt"
                                                    className="cat_image1"
                                                />
                                            </a>
                                            <div className="category_list_inner">
                                                <div className="box-heading">
                                                    <a href="/category&path=70">Mens T-shirt</a>
                                                </div>
                                                <div className="product-item">
                                                    <p className="desc">
                                                        {" "}
                                                        (5)<span> items</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="category_list1 box">
                                    <div className="list_inner">
                                        <div className="category_img">
                                            <a href="/category&path=71" title="banner1">
                                                <img
                                                    src="/images/Cat-3-pro-447x550.jpg"
                                                    alt="Kids Fashion"
                                                    title="Kids Fashion"
                                                    className="cat_image1"
                                                />
                                            </a>
                                            <div className="category_list_inner">
                                                <div className="box-heading">
                                                    <a href="/category&path=71">Kids Fashion</a>
                                                </div>
                                                <div className="product-item">
                                                    <p className="desc">
                                                        {" "}
                                                        (5)<span> items</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hometab box">
                    <div className="container">
                        <div className="row">
                            <div className="tab-head">
                                <div className="hometab-heading box-heading">New Arrival Item</div>
                                <div id="tabs" className="htabs">
                                    <ul className="etabs">
                                        <li className="tab">
                                            <a href="#tab-latest">Featured</a>
                                        </li>
                                        <li className="tab"></li>
                                        <li className="tab">
                                            <a href="#tab-special">Hot Sale</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="tab-latest" className="tab-content">
                                <div className="box">
                                    <div className="box-content">
                                        <div className="customNavigation">
                                            <a className="fa prev fa-arrow-left">&nbsp;</a>
                                            <a className="fa next fa-arrow-right">&nbsp;</a>
                                        </div>
                                        <div
                                            className="box-product product-carousel"
                                            id="tablatest-carousel"
                                        >
                                            <div className="slider-item">
                                                <div className="product-block product-thumb transition">
                                                    <div className="product-block-inner">
                                                        <div className="image">
                                                            <a href="/product&product_id=49">
                                                                <img
                                                                    src="/images/8-264x380.jpg"
                                                                    title="tote bags for women"
                                                                    alt="tote bags for women"
                                                                    className="img-responsive reg-image"
                                                                />
                                                                <img
                                                                    className="img-responsive hover-image"
                                                                    src="/images/13-264x380.jpg"
                                                                    title="tote bags for women"
                                                                    alt="tote bags for women"
                                                                />
                                                            </a>
                                                            <div className="product_hover_block">
                                                                <div className="action">
                                                                    <button
                                                                        type="button"
                                                                        className="cart_button"
                                                                        onClick={() => cart.add('49')}
                                                                        title="Add to Cart"
                                                                    >
                                                                        <i
                                                                            className="fa fa-shopping-cart"
                                                                            area-hidden="true"
                                                                        />
                                                                    </button>
                                                                    <div className="quickview-button">
                                                                        <a
                                                                            className="quickbox"
                                                                            title="Add To quickview"
                                                                            href="/quick_view&product_id=49"
                                                                        >
                                                                            <i className="fa fa-eye" />
                                                                        </a>
                                                                    </div>
                                                                    <button
                                                                        className="wishlist"
                                                                        type="button"
                                                                        title="Add to Wish List "
                                                                        onClick={() => cart.add('49')}
                                                                    >
                                                                        <i className="fa fa-heart" />
                                                                    </button>
                                                                    <button
                                                                        className="compare_button"
                                                                        type="button"
                                                                        title="Add to compare "
                                                                        onClick={() => cart.add('49')}
                                                                    >
                                                                        <i className="fa fa-exchange" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-details">
                                                            <div className="caption">
                                                                <div className="rating">
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                </div>
                                                                <h4>
                                                                    <a href="/product&product_id=49 ">
                                                                        tote bags for women{" "}
                                                                    </a>
                                                                </h4>
                                                                <p className="price">
                                                                    $241.99
                                                                    <span className="price-tax">Ex Tax: $199.99</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider-item">
                                                <div className="product-block product-thumb transition">
                                                    <div className="product-block-inner">
                                                        <div className="image">
                                                            <a href="/product&product_id=48">
                                                                <img
                                                                    src="/images/11-264x380.jpg"
                                                                    title="Men's lace up Shoes"
                                                                    alt="Men's lace up Shoes"
                                                                    className="img-responsive reg-image"
                                                                />
                                                                <img
                                                                    className="img-responsive hover-image"
                                                                    src="/images/17-264x380.jpg"
                                                                    title="Men's lace up Shoes"
                                                                    alt="Men's lace up Shoes"
                                                                />
                                                            </a>
                                                            <div className="product_hover_block">
                                                                <div className="action">
                                                                    <button
                                                                        type="button"
                                                                        className="cart_button"
                                                                        onClick={() => cart.add('49')}
                                                                        title="Add to Cart"
                                                                    >
                                                                        <i
                                                                            className="fa fa-shopping-cart"
                                                                            area-hidden="true"
                                                                        />
                                                                    </button>
                                                                    <div className="quickview-button">
                                                                        <a
                                                                            className="quickbox"
                                                                            title="Add To quickview"
                                                                            href="/quick_view&product_id=48"
                                                                        >
                                                                            <i className="fa fa-eye" />
                                                                        </a>
                                                                    </div>
                                                                    <button
                                                                        className="wishlist"
                                                                        type="button"
                                                                        title="Add to Wish List "
                                                                        onClick={() => cart.add('49')}
                                                                    >
                                                                        <i className="fa fa-heart" />
                                                                    </button>
                                                                    <button
                                                                        className="compare_button"
                                                                        type="button"
                                                                        title="Add to compare "
                                                                        onClick={() => cart.add('49')}
                                                                    >
                                                                        <i className="fa fa-exchange" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-details">
                                                            <div className="caption">
                                                                <div className="rating">
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                </div>
                                                                <h4>
                                                                    <a href="/product&product_id=48 ">
                                                                        Men's lace up Shoes{" "}
                                                                    </a>
                                                                </h4>
                                                                <p className="price">
                                                                    $122.00
                                                                    <span className="price-tax">Ex Tax: $100.00</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider-item">
                                                <div className="product-block product-thumb transition">
                                                    <div className="product-block-inner">
                                                        <div className="image">
                                                            <a href="/product&product_id=47">
                                                                <img
                                                                    src="/images/4-264x380.jpg"
                                                                    title="round toe Shoes"
                                                                    alt="round toe Shoes"
                                                                    className="img-responsive reg-image"
                                                                />
                                                                <img
                                                                    className="img-responsive hover-image"
                                                                    src="/images/6-264x380.jpg"
                                                                    title="round toe Shoes"
                                                                    alt="round toe Shoes"
                                                                />
                                                            </a>
                                                            <div className="product_hover_block">
                                                                <div className="action">
                                                                    <button
                                                                        type="button"
                                                                        className="cart_button"
                                                                        onClick={() => cart.add('49')}
                                                                        title="Add to Cart"
                                                                    >
                                                                        <i
                                                                            className="fa fa-shopping-cart"
                                                                            area-hidden="true"
                                                                        />
                                                                    </button>
                                                                    <div className="quickview-button">
                                                                        <a
                                                                            className="quickbox"
                                                                            title="Add To quickview"
                                                                            href="/quick_view&product_id=47"
                                                                        >
                                                                            <i className="fa fa-eye" />
                                                                        </a>
                                                                    </div>
                                                                    <button
                                                                        className="wishlist"
                                                                        type="button"
                                                                        title="Add to Wish List "
                                                                        onClick={() => cart.add('49')}
                                                                    >
                                                                        <i className="fa fa-heart" />
                                                                    </button>
                                                                    <button
                                                                        className="compare_button"
                                                                        type="button"
                                                                        title="Add to compare "
                                                                        onClick={() => cart.add('49')}
                                                                    >
                                                                        <i className="fa fa-exchange" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-details">
                                                            <div className="caption">
                                                                <div className="rating">
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                </div>
                                                                <h4>
                                                                    <a href="/product&product_id=47 ">
                                                                        round toe Shoes{" "}
                                                                    </a>
                                                                </h4>
                                                                <p className="price">
                                                                    $122.00
                                                                    <span className="price-tax">Ex Tax: $100.00</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider-item">
                                                <div className="product-block product-thumb transition">
                                                    <div className="product-block-inner">
                                                        <div className="image">
                                                            <a href="/product&product_id=46">
                                                                <img
                                                                    src="/images/14-264x380.jpg"
                                                                    title="Solid Men & Women Muffler"
                                                                    alt="Solid Men & Women Muffler"
                                                                    className="img-responsive reg-image"
                                                                />
                                                                <img
                                                                    className="img-responsive hover-image"
                                                                    src="/images/2-264x380.jpg"
                                                                    title="Solid Men & Women Muffler"
                                                                    alt="Solid Men & Women Muffler"
                                                                />
                                                            </a>
                                                            <div className="product_hover_block">
                                                                <div className="action">
                                                                    <button
                                                                        type="button"
                                                                        className="cart_button"
                                                                        onClick={() => cart.add('49')}
                                                                        title="Add to Cart"
                                                                    >
                                                                        <i
                                                                            className="fa fa-shopping-cart"
                                                                            area-hidden="true"
                                                                        />
                                                                    </button>
                                                                    <div className="quickview-button">
                                                                        <a
                                                                            className="quickbox"
                                                                            title="Add To quickview"
                                                                            href="/quick_view&product_id=46"
                                                                        >
                                                                            <i className="fa fa-eye" />
                                                                        </a>
                                                                    </div>
                                                                    <button
                                                                        className="wishlist"
                                                                        type="button"
                                                                        title="Add to Wish List "
                                                                        onClick={() => cart.add('49')}
                                                                    >
                                                                        <i className="fa fa-heart" />
                                                                    </button>
                                                                    <button
                                                                        className="compare_button"
                                                                        type="button"
                                                                        title="Add to compare "
                                                                        onClick={() => cart.add('49')}
                                                                    >
                                                                        <i className="fa fa-exchange" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-details">
                                                            <div className="caption">
                                                                <div className="rating">
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                </div>
                                                                <h4>
                                                                    <a href="/product&product_id=46 ">
                                                                        Solid Men &amp; Women Muffler{" "}
                                                                    </a>
                                                                </h4>
                                                                <p className="price">
                                                                    $1,202.00
                                                                    <span className="price-tax">
                                                                        Ex Tax: $1,000.00
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider-item">
                                                <div className="product-block product-thumb transition">
                                                    <div className="product-block-inner">
                                                        <div className="image">
                                                            <a href="/product&product_id=45">
                                                                <img
                                                                    src="/images/9-264x380.jpg"
                                                                    title="tid watches nato"
                                                                    alt="tid watches nato"
                                                                    className="img-responsive reg-image"
                                                                />
                                                                <img
                                                                    className="img-responsive hover-image"
                                                                    src="/images/14-264x380.jpg"
                                                                    title="tid watches nato"
                                                                    alt="tid watches nato"
                                                                />
                                                            </a>
                                                            <div className="product_hover_block">
                                                                <div className="action">
                                                                    <button
                                                                        type="button"
                                                                        className="cart_button"
                                                                        onClick={() => cart.add('49')}
                                                                        title="Add to Cart"
                                                                    >
                                                                        <i
                                                                            className="fa fa-shopping-cart"
                                                                            area-hidden="true"
                                                                        />
                                                                    </button>
                                                                    <div className="quickview-button">
                                                                        <a
                                                                            className="quickbox"
                                                                            title="Add To quickview"
                                                                            href="/quick_view&product_id=45"
                                                                        >
                                                                            <i className="fa fa-eye" />
                                                                        </a>
                                                                    </div>
                                                                    <button
                                                                        className="wishlist"
                                                                        type="button"
                                                                        title="Add to Wish List "
                                                                        onClick={() => cart.add('49')}
                                                                    >
                                                                        <i className="fa fa-heart" />
                                                                    </button>
                                                                    <button
                                                                        className="compare_button"
                                                                        type="button"
                                                                        title="Add to compare "
                                                                        onClick={() => cart.add('49')}
                                                                    >
                                                                        <i className="fa fa-exchange" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-details">
                                                            <div className="caption">
                                                                <div className="rating">
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                </div>
                                                                <h4>
                                                                    <a href="/product&product_id=45 ">
                                                                        tid watches nato{" "}
                                                                    </a>
                                                                </h4>
                                                                <p className="price">
                                                                    $2,000.00
                                                                    <span className="price-tax">
                                                                        Ex Tax: $2,000.00
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider-item">
                                                <div className="product-block product-thumb transition">
                                                    <div className="product-block-inner">
                                                        <div className="image">
                                                            <a href="/product&product_id=44">
                                                                <img
                                                                    src="/images/20-264x380.jpg"
                                                                    title="Striped Men & Women Muffler"
                                                                    alt="Striped Men & Women Muffler"
                                                                    className="img-responsive reg-image"
                                                                />
                                                                <img
                                                                    className="img-responsive hover-image"
                                                                    src="/images/8-264x380.jpg"
                                                                    title="Striped Men & Women Muffler"
                                                                    alt="Striped Men & Women Muffler"
                                                                />
                                                            </a>
                                                            <div className="product_hover_block">
                                                                <div className="action">
                                                                    <button
                                                                        type="button"
                                                                        className="cart_button"
                                                                        onClick={() => cart.add('49')}
                                                                        title="Add to Cart"
                                                                    >
                                                                        <i
                                                                            className="fa fa-shopping-cart"
                                                                            area-hidden="true"
                                                                        />
                                                                    </button>
                                                                    <div className="quickview-button">
                                                                        <a
                                                                            className="quickbox"
                                                                            title="Add To quickview"
                                                                            href="/quick_view&product_id=44"
                                                                        >
                                                                            <i className="fa fa-eye" />
                                                                        </a>
                                                                    </div>
                                                                    <button
                                                                        className="wishlist"
                                                                        type="button"
                                                                        title="Add to Wish List "
                                                                        onClick={() => cart.add('49')}
                                                                    >
                                                                        <i className="fa fa-heart" />
                                                                    </button>
                                                                    <button
                                                                        className="compare_button"
                                                                        type="button"
                                                                        title="Add to compare "
                                                                        onClick={() => cart.add('49')}
                                                                    >
                                                                        <i className="fa fa-exchange" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-details">
                                                            <div className="caption">
                                                                <div className="rating">
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                </div>
                                                                <h4>
                                                                    <a href="/product&product_id=44 ">
                                                                        Striped Men &amp; Women Muffler{" "}
                                                                    </a>
                                                                </h4>
                                                                <p className="price">
                                                                    $1,202.00
                                                                    <span className="price-tax">
                                                                        Ex Tax: $1,000.00
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider-item">
                                                <div className="product-block product-thumb transition">
                                                    <div className="product-block-inner">
                                                        <div className="image">
                                                            <a href="/product&product_id=43">
                                                                <img
                                                                    src="/images/13-264x380.jpg"
                                                                    title="Layered Crop Top"
                                                                    alt="Layered Crop Top"
                                                                    className="img-responsive reg-image"
                                                                />
                                                                <img
                                                                    className="img-responsive hover-image"
                                                                    src="/images/19-264x380.jpg"
                                                                    title="Layered Crop Top"
                                                                    alt="Layered Crop Top"
                                                                />
                                                            </a>
                                                            <div className="product_hover_block">
                                                                <div className="action">
                                                                    <button
                                                                        type="button"
                                                                        className="cart_button"
                                                                        onClick={() => cart.add('49')}
                                                                        title="Add to Cart"
                                                                    >
                                                                        <i
                                                                            className="fa fa-shopping-cart"
                                                                            area-hidden="true"
                                                                        />
                                                                    </button>
                                                                    <div className="quickview-button">
                                                                        <a
                                                                            className="quickbox"
                                                                            title="Add To quickview"
                                                                            href="/quick_view&product_id=43"
                                                                        >
                                                                            <i className="fa fa-eye" />
                                                                        </a>
                                                                    </div>
                                                                    <button
                                                                        className="wishlist"
                                                                        type="button"
                                                                        title="Add to Wish List "
                                                                        onClick={() => cart.add('49')}
                                                                    >
                                                                        <i className="fa fa-heart" />
                                                                    </button>
                                                                    <button
                                                                        className="compare_button"
                                                                        type="button"
                                                                        title="Add to compare "
                                                                        onClick={() => cart.add('49')}
                                                                    >
                                                                        <i className="fa fa-exchange" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-details">
                                                            <div className="caption">
                                                                <div className="rating">
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                </div>
                                                                <h4>
                                                                    <a href="/product&product_id=43 ">
                                                                        Layered Crop Top{" "}
                                                                    </a>
                                                                </h4>
                                                                <p className="price">
                                                                    $602.00
                                                                    <span className="price-tax">Ex Tax: $500.00</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider-item">
                                                <div className="product-block product-thumb transition">
                                                    <div className="product-block-inner">
                                                        <div className="image">
                                                            <a href="/product&product_id=42">
                                                                <img
                                                                    src="/images/1-264x380.jpg"
                                                                    title="Hoodie for men"
                                                                    alt="Hoodie for men"
                                                                    className="img-responsive reg-image"
                                                                />
                                                                <img
                                                                    className="img-responsive hover-image"
                                                                    src="/images/14-264x380.jpg"
                                                                    title="Hoodie for men"
                                                                    alt="Hoodie for men"
                                                                />
                                                            </a>
                                                            <span className="saleicon sale">Sale</span>
                                                            <div className="product_hover_block">
                                                                <div className="action">
                                                                    <button
                                                                        type="button"
                                                                        className="cart_button"
                                                                        onClick={() => cart.add('49')}
                                                                        title="Add to Cart"
                                                                    >
                                                                        <i
                                                                            className="fa fa-shopping-cart"
                                                                            area-hidden="true"
                                                                        />
                                                                    </button>
                                                                    <div className="quickview-button">
                                                                        <a
                                                                            className="quickbox"
                                                                            title="Add To quickview"
                                                                            href="/quick_view&product_id=42"
                                                                        >
                                                                            <i className="fa fa-eye" />
                                                                        </a>
                                                                    </div>
                                                                    <button
                                                                        className="wishlist"
                                                                        type="button"
                                                                        title="Add to Wish List "
                                                                        onClick={() => cart.add('49')}
                                                                    >
                                                                        <i className="fa fa-heart" />
                                                                    </button>
                                                                    <button
                                                                        className="compare_button"
                                                                        type="button"
                                                                        title="Add to compare "
                                                                        onClick={() => cart.add('49')}
                                                                    >
                                                                        <i className="fa fa-exchange" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-details">
                                                            <div className="caption">
                                                                <div className="rating">
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                </div>
                                                                <h4>
                                                                    <a href="/product&product_id=42 ">
                                                                        Hoodie for men{" "}
                                                                    </a>
                                                                </h4>
                                                                <p className="price">
                                                                    <span className="price-new">$110.00</span>{" "}
                                                                    <span className="price-old">$122.00</span>
                                                                    <span className="price-tax">Ex Tax: $90.00</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span
                                    className="tablatest_default_width"
                                    style={{ display: "none", visibility: "hidden" }}
                                />
                            </div>
                            <div id="tab-special" className="tab-content">
                                <div className="box">
                                    <div className="box-content">
                                        <div
                                            className="box-product  productbox-grid"
                                            id="tabspecial-grid"
                                        >
                                            <div className="product-items">
                                                <div className="product-block product-thumb transition">
                                                    <div className="product-block-inner">
                                                        <div className="image">
                                                            <a href="/product&product_id=42">
                                                                <img
                                                                    src="/images/1-264x380.jpg"
                                                                    title="Hoodie for men"
                                                                    alt="Hoodie for men"
                                                                    className="img-responsive reg-image"
                                                                />
                                                                <img
                                                                    className="img-responsive hover-image"
                                                                    src="/images/14-264x380.jpg"
                                                                    title="Hoodie for men"
                                                                    alt="Hoodie for men"
                                                                />
                                                            </a>
                                                            <span className="saleicon sale">Sale</span>
                                                            <div className="product_hover_block">
                                                                <div className="action">
                                                                    <button
                                                                        type="button"
                                                                        className="cart_button"
                                                                        onClick={() => cart.add('49')}
                                                                        title="Add to Cart"
                                                                    >
                                                                        <i
                                                                            className="fa fa-shopping-cart"
                                                                            area-hidden="true"
                                                                        />
                                                                    </button>
                                                                    <div className="quickview-button">
                                                                        <a
                                                                            className="quickbox"
                                                                            title="Add To quickview"
                                                                            href="/quick_view&product_id=42"
                                                                        >
                                                                            <i className="fa fa-eye" />
                                                                        </a>
                                                                    </div>
                                                                    <button
                                                                        className="wishlist"
                                                                        type="button"
                                                                        title="Add to Wish List "
                                                                        onClick={() => cart.add('49')}
                                                                    >
                                                                        <i className="fa fa-heart" />
                                                                    </button>
                                                                    <button
                                                                        className="compare_button"
                                                                        type="button"
                                                                        title="Add to compare "
                                                                        onClick={() => cart.add('49')}
                                                                    >
                                                                        <i className="fa fa-exchange" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-details">
                                                            <div className="caption">
                                                                <div className="rating">
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                </div>
                                                                <h4>
                                                                    <a href="/product&product_id=42 ">
                                                                        Hoodie for men{" "}
                                                                    </a>
                                                                </h4>
                                                                <p className="price">
                                                                    <span className="price-new">$110.00</span>{" "}
                                                                    <span className="price-old">$122.00</span>
                                                                    <span className="price-tax">Ex Tax: $90.00</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-items">
                                                <div className="product-block product-thumb transition">
                                                    <div className="product-block-inner">
                                                        <div className="image">
                                                            <a href="/product&product_id=30">
                                                                <img
                                                                    src="/images/16-264x380.jpg"
                                                                    title="long sleeve Shirts"
                                                                    alt="long sleeve Shirts"
                                                                    className="img-responsive reg-image"
                                                                />
                                                                <img
                                                                    className="img-responsive hover-image"
                                                                    src="/images/3-264x380.jpg"
                                                                    title="long sleeve Shirts"
                                                                    alt="long sleeve Shirts"
                                                                />
                                                            </a>
                                                            <span className="saleicon sale">Sale</span>
                                                            <div className="product_hover_block">
                                                                <div className="action">
                                                                    <button
                                                                        type="button"
                                                                        className="cart_button"
                                                                        onClick={() => cart.add('49')}
                                                                        title="Add to Cart"
                                                                    >
                                                                        <i
                                                                            className="fa fa-shopping-cart"
                                                                            area-hidden="true"
                                                                        />
                                                                    </button>
                                                                    <div className="quickview-button">
                                                                        <a
                                                                            className="quickbox"
                                                                            title="Add To quickview"
                                                                            href="/quick_view&product_id=30"
                                                                        >
                                                                            <i className="fa fa-eye" />
                                                                        </a>
                                                                    </div>
                                                                    <button
                                                                        className="wishlist"
                                                                        type="button"
                                                                        title="Add to Wish List "
                                                                        onClick={() => cart.add('49')}
                                                                    >
                                                                        <i className="fa fa-heart" />
                                                                    </button>
                                                                    <button
                                                                        className="compare_button"
                                                                        type="button"
                                                                        title="Add to compare "
                                                                        onClick={() => cart.add('49')}
                                                                    >
                                                                        <i className="fa fa-exchange" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-details">
                                                            <div className="caption">
                                                                <div className="rating">
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                </div>
                                                                <h4>
                                                                    <a href="/product&product_id=30 ">
                                                                        long sleeve Shirts{" "}
                                                                    </a>
                                                                </h4>
                                                                <p className="price">
                                                                    <span className="price-new">$98.00</span>{" "}
                                                                    <span className="price-old">$122.00</span>
                                                                    <span className="price-tax">Ex Tax: $80.00</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span
                                    className="tabspecial_default_width"
                                    style={{ display: "none", visibility: "hidden" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="parallaxcmsblock" className="block parallax">
                    <div id="wdcmstestimonial">
                        <div className="wdtestimonial-main">
                            <div className="wdtestimonial-content">
                                <div className="wdtestimonial-inner">
                                    <ul id="wdtestimonial-carousel" className="wd-carousel">
                                        <li>
                                            <div className="testimonial-image">
                                                <img
                                                    alt=""
                                                    src="/images/user1.jpg"
                                                    width={86}
                                                    height={86}
                                                />
                                            </div>
                                            <div className="testimonial-content">
                                                <div className="testimonial-desc">
                                                    <p>
                                                        "Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry. Lorem Ipsum has been the
                                                        industry's standard dummy text ever since the 1500s,
                                                        when an unknown printer took a galley type specimen
                                                        book."
                                                    </p>
                                                </div>
                                                <div className="quote_img" />
                                                <div className="testimonial-user-title">
                                                    <h4>Nick Burkard</h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="testimonial-image">
                                                <img
                                                    alt=""
                                                    src="/images/user2.jpg"
                                                    width={86}
                                                    height={86}
                                                />
                                            </div>
                                            <div className="testimonial-content">
                                                <div className="testimonial-desc">
                                                    <p>
                                                        "Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry. Lorem Ipsum has been the
                                                        industry's standard dummy text ever since the 1500s,
                                                        when an unknown printer took a galley type specimen
                                                        book."
                                                    </p>
                                                </div>
                                                <div className="quote_img" />
                                                <div className="testimonial-user-title">
                                                    <h4>Nick Burkard</h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="testimonial-image">
                                                <img
                                                    alt=""
                                                    src="/images/user3.jpg"
                                                    width={86}
                                                    height={86}
                                                />
                                            </div>
                                            <div className="testimonial-content">
                                                <div className="testimonial-desc">
                                                    <p>
                                                        "Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry. Lorem Ipsum has been the
                                                        industry's standard dummy text ever since the 1500s,
                                                        when an unknown printer took a galley type specimen
                                                        book."
                                                    </p>
                                                </div>
                                                <div className="quote_img" />
                                                <div className="testimonial-user-title">
                                                    <h4>Nick Burkard</h4>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box featured">
                    <div className="container">
                        <div className="row">
                            <div className="box-heading">Featured Product</div>
                            <div className="box-content">
                                <div className="customNavigation">
                                    <a className="fa prev fa-arrow-left">&nbsp;</a>
                                    <a className="fa next fa-arrow-right">&nbsp;</a>
                                </div>
                                <div
                                    className="box-product product-carousel"
                                    id="featured-carousel"
                                >
                                    <div className="slider-item">
                                        <div className="product-block product-thumb transition">
                                            <div className="product-block-inner">
                                                <div className="image">
                                                    <a href="/product&product_id=43">
                                                        <img
                                                            src="/images/13-264x380.jpg"
                                                            title="Layered Crop Top"
                                                            alt="Layered Crop Top"
                                                            className="img-responsive reg-image"
                                                        />
                                                        <img
                                                            className="img-responsive hover-image"
                                                            src="/images/19-264x380.jpg"
                                                            title="Layered Crop Top"
                                                            alt="Layered Crop Top"
                                                        />
                                                    </a>
                                                    <div className="product_hover_block">
                                                        <div className="action">
                                                            <button
                                                                type="button"
                                                                className="cart_button"
                                                                onClick={() => cart.add('49')}
                                                                title="Add to Cart"
                                                            >
                                                                <i
                                                                    className="fa fa-shopping-cart"
                                                                    area-hidden="true"
                                                                />{" "}
                                                            </button>
                                                            <div className="quickview-button">
                                                                <a
                                                                    className="quickbox"
                                                                    title="Add To quickview"
                                                                    href="/quick_view&product_id=43"
                                                                >
                                                                    <i className="fa fa-eye" />
                                                                </a>
                                                            </div>
                                                            <button
                                                                className="wishlist"
                                                                type="button"
                                                                title="Add to Wish List "
                                                                onClick={() => cart.add('49')}
                                                            >
                                                                <i className="fa fa-heart" />
                                                            </button>
                                                            <button
                                                                className="compare_button"
                                                                type="button"
                                                                title="Add to compare "
                                                                onClick={() => cart.add('49')}
                                                            >
                                                                <i className="fa fa-exchange" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-details">
                                                    <div className="caption">
                                                        <div className="rating">
                                                            <span className="fa fa-stack">
                                                                <i className="fa fa-star fa-stack-2x" />
                                                                <i className="fa fa-star-o fa-stack-2x" />
                                                            </span>
                                                            <span className="fa fa-stack">
                                                                <i className="fa fa-star fa-stack-2x" />
                                                                <i className="fa fa-star-o fa-stack-2x" />
                                                            </span>
                                                            <span className="fa fa-stack">
                                                                <i className="fa fa-star fa-stack-2x" />
                                                                <i className="fa fa-star-o fa-stack-2x" />
                                                            </span>
                                                            <span className="fa fa-stack">
                                                                <i className="fa fa-star fa-stack-2x" />
                                                                <i className="fa fa-star-o fa-stack-2x" />
                                                            </span>
                                                            <span className="fa fa-stack">
                                                                <i className="fa fa-star fa-stack-2x" />
                                                                <i className="fa fa-star-o fa-stack-2x" />
                                                            </span>
                                                        </div>
                                                        <h4>
                                                            <a href="/product&product_id=43 ">
                                                                Layered Crop Top{" "}
                                                            </a>
                                                        </h4>
                                                        <p className="price">
                                                            $602.00
                                                            <span className="price-tax">Ex Tax: $500.00</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slider-item">
                                        <div className="product-block product-thumb transition">
                                            <div className="product-block-inner">
                                                <div className="image">
                                                    <a href="/product&product_id=40">
                                                        <img
                                                            src="/images/5-264x380.jpg"
                                                            title="Solid A-Line Top"
                                                            alt="Solid A-Line Top"
                                                            className="img-responsive reg-image"
                                                        />
                                                        <img
                                                            className="img-responsive hover-image"
                                                            src="/images/10-264x380.jpg"
                                                            title="Solid A-Line Top"
                                                            alt="Solid A-Line Top"
                                                        />
                                                    </a>
                                                    <div className="product_hover_block">
                                                        <div className="action">
                                                            <button
                                                                type="button"
                                                                className="cart_button"
                                                                onClick={() => cart.add('49')}
                                                                title="Add to Cart"
                                                            >
                                                                <i
                                                                    className="fa fa-shopping-cart"
                                                                    area-hidden="true"
                                                                />{" "}
                                                            </button>
                                                            <div className="quickview-button">
                                                                <a
                                                                    className="quickbox"
                                                                    title="Add To quickview"
                                                                    href="/quick_view&product_id=40"
                                                                >
                                                                    <i className="fa fa-eye" />
                                                                </a>
                                                            </div>
                                                            <button
                                                                className="wishlist"
                                                                type="button"
                                                                title="Add to Wish List "
                                                                onClick={() => cart.add('49')}
                                                            >
                                                                <i className="fa fa-heart" />
                                                            </button>
                                                            <button
                                                                className="compare_button"
                                                                type="button"
                                                                title="Add to compare "
                                                                onClick={() => cart.add('49')}
                                                            >
                                                                <i className="fa fa-exchange" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-details">
                                                    <div className="caption">
                                                        <div className="rating">
                                                            <span className="fa fa-stack">
                                                                <i className="fa fa-star fa-stack-2x" />
                                                                <i className="fa fa-star-o fa-stack-2x" />
                                                            </span>
                                                            <span className="fa fa-stack">
                                                                <i className="fa fa-star fa-stack-2x" />
                                                                <i className="fa fa-star-o fa-stack-2x" />
                                                            </span>
                                                            <span className="fa fa-stack">
                                                                <i className="fa fa-star fa-stack-2x" />
                                                                <i className="fa fa-star-o fa-stack-2x" />
                                                            </span>
                                                            <span className="fa fa-stack">
                                                                <i className="fa fa-star-o fa-stack-2x" />
                                                            </span>
                                                            <span className="fa fa-stack">
                                                                <i className="fa fa-star-o fa-stack-2x" />
                                                            </span>
                                                        </div>
                                                        <h4>
                                                            <a href="/product&product_id=40 ">
                                                                Solid A-Line Top{" "}
                                                            </a>
                                                        </h4>
                                                        <p className="price">
                                                            $123.20
                                                            <span className="price-tax">Ex Tax: $101.00</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slider-item">
                                        <div className="product-block product-thumb transition">
                                            <div className="product-block-inner">
                                                <div className="image">
                                                    <a href="/product&product_id=42">
                                                        <img
                                                            src="/images/1-264x380.jpg"
                                                            title="Hoodie for men"
                                                            alt="Hoodie for men"
                                                            className="img-responsive reg-image"
                                                        />
                                                        <img
                                                            className="img-responsive hover-image"
                                                            src="/images/14-264x380.jpg"
                                                            title="Hoodie for men"
                                                            alt="Hoodie for men"
                                                        />
                                                    </a>
                                                    <div className="saleicon sale">10%</div>
                                                    <div className="product_hover_block">
                                                        <div className="action">
                                                            <button
                                                                type="button"
                                                                className="cart_button"
                                                                onClick={() => cart.add('49')}
                                                                title="Add to Cart"
                                                            >
                                                                <i
                                                                    className="fa fa-shopping-cart"
                                                                    area-hidden="true"
                                                                />{" "}
                                                            </button>
                                                            <div className="quickview-button">
                                                                <a
                                                                    className="quickbox"
                                                                    title="Add To quickview"
                                                                    href="/quick_view&product_id=42"
                                                                >
                                                                    <i className="fa fa-eye" />
                                                                </a>
                                                            </div>
                                                            <button
                                                                className="wishlist"
                                                                type="button"
                                                                title="Add to Wish List "
                                                                onClick={() => cart.add('49')}
                                                            >
                                                                <i className="fa fa-heart" />
                                                            </button>
                                                            <button
                                                                className="compare_button"
                                                                type="button"
                                                                title="Add to compare "
                                                                onClick={() => cart.add('49')}
                                                            >
                                                                <i className="fa fa-exchange" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-details">
                                                    <div className="caption">
                                                        <div className="rating">
                                                            <span className="fa fa-stack">
                                                                <i className="fa fa-star fa-stack-2x" />
                                                                <i className="fa fa-star-o fa-stack-2x" />
                                                            </span>
                                                            <span className="fa fa-stack">
                                                                <i className="fa fa-star fa-stack-2x" />
                                                                <i className="fa fa-star-o fa-stack-2x" />
                                                            </span>
                                                            <span className="fa fa-stack">
                                                                <i className="fa fa-star fa-stack-2x" />
                                                                <i className="fa fa-star-o fa-stack-2x" />
                                                            </span>
                                                            <span className="fa fa-stack">
                                                                <i className="fa fa-star fa-stack-2x" />
                                                                <i className="fa fa-star-o fa-stack-2x" />
                                                            </span>
                                                            <span className="fa fa-stack">
                                                                <i className="fa fa-star-o fa-stack-2x" />
                                                            </span>
                                                        </div>
                                                        <h4>
                                                            <a href="/product&product_id=42 ">Hoodie for men </a>
                                                        </h4>
                                                        <p className="price">
                                                            <span className="price-new">$110.00</span>{" "}
                                                            <span className="price-old">$122.00</span>
                                                            <span className="price-tax">Ex Tax: $90.00</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slider-item">
                                        <div className="product-block product-thumb transition">
                                            <div className="product-block-inner">
                                                <div className="image">
                                                    <a href="/product&product_id=30">
                                                        <img
                                                            src="/images/16-264x380.jpg"
                                                            title="long sleeve Shirts"
                                                            alt="long sleeve Shirts"
                                                            className="img-responsive reg-image"
                                                        />
                                                        <img
                                                            className="img-responsive hover-image"
                                                            src="/images/3-264x380.jpg"
                                                            title="long sleeve Shirts"
                                                            alt="long sleeve Shirts"
                                                        />
                                                    </a>
                                                    <div className="saleicon sale">20%</div>
                                                    <div className="product_hover_block">
                                                        <div className="action">
                                                            <button
                                                                type="button"
                                                                className="cart_button"
                                                                onClick={() => cart.add('49')}
                                                                title="Add to Cart"
                                                            >
                                                                <i
                                                                    className="fa fa-shopping-cart"
                                                                    area-hidden="true"
                                                                />{" "}
                                                            </button>
                                                            <div className="quickview-button">
                                                                <a
                                                                    className="quickbox"
                                                                    title="Add To quickview"
                                                                    href="/quick_view&product_id=30"
                                                                >
                                                                    <i className="fa fa-eye" />
                                                                </a>
                                                            </div>
                                                            <button
                                                                className="wishlist"
                                                                type="button"
                                                                title="Add to Wish List "
                                                                onClick={() => cart.add('49')}
                                                            >
                                                                <i className="fa fa-heart" />
                                                            </button>
                                                            <button
                                                                className="compare_button"
                                                                type="button"
                                                                title="Add to compare "
                                                                onClick={() => cart.add('49')}
                                                            >
                                                                <i className="fa fa-exchange" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-details">
                                                    <div className="caption">
                                                        <div className="rating">
                                                            <span className="fa fa-stack">
                                                                <i className="fa fa-star fa-stack-2x" />
                                                                <i className="fa fa-star-o fa-stack-2x" />
                                                            </span>
                                                            <span className="fa fa-stack">
                                                                <i className="fa fa-star fa-stack-2x" />
                                                                <i className="fa fa-star-o fa-stack-2x" />
                                                            </span>
                                                            <span className="fa fa-stack">
                                                                <i className="fa fa-star fa-stack-2x" />
                                                                <i className="fa fa-star-o fa-stack-2x" />
                                                            </span>
                                                            <span className="fa fa-stack">
                                                                <i className="fa fa-star fa-stack-2x" />
                                                                <i className="fa fa-star-o fa-stack-2x" />
                                                            </span>
                                                            <span className="fa fa-stack">
                                                                <i className="fa fa-star fa-stack-2x" />
                                                                <i className="fa fa-star-o fa-stack-2x" />
                                                            </span>
                                                        </div>
                                                        <h4>
                                                            <a href="/product&product_id=30 ">
                                                                long sleeve Shirts{" "}
                                                            </a>
                                                        </h4>
                                                        <p className="price">
                                                            <span className="price-new">$98.00</span>{" "}
                                                            <span className="price-old">$122.00</span>
                                                            <span className="price-tax">Ex Tax: $80.00</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slider-item">
                                        <div className="product-block product-thumb transition">
                                            <div className="product-block-inner">
                                                <div className="image">
                                                    <a href="/product&product_id=47">
                                                        <img
                                                            src="/images/4-264x380.jpg"
                                                            title="round toe Shoes"
                                                            alt="round toe Shoes"
                                                            className="img-responsive reg-image"
                                                        />
                                                        <img
                                                            className="img-responsive hover-image"
                                                            src="/images/6-264x380.jpg"
                                                            title="round toe Shoes"
                                                            alt="round toe Shoes"
                                                        />
                                                    </a>
                                                    <div className="product_hover_block">
                                                        <div className="action">
                                                            <button
                                                                type="button"
                                                                className="cart_button"
                                                                onClick={() => cart.add('49')}
                                                                title="Add to Cart"
                                                            >
                                                                <i
                                                                    className="fa fa-shopping-cart"
                                                                    area-hidden="true"
                                                                />{" "}
                                                            </button>
                                                            <div className="quickview-button">
                                                                <a
                                                                    className="quickbox"
                                                                    title="Add To quickview"
                                                                    href="/quick_view&product_id=47"
                                                                >
                                                                    <i className="fa fa-eye" />
                                                                </a>
                                                            </div>
                                                            <button
                                                                className="wishlist"
                                                                type="button"
                                                                title="Add to Wish List "
                                                                onClick={() => cart.add('49')}
                                                            >
                                                                <i className="fa fa-heart" />
                                                            </button>
                                                            <button
                                                                className="compare_button"
                                                                type="button"
                                                                title="Add to compare "
                                                                onClick={() => cart.add('49')}
                                                            >
                                                                <i className="fa fa-exchange" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-details">
                                                    <div className="caption">
                                                        <div className="rating">
                                                            <span className="fa fa-stack">
                                                                <i className="fa fa-star fa-stack-2x" />
                                                                <i className="fa fa-star-o fa-stack-2x" />
                                                            </span>
                                                            <span className="fa fa-stack">
                                                                <i className="fa fa-star fa-stack-2x" />
                                                                <i className="fa fa-star-o fa-stack-2x" />
                                                            </span>
                                                            <span className="fa fa-stack">
                                                                <i className="fa fa-star fa-stack-2x" />
                                                                <i className="fa fa-star-o fa-stack-2x" />
                                                            </span>
                                                            <span className="fa fa-stack">
                                                                <i className="fa fa-star fa-stack-2x" />
                                                                <i className="fa fa-star-o fa-stack-2x" />
                                                            </span>
                                                            <span className="fa fa-stack">
                                                                <i className="fa fa-star fa-stack-2x" />
                                                                <i className="fa fa-star-o fa-stack-2x" />
                                                            </span>
                                                        </div>
                                                        <h4>
                                                            <a href="/product&product_id=47 ">round toe Shoes </a>
                                                        </h4>
                                                        <p className="price">
                                                            $122.00
                                                            <span className="price-tax">Ex Tax: $100.00</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slider-item">
                                        <div className="product-block product-thumb transition">
                                            <div className="product-block-inner">
                                                <div className="image">
                                                    <a href="/product&product_id=45">
                                                        <img
                                                            src="/images/9-264x380.jpg"
                                                            title="tid watches nato"
                                                            alt="tid watches nato"
                                                            className="img-responsive reg-image"
                                                        />
                                                        <img
                                                            className="img-responsive hover-image"
                                                            src="/images/14-264x380.jpg"
                                                            title="tid watches nato"
                                                            alt="tid watches nato"
                                                        />
                                                    </a>
                                                    <div className="product_hover_block">
                                                        <div className="action">
                                                            <button
                                                                type="button"
                                                                className="cart_button"
                                                                onClick={() => cart.add('49')}
                                                                title="Add to Cart"
                                                            >
                                                                <i
                                                                    className="fa fa-shopping-cart"
                                                                    area-hidden="true"
                                                                />{" "}
                                                            </button>
                                                            <div className="quickview-button">
                                                                <a
                                                                    className="quickbox"
                                                                    title="Add To quickview"
                                                                    href="/quick_view&product_id=45"
                                                                >
                                                                    <i className="fa fa-eye" />
                                                                </a>
                                                            </div>
                                                            <button
                                                                className="wishlist"
                                                                type="button"
                                                                title="Add to Wish List "
                                                                onClick={() => cart.add('49')}
                                                            >
                                                                <i className="fa fa-heart" />
                                                            </button>
                                                            <button
                                                                className="compare_button"
                                                                type="button"
                                                                title="Add to compare "
                                                                onClick={() => cart.add('49')}
                                                            >
                                                                <i className="fa fa-exchange" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-details">
                                                    <div className="caption">
                                                        <div className="rating">
                                                            <span className="fa fa-stack">
                                                                <i className="fa fa-star fa-stack-2x" />
                                                                <i className="fa fa-star-o fa-stack-2x" />
                                                            </span>
                                                            <span className="fa fa-stack">
                                                                <i className="fa fa-star fa-stack-2x" />
                                                                <i className="fa fa-star-o fa-stack-2x" />
                                                            </span>
                                                            <span className="fa fa-stack">
                                                                <i className="fa fa-star fa-stack-2x" />
                                                                <i className="fa fa-star-o fa-stack-2x" />
                                                            </span>
                                                            <span className="fa fa-stack">
                                                                <i className="fa fa-star fa-stack-2x" />
                                                                <i className="fa fa-star-o fa-stack-2x" />
                                                            </span>
                                                            <span className="fa fa-stack">
                                                                <i className="fa fa-star fa-stack-2x" />
                                                                <i className="fa fa-star-o fa-stack-2x" />
                                                            </span>
                                                        </div>
                                                        <h4>
                                                            <a href="/product&product_id=45 ">
                                                                tid watches nato{" "}
                                                            </a>
                                                        </h4>
                                                        <p className="price">
                                                            $2,000.00
                                                            <span className="price-tax">Ex Tax: $2,000.00</span>
                                                        </p>
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
                <span
                    className="featured_default_width"
                    style={{ display: "none", visibility: "hidden" }}
                />
                <div className="subbanner-cms">
                    <div className="container">
                        <div className="row">
                            <div className="subbanner-inner-block1">
                                <div className="subbanner1_img">
                                    <a href="#" title="banner1">
                                        <img
                                            className="subbanner_image1"
                                            src="/images/Subbanner1.jpg"
                                            alt=""
                                        />
                                    </a>
                                    <div className="description">
                                        <div className="title">Flat 45% Off</div>
                                        <div className="subtitle">
                                            Shop Designer<span> Hand Bags</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="subbanner-inner-block2">
                                <div className="subbanner2_img">
                                    <a href="#" title="banner2">
                                        <img
                                            className="subbanner2_image2"
                                            src="/images/Subbanner2.jpg"
                                            alt=""
                                        />
                                    </a>
                                    <div className="description">
                                        <div className="title">Flat 45% Off</div>
                                        <div className="subtitle">
                                            Brand Casual<span> Men Shoes</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box webdigifyblog">
                    <div className="container">
                        <div className="row">
                            <div className="box-heading">From The Blog</div>
                            <div className="box-content">
                                <div className="box-product blogcarousel" id="blog-carousel">
                                    <div className="blog-item">
                                        <div className="product-block">
                                            <div className="blog-left">
                                                <div className="blog-image">
                                                    <img
                                                        src="/images/blog5-1098x737.jpg"
                                                        alt="From The Blog"
                                                        title="From The Blog"
                                                        className="img-thumbnail"
                                                    />
                                                    <div className="post-image-hover"> </div>
                                                    <p className="post_hover">
                                                        <a
                                                            className="icon zoom"
                                                            title="Click to view Full Image "
                                                            href="/images/blog5-1098x737.jpg"
                                                            data-lightbox="example-set"
                                                        >
                                                            <i className="fa fa-search-plus" />{" "}
                                                        </a>
                                                        <a
                                                            className="icon readmore_link"
                                                            title="Click to view Read More "
                                                            href="/blogger&blogger_id=5"
                                                        >
                                                            <i className="fa fa-link" />
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="blog-right">
                                                <div className="date-time">
                                                    {" "}
                                                    <i className="fa fa-calendar" /> 11 Sep 2021
                                                </div>
                                                <h4>
                                                    <a href="/blogger&blogger_id=5">
                                                        Libero lorem vehicula qunato verbl
                                                    </a>{" "}
                                                </h4>
                                                <div className="blog-desc">
                                                    {" "}
                                                    Libero lorem vehicula qunato verbl Libero lorem vehicula
                                                    qunato verbl Libero lor...{" "}
                                                </div>
                                                <div className="view-blog">
                                                    <div className="write-comment">
                                                        {" "}
                                                        <a href="/blogger&blogger_id=5">0 Comments</a>{" "}
                                                    </div>
                                                    <div className="read-more">
                                                        {" "}
                                                        <a href="/blogger&blogger_id=5">
                                                            <i className="fa fa-link" /> read more
                                                        </a>{" "}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-item">
                                        <div className="product-block">
                                            <div className="blog-left">
                                                <div className="blog-image">
                                                    <img
                                                        src="/images/blog4-1098x737.jpg"
                                                        alt="From The Blog"
                                                        title="From The Blog"
                                                        className="img-thumbnail"
                                                    />
                                                    <div className="post-image-hover"> </div>
                                                    <p className="post_hover">
                                                        <a
                                                            className="icon zoom"
                                                            title="Click to view Full Image "
                                                            href="/images/blog4-1098x737.jpg"
                                                            data-lightbox="example-set"
                                                        >
                                                            <i className="fa fa-search-plus" />{" "}
                                                        </a>
                                                        <a
                                                            className="icon readmore_link"
                                                            title="Click to view Read More "
                                                            href="/blogger&blogger_id=4"
                                                        >
                                                            <i className="fa fa-link" />
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="blog-right">
                                                <div className="date-time">
                                                    {" "}
                                                    <i className="fa fa-calendar" /> 11 Sep 2021
                                                </div>
                                                <h4>
                                                    <a href="/blogger&blogger_id=4">
                                                        Libero loremnun ivftrc vehicula
                                                    </a>{" "}
                                                </h4>
                                                <div className="blog-desc">
                                                    {" "}
                                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                    laboris nisi ut aliqu...{" "}
                                                </div>
                                                <div className="view-blog">
                                                    <div className="write-comment">
                                                        {" "}
                                                        <a href="/blogger&blogger_id=4">0 Comments</a>{" "}
                                                    </div>
                                                    <div className="read-more">
                                                        {" "}
                                                        <a href="/blogger&blogger_id=4">
                                                            <i className="fa fa-link" /> read more
                                                        </a>{" "}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-item">
                                        <div className="product-block">
                                            <div className="blog-left">
                                                <div className="blog-image">
                                                    <img
                                                        src="/images/blog3-1098x737.jpg"
                                                        alt="From The Blog"
                                                        title="From The Blog"
                                                        className="img-thumbnail"
                                                    />
                                                    <div className="post-image-hover"> </div>
                                                    <p className="post_hover">
                                                        <a
                                                            className="icon zoom"
                                                            title="Click to view Full Image "
                                                            href="/images/blog3-1098x737.jpg"
                                                            data-lightbox="example-set"
                                                        >
                                                            <i className="fa fa-search-plus" />{" "}
                                                        </a>
                                                        <a
                                                            className="icon readmore_link"
                                                            title="Click to view Read More "
                                                            href="/blogger&blogger_id=3"
                                                        >
                                                            <i className="fa fa-link" />
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="blog-right">
                                                <div className="date-time">
                                                    {" "}
                                                    <i className="fa fa-calendar" /> 11 Sep 2021
                                                </div>
                                                <h4>
                                                    <a href="/blogger&blogger_id=3">
                                                        Nostrum ufrytb Iesumgtn Christum{" "}
                                                    </a>{" "}
                                                </h4>
                                                <div className="blog-desc">
                                                    {" "}
                                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                    laboris nisi ut aliqu...{" "}
                                                </div>
                                                <div className="view-blog">
                                                    <div className="write-comment">
                                                        {" "}
                                                        <a href="/blogger&blogger_id=3">0 Comments</a>{" "}
                                                    </div>
                                                    <div className="read-more">
                                                        {" "}
                                                        <a href="/blogger&blogger_id=3">
                                                            <i className="fa fa-link" /> read more
                                                        </a>{" "}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-item">
                                        <div className="product-block">
                                            <div className="blog-left">
                                                <div className="blog-image">
                                                    <img
                                                        src="/images/blog2-1098x737.jpg"
                                                        alt="From The Blog"
                                                        title="From The Blog"
                                                        className="img-thumbnail"
                                                    />
                                                    <div className="post-image-hover"> </div>
                                                    <p className="post_hover">
                                                        <a
                                                            className="icon zoom"
                                                            title="Click to view Full Image "
                                                            href="/images/blog2-1098x737.jpg"
                                                            data-lightbox="example-set"
                                                        >
                                                            <i className="fa fa-search-plus" />{" "}
                                                        </a>
                                                        <a
                                                            className="icon readmore_link"
                                                            title="Click to view Read More "
                                                            href="/blogger&blogger_id=2"
                                                        >
                                                            <i className="fa fa-link" />
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="blog-right">
                                                <div className="date-time">
                                                    {" "}
                                                    <i className="fa fa-calendar" /> 11 Sep 2021
                                                </div>
                                                <h4>
                                                    <a href="/blogger&blogger_id=2">
                                                        Excepteur sint occaecat cupidatat
                                                    </a>{" "}
                                                </h4>
                                                <div className="blog-desc">
                                                    {" "}
                                                    Duis aute irure dolor in reprehenderit in voluptate velit
                                                    esse cillum dolore eu ...{" "}
                                                </div>
                                                <div className="view-blog">
                                                    <div className="write-comment">
                                                        {" "}
                                                        <a href="/blogger&blogger_id=2">0 Comments</a>{" "}
                                                    </div>
                                                    <div className="read-more">
                                                        {" "}
                                                        <a href="/blogger&blogger_id=2">
                                                            <i className="fa fa-link" /> read more
                                                        </a>{" "}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-item">
                                        <div className="product-block">
                                            <div className="blog-left">
                                                <div className="blog-image">
                                                    <img
                                                        src="/images/blog1-1098x737.jpg"
                                                        alt="From The Blog"
                                                        title="From The Blog"
                                                        className="img-thumbnail"
                                                    />
                                                    <div className="post-image-hover"> </div>
                                                    <p className="post_hover">
                                                        <a
                                                            className="icon zoom"
                                                            title="Click to view Full Image "
                                                            href="/images/blog1-1098x737.jpg"
                                                            data-lightbox="example-set"
                                                        >
                                                            <i className="fa fa-search-plus" />{" "}
                                                        </a>
                                                        <a
                                                            className="icon readmore_link"
                                                            title="Click to view Read More "
                                                            href="/blogger&blogger_id=1"
                                                        >
                                                            <i className="fa fa-link" />
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="blog-right">
                                                <div className="date-time">
                                                    {" "}
                                                    <i className="fa fa-calendar" /> 11 Sep 2021
                                                </div>
                                                <h4>
                                                    <a href="/blogger&blogger_id=1">
                                                        Peat book is a treatise frbhtn
                                                    </a>{" "}
                                                </h4>
                                                <div className="blog-desc">
                                                    {" "}
                                                    Link: St. Louis Blues Audio shortcode: “Lorem ipsum dolor
                                                    sit amet, consectetur ...{" "}
                                                </div>
                                                <div className="view-blog">
                                                    <div className="write-comment">
                                                        {" "}
                                                        <a href="/blogger&blogger_id=1">0 Comments</a>{" "}
                                                    </div>
                                                    <div className="read-more">
                                                        {" "}
                                                        <a href="/blogger&blogger_id=1">
                                                            <i className="fa fa-link" /> read more
                                                        </a>{" "}
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
                <span
                    className="blog_default_width"
                    style={{ display: "none", visibility: "hidden" }}
                />
                <div id="carousel-0" className="banners-slider-carousel">
                    <div className="container">
                        <div className="row">
                            <div className="customNavigation">
                                <a className="prev fa fa-arrow-left">&nbsp;</a>
                                <a className="next fa fa-arrow-right">&nbsp;</a>
                            </div>
                            <div className="product-carousel" id="module-0-carousel">
                                <div className="slider-item">
                                    <div className="product-block">
                                        <div className="product-block-inner">
                                            <a href="#">
                                                <img src="/images/b1-114x74.png" alt="Nintendo" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="product-block">
                                        <div className="product-block-inner">
                                            <a href="#">
                                                <img src="/images/b2-114x74.png" alt="Starbucks" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="product-block">
                                        <div className="product-block-inner">
                                            <a href="#">
                                                <img src="/images/b3-114x74.png" alt="Disney" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="product-block">
                                        <div className="product-block-inner">
                                            <a href="#">
                                                <img src="/images/b4-114x74.png" alt="Dell" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="product-block">
                                        <div className="product-block-inner">
                                            <a href="#">
                                                <img
                                                    src="/images/b5-114x74.png"
                                                    alt="Harley Davidson"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="product-block">
                                        <div className="product-block-inner">
                                            <a href="#">
                                                <img src="/images/b6-114x74.png" alt="Canon" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="product-block">
                                        <div className="product-block-inner">
                                            <a href="#">
                                                <img src="/images/b2-114x74.png" alt="Burger King" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="product-block">
                                        <div className="product-block-inner">
                                            <a href="#">
                                                <img src="/images/b3-114x74.png" alt="Coca Cola" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="product-block">
                                        <div className="product-block-inner">
                                            <a href="#">
                                                <img src="/images/b4-114x74.png" alt="Sony" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="product-block">
                                        <div className="product-block-inner">
                                            <a href="#">
                                                <img src="/images/b5-114x74.png" alt="RedBull" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="product-block">
                                        <div className="product-block-inner">
                                            <a href="#">
                                                <img src="/images/b6-114x74.png" alt="NFL" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span
                    className="module_default_width"
                    style={{ display: "none", visibility: "hidden" }}
                />
            </div>
            <footer>
                <div className="footertop">
                    <div className="container">
                        <div className="row">
                            <div className="newsletter">
                                <h2 className="news">
                                    <span>Newsletter</span>
                                    <div className="info">
                                        Get 30% Discount with notified about the latest news and
                                        updates. Free shipping on purchase $99
                                    </div>
                                </h2>
                                <div className="newsletter-inner">
                                    <form action="" method="post">
                                        <div className="form-group required">
                                            {/* <label class="col-sm-2 control-label" for="input-firstname">Enter Email Address Here ..</label>*/}
                                            <div className="news-box">
                                                <input
                                                    type="email"
                                                    name="txtemail"
                                                    id="txtemail"
                                                    defaultValue=""
                                                    placeholder="Enter Email Address Here .."
                                                    className="form-control input-lg"
                                                />
                                                <button
                                                    type="submit"
                                                    className="btn btn-default btn-lg"
                                                    onClick={() => { 1 - 1 }}
                                                >
                                                    Subscribe
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="footer">
                    <div className="container">
                        <div className="row">
                            <div className="footer-blocks">
                                <div className="footer-right">
                                    <div className="content_footer_left" />
                                </div>
                                <div className="footer-left">
                                    <div id="block_4" className="footer-area">
                                        <div className="content_footer_right">
                                            <div id="block_1" className="footer-area col-sm-3 column">
                                                <h5 className="toggle">Quick Imformation</h5>
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <div className="address">
                                                            <div className="address-text">Address</div>
                                                            <div className="contact_address">
                                                                My Company, 42 Puffin street Puffinville France
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="contact">
                                                            <div className="contact-text">Phone</div>
                                                            <div className="contact_phone">
                                                                +01 2222 365 /(+91) 01 2345 6789
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="email">
                                                            <div className="email-text">Mail</div>
                                                            <a href="#" className="email_link">
                                                                someone@example.com
                                                            </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="block_3" className="footer-area">
                                        <div id="info" className="col-sm-3 column">
                                            <h5>About</h5>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a href="/information&information_id=4">About Us</a>
                                                </li>
                                                <li>
                                                    <a href="/information&information_id=6">
                                                        Delivery Information
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/information&information_id=3">Privacy Policy</a>
                                                </li>
                                                <li>
                                                    <a href="/information&information_id=5">
                                                        Terms &amp; Conditions
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="contact.html">Contact Us</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div id="extra-link" className="col-sm-3 column">
                                            <h5>Help</h5>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a href="/contact">Contact Us</a>
                                                </li>
                                                <li>
                                                    <a href="/manufacturer">Brands</a>
                                                </li>
                                                <li>
                                                    <a href="/voucher">Special Discount</a>
                                                </li>
                                                <li>
                                                    <a href="/special">Specials</a>
                                                </li>
                                                <li>
                                                    <a href="/wishlist">Wish List</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div id="account_link" className="col-sm-3 column">
                                            <h5>Policy</h5>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a href="/account">Policy</a>
                                                </li>
                                                <li>
                                                    <a href="/order">Order History</a>
                                                </li>
                                                <li>
                                                    <a href="/manufacturer">Brands</a>
                                                </li>
                                                <li>
                                                    <a href="/sitemap">Site Map</a>
                                                </li>
                                                <li>
                                                    <a href="/newsletter">Newsletter</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottomfooter">
                    <div className="container">
                        <div className="row">
                            <p className="powered">
                                Powered By <a href="">OpenCart</a> Vesture © 2025
                            </p>
                            <div className="footer-logo" />
                            <div className="content_footer_bottom">
                                <div id="paymentcmsblock" className="paymentcmsblock">
                                    <p />
                                    <div className="payment-block">
                                        <ul>
                                            <img src="/images/visa.png" />
                                            <img src="/images/discover.png" />
                                            <img src="/images/maestro.png" />
                                            <img src="/images/paypal.png" />
                                            <img src="/images/american-express.png" />
                                        </ul>
                                    </div>
                                    <p />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};