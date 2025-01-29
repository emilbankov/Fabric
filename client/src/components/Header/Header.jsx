import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/authContext";

export default function Header() {
    const { isAuthenticated } = useContext(AuthContext);

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
                                Free Coupne Code : Summer Sale On Selected Items Use : New 27
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
                                        <a href="/">
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
                                        {/* {isAuthenticated && <div className="compare"><Link to="/account" id="compare-total" title="Product Compare" />{" "}</div>} */}
                                        <div className="compare"><Link to="/account" id="compare-total" title="Product Compare" />{" "}</div>
                                        <div className="whishlist"><span>0</span><a href="/wishlist" id="wishlist-total" title={0} />{" "}</div>
                                        <div className="col-sm-3 header_cart">
                                            <div id="cart" className="btn-group btn-block">
                                                <button type="button" data-toggle="dropdown" data-loading-text="Loading..." className="btn btn-inverse btn-block btn-lg dropdown-toggle">
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
                                                            Your shopping bag is empty!
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {isAuthenticated && <div className="compare logout"><Link to="/account" id="compare-total" title="Product Compare" />{" "}</div>}
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
                                            <Link to="/catalog">Men</Link>
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
                                                        <Link to="/catalog">Men</Link>
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
                                                        <a href="/">Home</a>
                                                    </li>
                                                    <li className="new menu-item">
                                                        <Link to="/catalog">New collection</Link>
                                                    </li>
                                                    <li className="hot menu-item">
                                                        <Link to="/catalog">Specials</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/contact">Contact Us</Link>
                                                    </li>
                                                    <li className="toplink">
                                                        <Link to="/blogs">Blogs</Link>
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
            </div>
        </>
    );
};