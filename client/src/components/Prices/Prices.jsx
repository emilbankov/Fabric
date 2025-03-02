import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Formik } from 'formik';
import { registerValidationSchema } from '../../lib/validate';
import * as clothesService from "../../services/clothesService";

export default function Prices() {
    const location = useLocation();

    const [isLoading, setIsLoading] = useState(true);
    const [price, setPrice] = useState({});
    const [discountPrice, setDiscountPrice] = useState({});

    useEffect(() => {
        Promise.all([
            clothesService.getPrice(),
            clothesService.getDiscountPrice(),
        ])
            .then(([price, discountPrice]) => {
                setPrice(price);
                setDiscountPrice(discountPrice);
                setIsLoading(false);
                console.log("Fetched Prices:", price);
                console.log("Fetched Discount Prices:", discountPrice);
            })
            .catch(err => {
                console.error("Error fetching data:", err);
                setIsLoading(false);
            });
    }, [location.pathname]);

    const handleCategoryUpdate = async (categoryId, price, discountPrice) => {
        setIsLoading(true);
        try {
            const payload = {
                type: categoryId,
                price: parseFloat(price),
                discountPrice: discountPrice === '' ? null : parseFloat(discountPrice)
            };

            console.log("Updating category prices:", payload);

            await clothesService.changePrices(payload.type, payload.price, payload.discountPrice);

            const [updatedPrice, updatedDiscountPrice] = await Promise.all([
                clothesService.getPrice(),
                clothesService.getDiscountPrice(),
            ]);
            setPrice(updatedPrice);
            setDiscountPrice(updatedDiscountPrice);

            console.log("Prices updated successfully!");
        } catch (error) {
            console.error("Price update error:", error);
        } finally {
            setIsLoading(false);
        }
    };

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
            <div className="account-register   layout-2 left-col">
                <div className="content_headercms_bottom" />
                <div className="content-top-breadcum">
                    <div className="container">
                        <div className="row">
                            <div id="title-content"></div>
                        </div>
                    </div>
                </div>
                <div id="account-register" className="container">
                    <ul className="breadcrumb">
                        <li>
                            <Link to="/">
                                <i className="fa fa-home" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/register">Промяна на цените</Link>{" "}
                        </li>
                    </ul>
                    <div className="row">
                        <aside id="column-left" className="col-sm-3 hidden-xs">
                            <div className="box">
                                <div className="box-heading">Account</div>
                                <div className="list-group">
                                    <Link to="/login" className="list-group-item">
                                        Login{" "}
                                    </Link>
                                    <Link to="/register" className="list-group-item">
                                        Register
                                    </Link>
                                    <Link to="/forgotten" className="list-group-item">
                                        Forgotten Password{" "}
                                    </Link>
                                    <Link to="/account" className="list-group-item">
                                        My Account{" "}
                                    </Link>
                                    <Link to="/address" className="list-group-item">
                                        Address Book
                                    </Link>
                                    <Link to="/wishlist " className="list-group-item">
                                        Wish List{" "}
                                    </Link>
                                    <Link to="/order " className="list-group-item">
                                        Order History{" "}
                                    </Link>
                                    <Link to="/download" className="list-group-item">
                                        Downloads{" "}
                                    </Link>
                                    <Link to="/recurring" className="list-group-item">
                                        Recurring payments{" "}
                                    </Link>
                                    <Link to="/reward " className="list-group-item">
                                        Reward Points{" "}
                                    </Link>
                                    <Link to="/return" className="list-group-item">
                                        Returns{" "}
                                    </Link>
                                    <Link to="/transaction" className="list-group-item">
                                        Transactions{" "}
                                    </Link>
                                    <Link to="/newsletter" className="list-group-item">
                                        Newsletter{" "}
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
                                <div className="box-heading">Information</div>
                                <div className="list-group">
                                    <Link className="list-group-item" to="/about">
                                        About Us{" "}
                                    </Link>
                                    <a
                                        className="list-group-item"
                                        href="information/information&information_id=6"
                                    >
                                        Delivery Information{" "}
                                    </a>
                                    <a
                                        className="list-group-item"
                                        href="information/information&information_id=3"
                                    >
                                        Privacy Policy{" "}
                                    </a>
                                    <a
                                        className="list-group-item"
                                        href="information/information&information_id=5"
                                    >
                                        Terms &amp; Conditions{" "}
                                    </a>
                                    <Link className="list-group-item" to="/contact">
                                        Contact Us{" "}
                                    </Link>
                                    <a className="list-group-item" href="information/sitemap">
                                        Site Map{" "}
                                    </a>
                                </div>
                            </div>
                        </aside>
                        <div id="content" className="col-sm-9">
                            <h1>Промяна на цените</h1>
                            {isLoading ? (
                                <div style={{ margin: '10% auto' }} className="text-center">
                                    <img src="/images/loading.gif" alt="Loading..." />
                                </div>
                            ) : (
                                <Formik
                                    initialValues={{
                                        price_T_SHIRT: price.T_SHIRT || '',
                                        discountPrice_T_SHIRT: discountPrice.T_SHIRT || '',
                                        price_LONG_T_SHIRT: price.LONG_T_SHIRT || '',
                                        discountPrice_LONG_T_SHIRT: discountPrice.LONG_T_SHIRT || '',
                                        price_SWEATSHIRT: price.SWEATSHIRT || '',
                                        discountPrice_SWEATSHIRT: discountPrice.SWEATSHIRT || '',
                                        price_SHORTS: price.SHORTS || '',
                                        discountPrice_SHORTS: discountPrice.SHORTS || '',
                                        price_KIT: price.KIT || '',
                                        discountPrice_KIT: discountPrice.KIT || ''
                                    }}
                                >
                                    {({ values, handleChange }) => (
                                        <form className="form-horizontal">
                                            <fieldset id="prices">
                                                {/* Тениски */}
                                                <div className="category-price-form">
                                                    <h3>Тениски</h3>
                                                    <div className="form-group required">
                                                        <label className="col-sm-3 control-label" htmlFor="price_T_SHIRT">
                                                            Цена без отстъпка
                                                        </label>
                                                        <div className="col-sm-6">
                                                            <input
                                                                className="form-control"
                                                                type="number"
                                                                id="price_T_SHIRT"
                                                                name="price_T_SHIRT"
                                                                placeholder="Цена без отстъпка"
                                                                onChange={handleChange}
                                                                value={values.price_T_SHIRT}
                                                                step="0.01"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group required">
                                                        <label className="col-sm-3 control-label" htmlFor="discountPrice_T_SHIRT">
                                                            Цена с отстъпка
                                                        </label>
                                                        <div className="col-sm-6">
                                                            <input
                                                                className="form-control"
                                                                type="number"
                                                                id="discountPrice_T_SHIRT"
                                                                name="discountPrice_T_SHIRT"
                                                                placeholder="Цена с отстъпка"
                                                                onChange={handleChange}
                                                                value={values.discountPrice_T_SHIRT}
                                                                step="0.01"
                                                            />
                                                        </div>
                                                        <div className="col-sm-3 button-div-responsive">
                                                            <button
                                                                type="button"
                                                                className="btn btn-primary"
                                                                onClick={() => handleCategoryUpdate('T_SHIRT', values.price_T_SHIRT, values.discountPrice_T_SHIRT)}
                                                            >
                                                                Промени
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Блузи */}
                                                <div className="category-price-form">
                                                    <h3>Блузи</h3>
                                                    <div className="form-group required">
                                                        <label className="col-sm-3 control-label" htmlFor="price_LONG_T_SHIRT">
                                                            Цена без отстъпка
                                                        </label>
                                                        <div className="col-sm-6">
                                                            <input
                                                                className="form-control"
                                                                type="number"
                                                                id="price_LONG_T_SHIRT"
                                                                name="price_LONG_T_SHIRT"
                                                                placeholder="Цена без отстъпка"
                                                                onChange={handleChange}
                                                                value={values.price_LONG_T_SHIRT}
                                                                step="0.01"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group required">
                                                        <label className="col-sm-3 control-label" htmlFor="discountPrice_LONG_T_SHIRT">
                                                            Цена с отстъпка
                                                        </label>
                                                        <div className="col-sm-6">
                                                            <input
                                                                className="form-control"
                                                                type="number"
                                                                id="discountPrice_LONG_T_SHIRT"
                                                                name="discountPrice_LONG_T_SHIRT"
                                                                placeholder="Цена с отстъпка"
                                                                onChange={handleChange}
                                                                value={values.discountPrice_LONG_T_SHIRT}
                                                                step="0.01"
                                                            />
                                                        </div>
                                                        <div className="col-sm-3 button-div-responsive">
                                                            <button
                                                                type="button"
                                                                className="btn btn-primary"
                                                                onClick={() => handleCategoryUpdate('LONG_T_SHIRT', values.price_LONG_T_SHIRT, values.discountPrice_LONG_T_SHIRT)}
                                                            >
                                                                Промени
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Суитшърти */}
                                                <div className="category-price-form">
                                                    <h3>Суитшърти</h3>
                                                    <div className="form-group required">
                                                        <label className="col-sm-3 control-label" htmlFor="price_SWEATSHIRT">
                                                            Цена без отстъпка
                                                        </label>
                                                        <div className="col-sm-6">
                                                            <input
                                                                className="form-control"
                                                                type="number"
                                                                id="price_SWEATSHIRT"
                                                                name="price_SWEATSHIRT"
                                                                placeholder="Цена без отстъпка"
                                                                onChange={handleChange}
                                                                value={values.price_SWEATSHIRT}
                                                                step="0.01"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group required">
                                                        <label className="col-sm-3 control-label" htmlFor="discountPrice_SWEATSHIRT">
                                                            Цена с отстъпка
                                                        </label>
                                                        <div className="col-sm-6">
                                                            <input
                                                                className="form-control"
                                                                type="number"
                                                                id="discountPrice_SWEATSHIRT"
                                                                name="discountPrice_SWEATSHIRT"
                                                                placeholder="Цена с отстъпка"
                                                                onChange={handleChange}
                                                                value={values.discountPrice_SWEATSHIRT}
                                                                step="0.01"
                                                            />
                                                        </div>
                                                        <div className="col-sm-3 button-div-responsive">
                                                            <button
                                                                type="button"
                                                                className="btn btn-primary"
                                                                onClick={() => handleCategoryUpdate('SWEATSHIRT', values.price_SWEATSHIRT, values.discountPrice_SWEATSHIRT)}
                                                            >
                                                                Промени
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Къси панталони */}
                                                <div className="category-price-form">
                                                    <h3>Къси панталони</h3>
                                                    <div className="form-group required">
                                                        <label className="col-sm-3 control-label" htmlFor="price_SHORTS">
                                                            Цена без отстъпка
                                                        </label>
                                                        <div className="col-sm-6">
                                                            <input
                                                                className="form-control"
                                                                type="number"
                                                                id="price_SHORTS"
                                                                name="price_SHORTS"
                                                                placeholder="Цена без отстъпка"
                                                                onChange={handleChange}
                                                                value={values.price_SHORTS}
                                                                step="0.01"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group required">
                                                        <label className="col-sm-3 control-label" htmlFor="discountPrice_SHORTS">
                                                            Цена с отстъпка
                                                        </label>
                                                        <div className="col-sm-6">
                                                            <input
                                                                className="form-control"
                                                                type="number"
                                                                id="discountPrice_SHORTS"
                                                                name="discountPrice_SHORTS"
                                                                placeholder="Цена с отстъпка"
                                                                onChange={handleChange}
                                                                value={values.discountPrice_SHORTS}
                                                                step="0.01"
                                                            />
                                                        </div>
                                                        <div className="col-sm-3 button-div-responsive">
                                                            <button
                                                                type="button"
                                                                className="btn btn-primary"
                                                                onClick={() => handleCategoryUpdate('SHORTS', values.price_SHORTS, values.discountPrice_SHORTS)}
                                                            >
                                                                Промени
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Комплекти */}
                                                <div className="category-price-form">
                                                    <h3>Комплекти</h3>
                                                    <div className="form-group required">
                                                        <label className="col-sm-3 control-label" htmlFor="price_KIT">
                                                            Цена без отстъпка
                                                        </label>
                                                        <div className="col-sm-6">
                                                            <input
                                                                className="form-control"
                                                                type="number"
                                                                id="price_KIT"
                                                                name="price_KIT"
                                                                placeholder="Цена без отстъпка"
                                                                onChange={handleChange}
                                                                value={values.price_KIT}
                                                                step="0.01"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group required">
                                                        <label className="col-sm-3 control-label" htmlFor="discountPrice_KIT">
                                                            Цена с отстъпка
                                                        </label>
                                                        <div className="col-sm-6">
                                                            <input
                                                                className="form-control"
                                                                type="number"
                                                                id="discountPrice_KIT"
                                                                name="discountPrice_KIT"
                                                                placeholder="Цена с отстъпка"
                                                                onChange={handleChange}
                                                                value={values.discountPrice_KIT}
                                                                step="0.01"
                                                            />
                                                        </div>
                                                        <div className="col-sm-3 button-div-responsive">
                                                            <button
                                                                type="button"
                                                                className="btn btn-primary"
                                                                onClick={() => handleCategoryUpdate('KIT', values.price_KIT, values.discountPrice_KIT)}
                                                            >
                                                                Промени
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </form>
                                    )}
                                </Formik>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};