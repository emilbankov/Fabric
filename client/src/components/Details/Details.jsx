import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as clothesService from "../../services/clothesService"
import { categoriesMap, typeTranslations } from "../../lib/dictionary";
import AuthContext from "../../contexts/AuthProvider";
import ReactDOM from 'react-dom';
import { CartContext } from "../../contexts/CartProvider";
import "./Details.css";
import CustomNotification from "../CustomNotification/CustomNotification";
import { useWishlist } from "../../contexts/WishlistProvider";
import MetaTags from '../Meta Tags/MetaTags';

export default function Details() {
    const navigate = useNavigate();
    const { isAdmin } = useContext(AuthContext);
    const { addToCart } = useContext(CartContext);
    const { clothingId } = useParams();
    const [clothing, setClothing] = useState({});
    const [currentImage, setCurrentImage] = useState("");
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedType, setSelectedType] = useState(null);
    const [collection, setCollection] = useState({});
    const [similar, setSimilar] = useState({});
    const [gender, setGender] = useState("MALE");
    const [quantity, setQuantity] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [showNotification, setShowNotification] = useState(false);
    const { handleAddToWishlist } = useWishlist();
    const [notification, setNotification] = useState({ message: '', type: '' });

    const increaseQuantity = () => setQuantity((prev) => prev + 1);
    const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    const sizeOptions = {
        MALE: clothing?.clothing?.type === "SHORTS"
            ? ["S", "M", "L", "XL", "2XL", "3XL"]
            : ["S", "M", "L", "XL", "2XL", "3XL", "5XL (+2.00лв.)"],
        FEMALE: ["XS", "S", "M", "L", "XL"],
        CHILD: ["98", "110", "122", "134", "146", "158"]
    };

    const getUpdatedSizeOptions = () => {
        if (gender === "MALE" && clothing?.clothing?.type === "SWEATSHIRT") {
            return sizeOptions["MALE"].map((option) =>
                option.startsWith("5XL") ? "5XL (+5.00лв.)" : option
            );
        }

        return sizeOptions[gender];
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const clothingResponse = await clothesService.getOne(clothingId);
                setClothing(clothingResponse);

                if (clothingResponse?.clothing?.images?.length > 0) {
                    const frontImage = clothingResponse.clothing.images.find(image => image.side === 'front');
                    setCurrentImage(frontImage ? frontImage.path : null);
                }

                const model = clothingResponse?.clothing?.model;
                const type = clothingResponse?.clothing?.type;
                const category = clothingResponse?.clothing?.category;
                if (model) {
                    const [collection, similar] = await Promise.all([
                        clothesService.similarProducts(model, "price_asc", 5, 1),
                        clothesService.getCatalog(type, "price_asc", 10, 1, category),
                    ]);
                    setCollection(collection);
                    setSimilar(similar);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
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

    useEffect(() => {
        setSelectedSize(null);
        setSelectedType(null);
    }, [clothingId, gender]);

    const calculatePrice = () => {
        let price = 0;

        if (clothing.clothing.discountPrice) {
            price = clothing.clothing.discountPrice;
        } else {
            price = clothing.clothing.price;
        }

        if (selectedSize && selectedSize.includes("5XL")) {
            if (clothing.clothing.type === "SWEATSHIRT") {
                price += 5;
            } else {
                price += 2;
            }
        }

        if (selectedType === "Ватирана блуза с дълъг ръкав (+7.00лв.)") {
            price += 7;
        }

        return price.toFixed(2);
    };

    const openModal = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const deleteHandler = () => {
        setShowConfirmModal(true);
    };

    const confirmDelete = async () => {
        setIsLoading(true);
        try {
            await clothesService.deleteProduct(clothingId);
            setShowConfirmModal(false);
            navigate(-1);
        } catch (error) {
            console.error('Error deleting product:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleAddToCart = () => {
        addToCart(
            {
                id: clothing.clothing.id,
                name: clothing.clothing.name,
                model: clothing.clothing.model,
                image: clothing.clothing.images.find(image => image.side === 'front')?.path,
            },
            selectedSize,
            gender,
            quantity,
            selectedType,
            calculatePrice()
        );
        setSelectedSize(null);
        setSelectedType(null);
        showCartNotification();
    };

    const showCartNotification = () => {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 1);
    };

    const addToWishlist = (id) => {
        setNotification({ message: '' });
        setTimeout(() => {
            handleAddToWishlist(
                id,
                () => {
                    setNotification({ message: '' });
                    setTimeout(() => {
                        setNotification({
                            message: `Успешно добавихте ${clothing.clothing.name} към любими!`,
                        });
                    }, 0);
                },
                () => {
                    setNotification({ message: '' });
                    setTimeout(() => {
                        setNotification({
                            message: "Неуспешно добавяне на продукт към любими. Моля, опитайте отново.",
                        });
                    }, 0);
                },
                () => {
                    setNotification({ message: '' });
                    setTimeout(() => {
                        setNotification({
                            message: `Този продукт вече е във вашия списък с любими!`,
                        });
                    }, 0);
                },
                () => {
                    setNotification({ message: '' });
                    setTimeout(() => {
                        setNotification({
                            message: "Трябва да влезете в профила си, за да добавяте продукти към любими!",
                        });
                    }, 0);
                }
            );
        }, 0);
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
    }, [clothingId, similar.clothes]);

    return (
        <>
            <MetaTags
                title={`Fabric | ${typeTranslations[clothing?.clothing?.type]} ${clothing.clothing?.name}`}
                description={`Разгледайте ${typeTranslations[clothing?.clothing?.type]} ${clothing.clothing?.name} във Fabric. ${clothing.clothing?.description}. Намерете идеалната дреха за вас с нашите уникални дизайни и високо качество.`}
                keywords={`Fabric, ${clothing.clothing?.name}, дрехи, мода, онлайн магазин, ${clothing.clothing?.type}, ${clothing.clothing?.category}, мъже, жени, деца, clothes, fashion, online store, ${clothing.clothing?.type?.toLowerCase()}, ${clothing.clothing?.category?.toLowerCase()}, male, female, kids`}
            />
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
                            <Link to={`/clothing/details/${clothingId}`}>Детайли</Link>
                        </li>
                    </ul>
                    <div className="row">
                        <aside id="column-left" className="col-sm-3 hidden-xs">
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
                            {similar?.clothes?.length > 1 && (
                                <div className="box latest">
                                    <div className="box-heading">Подобни</div>
                                    <div className="box-content">
                                        <div className="box-product  productbox-grid" id=" latest-grid">
                                            {similar.clothes
                                                .filter(current => { return !(clothing.clothing.model === current.model && clothing.clothing.type === current.type); })
                                                .slice(0, 3).map((item) => (
                                                    <div className="product-items" key={item.id}>
                                                        <div className="product-items">
                                                            <div className="product-block product-thumb transition">
                                                                <div className="product-block-inner">
                                                                    <div className="image">
                                                                        <Link to={`/clothing/details/${item.id}`}>
                                                                            <img
                                                                                src={`https://res.cloudinary.com/dfttdd1vq/image/upload/f_webp,q_auto:best${item.images.find(image => image.side === 'front')?.path}`}
                                                                                title="tote bags for women"
                                                                                alt="tote bags for women"
                                                                                className="img-responsive reg-image"
                                                                                loading="lazy"
                                                                            />

                                                                            {(item.type !== "KIT" && item.type !== "TOWELS" && item.type !== "BANDANAS") && (
                                                                                <img
                                                                                    src={`https://res.cloudinary.com/dfttdd1vq/image/upload/f_webp,q_auto:best${item.images.find(image => image.side === 'back')?.path}`}
                                                                                    title="tote bags for women"
                                                                                    alt="tote bags for women"
                                                                                    className="img-responsive hover-image"
                                                                                    loading="lazy"
                                                                                />
                                                                            )}

                                                                            {(item.type === "KIT" || item.type === "TOWELS" || item.type === "BANDANAS") && (
                                                                                <img
                                                                                    src={`https://res.cloudinary.com/dfttdd1vq/image/upload/f_webp,q_auto:best${item.images.find(image => image.side === 'front')?.path}`}
                                                                                    title="tote bags for women"
                                                                                    alt="tote bags for women"
                                                                                    className="img-responsive hover-image"
                                                                                    loading="lazy"
                                                                                />
                                                                            )}
                                                                        </Link>
                                                                    </div>
                                                                    <div className="product-details">
                                                                        <div className="caption">
                                                                            <h4>
                                                                                <Link to={`/clothing/details/${item.id}`}>{item.name}</Link>
                                                                            </h4>
                                                                            <p className="price">
                                                                                {item?.discountPrice ? (
                                                                                    <>
                                                                                        <span className="price-new">{item?.discountPrice?.toFixed(2)} лв.</span>
                                                                                        <span className="price-old">{item?.price?.toFixed(2)} лв.</span>
                                                                                    </>
                                                                                ) : (
                                                                                    <span className="price-new">{item?.price?.toFixed(2)} лв.</span>
                                                                                )}
                                                                            </p>
                                                                        </div>
                                                                        <div className="product_hover_block">
                                                                            <div className="action">
                                                                                <button
                                                                                    type="button"
                                                                                    className="cart_button"
                                                                                    title="Add to Cart"
                                                                                    onClick={() => navigate(`/clothing/details/${item.id}`)}
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
                            )}
                            <span
                                className="latest_default_width"
                                style={{ display: "none", visibility: "hidden" }}
                            />
                        </aside>
                        {isLoading ? (
                            <div style={{ margin: '15% auto' }} className="text-center">
                                <img src="/images/loader.gif" alt="Loading..." />
                            </div>
                        ) : (
                            <div id="content" className="col-sm-9 productpage">
                                <div className="row">
                                    <div id="content" className="col-sm-9 productpage">
                                        <div className="row">
                                            <div className="col-sm-5 product-left">
                                                <div className="product-info">
                                                    <div className="left product-image thumbnails">
                                                        <div className="image">
                                                            <a
                                                                className="thumbnail"
                                                                href="#"
                                                                title={clothing.clothing.name}
                                                                onClick={openModal}
                                                                style={{
                                                                    display: 'block',
                                                                    overflow: 'hidden',
                                                                    position: 'relative'
                                                                }}
                                                                onMouseMove={(e) => {
                                                                    const image = e.currentTarget.querySelector('img');
                                                                    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
                                                                    const x = (e.clientX - left) / width * 100;
                                                                    const y = (e.clientY - top) / height * 100;
                                                                    image.style.transformOrigin = `${x}% ${y}%`;
                                                                }}
                                                            >
                                                                <img
                                                                    id="tmzoom"
                                                                    src={`https://res.cloudinary.com/dfttdd1vq/image/upload/f_webp,q_auto:best${currentImage}`}
                                                                    data-zoom-image={`https://res.cloudinary.com/dfttdd1vq/image/upload/f_webp,q_auto:best${currentImage}`}
                                                                    title={clothing.clothing.name}
                                                                    alt={clothing.clothing.name}
                                                                    style={{
                                                                        transition: 'transform 0.1s ease',
                                                                        width: '100%',
                                                                        height: 'auto'
                                                                    }}
                                                                    onMouseEnter={e => e.target.style.transform = 'scale(1.5)'}
                                                                    onMouseLeave={e => {
                                                                        e.target.style.transform = 'scale(1)';
                                                                        e.target.style.transformOrigin = 'center center';
                                                                    }}
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="additional-carousel">
                                                            <div className="customNavigation">
                                                                <span className="fa prev fa-arrow-left">&nbsp;</span>
                                                                <span className="fa next fa-arrow-right">&nbsp;</span>
                                                            </div>
                                                            <div id="additional-carousel" className="image-additional product-carousel">
                                                                {clothing.clothing.type !== 'KIT' && clothing.clothing.images && clothing.clothing.images.sort((a, b) => (a.side === "front" ? -1 : b.side === "front" ? 1 : 0)).map((image, index) => (
                                                                    <div className="slider-item" key={index}>
                                                                        <div className="product-block">
                                                                            <a
                                                                                href="#"
                                                                                title={image.side}
                                                                                className="elevatezoom-gallery"
                                                                                onClick={(e) => {
                                                                                    e.preventDefault();
                                                                                    handleImageClick(image.path);
                                                                                }}
                                                                            >
                                                                                <img
                                                                                    src={`https://res.cloudinary.com/dfttdd1vq/image/upload/f_webp,q_auto:best${image.path}`}
                                                                                    width={74}
                                                                                    height={74}
                                                                                    title={image.side}
                                                                                    alt={image.side}
                                                                                    loading="lazy"
                                                                                />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                                {clothing.clothing.type === 'KIT' && clothing.clothing.images && clothing.clothing.images.sort((a, b) => {
                                                                    if (clothing.clothing.type === "KIT") {
                                                                        const order = ["KT_F", "_F", "_B", "K_F", "K_B"];

                                                                        const getOrderIndex = (image) => {
                                                                            if (image.publicId.includes("KT_F")) return 0;
                                                                            if (image.publicId.includes("K_F")) return 3;
                                                                            if (image.publicId.includes("K_B")) return 4;
                                                                            if (image.publicId.includes("_F")) return 1;
                                                                            if (image.publicId.includes("_B")) return 2;
                                                                            return 5;
                                                                        };

                                                                        return getOrderIndex(a) - getOrderIndex(b);
                                                                    }
                                                                    return 0;
                                                                }).map((image, index) => (
                                                                    <div className="slider-item" key={index}>
                                                                        <div className="product-block">
                                                                            <a
                                                                                href="#"
                                                                                title={image.side}
                                                                                className="elevatezoom-gallery"
                                                                                onClick={(e) => {
                                                                                    e.preventDefault();
                                                                                    handleImageClick(image.path);
                                                                                }}
                                                                            >
                                                                                <img
                                                                                    src={`https://res.cloudinary.com/dfttdd1vq/image/upload/f_webp,q_auto:best${image.path}`}
                                                                                    loading="lazy"
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
                                                <h3 className="product-title" style={{ textTransform: "none" }}>{clothing.clothing.name}</h3>
                                                <div className="description">
                                                    <table className="product-description">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <span className="desc">Модел:</span>
                                                                </td>
                                                                <td className="description-right">
                                                                    <a href="?route=product/manufacturer/info&manufacturer_id=7">
                                                                        {clothing.clothing.model}
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
                                                                <td className="description-right">{categoriesMap[clothing.clothing.category]}</td>
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
                                                    {clothing.clothing.discountPrice && (
                                                        <li>
                                                            <h4 className="special-price">Цена: {calculatePrice()} лв.</h4>&nbsp;&nbsp;|&nbsp;&nbsp;
                                                            <span className="price-old" style={{ textDecoration: 'line-through', fontSize: '18px' }}>{clothing.clothing.price.toFixed(2)} лв.</span>
                                                        </li>
                                                    )}
                                                    {!clothing.clothing.discountPrice && (
                                                        <li><h4 className="special-price">Цена: {calculatePrice()} лв.</h4></li>
                                                    )}
                                                    <li className="phone"><i className="fas fa-phone"></i>{" "}&nbsp;За бърза поръчка: <a style={{ color: 'black', fontWeight: 'bold', textDecoration: 'underline' }} href="tel:+359892046660">+359 892 046 660</a> (08-18ч.)</li>
                                                    <li className="rewardpoint"><i className="fas fa-shipping-fast"></i> Безплатна доставка над 100 лв.</li>
                                                    <li className="phone" style={{ display: 'flex', alignItems: 'center' }}>
                                                        <i className="fa-solid fa-shirt"></i> &nbsp;
                                                        <p style={{ margin: '0' }}>За персонализиран дизайн позвънете (+5.00 лв.) [лого, надпис или картинка]</p>
                                                    </li>
                                                </ul>
                                                <div id="product">
                                                    <h3 className="product-option">Налични опции</h3>

                                                    <div className={`options-container ${clothing.clothing.type !== "T_SHIRT" && "last"}`}>
                                                        <select id="gender" style={{ marginBottom: "15px" }} className="form-control" value={gender} onChange={(e) => setGender(e.target.value)}>
                                                            <option value="MALE">Мъжки</option>
                                                            <option value="FEMALE">Дамски</option>
                                                            <option value="CHILD">Детски</option>
                                                        </select>

                                                        <div className="options-container">
                                                            <span className="desc">Избери размер: </span>
                                                            <div className="options">
                                                                {getUpdatedSizeOptions().map((size) => (
                                                                    <div
                                                                        key={size}
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
                                                            <span className="desc">Избери вид: </span>
                                                            <div className="options">
                                                                {["Тениска с къс ръкав", "Ватирана блуза с дълъг ръкав (+7.00лв.)"].map(type => (
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
                                                        <div className="input-group quantity-group">
                                                            <button type="button" className="btn decrease-quantity" onClick={decreaseQuantity}>-</button>
                                                            <input
                                                                type="text"
                                                                name="quantity"
                                                                value={quantity}
                                                                id="input-quantity"
                                                                onChange={(e) => setQuantity(e.target.value)}
                                                                className="form-control text-center"
                                                                readOnly
                                                            />
                                                            <button type="button" className="btn increase-quantity" onClick={increaseQuantity}>+</button>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            id="button-cart"
                                                            className="btn btn-primary btn-lg btn-block card-disabled"
                                                            onClick={handleAddToCart}
                                                            disabled={clothing.clothing.type === "T_SHIRT" ? (!gender || !selectedSize || !selectedType) : (!gender || !selectedSize)}
                                                        >
                                                            Добави в количка
                                                        </button>
                                                        <div className="btn-group prd_page">
                                                            <button
                                                                type="button"
                                                                className="btn btn-default wishlist"
                                                                title="Добави в любими"
                                                                onClick={() => addToWishlist(clothing.clothing.id)}
                                                                style={{ textTransform: "none" }}
                                                            >
                                                                Добави в любими
                                                            </button>
                                                            {isAdmin && (
                                                                <div>
                                                                    <button
                                                                        type="button"
                                                                        id="button-delete"
                                                                        className="btn btn-danger btn-lg btn-block"
                                                                        onClick={deleteHandler}
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
                                        </ul>
                                        <div className="tab-content">
                                            <div className="tab-pane active" id="tab-description">
                                                <p className="product-desc">
                                                    {clothing.clothing.description}
                                                </p>
                                            </div>
                                            <div className="tab-pane" id="tab-specification">
                                                {(clothing.clothing.type === "T_SHIRT" || clothing.clothing.type === "LONG_T_SHIRT") && (
                                                    <div className="tab-pane" id="tab-specification">
                                                        <h3 className="ta-c">Мъжки / Дамски</h3>
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
                                                                <tr>
                                                                    <td>5XL</td>
                                                                    <td>69</td>
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
                                                )}
                                                {clothing.clothing.type === "SHORTS" && (
                                                    <div className="tab-pane" id="tab-specification">
                                                        <h3 className="ta-c">Къси панталони</h3>
                                                        <table className="table table-bordered" style={{ width: '100%' }}>
                                                            <thead>
                                                                <tr>
                                                                    <th>Размер</th>
                                                                    <th>Талия (см)</th>
                                                                    <th>Дължина (см)</th>
                                                                    <th>Ханш (см)</th>
                                                                    <th>Ориентировъчни килограми</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>XS</td>
                                                                    <td>36</td>
                                                                    <td>42</td>
                                                                    <td>50</td>
                                                                    <td>60 &lt;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>S</td>
                                                                    <td>38</td>
                                                                    <td>44</td>
                                                                    <td>52</td>
                                                                    <td>60-70</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>M</td>
                                                                    <td>40</td>
                                                                    <td>46</td>
                                                                    <td>54</td>
                                                                    <td>70-80</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>L</td>
                                                                    <td>42</td>
                                                                    <td>48</td>
                                                                    <td>56</td>
                                                                    <td>80-90</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>XL</td>
                                                                    <td>44</td>
                                                                    <td>50</td>
                                                                    <td>58</td>
                                                                    <td>90-100</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2XL</td>
                                                                    <td>46</td>
                                                                    <td>52</td>
                                                                    <td>60</td>
                                                                    <td>100-110</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>3XL</td>
                                                                    <td>48</td>
                                                                    <td>54</td>
                                                                    <td>62</td>
                                                                    <td>110-125</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                )}
                                                {clothing.clothing.type === "SWEATSHIRT" && (
                                                    <div className="tab-pane" id="tab-specification">
                                                        <h3 className="ta-c">Мъжки / Дамски</h3>
                                                        <table className="table table-bordered" style={{ width: '100%' }}>
                                                            <thead>
                                                                <tr>
                                                                    <th>Размер</th>
                                                                    <th>Ширина (см)</th>
                                                                    <th>Дължина (см)</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>XS</td>
                                                                    <td>54</td>
                                                                    <td>66</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>S</td>
                                                                    <td>56</td>
                                                                    <td>68</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>M</td>
                                                                    <td>58</td>
                                                                    <td>70</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>L</td>
                                                                    <td>62</td>
                                                                    <td>72</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>XL</td>
                                                                    <td>64</td>
                                                                    <td>74</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2XL</td>
                                                                    <td>67</td>
                                                                    <td>76</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>3XL</td>
                                                                    <td>69</td>
                                                                    <td>78</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>5XL</td>
                                                                    <td>72</td>
                                                                    <td>79</td>
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
                                                                    <td>122</td>
                                                                    <td>6-7</td>
                                                                    <td>40</td>
                                                                    <td>54</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>134</td>
                                                                    <td>8-9</td>
                                                                    <td>42</td>
                                                                    <td>56</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>146</td>
                                                                    <td>10-11</td>
                                                                    <td>44</td>
                                                                    <td>58</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>158</td>
                                                                    <td>12-13</td>
                                                                    <td>46</td>
                                                                    <td>58</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                )}
                                                {clothing.clothing.type === "KIT" && (
                                                    <div className="tab-pane" id="tab-specification">
                                                        <h3 className="ta-c">Тениска</h3>
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
                                                                <tr>
                                                                    <td>5XL</td>
                                                                    <td>69</td>
                                                                    <td>79</td>
                                                                    <td>-</td>
                                                                    <td>-</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <h3 className="ta-c">Къси панталони</h3>
                                                        <table className="table table-bordered" style={{ width: '100%' }}>
                                                            <thead>
                                                                <tr>
                                                                    <th>Размер</th>
                                                                    <th>Талия (см)</th>
                                                                    <th>Дължина (см)</th>
                                                                    <th>Ханш (см)</th>
                                                                    <th>Ориентировъчни килограми</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>XS</td>
                                                                    <td>36</td>
                                                                    <td>42</td>
                                                                    <td>50</td>
                                                                    <td>60 &lt;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>S</td>
                                                                    <td>38</td>
                                                                    <td>44</td>
                                                                    <td>52</td>
                                                                    <td>60-70</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>M</td>
                                                                    <td>40</td>
                                                                    <td>46</td>
                                                                    <td>54</td>
                                                                    <td>70-80</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>L</td>
                                                                    <td>42</td>
                                                                    <td>48</td>
                                                                    <td>56</td>
                                                                    <td>80-90</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>XL</td>
                                                                    <td>44</td>
                                                                    <td>50</td>
                                                                    <td>58</td>
                                                                    <td>90-100</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2XL</td>
                                                                    <td>46</td>
                                                                    <td>52</td>
                                                                    <td>60</td>
                                                                    <td>100-110</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>3XL</td>
                                                                    <td>48</td>
                                                                    <td>54</td>
                                                                    <td>62</td>
                                                                    <td>110-125</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                {(similar?.clothes?.length > 1 || collection?.clothes?.length > 1) && (
                    <div className="container">
                        <div id="content" className="col-sm-9 productpage">
                            <div className="hometab box">
                                <div className="container">
                                    <div className="row">
                                        <div className="tab-head">
                                            <div className="hometab-heading box-heading">Подобни артикули и колекция</div>
                                            <div id="tabs" className="htabs">
                                                <ul className="etabs">
                                                    {similar?.clothes?.length > 1 && (<li className="tab"><a href="#tab-latest">Подобни</a></li>)}
                                                    <li className="tab"></li>
                                                    {collection?.clothes?.length > 1 && (<li className="tab"><a href="#tab-special">Колекция</a></li>)}
                                                </ul>
                                            </div>
                                        </div>
                                        {similar.clothes.length > 1 && (
                                            <div id="tab-latest" className="tab-content">
                                                <div className="box">
                                                    <div className="box-content">
                                                        <div className="customNavigation">
                                                            <a className="fa prev fa-arrow-left">&nbsp;</a>
                                                            <a className="fa next fa-arrow-right">&nbsp;</a>
                                                        </div>
                                                        <div className="box-product product-carousel" id="tablatest-carousel">
                                                            {similar.clothes
                                                                .filter(current => { return !(clothing.clothing.model === current.model && clothing.clothing.type === current.type); })
                                                                .map((clothing) => (
                                                                    <div className="slider-item" key={clothing.id}>
                                                                        <div className="product-block product-thumb transition">
                                                                            <div className="product-block-inner">
                                                                                <div className="image">
                                                                                    <Link to={`/clothing/details/${clothing.id}`}>
                                                                                        <img
                                                                                            src={`https://res.cloudinary.com/dfttdd1vq/image/upload/f_webp,q_auto:best${clothing.images.find(image => image.side === 'front')?.path}`}
                                                                                            title={clothing.name}
                                                                                            alt={clothing.name}
                                                                                            className="img-responsive reg-image"
                                                                                            loading="lazy"
                                                                                        />
                                                                                        {(clothing.type !== "KIT" && clothing.type !== "TOWELS" && clothing.type !== "BANDANAS") && (
                                                                                            <img
                                                                                                src={`https://res.cloudinary.com/dfttdd1vq/image/upload/f_webp,q_auto:best${clothing.images.find(image => image.side === 'back')?.path}`}
                                                                                                title={clothing.name}
                                                                                                alt={clothing.name}
                                                                                                className="img-responsive hover-image"
                                                                                                loading="lazy"
                                                                                            />
                                                                                        )}
                                                                                        {(clothing.type === "KIT" || clothing.type === "TOWELS" || clothing.type === "BANDANAS") && (
                                                                                            <img
                                                                                                src={`https://res.cloudinary.com/dfttdd1vq/image/upload/f_webp,q_auto:best${clothing.images.find(image => image.side === 'front')?.path}`}
                                                                                                title={clothing.name}
                                                                                                alt={clothing.name}
                                                                                                className="img-responsive hover-image"
                                                                                                loading="lazy"
                                                                                            />
                                                                                        )}
                                                                                    </Link>
                                                                                    {clothing?.discountPrice && (
                                                                                        <div className="saleback"><div className="saleicon sale">{(Math.ceil((clothing.price - clothing.discountPrice) / clothing.price * 100))}%</div></div>
                                                                                    )}
                                                                                    <div className="product_hover_block">
                                                                                        <div className="action">
                                                                                            <button
                                                                                                type="button"
                                                                                                className="cart_button"
                                                                                                onClick={() => navigate(`/clothing/details/${clothing.id}`)}
                                                                                                title="Add to Cart"
                                                                                            >
                                                                                                <i className="fa fa-shopping-cart" area-hidden="true" />
                                                                                            </button>
                                                                                            <button
                                                                                                className="wishlist"
                                                                                                type="button"
                                                                                                title="Add to Wish List"
                                                                                                onClick={() => addToWishlist(clothing.id)}
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
                                                                                            {clothing?.discountPrice ? (
                                                                                                <>
                                                                                                    <span className="price-new">{clothing?.discountPrice?.toFixed(2)} лв.</span>
                                                                                                    <span className="price-old">{clothing?.price?.toFixed(2)} лв.</span>
                                                                                                </>
                                                                                            ) : (
                                                                                                <span className="price-new">{clothing?.price?.toFixed(2)} лв.</span>
                                                                                            )}
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            {similar.clothes && similar.clothes.length < 5 && (
                                                                Array.from({ length: 5 - similar.clothes.length }).map((_, index) => (
                                                                    <div className="slider-item placeholder" key={`placeholder-${index}`} style={{ visibility: 'hidden' }}>
                                                                        <div className="product-block product-thumb transition">
                                                                            <div className="product-block-inner">
                                                                                <div className="image">
                                                                                    <div style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }} />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <span className="tablatest_default_width" style={{ display: "none", visibility: "hidden" }} />
                                            </div>
                                        )}
                                        {collection.clothes.length > 1 && (
                                            <div id="tab-special" className="tab-content">
                                                <div className="box">
                                                    <div className="box-content">
                                                        <div className="box-product  productbox-grid" id="tabspecial-grid">
                                                            {collection.clothes.slice(0, 5)
                                                                .filter(current => { return !(clothing.clothing.model === current.model && clothing.clothing.type === current.type); })
                                                                .map((product) => (
                                                                    <div className="product-items" key={product.id}>
                                                                        <div className="product-block product-thumb transition">
                                                                            <div className="product-block-inner">
                                                                                <div className="image">
                                                                                    <Link to={`/clothing/details/${product.id}`}>
                                                                                        <img
                                                                                            src={`https://res.cloudinary.com/dfttdd1vq/image/upload/f_webp,q_auto:best${product.images.find(image => image.side === 'front')?.path}`}
                                                                                            title={product.name}
                                                                                            alt={product.name}
                                                                                            className="img-responsive reg-image"
                                                                                            loading="lazy"
                                                                                        />

                                                                                        {(product.type !== "KIT" && product.type !== "TOWELS" && product.type !== "BANDANAS") && (
                                                                                            <img
                                                                                                src={`https://res.cloudinary.com/dfttdd1vq/image/upload/f_webp,q_auto:best${product.images.find(image => image.side === 'back')?.path}`}
                                                                                                title={product.name}
                                                                                                alt={product.name}
                                                                                                className="img-responsive hover-image"
                                                                                                loading="lazy"
                                                                                            />
                                                                                        )}

                                                                                        {(product.type === "KIT" || product.type === "TOWELS" || product.type === "BANDANAS") && (
                                                                                            <img
                                                                                                src={`https://res.cloudinary.com/dfttdd1vq/image/upload/f_webp,q_auto:best${product.images.find(image => image.side === 'front')?.path}`}
                                                                                                title={product.name}
                                                                                                alt={product.name}
                                                                                                className="img-responsive hover-image"
                                                                                                loading="lazy"
                                                                                            />
                                                                                        )}
                                                                                    </Link>
                                                                                    {product?.discountPrice && (
                                                                                        <div className="saleback"><div className="saleicon sale">{(Math.ceil((product.price - product.discountPrice) / product.price * 100))}%</div></div>
                                                                                    )}
                                                                                    <div className="product_hover_block">
                                                                                        <div className="action">
                                                                                            <button
                                                                                                type="button"
                                                                                                className="cart_button"
                                                                                                onClick={() => navigate(`/clothing/details/${product.id}`)}
                                                                                                title="Add to Cart"
                                                                                            >
                                                                                                <i className="fa fa-shopping-cart" aria-hidden="true" />
                                                                                            </button>
                                                                                            <button
                                                                                                className="wishlist"
                                                                                                type="button"
                                                                                                title="Add to Wish List"
                                                                                                onClick={() => addToWishlist(product.id)}
                                                                                            >
                                                                                                <i className="fa fa-heart" />
                                                                                            </button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="product-details">
                                                                                    <div className="caption">
                                                                                        <h4>
                                                                                            <a href={`/product&product_id=${product.id}`}>
                                                                                                {product.name}
                                                                                            </a>
                                                                                        </h4>
                                                                                        <p className="price">
                                                                                            {product?.discountPrice ? (
                                                                                                <>
                                                                                                    <span className="price-new">{product?.discountPrice?.toFixed(2)} лв.</span>
                                                                                                    <span className="price-old">{product?.price?.toFixed(2)} лв.</span>
                                                                                                </>
                                                                                            ) : (
                                                                                                <span className="price-new">{product?.price?.toFixed(2)} лв.</span>
                                                                                            )}
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
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div >

            {isModalOpen && ReactDOM.createPortal(
                <div
                    className="image-modal-overlay"
                    onClick={closeModal}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 9999
                    }}
                >
                    <div
                        className="image-modal"
                        onClick={e => e.stopPropagation()}
                        style={{
                            position: 'relative',
                            maxWidth: '90vw',
                            maxHeight: '90vh'
                        }}
                    >
                        <span
                            className="close-button"
                            onClick={closeModal}
                            style={{
                                position: 'absolute',
                                right: '-40px',
                                fontSize: '30px',
                                color: 'white',
                                cursor: 'pointer'
                            }}
                        >
                            &times;
                        </span>
                        <img
                            src={`https://res.cloudinary.com/dfttdd1vq/image/upload/f_webp,q_auto:best${currentImage}`}
                            alt={clothing.clothing?.name}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '90vh',
                                objectFit: 'contain'
                            }}
                            loading="lazy"
                        />
                    </div>
                </div>,
                document.body
            )
            }

            {showConfirmModal && (
                <div className="confirmation-modal-overlay">
                    {isLoading && <div style={{ margin: '10% auto' }} className="text-center"><img src="/images/loader.gif" alt="Loading..." /></div>}
                    {!isLoading && (
                        <div className="confirmation-modal">
                            <h3>Потвърждаване на изтриване</h3>
                            <p>Сигурни ли сте че искате да изтриете {typeTranslations[clothing.clothing.type]} {clothing.clothing.name}?</p>
                            <div className="modal-buttons">
                                <button onClick={() => setShowConfirmModal(false)} className="cancel-btn">Отказ</button>
                                <button onClick={confirmDelete} className="delete-btn">Изтриване</button>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {showNotification && (
                <CustomNotification
                    message={<>Успешно добавихте {typeTranslations[clothing.clothing.type]} {clothing.clothing.name} във вашата количка!</>}
                />
            )}

            {notification.message && (
                <CustomNotification
                    message={notification.message}
                />
            )}
        </>
    );
};