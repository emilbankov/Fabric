import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../../contexts/AuthProvider";
import { Formik } from 'formik';
import { addClothingValidationSchema } from '../../lib/validate';
import * as clothesService from "../../services/clothesService";

export default function AddClothing() {
    const { addClothHandler } = useContext(AuthContext);
    const [frontImagePreview, setFrontImagePreview] = useState(null);
    const [backImagePreview, setBackImagePreview] = useState(null);
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);
    const [price, setPrice] = useState([]);

    useEffect(() => {
        clothesService.getPrice().then(setPrice);
    }, [location.pathname]);

    useEffect(() => {
        const existingScript = document.querySelector('script[src="/js/custom.js"]');
        if (existingScript && existingScript.parentNode) {
            existingScript.parentNode.removeChild(existingScript);
        }

        const script = document.createElement("script");
        script.src = "/js/custom.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, [location.pathname]);

    const handleFileChange = (e, setFieldValue) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (e.target.name === "frontImage") {
                    setFrontImagePreview(event.target.result);
                    setFieldValue('frontImage', file);
                } else if (e.target.name === "backImage") {
                    setBackImagePreview(event.target.result);
                    setFieldValue('backImage', file);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        setIsLoading(true);
        await addClothHandler(values);
        setSubmitting(false);
        setIsLoading(false);
    };

    const handleTypeChange = (e, setFieldValue) => {
        const type = e.target.value;
        setFieldValue('type', type);
        setFieldValue('price', price[type].toFixed(2) || '');
    };

    return (
        <>
            <div className="account-register layout-2 left-col">
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
                            <Link to="/add-clothing">Добавяне на продукт</Link>
                        </li>
                    </ul>
                    <div className="row">
                        <aside id="column-left" className="col-sm-3 hidden-xs">
                            <div className="box">
                                <div className="box-heading">Акаунт</div>
                                <div className="list-group">
                                    <Link to="/login" className="list-group-item">Вход</Link>
                                    <Link to="/register" className="list-group-item">Регистрация</Link>
                                    <Link to="/forgotten" className="list-group-item">Забравена парола</Link>
                                    <Link to="/account" className="list-group-item">Акаунт</Link>
                                    <Link to="/wishlist " className="list-group-item">Любими</Link>
                                    <Link to="/order " className="list-group-item">Мои поръчки</Link>
                                </div>
                            </div>
                            <div className="swiper-viewport">
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
                            <h1>Добавяне на продукт</h1>
                            {isLoading && <div style={{ margin: '30% auto 0 auto' }} className="text-center"><img src="/images/loading.gif" alt="Loading..." /></div>}
                            {!isLoading && (
                                <Formik
                                    initialValues={{
                                        name: "",
                                        description: "",
                                        price: "",
                                        type: "",
                                        category: "",
                                        model: "",
                                        frontImage: "",
                                        backImage: "",
                                    }}
                                    validationSchema={addClothingValidationSchema}
                                    onSubmit={handleSubmit}
                                >
                                    {({ values, errors, touched, handleChange, handleSubmit, setFieldValue }) => (
                                        <form className="form-horizontal" onSubmit={handleSubmit}>
                                            <fieldset id="account">
                                                <div className="form-group required">
                                                    <label className="col-sm-2 control-label" htmlFor="name">Име</label>
                                                    <div className="col-sm-10">
                                                        <input
                                                            className={`form-control ${errors.name && touched.name ? 'is-invalid' : ''}`}
                                                            type="text"
                                                            id="name"
                                                            name="name"
                                                            placeholder="Име"
                                                            onChange={handleChange}
                                                            value={values.name}
                                                        />
                                                        {errors.name && touched.name && (
                                                            <div className="invalid-feedback" style={{ color: 'red', display: 'block' }}>
                                                                {errors.name}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="form-group required">
                                                    <label className="col-sm-2 control-label" htmlFor="description">Описание</label>
                                                    <div className="col-sm-10">
                                                        <textarea
                                                            className={`form-control ${errors.description && touched.description ? 'is-invalid' : ''}`}
                                                            id="description"
                                                            name="description"
                                                            placeholder="Описание"
                                                            onChange={handleChange}
                                                            value={values.description}
                                                            rows="4"
                                                        ></textarea>
                                                        {errors.description && touched.description && (
                                                            <div className="invalid-feedback" style={{ color: 'red', display: 'block' }}>
                                                                {errors.description}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="form-group required">
                                                    <label className="col-sm-2 control-label" htmlFor="type">Тип</label>
                                                    <div className="col-sm-10">
                                                        <select
                                                            className={`form-control ${errors.type && touched.type ? 'is-invalid' : ''}`}
                                                            id="type"
                                                            name="type"
                                                            onChange={(e) => handleTypeChange(e, setFieldValue)}
                                                            value={values.type}
                                                        >
                                                            <option value="" hidden>Изберете тип</option>
                                                            <option value="T_SHIRT">Тениска</option>
                                                            <option value="LONG_T_SHIRT">Блуза с дълъг ръкав</option>
                                                            <option value="SHORTS">Къси панталони</option>
                                                            <option value="SWEATSHIRT">Суитчър</option>
                                                            <option value="KIT">Комплект</option>
                                                            <option value="TOWELS">Хавлия</option>
                                                            <option value="BANDANAS">Бандана</option>
                                                        </select>
                                                        {errors.type && touched.type && (
                                                            <div className="invalid-feedback" style={{ color: 'red', display: 'block' }}>
                                                                {errors.type}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="form-group required">
                                                    <label className="col-sm-2 control-label" htmlFor="price">Цена</label>
                                                    <div className="col-sm-10">
                                                        <input
                                                            className="form-control"
                                                            type="number"
                                                            id="price"
                                                            name="price"
                                                            placeholder="Цена"
                                                            onChange={handleChange}
                                                            value={values.price}
                                                            step="0.01"
                                                            min="0"
                                                            readOnly
                                                        />
                                                    </div>
                                                </div>

                                                <div className="form-group required">
                                                    <label className="col-sm-2 control-label" htmlFor="category">Категория</label>
                                                    <div className="col-sm-10">
                                                        <select
                                                            className={`form-control ${errors.category && touched.category ? 'is-invalid' : ''}`}
                                                            id="category"
                                                            name="category"
                                                            onChange={handleChange}
                                                            value={values.category}
                                                        >
                                                            <option value="" hidden>Изберете категория</option>
                                                            <option value="ABSTRACT">Абстрактни</option>
                                                            <option value="MARTIAL_SPORTS">Бойни спортове</option>
                                                            <option value="GAME_OF_THRONES">Гейм Аф Тронс</option>
                                                            <option value="DOGS">Кучета</option>
                                                            <option value="CARS">Коли</option>
                                                            <option value="CHRISTMAS">Коледни</option>
                                                            <option value="TRUCKS">Камиони</option>
                                                            <option value="HUNTING">Лов</option>
                                                            <option value="MOTORCYCLES">Мотори</option>
                                                            <option value="MUSIC">Музика</option>
                                                            <option value="NBA">NBA</option>
                                                            <option value="PATRIOTIC">Патриотични</option>
                                                            <option value="WORK">Работни</option>
                                                            <option value="FISHING">Риболов</option>
                                                            <option value="UEFA_EURO_2024">УЕФА ЕВРО 2024</option>
                                                            <option value="MOVIES">Филми</option>
                                                            <option value="GYM">Фитнес</option>
                                                            <option value="FORMULA_1">Формула 1</option>
                                                            <option value="FOOTBALL">Футбол</option>
                                                            <option value="OTHERS">Други</option>
                                                        </select>
                                                        {errors.category && touched.category && (
                                                            <div className="invalid-feedback" style={{ color: 'red', display: 'block' }}>
                                                                {errors.category}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="form-group required">
                                                    <label className="col-sm-2 control-label" htmlFor="model">Модел</label>
                                                    <div className="col-sm-10">
                                                        <div className="input-with-hash">
                                                            <input
                                                                className={`form-control model-field ${errors.model && touched.model ? 'is-invalid' : ''}`}
                                                                type="text"
                                                                id="model"
                                                                name="model"
                                                                placeholder="Модел"
                                                                onChange={handleChange}
                                                                value={values.model}
                                                                maxLength="3"
                                                            />
                                                        </div>
                                                        {errors.model && touched.model && (
                                                            <div className="invalid-feedback" style={{ color: 'red', display: 'block' }}>
                                                                {errors.model}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </fieldset>

                                            <fieldset>
                                                <legend>Качване на снимки</legend>
                                                <div className="form-group required">
                                                    <label className="col-sm-2 control-label" htmlFor="frontImage">Снимка отпред</label>
                                                    <div className="col-sm-10">
                                                        <input
                                                            className={`form-control ${errors.frontImage && touched.frontImage ? 'is-invalid' : ''}`}
                                                            type="file"
                                                            id="frontImage"
                                                            name="frontImage"
                                                            accept="image/*"
                                                            onChange={(e) => handleFileChange(e, setFieldValue)}
                                                        />
                                                        {errors.frontImage && touched.frontImage && (
                                                            <div className="invalid-feedback" style={{ color: 'red', display: 'block' }}>
                                                                {errors.frontImage}
                                                            </div>
                                                        )}
                                                        {frontImagePreview && (
                                                            <div style={{ marginTop: "10px" }}>
                                                                <img
                                                                    src={frontImagePreview}
                                                                    alt="Front Preview"
                                                                    style={{
                                                                        width: "200px",
                                                                        height: "200px",
                                                                        objectFit: "cover",
                                                                        border: "2px solid black",
                                                                        borderRadius: "20px",
                                                                        padding: "10px",
                                                                    }}
                                                                />
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                {values.type !== "KIT" && values.type !== "TOWELS" && values.type !== "BANDANAS" && (
                                                    <div className="form-group required">
                                                        <label className="col-sm-2 control-label" htmlFor="backImage">Снимка отзад</label>
                                                        <div className="col-sm-10">
                                                            <input
                                                                className={`form-control ${errors.backImage && touched.backImage ? 'is-invalid' : ''}`}
                                                                type="file"
                                                                id="backImage"
                                                                name="backImage"
                                                                accept="image/*"
                                                                onChange={(e) => handleFileChange(e, setFieldValue)}
                                                            />
                                                            {errors.backImage && touched.backImage && (
                                                                <div className="invalid-feedback" style={{ color: 'red', display: 'block' }}>
                                                                    {errors.backImage}
                                                                </div>
                                                            )}
                                                            {backImagePreview && (
                                                                <div style={{ marginTop: "10px" }}>
                                                                    <img
                                                                        src={backImagePreview}
                                                                        alt="Back Preview"
                                                                        style={{
                                                                            width: "200px",
                                                                            height: "200px",
                                                                            objectFit: "cover",
                                                                            border: "2px solid black",
                                                                            borderRadius: "20px",
                                                                            padding: "10px",
                                                                        }}
                                                                    />
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                            </fieldset>

                                            <div className="buttons">
                                                <div className="pull-right">
                                                    <input type="submit" value="Добавяне на продукт" className="btn btn-primary" />
                                                </div>
                                            </div>
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
}