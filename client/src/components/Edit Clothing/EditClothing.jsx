import { useEffect, useState } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import * as clothesService from "../../services/clothesService"
import { editClothingValidationSchema } from '../../lib/validate';
import MetaTags from '../Meta Tags/MetaTags';

export default function EditClothing() {
    const navigate = useNavigate();
    const location = useLocation();
    const { clothingId } = useParams();
    const [clothing, setClothing] = useState({
        name: '',
        description: '',
        price: '',
        type: '',
        gender: '',
        category: '',
        model: '',
        frontImage: null,
        backImage: null,
    });

    const [frontImagePreview, setFrontImagePreview] = useState(null);
    const [backImagePreview, setBackImagePreview] = useState(null);

    const [originalImages, setOriginalImages] = useState({
        front: null,
        back: null
    });

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const [price, setPrice] = useState([]);

    useEffect(() => {
        clothesService.getOne(clothingId)
            .then(result => {
                setClothing(result.clothing);
                if (result.clothing.images?.length > 0) {
                    const frontImage = result.clothing.images.find(img => img.side === 'front');
                    const backImage = result.clothing.images.find(img => img.side === 'back');

                    if (frontImage) {
                        const frontPath = `https://fabric-bg.com/images-ftp${frontImage.path}.webp`;
                        setFrontImagePreview(frontPath);
                        setOriginalImages(prev => ({ ...prev, front: frontPath }));
                    }
                    if (backImage) {
                        const backPath = `https://fabric-bg.com/images-ftp${backImage.path}.webp`;
                        setBackImagePreview(backPath);
                        setOriginalImages(prev => ({ ...prev, back: backPath }));
                    }
                }
            });
    }, [clothingId]);

    useEffect(() => {
        clothesService.getPrice().then(setPrice);
    }, []);

    const editHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await editClothingValidationSchema.validate(clothing, { abortEarly: false });

            const formData = new FormData();

            Object.keys(clothing).forEach(key => {
                if (key !== 'frontImage' && key !== 'backImage' && key !== 'images') {
                    formData.append(key, clothing[key]);
                }
            });

            const removedImages = [];

            const typesWithOneImage = ['KIT', 'TOWELS', 'BANDANAS'];
            const isChangedToOneImageType = typesWithOneImage.includes(clothing.type);

            if (isChangedToOneImageType) {
                const oldBackImage = clothing.images?.find(img => img.side === 'back');
                if (oldBackImage) {
                    removedImages.push(oldBackImage.path);
                }
            }

            if (clothing.frontImage instanceof File) {
                formData.append('frontImage', clothing.frontImage);
                const oldFrontImage = clothing.images?.find(img => img.side === 'front');
                if (oldFrontImage) {
                    removedImages.push(oldFrontImage.path);
                }
            }

            if (clothing.backImage instanceof File && !isChangedToOneImageType) {
                formData.append('backImage', clothing.backImage);
                const oldBackImage = clothing.images?.find(img => img.side === 'back');
                if (oldBackImage) {
                    removedImages.push(oldBackImage.path);
                }
            }

            if (removedImages.length > 0) {
                formData.append('removedImages', removedImages.join(','));
            }

            console.log('Removed images:', removedImages);

            await clothesService.edit(clothingId, formData);
            navigate(`/clothing/details/${clothingId}`);
        } catch (error) {
            if (error.name === 'ValidationError') {
                const validationErrors = {};
                error.inner.forEach((err) => {
                    validationErrors[err.path] = err.message;
                });
                setErrors(validationErrors);
                return;
            }
            console.error(error);
            setErrors({ submit: 'Възникна грешка при обновяването на продукта.' });
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'type') {
            setClothing(state => ({
                ...state,
                [name]: value,
                price: price[value]?.toFixed(2) || ''
            }));
        } else {
            setClothing(state => ({
                ...state,
                [name]: value
            }));
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const name = e.target.name;

        if (file) {
            // Update the clothing state with the file
            setClothing(state => ({
                ...state,
                [name]: file
            }));

            // Create preview
            const reader = new FileReader();
            reader.onload = (event) => {
                if (name === 'frontImage') {
                    setFrontImagePreview(event.target.result);
                } else if (name === 'backImage') {
                    setBackImagePreview(event.target.result);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCancelImage = (side) => {
        if (side === 'front') {
            setFrontImagePreview(originalImages.front);
            setClothing(state => ({
                ...state,
                frontImage: null
            }));
            // Reset file input
            const input = document.getElementById('frontImage');
            if (input) input.value = '';
        } else {
            setBackImagePreview(originalImages.back);
            setClothing(state => ({
                ...state,
                backImage: null
            }));
            // Reset file input
            const input = document.getElementById('backImage');
            if (input) input.value = '';
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
            <MetaTags
                title="Fabric | Редактиране на продукт"
                description="Редактирайте продукт във Fabric. Актуализирайте информацията, снимките и цените на вашите дрехи за по-добро представяне в каталога."
                keywords="Fabric, редактиране на продукт, дрехи, мода, онлайн магазин, снимки, цени, актуализация, edit product, clothes, fashion, online store, update, images, prices"
            />
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
                            <Link to={`/clothing/edit/${clothingId}`}>Промяна на продукт</Link>{" "}
                        </li>
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
                            {/* <div className="swiper-viewport">
                                <div id="banner0" className="swiper-container  single-banner ">
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
                                    <div className="swiper-pagination" />
                                </div>
                            </div> */}
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
                            <h1>Промяна на продукт</h1>
                            {errors.submit && (
                                <div className="alert alert-danger" role="alert" style={{ textAlign: 'center' }}>
                                    {errors.submit}
                                </div>
                            )}
                            {isLoading && <div style={{ margin: '30% auto 0 auto' }} className="text-center"><img src="/images/loader.gif" alt="Loading..." /></div>}
                            {!isLoading && (
                                <form className="form-horizontal" onSubmit={editHandler}>
                                    <fieldset id="account">
                                        <div className="form-group required">
                                            <label className="col-sm-2 control-label" htmlFor="name">Име</label>
                                            <div className="col-sm-10">
                                                <input
                                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    placeholder="Име"
                                                    value={clothing.name}
                                                    onChange={handleChange}
                                                />
                                                {errors.name && (
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
                                                    className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                                                    id="description"
                                                    name="description"
                                                    placeholder="Описание"
                                                    value={clothing.description}
                                                    onChange={handleChange}
                                                    rows="4"
                                                ></textarea>
                                                {errors.description && (
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
                                                    className={`form-control ${errors.type ? 'is-invalid' : ''}`}
                                                    id="type"
                                                    name="type"
                                                    value={clothing.type}
                                                    onChange={handleChange}
                                                >
                                                    <option value="" hidden>Изберете тип</option>
                                                    <option value="T_SHIRT">Тениска</option>
                                                    <option value="LONG_T_SHIRT">Блуза с дълъг ръкав</option>
                                                    <option value="SHORTS">Къси панталони</option>
                                                    <option value="SWEATSHIRT">Суитчъри</option>
                                                    <option value="KIT">Комплекти</option>
                                                    <option value="TOWELS">Хавлия</option>
                                                    <option value="BANDANAS">Бандана</option>
                                                </select>
                                                {errors.type && (
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
                                                    value={Number(clothing.price).toFixed(2)}
                                                    onChange={handleChange}
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
                                                    className={`form-control ${errors.category ? 'is-invalid' : ''}`}
                                                    id="category"
                                                    name="category"
                                                    value={clothing.category}
                                                    onChange={handleChange}
                                                >
                                                    <option value="" hidden>Изберете категория</option>
                                                    <option value="ABSTRACT">Абстрактни</option>
                                                    <option value="MARTIAL_SPORTS">Бойни спортове</option>
                                                    <option value="GAME_OF_THRONES">Гейм Аф Тронс</option>
                                                    <option value="DOGS">Кучета</option>
                                                    <option value="CARS">Автомобили</option>
                                                    <option value="CHRISTMAS">Коледни</option>
                                                    <option value="TRUCKS">Камиони</option>
                                                    <option value="HUNTING">Лов</option>
                                                    <option value="MOTORCYCLES">Мотоциклети</option>
                                                    <option value="MUSIC">Музика</option>
                                                    <option value="NBA">NBA</option>
                                                    <option value="PATRIOTIC">Патриотични</option>
                                                    <option value="WORK">Работни</option>
                                                    <option value="FISHING">Риболов</option>
                                                    <option value="UEFA_EURO_2024">УЕФА ЕВРО 2024</option>
                                                    <option value="MOVIES">Филми</option>
                                                    <option value="GYM">Фитнес и свобдно време</option>
                                                    <option value="FORMULA_1">Формула 1</option>
                                                    <option value="FOOTBALL">Футбол</option>
                                                    <option value="OTHERS">Други</option>
                                                </select>
                                                {errors.category && (
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
                                                        className={`form-control model-field ${errors.model ? 'is-invalid' : ''}`}
                                                        type="text"
                                                        id="model"
                                                        name="model"
                                                        placeholder="Модел"
                                                        onChange={handleChange}
                                                        value={clothing.model.slice(0, 4)}
                                                        maxLength="3"
                                                    />
                                                </div>
                                                {errors.model && (
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
                                            <label className="col-sm-2 control-label" htmlFor="frontImage">
                                                Снимка отпред
                                            </label>
                                            <div className="col-sm-10">
                                                <input
                                                    className={`form-control ${errors.frontImage ? 'is-invalid' : ''}`}
                                                    type="file"
                                                    id="frontImage"
                                                    name="frontImage"
                                                    accept="image/*"
                                                    onChange={handleFileChange}
                                                />
                                                {frontImagePreview && (
                                                    <div style={{ marginTop: "10px", position: "relative" }}>
                                                        <img
                                                            src={frontImagePreview}
                                                            alt="Front Preview"
                                                            style={{
                                                                width: "325px",
                                                                height: "400px",
                                                                objectFit: "cover",
                                                                border: "2px solid black",
                                                                borderRadius: "20px",
                                                                padding: "10px",
                                                            }}
                                                        />
                                                        {clothing.frontImage instanceof File && (
                                                            <button
                                                                type="button"
                                                                className="btn btn-danger cancel-change"
                                                                onClick={() => handleCancelImage('front')}
                                                            >
                                                                X
                                                            </button>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        {clothing.type !== "KIT" && clothing.type !== "TOWELS" && clothing.type !== "BANDANAS" && (
                                            <div className="form-group required">
                                                <label className="col-sm-2 control-label" htmlFor="backImage">
                                                    Снимка отзад
                                                </label>
                                                <div className="col-sm-10">
                                                    <input
                                                        className={`form-control ${errors.backImage ? 'is-invalid' : ''}`}
                                                        type="file"
                                                        id="backImage"
                                                        name="backImage"
                                                        accept="image/*"
                                                        onChange={handleFileChange}
                                                    />
                                                    {backImagePreview && (
                                                        <div style={{ marginTop: "10px", position: "relative" }}>
                                                            <img
                                                                src={backImagePreview}
                                                                alt="Back Preview"
                                                                style={{
                                                                    width: "325px",
                                                                    height: "400px",
                                                                    objectFit: "cover",
                                                                    border: "2px solid black",
                                                                    borderRadius: "20px",
                                                                    padding: "10px",
                                                                }}
                                                            />
                                                            {clothing.backImage instanceof File && (
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-danger cancel-change"
                                                                    onClick={() => handleCancelImage('back')}
                                                                >
                                                                    X
                                                                </button>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </fieldset>
                                    <div className="buttons">
                                        <div className="pull-right"><input type="submit" value="Промяна на продукт" className="btn btn-primary" /></div>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};