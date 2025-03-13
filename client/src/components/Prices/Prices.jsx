import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Formik } from 'formik';
import * as clothesService from "../../services/clothesService";

export default function Prices() {
    const location = useLocation();

    const [isLoading, setIsLoading] = useState(true);
    const [price, setPrice] = useState({});
    const [discountPrice, setDiscountPrice] = useState({});
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        Promise.all([
            clothesService.getPrice(),
            clothesService.getDiscountPrice(),
        ])
            .then(([price, discountPrice]) => {
                setPrice(price);
                setDiscountPrice(discountPrice);
                setIsLoading(false);
            })
            .catch(err => {
                console.error("Error fetching data:", err);
                setIsLoading(false);
            });
    }, [location.pathname]);

    const handlePriceChange = async (type, price, discountPrice) => {
        if (price === '' || price === 0) {
            setError("Цената не може да бъде празна или 0.00!");
            setSuccess(null);
            return;
        }

        if (discountPrice === 0) {
            setError("Цената с отстъпка не може да бъде 0.00!");
            setSuccess(null);
            return;
        }

        setIsLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const payload = {
                type: type,
                price: parseFloat(price),
                discountPrice: discountPrice === '' ? null : parseFloat(discountPrice)
            };

            const response = await clothesService.changePrices(payload.type, payload.price, payload.discountPrice);
            if (response.message === "Clothes price updated successfully!") {
                setSuccess("Цената беше обновена успешно!");
            } else {
                setSuccess(response.message);
            }

            const [updatedPrice, updatedDiscountPrice] = await Promise.all([
                clothesService.getPrice(),
                clothesService.getDiscountPrice(),
            ]);
            setPrice(updatedPrice);
            setDiscountPrice(updatedDiscountPrice);
        } catch (error) {
            console.error("Price update error:", error);
            if (error.message === "No matching clothes found to update.") {
                setError("Цената не може да бъде сменена, ако няма продукти.");
            } else {
                setError("Възникна грешка при обновяването на цените.");
            }

            setSuccess(null);
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
                                    <Link className="list-group-item" to="/contact">
                                        Контакти{" "}
                                    </Link>
                                    <a className="list-group-item" href="information/sitemap">
                                        Site Map{" "}
                                    </a>
                                </div>
                            </div>
                        </aside>
                        <div id="content" className="col-sm-9">
                            <h1>Промяна на цените</h1>
                            {error && (
                                <div className="invalid-feedback" style={{ color: 'red', display: 'block', fontSize: '16px', fontWeight: 'bold', marginBottom: '20px' }}>
                                    {error}
                                </div>
                            )}
                            {success && (
                                <div className="valid-feedback" style={{ color: 'green', display: 'block', fontSize: '16px', fontWeight: 'bold', marginBottom: '20px' }}>
                                    {success}
                                </div>
                            )}
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
                                        discountPrice_KIT: discountPrice.KIT || '',
                                        price_TOWELS: price.TOWELS || '',
                                        discountPrice_TOWELS: discountPrice.TOWELS || '',
                                        price_BANDANAS: price.BANDANAS || '',
                                        discountPrice_BANDANAS: discountPrice.BANDANAS || ''
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
                                                                required
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
                                                                onClick={() => handlePriceChange('T_SHIRT', values.price_T_SHIRT, values.discountPrice_T_SHIRT)}
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
                                                                onClick={() => handlePriceChange('LONG_T_SHIRT', values.price_LONG_T_SHIRT, values.discountPrice_LONG_T_SHIRT)}
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
                                                                onClick={() => handlePriceChange('SWEATSHIRT', values.price_SWEATSHIRT, values.discountPrice_SWEATSHIRT)}
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
                                                                onClick={() => handlePriceChange('SHORTS', values.price_SHORTS, values.discountPrice_SHORTS)}
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
                                                                onClick={() => handlePriceChange('KIT', values.price_KIT, values.discountPrice_KIT)}
                                                            >
                                                                Промени
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="category-price-form">
                                                    <h3>Хавлии</h3>
                                                    <div className="form-group required">
                                                        <label className="col-sm-3 control-label" htmlFor="price_TOWELS">
                                                            Цена без отстъпка
                                                        </label>
                                                        <div className="col-sm-6">
                                                            <input
                                                                className="form-control"
                                                                type="number"
                                                                id="price_TOWELS"
                                                                name="price_TOWELS"
                                                                placeholder="Цена без отстъпка"
                                                                onChange={handleChange}
                                                                value={values.price_TOWELS}
                                                                step="0.01"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group required">
                                                        <label className="col-sm-3 control-label" htmlFor="discountPrice_TOWELS">
                                                            Цена с отстъпка
                                                        </label>
                                                        <div className="col-sm-6">
                                                            <input
                                                                className="form-control"
                                                                type="number"
                                                                id="discountPrice_TOWELS"
                                                                name="discountPrice_TOWELS"
                                                                placeholder="Цена с отстъпка"
                                                                onChange={handleChange}
                                                                value={values.discountPrice_TOWELS}
                                                                step="0.01"
                                                            />
                                                        </div>
                                                        <div className="col-sm-3 button-div-responsive">
                                                            <button
                                                                type="button"
                                                                className="btn btn-primary"
                                                                onClick={() => handlePriceChange('TOWELS', values.price_TOWELS, values.discountPrice_TOWELS)}
                                                            >
                                                                Промени
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="category-price-form">
                                                    <h3>Бандани</h3>
                                                    <div className="form-group required">
                                                        <label className="col-sm-3 control-label" htmlFor="price_BANDANAS">
                                                            Цена без отстъпка
                                                        </label>
                                                        <div className="col-sm-6">
                                                            <input
                                                                className="form-control"
                                                                type="number"
                                                                id="price_BANDANAS"
                                                                name="price_BANDANAS"
                                                                placeholder="Цена без отстъпка"
                                                                onChange={handleChange}
                                                                value={values.price_BANDANAS}
                                                                step="0.01"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group required">
                                                        <label className="col-sm-3 control-label" htmlFor="discountPrice_BANDANAS">
                                                            Цена с отстъпка
                                                        </label>
                                                        <div className="col-sm-6">
                                                            <input
                                                                className="form-control"
                                                                type="number"
                                                                id="discountPrice_BANDANAS"
                                                                name="discountPrice_BANDANAS"
                                                                placeholder="Цена с отстъпка"
                                                                onChange={handleChange}
                                                                value={values.discountPrice_BANDANAS}
                                                                step="0.01"
                                                            />
                                                        </div>
                                                        <div className="col-sm-3 button-div-responsive">
                                                            <button
                                                                type="button"
                                                                className="btn btn-primary"
                                                                onClick={() => handlePriceChange('BANDANAS', values.price_BANDANAS, values.discountPrice_BANDANAS)}
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