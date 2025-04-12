import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useWishlist } from "../../contexts/WishlistProvider";
import MetaTags from '../Meta Tags/MetaTags';

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
            <MetaTags
                title="Fabric | Любими продукти"
                description="Разгледайте вашите любими продукти във Fabric. Запазвайте и управлявайте списъка с продукти, които харесвате, за да ги поръчате по-късно."
                keywords="Fabric, любими продукти, списък с желания, запазени продукти, wishlist, favorite products, saved items, shopping list"
            />
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
                                                            src={`https://fabric-bg.com/images-ftp${item.image}.webp`}
                                                            alt={item.name}
                                                            title={item.name}
                                                            style={{ width: "55px" }}
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