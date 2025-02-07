import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import AuthContext from "../../contexts/AuthProvider";

export default function AddClothing() {
    let location = useLocation();
    const { addClothHandler } = useContext(AuthContext);

    const { values, onChange, onSubmit } = useForm(addClothHandler, {
        name: '',
        description: '',
        price: '',
        type: '',
        gender: '',
        category: '',
        model: '',
        frontImage: '',
        backImage: '',
    });

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
                            <Link to="/register">Добавяне на продукт</Link>{" "}
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
                            <h1>Добавяне на продукт</h1>
                            <form className="form-horizontal" onSubmit={onSubmit}>
                                <fieldset id="account">
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="name">Име</label>
                                        <div className="col-sm-10">
                                            <input
                                                className="form-control"
                                                type="text"
                                                id="name"
                                                name="name"
                                                placeholder="Име"
                                                onChange={onChange}
                                                values={values.name}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="description">Описание</label>
                                        <div className="col-sm-10">
                                            <textarea
                                                className="form-control"
                                                id="description"
                                                name="description"
                                                placeholder="Описание"
                                                onChange={onChange}
                                                value={values.description}
                                                rows="4"
                                            ></textarea>
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
                                                onChange={onChange}
                                                value={values.price}
                                                step="0.01"
                                                min="0"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="type">Тип</label>
                                        <div className="col-sm-10">
                                            <select
                                                className="form-control"
                                                id="type"
                                                name="type"
                                                onChange={onChange}
                                                value={values.type}
                                            >
                                                <option value="" hidden>Изберете тип</option>
                                                <option value="T_SHIRT">Тениска</option>
                                                <option value="LONG_T_SHIRT">Блуза с дълъг ръкав</option>
                                                <option value="SHORTS">Къси панталони</option>
                                                <option value="SWEATSHIRT">Суитчъри</option>
                                                <option value="KIT">Комплекти</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="gender">Пол</label>
                                        <div className="col-sm-10">
                                            <select
                                                className="form-control"
                                                id="gender"
                                                name="gender"
                                                onChange={onChange}
                                                value={values.gender}
                                            >
                                                <option value="" hidden>Изберете пол</option>
                                                <option value="MALE">Мъж</option>
                                                <option value="FEMALE">Жена</option>
                                                <option value="CHILD">Дете</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="category">Категория</label>
                                        <div className="col-sm-10">
                                            <select
                                                className="form-control"
                                                id="category"
                                                name="category"
                                                onChange={onChange}
                                                value={values.category}
                                            >
                                                <option value="" hidden>Изберете категория</option>
                                                <option value="UEFA_EURO_2024">УЕФА ЕВРО 2024</option>
                                                <option value="PATRIOTIC">Патриотични</option>
                                                <option value="TRUCKS">Камиони</option>
                                                <option value="MOVIES">Филми</option>
                                                <option value="CHRISTMAS">Коледа</option>
                                                <option value="FOOTBALL">Футбол</option>
                                                <option value="MOTORCYCLES">Мотори</option>
                                                <option value="GAME_OF_THRONES">Гейм Аф Тронс</option>
                                                <option value="DOGS">Кучета</option>
                                                <option value="MARTIAL_SPORTS">Бойни спортове</option>
                                                <option value="MUSIC">Музика</option>
                                                <option value="CARS">Коли</option>
                                                <option value="HUNTING">Лов</option>
                                                <option value="FISHING">Риболов</option>
                                                <option value="FORMULA_1">Формула 1</option>
                                                <option value="WORK">Работни</option>
                                                <option value="OTHERS">Други</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="model">Модел</label>
                                        <div className="col-sm-10">
                                            <input
                                                className="form-control"
                                                type="text"
                                                id="model"
                                                name="model"
                                                placeholder="Модел"
                                                onChange={onChange}
                                                values={values.model}
                                            />
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend>Качване на снимки</legend>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="frontImage">Снимка отпред</label>
                                        <div className="col-sm-10">
                                            <input
                                                className="form-control"
                                                type="file"
                                                id="frontImage"
                                                name="frontImage"
                                                accept="image/*"
                                                onChange={onChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="backImage">Снимка отзад</label>
                                        <div className="col-sm-10">
                                            <input
                                                className="form-control"
                                                type="file"
                                                id="backImage"
                                                name="backImage"
                                                accept="image/*"
                                                onChange={onChange}
                                            />
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="buttons">
                                    <div className="pull-right"><input type="submit" value="Добавяне на продукт" className="btn btn-primary" /></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};