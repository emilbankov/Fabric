import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useWishlist } from "../../contexts/WishlistProvider";

export default function Wishlist() {
    const location = useLocation();
    const { wishlist, handleRemoveFromWishlist } = useWishlist();

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
            <div className="account-wishlist   layout-2 left-col">
                <div className="content_headercms_bottom" />
                <div className="content-top-breadcum">
                    <div className="container">
                        <div className="row">
                            <div id="title-content"></div>
                        </div>
                    </div>
                </div>
                <div id="account-wishlist" className="container">
                    <ul className="breadcrumb">
                        <li><Link to="/"><i className="fa fa-home" /></Link></li>
                        <li><Link to="/wishlist">Любими</Link></li>
                    </ul>
                    <div className="row">
                        <aside id="column-left" className="col-sm-3 hidden-xs">
                            <div className="box">
                                <div className="box-heading">Account</div>
                                <div className="list-group">
                                    <a
                                        href="account/account "
                                        className="list-group-item"
                                    >
                                        My Account{" "}
                                    </a>
                                    <a
                                        href="account/edit "
                                        className="list-group-item"
                                    >
                                        Edit Account
                                    </a>{" "}
                                    <a
                                        href="account/password"
                                        className="list-group-item"
                                    >
                                        Password
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
                                    <a
                                        href="account/logout"
                                        className="list-group-item"
                                    >
                                        Logout{" "}
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-viewport">
                                <div id="banner0" className="swiper-container  single-banner ">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <a href="#">
                                                <img
                                                    src="images/left-banner-272x340.jpg"
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
                                    <a
                                        className="list-group-item"
                                        href="information/information&information_id=5"
                                    >
                                        Общи условия{" "}
                                    </a>
                                    <Link
                                        className="list-group-item"
                                        to="/contact"
                                    >
                                        Контакти{" "}
                                    </Link>
                                    <a
                                        className="list-group-item"
                                        href="information/sitemap"
                                    >
                                        Site Map{" "}
                                    </a>
                                </div>
                            </div>
                        </aside>
                        <div id="content" className="col-sm-9">
                            <h2>Любими</h2>
                            <div className="table-responsive">
                                <table className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <td className="text-center">Име</td>
                                            <td className="text-center">Снимка</td>
                                            <td className="text-center">Модел</td>
                                            <td className="text-center">Наличност</td>
                                            <td className="text-center">Цена</td>
                                            <td className="text-center"></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {wishlist.map((item) => (
                                            <tr key={item.id}>
                                                <td className="text-center"><Link to={`/clothing/details/${item.id}`}>{item.name}</Link></td>
                                                <td className="text-center">
                                                    <Link to={`/clothing/details/${item.id}`}>
                                                        <img
                                                            src={`https://res.cloudinary.com/dfttdd1vq/image/upload/f_webp,q_auto/w_55,h_68${item.image}`}
                                                            alt={item.name}
                                                            title={item.name}
                                                        />
                                                    </Link>
                                                </td>
                                                <td className="text-center">{item.model}</td>
                                                <td className="text-center">В наличност</td>
                                                <td className="text-center"><div className="price">{item.price} лв.</div></td>
                                                <td className="text-center">
                                                    <Link
                                                        to={`/clothing/details/${item.id}`}
                                                        data-toggle="tooltip"
                                                        title="Add to Cart"
                                                        className="btn btn-primary"
                                                        style={{ marginRight: "10px" }}
                                                    >
                                                        <i className="fa fa-shopping-cart" />
                                                    </Link>
                                                    <button
                                                        type="button"
                                                        data-toggle="tooltip"
                                                        title="Remove"
                                                        className="btn btn-danger"
                                                        onClick={() => handleRemoveFromWishlist(item.id)}
                                                    >
                                                        <i className="fa fa-times" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};