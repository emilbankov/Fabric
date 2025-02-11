import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import * as clothesService from "../../services/clothesService"
import { categoryTranslations, typeTranslations } from "../../lib/dictionary";
import AuthContext from "../../contexts/AuthProvider";

export default function Details() {
    const location = useLocation();
    const { isAdmin } = useContext(AuthContext);
    const { clothingId } = useParams();
    const [clothing, setClothing] = useState({});
    const [currentImage, setCurrentImage] = useState("");
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedType, setSelectedType] = useState(null);
    const [newest, setNewest] = useState({});
    const [mostSold, setMostSold] = useState({});
    const [gender, setGender] = useState("Men");

    const sizeOptions = {
        Men: ["S", "M", "L", "XL", "2XL", "3XL", "5XL (+2.00лв.)"],
        Women: ["XS", "S", "M", "L", "XL"],
        Kids: ["98", "110", "122", "134", "146", "158"]
    };

    useEffect(() => {
        Promise.all([
            clothesService.getOne(clothingId),
            clothesService.getNewest(),
            clothesService.getMostSold(),
        ])
            .then(([clothing, newest, mostSold]) => {
                setClothing(clothing);
                setNewest(newest);
                setMostSold(mostSold);
                if (clothing?.clothing?.images?.length > 0) {
                    setCurrentImage(clothing.clothing.images[0].path);
                }
            })
            .catch(err => {
                console.error("Error fetching data:", err);
            });
    }, [clothingId]);

    const handleImageClick = (imagePath) => {
        setCurrentImage(imagePath);
    };

    const handleSelect = (option, type) => {
        if (type === "size") {
            setSelectedSize(option);
        } else {
            setSelectedType(option);
        }
    };

    const calculatePrice = () => {
        let price = clothing.clothing.price;

        if (selectedSize === "5XL") {
            if (clothing.clothing.type === "T_SHIRT") {
                price += 2;
            } else {
                price += 5;
            }
        }

        if (selectedType === "Ватирана блуза с дълъг ръкав (+8.00лв.)") {
            price += 8;
        }

        return price.toFixed(2);
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
    }, [location.pathname, clothing.clothing, newest.clothes, mostSold.clothes]);

    return (
        <>
            <div className="product-product-47   layout-2 left-col">
                <div className="content_headercms_bottom" />
                <div className="content-top-breadcum">
                    <div className="container">
                        <div className="row">
                            <div id="title-content"></div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <ul className="breadcrumb">
                        <li>
                            <Link to="/">
                                <i className="fa fa-home" />
                            </Link>
                        </li>
                        <li>
                            <Link to={`/clothing/details/${clothingId}`}>Details</Link>
                        </li>
                    </ul>
                    <div className="row">
                        <aside id="column-left" className="col-sm-3 hidden-xs">
                            <div className="box">
                                <div className="box-heading">Information</div>
                                <div className="list-group">
                                    <a className="list-group-item" href="information&information_id=4">
                                        About Us{" "}
                                    </a>
                                    <a className="list-group-item" href="information&information_id=6">
                                        Delivery Information{" "}
                                    </a>
                                    <a className="list-group-item" href="information&information_id=3">
                                        Privacy Policy{" "}
                                    </a>
                                    <a className="list-group-item" href="information&information_id=5">
                                        Terms &amp; Conditions{" "}
                                    </a>
                                    <a className="list-group-item" href="contact">
                                        Contact Us{" "}
                                    </a>
                                    <a className="list-group-item" href="sitemap">
                                        Site Map{" "}
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-viewport">
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
                                    {/* If we need pagination */}
                                    <div className="swiper-pagination" />
                                </div>
                            </div>
                            <div className="box latest">
                                <div className="box-heading">Най-продавани</div>
                                <div className="box-content">
                                    <div className="box-product  productbox-grid" id=" latest-grid">
                                        {mostSold.clothes && mostSold.clothes.slice(0, 3).map((item) => (
                                            <div className="product-items" key={item.id}>
                                                <div className="product-items">
                                                    <div className="product-block product-thumb transition">
                                                        <div className="product-block-inner">
                                                            <div className="image">
                                                                <a href={`/clothing/details/${item.id}`}>
                                                                    <img
                                                                        src={`https://res.cloudinary.com/dfttdd1vq/image/upload/${item.images[0].path}`}
                                                                        title="tote bags for women"
                                                                        alt="tote bags for women"
                                                                        className="img-responsive reg-image"
                                                                    />
                                                                    {item.type !== "KIT" && (
                                                                        <img
                                                                            src={`https://res.cloudinary.com/dfttdd1vq/image/upload/${item.images[1].path}`}
                                                                            title="tote bags for women"
                                                                            alt="tote bags for women"
                                                                            className="img-responsive hover-image"
                                                                        />
                                                                    )}
                                                                </a>
                                                            </div>
                                                            <div className="product-details">
                                                                <div className="caption">
                                                                    <h4>
                                                                        <a href="=49 ">{item.name}</a>
                                                                    </h4>
                                                                    <p className="price">
                                                                        {item.price.toFixed(2)} лв.
                                                                    </p>
                                                                </div>
                                                                <div className="product_hover_block">
                                                                    <div className="action">
                                                                        <button
                                                                            type="button"
                                                                            className="cart_button"
                                                                            title="Add to Cart"
                                                                        >
                                                                            <i
                                                                                className="fa fa-shopping-cart"
                                                                                area-hidden="true"
                                                                            />
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <span
                                className="latest_default_width"
                                style={{ display: "none", visibility: "hidden" }}
                            />
                        </aside>
                        <div id="content" className="col-sm-9 productpage">

                            {clothing.clothing && (
                                <div className="row">
                                    <div id="content" className="col-sm-9 productpage">
                                        <div className="row">
                                            <div className="col-sm-5 product-left">
                                                <div className="product-info">
                                                    <div className="left product-image thumbnails">
                                                        <div className="image">
                                                            <a
                                                                className="thumbnail"
                                                                href={`https://res.cloudinary.com/dfttdd1vq/image/upload/${currentImage}`}
                                                                title={clothing.clothing.name}
                                                            >
                                                                <img
                                                                    id="tmzoom"
                                                                    src={`https://res.cloudinary.com/dfttdd1vq/image/upload/${currentImage}`}
                                                                    data-zoom-image={`https://res.cloudinary.com/dfttdd1vq/image/upload/${currentImage}`}
                                                                    title={clothing.clothing.name}
                                                                    alt={clothing.clothing.name}
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="additional-carousel">
                                                            <div className="customNavigation">
                                                                <span className="fa prev fa-arrow-left">&nbsp;</span>
                                                                <span className="fa next fa-arrow-right">&nbsp;</span>
                                                            </div>
                                                            <div id="additional-carousel" className="image-additional product-carousel">
                                                                {clothing.clothing.images && clothing.clothing.images.map((image, index) => (
                                                                    <div className="slider-item" key={index}>
                                                                        <div className="product-block">
                                                                            <a
                                                                                href="#"
                                                                                title={image.side}
                                                                                className="elevatezoom-gallery"
                                                                                onClick={(e) => {
                                                                                    e.preventDefault();
                                                                                    handleImageClick(image.path)
                                                                                }}
                                                                            >
                                                                                <img
                                                                                    src={`https://res.cloudinary.com/dfttdd1vq/image/upload/${image.path}`}
                                                                                    width={74}
                                                                                    height={74}
                                                                                    title={image.side}
                                                                                    alt={image.side}
                                                                                />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                            <span
                                                                className="additional_default_width"
                                                                style={{ display: "none", visibility: "hidden" }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 product-right">
                                                <h3 className="product-title">{typeTranslations[clothing.clothing.type]} {clothing.clothing.name} #{clothing.clothing.model}</h3>
                                                <div className="description">
                                                    <table className="product-description">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <span className="desc">Модел:</span>
                                                                </td>
                                                                <td className="description-right">
                                                                    <a href="?route=product/manufacturer/info&manufacturer_id=7">
                                                                        #{clothing.clothing.model}
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <span className="desc">Пол:</span>
                                                                </td>
                                                                <td className="description-right">М/Ж/Д</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <span className="desc">Категория</span>{" "}
                                                                </td>
                                                                <td className="description-right">{categoryTranslations[clothing.clothing.category]}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <span className="desc">Наличност:</span>{" "}
                                                                </td>
                                                                <td className="description-right">В наличност</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <ul className="list-unstyled">
                                                    <li><h4>Цена: {calculatePrice()} лв.</h4></li>
                                                    <li className="phone"><i className="fas fa-phone"></i>{" "}За бърза поръчка: +359 898 739 178 (08-17ч.)</li>
                                                    <li className="rewardpoint"><i className="fas fa-shipping-fast"></i> Безплатна доставка над 100 лв.</li>
                                                </ul>
                                                <div id="product">
                                                    <h3 className="product-option">Налични опции</h3>

                                                    <div className={`options-container ${clothing.clothing.type !== "T_SHIRT" && "last"}`}>
                                                        <span className="desc">Избери пол:</span>
                                                        <select style={{ marginBottom: "15px" }} className="form-control" value={gender} onChange={(e) => setGender(e.target.value)}>
                                                            <option value="Men">Мъжки</option>
                                                            <option value="Women">Дамски</option>
                                                            <option value="Kids">Детски</option>
                                                        </select>

                                                        <div className="options-container">
                                                            <span className="desc">Размер: </span>
                                                            <div className="options">
                                                                {sizeOptions[gender].map(size => (
                                                                    <div key={size}
                                                                        className={`option ${selectedSize === size ? "selected" : ""}`}
                                                                        onClick={() => setSelectedSize(size)}
                                                                    >
                                                                        {size}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {clothing.clothing.type === "T_SHIRT" && (
                                                        <div className="options-container last">
                                                            <span className="desc">Вид: </span>
                                                            <div className="options">
                                                                {["Тениска с къс ръкав", "Ватирана блуза с дълъг ръкав (+8.00лв.)"].map(type => (
                                                                    <div key={type}
                                                                        className={`option ${selectedType === type ? "selected" : ""}`}
                                                                        onClick={() => handleSelect(type, "type")}
                                                                    >
                                                                        {type}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}

                                                    <div className="form-group qty">
                                                        <label className="control-label" htmlFor="input-quantity">
                                                            Кол
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="quantity"
                                                            defaultValue={1}
                                                            size={2}
                                                            id="input-quantity"
                                                            className="form-control"
                                                        />
                                                        <input type="hidden" name="product_id" defaultValue={47} />
                                                        <button
                                                            type="button"
                                                            id="button-cart"
                                                            className="btn btn-primary btn-lg btn-block"
                                                        >
                                                            Добави в количка
                                                        </button>
                                                        <div className="btn-group prd_page">
                                                            <button
                                                                type="button"
                                                                className="btn btn-default wishlist"
                                                                title="Add to Wish List"
                                                            >
                                                                Add to Wish List
                                                            </button>
                                                            {isAdmin && (
                                                                <div>
                                                                    <button
                                                                        type="button"
                                                                        id="button-delete"
                                                                        className="btn btn-danger btn-lg btn-block"
                                                                    >
                                                                        Delete
                                                                    </button>
                                                                    <Link
                                                                        to={`/clothing/edit/${clothingId}`}
                                                                        type="button"
                                                                        id="button-edit"
                                                                        className="btn btn-primary btn-lg btn-block btn-secondary"
                                                                    >
                                                                        Edit
                                                                    </Link>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div
                                                    className="addthis_toolbox addthis_default_style"
                                                    data-url="=47"
                                                >
                                                    <a className="addthis_button_facebook_like" />{" "}
                                                    <a className="addthis_button_tweet" />{" "}
                                                    <a className="addthis_button_pinterest_pinit" />{" "}
                                                    <a className="addthis_counter addthis_pill_style" />
                                                </div>
                                            </div>
                                            <div className="content_product_block" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {clothing.clothing && (
                                <div id="tabs_info" className="product-tab col-sm-12">
                                    <ul className="nav nav-tabs">
                                        <li className="active">
                                            <a href="#tab-description" data-toggle="tab">
                                                Описание
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#tab-specification" data-toggle="tab">
                                                Размери
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#tab-review" data-toggle="tab">
                                                Ревюта (1)
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane active" id="tab-description">
                                            <p className="product-desc">
                                                {clothing.clothing.description}
                                            </p>
                                        </div>
                                        <div className="tab-pane" id="tab-specification">
                                            <h3 className="ta-c">Мъжки / Женски</h3>
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>Размер</th>
                                                        <th>Мъжка Тениска - Ширина (см)</th>
                                                        <th>Мъжка Тениска - Дължина (см)</th>
                                                        <th>Дамска Тениска - Ширина (см)</th>
                                                        <th>Дамска Тениска - Дължина (см)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>XS</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>38</td>
                                                        <td>59</td>
                                                    </tr>
                                                    <tr>
                                                        <td>S</td>
                                                        <td>50</td>
                                                        <td>69</td>
                                                        <td>40</td>
                                                        <td>60</td>
                                                    </tr>
                                                    <tr>
                                                        <td>M</td>
                                                        <td>52</td>
                                                        <td>71</td>
                                                        <td>42</td>
                                                        <td>60</td>
                                                    </tr>
                                                    <tr>
                                                        <td>L</td>
                                                        <td>54</td>
                                                        <td>72</td>
                                                        <td>44</td>
                                                        <td>61</td>
                                                    </tr>
                                                    <tr>
                                                        <td>XL</td>
                                                        <td>56</td>
                                                        <td>74</td>
                                                        <td>47</td>
                                                        <td>62</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2XL</td>
                                                        <td>58</td>
                                                        <td>76</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3XL</td>
                                                        <td>60</td>
                                                        <td>79</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <h3 className="ta-c">Детски</h3>
                                            <table className="table table-bordered" style={{ width: '100%' }}>
                                                <thead>
                                                    <tr>
                                                        <th>Размер</th>
                                                        <th>Години</th>
                                                        <th>Ширина (см)</th>
                                                        <th>Дължина (см)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>98</td>
                                                        <td>2-3</td>
                                                        <td>28</td>
                                                        <td>39</td>
                                                    </tr>
                                                    <tr>
                                                        <td>110</td>
                                                        <td>4-5</td>
                                                        <td>30</td>
                                                        <td>42</td>
                                                    </tr>
                                                    <tr>
                                                        <td>122</td>
                                                        <td>6-7</td>
                                                        <td>35</td>
                                                        <td>46</td>
                                                    </tr>
                                                    <tr>
                                                        <td>134</td>
                                                        <td>8-9</td>
                                                        <td>39</td>
                                                        <td>52</td>
                                                    </tr>
                                                    <tr>
                                                        <td>146</td>
                                                        <td>10-11</td>
                                                        <td>42</td>
                                                        <td>55</td>
                                                    </tr>
                                                    <tr>
                                                        <td>158</td>
                                                        <td>12-13</td>
                                                        <td>44</td>
                                                        <td>58</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="tab-pane" id="tab-review">
                                            <form className="form-horizontal" id="form-review">
                                                <div id="review" />
                                                <h4>Write a review</h4>
                                                <div className="form-group required">
                                                    <div className="col-sm-12">
                                                        <label className="control-label" htmlFor="input-name">
                                                            Your Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            defaultValue=""
                                                            id="input-name"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group required">
                                                    <div className="col-sm-12">
                                                        <label className="control-label" htmlFor="input-review">
                                                            Your Review
                                                        </label>
                                                        <textarea
                                                            name="text"
                                                            rows={5}
                                                            id="input-review"
                                                            className="form-control"
                                                            defaultValue={""}
                                                        />
                                                        <div className="help-block">
                                                            <span className="text-danger">Note:</span> HTML is not
                                                            translated!
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group required">
                                                    <div className="col-sm-12">
                                                        <label className="control-label">Rating</label>
                                                        &nbsp;&nbsp;&nbsp; Bad&nbsp;
                                                        <input type="radio" name="rating" defaultValue={1} />
                                                        &nbsp;
                                                        <input type="radio" name="rating" defaultValue={2} />
                                                        &nbsp;
                                                        <input type="radio" name="rating" defaultValue={3} />
                                                        &nbsp;
                                                        <input type="radio" name="rating" defaultValue={4} />
                                                        &nbsp;
                                                        <input type="radio" name="rating" defaultValue={5} />
                                                        &nbsp;Good
                                                    </div>
                                                </div>
                                                <fieldset>
                                                    <legend>Captcha</legend>
                                                    <div className="form-group required">
                                                        <label
                                                            className="col-sm-3 control-label"
                                                            htmlFor="input-captcha"
                                                        >
                                                            Enter the code in the box below
                                                        </label>
                                                        <div className="col-sm-8">
                                                            <input
                                                                type="text"
                                                                name="captcha"
                                                                id="input-captcha"
                                                                className="form-control"
                                                            />
                                                            <img
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                </fieldset>
                                                <div className="buttons clearfix">
                                                    <div className="pull-right">
                                                        <button
                                                            type="button"
                                                            id="button-review"
                                                            data-loading-text="Loading..."
                                                            className="btn btn-primary"
                                                        >
                                                            Continue
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div id="content" className="col-sm-9 productpage">
                            {newest.clothes && mostSold.clothes && (
                                <div className="hometab box">
                                    <div className="container">
                                        <div className="row">
                                            <div className="tab-head">
                                                <div className="hometab-heading box-heading">Нови и популярни артикули</div>
                                                <div id="tabs" className="htabs">
                                                    <ul className="etabs">
                                                        <li className="tab"><a href="#tab-latest">Най-нови</a></li>
                                                        <li className="tab"></li>
                                                        <li className="tab"><a href="#tab-special">Най-продавани</a></li>
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
                                                        <div className="box-product product-carousel" id="tablatest-carousel">
                                                            {newest.clothes && newest.clothes.map((clothing) => (
                                                                <div className="slider-item" key={clothing.id}>
                                                                    <div className="product-block product-thumb transition">
                                                                        <div className="product-block-inner">
                                                                            <div className="image">
                                                                                <Link to={`/clothing/details/${clothing.id}`}>
                                                                                    <img
                                                                                        src={`https://res.cloudinary.com/dfttdd1vq/image/upload/${clothing.images[0].path}`}
                                                                                        title={clothing.name}
                                                                                        alt={clothing.name}
                                                                                        className="img-responsive reg-image"
                                                                                    />
                                                                                    {clothing.type !== "KIT" && (
                                                                                        <img
                                                                                            src={`https://res.cloudinary.com/dfttdd1vq/image/upload/${clothing.images[1].path}`}
                                                                                            title={clothing.name}
                                                                                            alt={clothing.name}
                                                                                            className="img-responsive hover-image"
                                                                                        />
                                                                                    )}
                                                                                </Link>
                                                                                <div className="product_hover_block">
                                                                                    <div className="action">
                                                                                        <button
                                                                                            type="button"
                                                                                            className="cart_button"
                                                                                            onClick={() => cart.add(clothing.id)}
                                                                                            title="Add to Cart"
                                                                                        >
                                                                                            <i className="fa fa-shopping-cart" area-hidden="true" />
                                                                                        </button>
                                                                                        <button
                                                                                            className="wishlist"
                                                                                            type="button"
                                                                                            title="Add to Wish List"
                                                                                            onClick={() => cart.add(clothing.id)}
                                                                                        >
                                                                                            <i className="fa fa-heart" />
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="product-details">
                                                                                <div className="caption">
                                                                                    <h4>
                                                                                        <Link to={`/clothing/details/${clothing.id}`}>{clothing.name}</Link>
                                                                                    </h4>
                                                                                    <p className="price">
                                                                                        {clothing.price.toFixed(2)} лв.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
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
                                                        <div className="box-product  productbox-grid" id="tabspecial-grid">
                                                            {mostSold.clothes && mostSold.clothes.map((product) => (
                                                                <div className="product-items" key={product.id}>
                                                                    <div className="product-block product-thumb transition">
                                                                        <div className="product-block-inner">
                                                                            <div className="image">
                                                                                <Link to={`/clothing/details/${product.id}`}>
                                                                                    <img
                                                                                        src={`https://res.cloudinary.com/dfttdd1vq/image/upload/${product.images[0].path}`}
                                                                                        title={product.name}
                                                                                        alt={product.name}
                                                                                        className="img-responsive reg-image"
                                                                                    />
                                                                                    {product.type !== "KIT" && (
                                                                                        <img
                                                                                            src={`https://res.cloudinary.com/dfttdd1vq/image/upload/${product.images[1].path}`}
                                                                                            title={product.name}
                                                                                            alt={product.name}
                                                                                            className="img-responsive hover-image"
                                                                                        />
                                                                                    )}
                                                                                </Link>
                                                                                <span className="saleicon sale">Sale</span>
                                                                                <div className="product_hover_block">
                                                                                    <div className="action">
                                                                                        <button
                                                                                            type="button"
                                                                                            className="cart_button"
                                                                                            onClick={() => cart.add(product.id)}
                                                                                            title="Add to Cart"
                                                                                        >
                                                                                            <i className="fa fa-shopping-cart" aria-hidden="true" />
                                                                                        </button>
                                                                                        <button
                                                                                            className="wishlist"
                                                                                            type="button"
                                                                                            title="Add to Wish List"
                                                                                            onClick={() => cart.add(product.id)}
                                                                                        >
                                                                                            <i className="fa fa-heart" />
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="product-details">
                                                                                <div className="caption">
                                                                                    <h4>
                                                                                        <Link to={`/clothing/details/${product.id}`}>
                                                                                            {product.name}
                                                                                        </Link>
                                                                                    </h4>
                                                                                    <p className="price">
                                                                                        <span className="price-new">{product.price.toFixed(2)} лв.</span>
                                                                                        {/* <span className="price-old">$122.00</span> */}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
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
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};