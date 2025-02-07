import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import * as clothesService from "../../services/clothesService"
import { categoryTranslations, modelType, typeTranslations } from "../../lib/dictionary";

export default function Details() {
    const location = useLocation();
    const { clothingId } = useParams();
    const [clothing, setClothing] = useState({});
    const [currentImage, setCurrentImage] = useState("");
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedType, setSelectedType] = useState(null);

    useEffect(() => {
        clothesService.getOne(clothingId)
            .then(result => {
                setClothing(result);
                if (result?.clothing?.images?.length > 0) {
                    setCurrentImage(result.clothing.images[0].path);
                }
            });
    }, [clothingId]);

    const handleImageClick = (imagePath) => {
        setCurrentImage(imagePath);
    };

    console.log(clothing.clothing);

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
    }, [location.pathname, clothing.clothing]);

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
                                <div className="box-heading">Latest Product</div>
                                <div className="box-content">
                                    <div className="box-product  productbox-grid" id=" latest-grid">
                                        <div className="product-items">
                                            <div className="product-items">
                                                <div className="product-block product-thumb transition">
                                                    <div className="product-block-inner">
                                                        <div className="image">
                                                            <a href="=49">
                                                                <img
                                                                    src="/images/8-70x70.jpg"
                                                                    title="tote bags for women"
                                                                    alt="tote bags for women"
                                                                    className="img-responsive reg-image"
                                                                />
                                                                <img
                                                                    className="img-responsive hover-image"
                                                                    src="/images/13-70x70.jpg"
                                                                    title="tote bags for women"
                                                                    alt="tote bags for women"
                                                                />
                                                            </a>
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
                                                                    <a href="=49 ">tote bags for women </a>
                                                                </h4>
                                                                <p className="price">
                                                                    $241.99
                                                                    <span className="price-tax">Ex Tax: $199.99</span>
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
                                                                    <div className="quickview-button">
                                                                        <a
                                                                            className="quickbox"
                                                                            title="Add To quickview"
                                                                            href="=49"
                                                                        >
                                                                            <i className="fa fa-eye" />
                                                                        </a>
                                                                    </div>
                                                                    <button
                                                                        className="wishlist"
                                                                        type="button"
                                                                        title="Add to Wish List "
                                                                    >
                                                                        <i className="fa fa-heart" />
                                                                    </button>
                                                                    <button
                                                                        className="compare_button"
                                                                        type="button"
                                                                        title="Add to compare "
                                                                    >
                                                                        <i className="fa fa-exchange" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-items">
                                            <div className="product-items">
                                                <div className="product-block product-thumb transition">
                                                    <div className="product-block-inner">
                                                        <div className="image">
                                                            <a href="=48">
                                                                <img
                                                                    src="/images/11-70x70.jpg"
                                                                    title="Men's lace up Shoes"
                                                                    alt="Men's lace up Shoes"
                                                                    className="img-responsive reg-image"
                                                                />
                                                                <img
                                                                    className="img-responsive hover-image"
                                                                    src="/images/17-70x70.jpg"
                                                                    title="Men's lace up Shoes"
                                                                    alt="Men's lace up Shoes"
                                                                />
                                                            </a>
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
                                                                    <a href="=48 ">Men's lace up Shoes </a>
                                                                </h4>
                                                                <p className="price">
                                                                    $122.00
                                                                    <span className="price-tax">Ex Tax: $100.00</span>
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
                                                                    <div className="quickview-button">
                                                                        <a
                                                                            className="quickbox"
                                                                            title="Add To quickview"
                                                                            href="=48"
                                                                        >
                                                                            <i className="fa fa-eye" />
                                                                        </a>
                                                                    </div>
                                                                    <button
                                                                        className="wishlist"
                                                                        type="button"
                                                                        title="Add to Wish List "
                                                                    >
                                                                        <i className="fa fa-heart" />
                                                                    </button>
                                                                    <button
                                                                        className="compare_button"
                                                                        type="button"
                                                                        title="Add to compare "
                                                                    >
                                                                        <i className="fa fa-exchange" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-items">
                                            <div className="product-items">
                                                <div className="product-block product-thumb transition">
                                                    <div className="product-block-inner">
                                                        <div className="image">
                                                            <a href="=47">
                                                                <img
                                                                    src="/images/4-70x70.jpg"
                                                                    title="round toe Shoes"
                                                                    alt="round toe Shoes"
                                                                    className="img-responsive reg-image"
                                                                />
                                                                <img
                                                                    className="img-responsive hover-image"
                                                                    src="/images/6-70x70.jpg"
                                                                    title="round toe Shoes"
                                                                    alt="round toe Shoes"
                                                                />
                                                            </a>
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
                                                                    <a href="=47 ">round toe Shoes </a>
                                                                </h4>
                                                                <p className="price">
                                                                    $122.00
                                                                    <span className="price-tax">Ex Tax: $100.00</span>
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
                                                                    <div className="quickview-button">
                                                                        <a
                                                                            className="quickbox"
                                                                            title="Add To quickview"
                                                                            href="=47"
                                                                        >
                                                                            <i className="fa fa-eye" />
                                                                        </a>
                                                                    </div>
                                                                    <button
                                                                        className="wishlist"
                                                                        type="button"
                                                                        title="Add to Wish List "
                                                                    >
                                                                        <i className="fa fa-heart" />
                                                                    </button>
                                                                    <button
                                                                        className="compare_button"
                                                                        type="button"
                                                                        title="Add to compare "
                                                                    >
                                                                        <i className="fa fa-exchange" />
                                                                    </button>
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
                                                                        #{clothing.clothing.model}{modelType[clothing.clothing.type]}
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
                                                        <span className="desc">Размер: </span>
                                                        <div className="options">
                                                            {["XS", "S", "M", "L", "XL", "2XL", "3XL"].map(size => (
                                                                <div key={size}
                                                                    className={`option ${selectedSize === size ? "selected" : ""}`}
                                                                    onClick={() => handleSelect(size, "size")}
                                                                >
                                                                    {size}
                                                                </div>
                                                            ))}
                                                            <div
                                                                key="5XL"
                                                                className={`option ${selectedSize === "5XL" ? "selected" : ""}`}
                                                                onClick={() => handleSelect("5XL", "size")}
                                                            >
                                                                {clothing.clothing.type === 'T_SHIRT' ? "5XL (+2.00лв.)" : "5XL (+5.00лв.)"}
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
                                                            <button
                                                                type="button"
                                                                id="button-delete"
                                                                className="btn btn-danger btn-lg btn-block"
                                                            >
                                                                Delete
                                                            </button>
                                                            <button
                                                                type="button"
                                                                id="button-edit"
                                                                className="btn btn-primary btn-lg btn-block btn-secondary"
                                                            >
                                                                Edit
                                                            </button>
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
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <td colSpan={2}>
                                                            <strong>Memory</strong>
                                                        </td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>test 1</td>
                                                        <td>16GB</td>
                                                    </tr>
                                                </tbody>
                                                <thead>
                                                    <tr>
                                                        <td colSpan={2}>
                                                            <strong>Processor</strong>
                                                        </td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>No. of Cores</td>
                                                        <td>4</td>
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
                                                                src="index.php?route=extension/captcha/basic/captcha"
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

                            <div className="box related_prd">
                                <div className="box-head">
                                    <div className="box-heading">Related Products</div>
                                </div>
                                <div className="box-content">
                                    <div id="products-related" className="related-products">
                                        <div className="customNavigation">
                                            <a className="fa prev fa-arrow-left">&nbsp;</a>
                                            <a className="fa next fa-arrow-right">&nbsp;</a>
                                        </div>
                                        <div
                                            className="box-product product-carousel"
                                            id="related-carousel"
                                        >
                                            <div className="slider-item">
                                                <div className="product-block product-thumb transition">
                                                    <div className="product-block-inner">
                                                        <div className="image">
                                                            <a href="=29">
                                                                <img
                                                                    src="/images/19-264x380.jpg"
                                                                    title="Self-Designed Tank Top"
                                                                    alt="Self-Designed Tank Top"
                                                                    className="img-responsive reg-image"
                                                                />
                                                                <img
                                                                    className="img-responsive hover-image"
                                                                    src="/images/20-264x380.jpg"
                                                                    title="Self-Designed Tank Top"
                                                                    alt="Self-Designed Tank Top"
                                                                />
                                                            </a>
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
                                                                    <div className="quickview-button">
                                                                        <a
                                                                            className="quickbox"
                                                                            title="Add To quickview"
                                                                            href="=29"
                                                                        >
                                                                            <i className="fa fa-eye" />
                                                                        </a>
                                                                    </div>
                                                                    <button
                                                                        className="wishlist"
                                                                        type="button"
                                                                        title="Add to Wish List "
                                                                    >
                                                                        <i className="fa fa-heart" />
                                                                    </button>
                                                                    <button
                                                                        className="compare_button"
                                                                        type="button"
                                                                        title="Add to compare "
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
                                                                    <a href="=29 ">Self-Designed Tank Top </a>
                                                                </h4>
                                                                <p className="price">
                                                                    $337.99
                                                                    <span className="price-tax">Ex Tax: $279.99</span>
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
                                                            <a href="=31">
                                                                <img
                                                                    src="/images/7-264x380.jpg"
                                                                    title="Propel IDP Sportstyle Sneakers"
                                                                    alt="Propel IDP Sportstyle Sneakers"
                                                                    className="img-responsive reg-image"
                                                                />
                                                                <img
                                                                    className="img-responsive hover-image"
                                                                    src="/images/12-264x380.jpg"
                                                                    title="Propel IDP Sportstyle Sneakers"
                                                                    alt="Propel IDP Sportstyle Sneakers"
                                                                />
                                                            </a>
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
                                                                    <div className="quickview-button">
                                                                        <a
                                                                            className="quickbox"
                                                                            title="Add To quickview"
                                                                            href="=31"
                                                                        >
                                                                            <i className="fa fa-eye" />
                                                                        </a>
                                                                    </div>
                                                                    <button
                                                                        className="wishlist"
                                                                        type="button"
                                                                        title="Add to Wish List "
                                                                    >
                                                                        <i className="fa fa-heart" />
                                                                    </button>
                                                                    <button
                                                                        className="compare_button"
                                                                        type="button"
                                                                        title="Add to compare "
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
                                                                    <a href="=31 ">Propel IDP Sportstyle Sneakers </a>
                                                                </h4>
                                                                <p className="price">
                                                                    $98.00
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
                                                            <a href="=32">
                                                                <img
                                                                    src="/images/12-264x380.jpg"
                                                                    title="Self-Design Sweater"
                                                                    alt="Self-Design Sweater"
                                                                    className="img-responsive reg-image"
                                                                />
                                                                <img
                                                                    className="img-responsive hover-image"
                                                                    src="/images/13-264x380.jpg"
                                                                    title="Self-Design Sweater"
                                                                    alt="Self-Design Sweater"
                                                                />
                                                            </a>
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
                                                                    <div className="quickview-button">
                                                                        <a
                                                                            className="quickbox"
                                                                            title="Add To quickview"
                                                                            href="=32"
                                                                        >
                                                                            <i className="fa fa-eye" />
                                                                        </a>
                                                                    </div>
                                                                    <button
                                                                        className="wishlist"
                                                                        type="button"
                                                                        title="Add to Wish List "
                                                                    >
                                                                        <i className="fa fa-heart" />
                                                                    </button>
                                                                    <button
                                                                        className="compare_button"
                                                                        type="button"
                                                                        title="Add to compare "
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
                                                                    <a href="=32 ">Self-Design Sweater </a>
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
                                                            <a href="=33">
                                                                <img
                                                                    src="/images/15-264x380.jpg"
                                                                    title="Pacsafe Intasafe  Laptop Backpack"
                                                                    alt="Pacsafe Intasafe  Laptop Backpack"
                                                                    className="img-responsive reg-image"
                                                                />
                                                                <img
                                                                    className="img-responsive hover-image"
                                                                    src="/images/3-264x380.jpg"
                                                                    title="Pacsafe Intasafe  Laptop Backpack"
                                                                    alt="Pacsafe Intasafe  Laptop Backpack"
                                                                />
                                                            </a>
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
                                                                    <div className="quickview-button">
                                                                        <a
                                                                            className="quickbox"
                                                                            title="Add To quickview"
                                                                            href="=33"
                                                                        >
                                                                            <i className="fa fa-eye" />
                                                                        </a>
                                                                    </div>
                                                                    <button
                                                                        className="wishlist"
                                                                        type="button"
                                                                        title="Add to Wish List "
                                                                    >
                                                                        <i className="fa fa-heart" />
                                                                    </button>
                                                                    <button
                                                                        className="compare_button"
                                                                        type="button"
                                                                        title="Add to compare "
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
                                                                    <a href="=33 ">Pacsafe Intasafe Laptop Backpack </a>
                                                                </h4>
                                                                <p className="price">
                                                                    $242.00
                                                                    <span className="price-tax">Ex Tax: $200.00</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider-item">
                                                <div className="product-block product-thumb transition">
                                                    <div className="product-block-inner">
                                                        <div className="image outstock">
                                                            <a href="=35">
                                                                <img
                                                                    src="/images/2-264x380.jpg"
                                                                    title="black v neck cashmere sweater"
                                                                    alt="black v neck cashmere sweater"
                                                                    className="img-responsive reg-image"
                                                                />
                                                                <img
                                                                    className="img-responsive hover-image"
                                                                    src="/images/20-264x380.jpg"
                                                                    title="black v neck cashmere sweater"
                                                                    alt="black v neck cashmere sweater"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="status_stock">
                                                            Out of stock
                                                            <button
                                                                className="wishlist_button"
                                                                type="button"
                                                                data-toggle="tooltip"
                                                                title="Add to Wish List "
                                                            >
                                                                <i className="fa fa-heart" />
                                                            </button>
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
                                                                    <a href="=35 ">black v neck cashmere sweater </a>
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
                                                            <a href="=43">
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
                                                                            href="=43"
                                                                        >
                                                                            <i className="fa fa-eye" />
                                                                        </a>
                                                                    </div>
                                                                    <button
                                                                        className="wishlist"
                                                                        type="button"
                                                                        title="Add to Wish List "
                                                                    >
                                                                        <i className="fa fa-heart" />
                                                                    </button>
                                                                    <button
                                                                        className="compare_button"
                                                                        type="button"
                                                                        title="Add to compare "
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
                                                                    <a href="=43 ">Layered Crop Top </a>
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
                                                            <a href="=44">
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
                                                                            href="=44"
                                                                        >
                                                                            <i className="fa fa-eye" />
                                                                        </a>
                                                                    </div>
                                                                    <button
                                                                        className="wishlist"
                                                                        type="button"
                                                                        title="Add to Wish List "
                                                                    >
                                                                        <i className="fa fa-heart" />
                                                                    </button>
                                                                    <button
                                                                        className="compare_button"
                                                                        type="button"
                                                                        title="Add to compare "
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
                                                                    <a href="=44 ">Striped Men &amp; Women Muffler </a>
                                                                </h4>
                                                                <p className="price">
                                                                    $1,202.00
                                                                    <span className="price-tax">Ex Tax: $1,000.00</span>
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
                                                            <a href="=45">
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
                                                                            href="=45"
                                                                        >
                                                                            <i className="fa fa-eye" />
                                                                        </a>
                                                                    </div>
                                                                    <button
                                                                        className="wishlist"
                                                                        type="button"
                                                                        title="Add to Wish List "
                                                                    >
                                                                        <i className="fa fa-heart" />
                                                                    </button>
                                                                    <button
                                                                        className="compare_button"
                                                                        type="button"
                                                                        title="Add to compare "
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
                                                                    <a href="=45 ">tid watches nato </a>
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
                                            <div className="slider-item">
                                                <div className="product-block product-thumb transition">
                                                    <div className="product-block-inner">
                                                        <div className="image outstock">
                                                            <a href="=46">
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
                                                        </div>
                                                        <div className="status_stock">
                                                            Out of stock
                                                            <button
                                                                className="wishlist_button"
                                                                type="button"
                                                                data-toggle="tooltip"
                                                                title="Add to Wish List "
                                                            >
                                                                <i className="fa fa-heart" />
                                                            </button>
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
                                                                    <a href="=46 ">Solid Men &amp; Women Muffler </a>
                                                                </h4>
                                                                <p className="price">
                                                                    $1,202.00
                                                                    <span className="price-tax">Ex Tax: $1,000.00</span>
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
                                                            <a href="=49">
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
                                                                            href="=49"
                                                                        >
                                                                            <i className="fa fa-eye" />
                                                                        </a>
                                                                    </div>
                                                                    <button
                                                                        className="wishlist"
                                                                        type="button"
                                                                        title="Add to Wish List "
                                                                    >
                                                                        <i className="fa fa-heart" />
                                                                    </button>
                                                                    <button
                                                                        className="compare_button"
                                                                        type="button"
                                                                        title="Add to compare "
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
                                                                    <a href="=49 ">tote bags for women </a>
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
                                        </div>
                                        <span
                                            className="related_default_width"
                                            style={{ display: "none", visibility: "hidden" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};