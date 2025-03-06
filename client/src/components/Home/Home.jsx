import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as clothesService from "../../services/clothesService"
import { homeCategories } from "../../lib/dictionary";

export default function Home() {
    const location = useLocation();
    const navigate = useNavigate();
    const [newest, setNewest] = useState([]);
    const [mostSold, setMostSold] = useState([]);

    useEffect(() => {
        Promise.all([
            clothesService.getNewest(),
            clothesService.getMostSold(),
        ])
            .then(([newest, mostSold]) => {
                setNewest(newest);
                setMostSold(mostSold);
            })
            .catch(err => {
                console.error("Error fetching data:", err);
            });
    }, [location.pathname]);

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
    }, [location.pathname, newest.clothes]);

    return (
        <>
            <div className="content_headercms_bottom" />
            <div className="content-top-breadcum">
                <div className="container">
                    <div className="row">
                        <div id="title-content"></div>
                    </div>
                </div>
            </div>
            <div className="content-top" id="content">
                <div className="main-slider">
                    <div className="swiper-viewport">
                        <div id="slideshow0" className="swiper-container" style={{ opacity: 1 }}>
                            <div className="swiper-wrapper">
                                <div className="swiper-slide text-center">
                                    <Link to="/catalog"><img src="/images/banner 1.jpg" alt="banner 2" className="img-responsive banner-img-100" /></Link>
                                </div>
                                <div className="swiper-slide text-center">
                                    <Link to="/catalog"><img src="/images/banner 2.jpg" alt="banner 2" className="img-responsive banner-img-100" /></Link>
                                </div>
                                <div className="swiper-slide text-center">
                                    <Link to="/catalog"><img src="/images/banner 3.jpg" alt="banner 3" className="img-responsive banner-img-100" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination slideshow0" />
                        <div className="swiper-pager">
                            <div className="swiper-button-next white" />
                            <div className="swiper-button-prev white" />
                        </div>
                    </div>
                </div>
            </div>
            <div id="content" className="col-sm-12">
                <div className="category_list_cms bottom-to-top hb-animate-element">
                    <div className="container">
                        <div className="">
                            <div className="category_title_cms">
                                <div className="category_title">Категории</div>
                            </div>
                            <div className="">
                                <div className="">
                                    <div className="categories-cards">
                                        {homeCategories.map(category => (
                                            <div
                                                className="col-6 col-md-4 col-lg-3-1 category-icon categories-responsive"
                                                key={category.id}
                                                onClick={() => navigate(category.link)}
                                            >
                                                <div className="icon-wrapper">
                                                    <img
                                                        src={category.image}
                                                        alt={category.name}
                                                        className="img-responsive"
                                                    />
                                                    <span style={{ overflow: "visible" }}>{category.name}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
                                                                        src={`https://res.cloudinary.com/dfttdd1vq/image/upload/f_webp,q_auto${clothing.images.find(image => image.side === 'front')?.path}`}
                                                                        title={clothing.name}
                                                                        alt={clothing.name}
                                                                        className="img-responsive reg-image"
                                                                        loading="lazy"
                                                                    />
                                                                    {(clothing.type !== "KIT" || clothing.type !== "TOWELS" || clothing.type !== "BANDANAS") && (
                                                                        <img
                                                                            src={`https://res.cloudinary.com/dfttdd1vq/image/upload/f_webp,q_auto${clothing.images.find(image => image.side === 'back')?.path}`}
                                                                            title={clothing.name}
                                                                            alt={clothing.name}
                                                                            className="img-responsive hover-image"
                                                                            loading="lazy"
                                                                        />
                                                                    )}
                                                                    {(clothing.type === "KIT" || clothing.type === "TOWELS" || clothing.type === "BANDANAS") && (
                                                                        <img
                                                                            src={`https://res.cloudinary.com/dfttdd1vq/image/upload/f_webp,q_auto${clothing.images.find(image => image.side === 'front')?.path}`}
                                                                            title={clothing.name}
                                                                            alt={clothing.name}
                                                                            className="img-responsive hover-image"
                                                                            loading="lazy"
                                                                        />
                                                                    )}
                                                                </Link>
                                                                <div className="product_hover_block">
                                                                    <div className="action">
                                                                        <button
                                                                            type="button"
                                                                            className="cart_button"
                                                                            title="Add to Cart"
                                                                            onClick={() => navigate(`/clothing/details/${clothing.id}`)}
                                                                        >
                                                                            <i className="fa fa-shopping-cart" aria-hidden="true" />
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
                                                                        src={`https://res.cloudinary.com/dfttdd1vq/image/upload/f_webp,q_auto${product.images.find(image => image.side === 'front')?.path}`}
                                                                        title={product.name}
                                                                        alt={product.name}
                                                                        className="img-responsive reg-image"
                                                                        loading="lazy"
                                                                    />

                                                                    {(product.type !== "KIT" || product.type !== "TOWELS" || product.type !== "BANDANAS") && (
                                                                        <img
                                                                            src={`https://res.cloudinary.com/dfttdd1vq/image/upload/f_webp,q_auto${product.images.find(image => image.side === 'back')?.path}`}
                                                                            title={product.name}
                                                                            alt={product.name}
                                                                            className="img-responsive hover-image"
                                                                            loading="lazy"
                                                                        />
                                                                    )}

                                                                    {(product.type === "KIT" || product.type === "TOWELS" || product.type === "BANDANAS") && (
                                                                        <img
                                                                            src={`https://res.cloudinary.com/dfttdd1vq/image/upload/f_webp,q_auto${product.images.find(image => image.side === 'front')?.path}`}
                                                                            title={product.name}
                                                                            alt={product.name}
                                                                            className="img-responsive hover-image"
                                                                            loading="lazy"
                                                                        />
                                                                    )}
                                                                </Link>
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
                                                                        <a href={`/product&product_id=${product.id}`}>
                                                                            {product.name}
                                                                        </a>
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

                <div id="parallaxcmsblock" className="block parallax">
                    <div id="wdcmstestimonial">
                        <div className="wdtestimonial-main">
                            <div className="wdtestimonial-content">
                                <div className="wdtestimonial-inner">
                                    <ul id="wdtestimonial-carousel" className="wd-carousel">
                                        <li>
                                            <div className="testimonial-image">
                                                <img
                                                    alt=""
                                                    src="/images/user1.jpg"
                                                    width={86}
                                                    height={86}
                                                />
                                            </div>
                                            <div className="testimonial-content">
                                                <div className="testimonial-desc">
                                                    <p>
                                                        "Купих тениска и суитшърт и двата артикула са абсолютно невероятни.
                                                        Тениската е дишаща, перфектна за по-топлите дни, а суитшъртът ме държи
                                                        уютно през студените вечери. Дизайните са свежи и размерите са точни. Ще пазарувам отново!"
                                                    </p>
                                                </div>
                                                <div className="quote_img" />
                                                <div className="testimonial-user-title">
                                                    <h4>Кирил Гешев, Бургас</h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="testimonial-image">
                                                <img
                                                    alt=""
                                                    src="/images/user2.jpg"
                                                    width={86}
                                                    height={86}
                                                />
                                            </div>
                                            <div className="testimonial-content">
                                                <div className="testimonial-desc">
                                                    <p>
                                                        "Наскоро купих суитшърт от този сайт и съм изключително доволен от качеството!
                                                        Тъканта е мека, удобна и идеална за по-хладно време. Освен това, дизайнът е точно
                                                        това, което търсех. Горещо препоръчвам този сайт на всеки, който иска стилни и качествени дрехи!"
                                                    </p>
                                                </div>
                                                <div className="quote_img" />
                                                <div className="testimonial-user-title">
                                                    <h4>Иван Владимиров, София</h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="testimonial-image">
                                                <img
                                                    alt=""
                                                    src="/images/user3.jpg"
                                                    width={86}
                                                    height={86}
                                                />
                                            </div>
                                            <div className="testimonial-content">
                                                <div className="testimonial-desc">
                                                    <p>
                                                        "Късите панталонки са страхотни! Лек и удобен материал, подходящи за горещото лято. Перфектни за плажа или ежедневието."
                                                    </p>
                                                </div>
                                                <div className="quote_img" />
                                                <div className="testimonial-user-title">
                                                    <h4>Пенка Стоянова, Пловдив</h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="testimonial-image">
                                                <img
                                                    alt=""
                                                    src="/images/user1.jpg"
                                                    width={86}
                                                    height={86}
                                                />
                                            </div>
                                            <div className="testimonial-content">
                                                <div className="testimonial-desc">
                                                    <p>
                                                        "Тениската е с невероятен дизайн и много удобна. Материалът е приятен на допир и е идеална за летните дни."
                                                    </p>
                                                </div>
                                                <div className="quote_img" />
                                                <div className="testimonial-user-title">
                                                    <h4>Геро Пройчев, Сопот</h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="testimonial-image">
                                                <img
                                                    alt=""
                                                    src="/images/user2.jpg"
                                                    width={86}
                                                    height={86}
                                                />
                                            </div>
                                            <div className="testimonial-content">
                                                <div className="testimonial-desc">
                                                    <p>
                                                        "Комплектът е много комфортен и стилен. Идеален както за тренировки, така и за ежедневни излизания. Страхотно съотношение качество-цена."
                                                    </p>
                                                </div>
                                                <div className="quote_img" />
                                                <div className="testimonial-user-title">
                                                    <h4>Любомир Радков, Пазарджик</h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="testimonial-image">
                                                <img
                                                    alt=""
                                                    src="/images/user1.jpg"
                                                    width={86}
                                                    height={86}
                                                />
                                            </div>
                                            <div className="testimonial-content">
                                                <div className="testimonial-desc">
                                                    <p>
                                                        "Купих комплект тениска и къси панталонки. Перфектен за топлите летни дни! Материалът е мек и удобен, а дизайните са модерни и стилни. Идеален за спорт или просто за разходка. Супер удобен и изглежда страхотно!"
                                                    </p>
                                                </div>
                                                <div className="quote_img" />
                                                <div className="testimonial-user-title">
                                                    <h4>Николай Найденов, Садово</h4>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box featured">
                    <div className="container">
                        <div className="row">
                            <div className="box-heading">Featured Product</div>
                            <div className="box-content">
                                <div className="customNavigation">
                                    <a className="fa prev fa-arrow-left">&nbsp;</a>
                                    <a className="fa next fa-arrow-right">&nbsp;</a>
                                </div>
                                <div
                                    className="box-product product-carousel"
                                    id="featured-carousel"
                                >
                                    <div className="slider-item">
                                        <div className="product-block product-thumb transition">
                                            <div className="product-block-inner">
                                                <div className="image">
                                                    <a href="/product&product_id=43">
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
                                                                onClick={() => cart.add('49')}
                                                                title="Add to Cart"
                                                            >
                                                                <i
                                                                    className="fa fa-shopping-cart"
                                                                    area-hidden="true"
                                                                />{" "}
                                                            </button>
                                                            <div className="quickview-button">
                                                                <a
                                                                    className="quickbox"
                                                                    title="Add To quickview"
                                                                    href="/quick_view&product_id=43"
                                                                >
                                                                    <i className="fa fa-eye" />
                                                                </a>
                                                            </div>
                                                            <button
                                                                className="wishlist"
                                                                type="button"
                                                                title="Add to Wish List "
                                                                onClick={() => cart.add('49')}
                                                            >
                                                                <i className="fa fa-heart" />
                                                            </button>
                                                            <button
                                                                className="compare_button"
                                                                type="button"
                                                                title="Add to compare "
                                                                onClick={() => cart.add('49')}
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
                                                            <a href="/product&product_id=43 ">
                                                                Layered Crop Top{" "}
                                                            </a>
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
                                                    <a href="/product&product_id=40">
                                                        <img
                                                            src="/images/5-264x380.jpg"
                                                            title="Solid A-Line Top"
                                                            alt="Solid A-Line Top"
                                                            className="img-responsive reg-image"
                                                        />
                                                        <img
                                                            className="img-responsive hover-image"
                                                            src="/images/10-264x380.jpg"
                                                            title="Solid A-Line Top"
                                                            alt="Solid A-Line Top"
                                                        />
                                                    </a>
                                                    <div className="product_hover_block">
                                                        <div className="action">
                                                            <button
                                                                type="button"
                                                                className="cart_button"
                                                                onClick={() => cart.add('49')}
                                                                title="Add to Cart"
                                                            >
                                                                <i
                                                                    className="fa fa-shopping-cart"
                                                                    area-hidden="true"
                                                                />{" "}
                                                            </button>
                                                            <div className="quickview-button">
                                                                <a
                                                                    className="quickbox"
                                                                    title="Add To quickview"
                                                                    href="/quick_view&product_id=40"
                                                                >
                                                                    <i className="fa fa-eye" />
                                                                </a>
                                                            </div>
                                                            <button
                                                                className="wishlist"
                                                                type="button"
                                                                title="Add to Wish List "
                                                                onClick={() => cart.add('49')}
                                                            >
                                                                <i className="fa fa-heart" />
                                                            </button>
                                                            <button
                                                                className="compare_button"
                                                                type="button"
                                                                title="Add to compare "
                                                                onClick={() => cart.add('49')}
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
                                                            <a href="/product&product_id=40 ">
                                                                Solid A-Line Top{" "}
                                                            </a>
                                                        </h4>
                                                        <p className="price">
                                                            $123.20
                                                            <span className="price-tax">Ex Tax: $101.00</span>
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
                                                    <a href="/product&product_id=42">
                                                        <img
                                                            src="/images/1-264x380.jpg"
                                                            title="Hoodie for men"
                                                            alt="Hoodie for men"
                                                            className="img-responsive reg-image"
                                                        />
                                                        <img
                                                            className="img-responsive hover-image"
                                                            src="/images/14-264x380.jpg"
                                                            title="Hoodie for men"
                                                            alt="Hoodie for men"
                                                        />
                                                    </a>
                                                    <div className="saleicon sale">10%</div>
                                                    <div className="product_hover_block">
                                                        <div className="action">
                                                            <button
                                                                type="button"
                                                                className="cart_button"
                                                                onClick={() => cart.add('49')}
                                                                title="Add to Cart"
                                                            >
                                                                <i
                                                                    className="fa fa-shopping-cart"
                                                                    area-hidden="true"
                                                                />{" "}
                                                            </button>
                                                            <div className="quickview-button">
                                                                <a
                                                                    className="quickbox"
                                                                    title="Add To quickview"
                                                                    href="/quick_view&product_id=42"
                                                                >
                                                                    <i className="fa fa-eye" />
                                                                </a>
                                                            </div>
                                                            <button
                                                                className="wishlist"
                                                                type="button"
                                                                title="Add to Wish List "
                                                                onClick={() => cart.add('49')}
                                                            >
                                                                <i className="fa fa-heart" />
                                                            </button>
                                                            <button
                                                                className="compare_button"
                                                                type="button"
                                                                title="Add to compare "
                                                                onClick={() => cart.add('49')}
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
                                                            <a href="/product&product_id=42 ">Hoodie for men </a>
                                                        </h4>
                                                        <p className="price">
                                                            <span className="price-new">$110.00</span>{" "}
                                                            <span className="price-old">$122.00</span>
                                                            <span className="price-tax">Ex Tax: $90.00</span>
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
                                                    <a href="/product&product_id=30">
                                                        <img
                                                            src="/images/16-264x380.jpg"
                                                            title="long sleeve Shirts"
                                                            alt="long sleeve Shirts"
                                                            className="img-responsive reg-image"
                                                        />
                                                        <img
                                                            className="img-responsive hover-image"
                                                            src="/images/3-264x380.jpg"
                                                            title="long sleeve Shirts"
                                                            alt="long sleeve Shirts"
                                                        />
                                                    </a>
                                                    <div className="saleicon sale">20%</div>
                                                    <div className="product_hover_block">
                                                        <div className="action">
                                                            <button
                                                                type="button"
                                                                className="cart_button"
                                                                onClick={() => cart.add('49')}
                                                                title="Add to Cart"
                                                            >
                                                                <i
                                                                    className="fa fa-shopping-cart"
                                                                    area-hidden="true"
                                                                />{" "}
                                                            </button>
                                                            <div className="quickview-button">
                                                                <a
                                                                    className="quickbox"
                                                                    title="Add To quickview"
                                                                    href="/quick_view&product_id=30"
                                                                >
                                                                    <i className="fa fa-eye" />
                                                                </a>
                                                            </div>
                                                            <button
                                                                className="wishlist"
                                                                type="button"
                                                                title="Add to Wish List "
                                                                onClick={() => cart.add('49')}
                                                            >
                                                                <i className="fa fa-heart" />
                                                            </button>
                                                            <button
                                                                className="compare_button"
                                                                type="button"
                                                                title="Add to compare "
                                                                onClick={() => cart.add('49')}
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
                                                            <a href="/product&product_id=30 ">
                                                                long sleeve Shirts{" "}
                                                            </a>
                                                        </h4>
                                                        <p className="price">
                                                            <span className="price-new">$98.00</span>{" "}
                                                            <span className="price-old">$122.00</span>
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
                                                    <a href="asd">
                                                        <img
                                                            src="/images/4-264x380.jpg"
                                                            title="round toe Shoes"
                                                            alt="round toe Shoes"
                                                            className="img-responsive reg-image"
                                                        />
                                                        <img
                                                            className="img-responsive hover-image"
                                                            src="/images/6-264x380.jpg"
                                                            title="round toe Shoes"
                                                            alt="round toe Shoes"
                                                        />
                                                    </a>
                                                    <div className="product_hover_block">
                                                        <div className="action">
                                                            <button
                                                                type="button"
                                                                className="cart_button"
                                                                onClick={() => cart.add('49')}
                                                                title="Add to Cart"
                                                            >
                                                                <i
                                                                    className="fa fa-shopping-cart"
                                                                    area-hidden="true"
                                                                />{" "}
                                                            </button>
                                                            <div className="quickview-button">
                                                                <a
                                                                    className="quickbox"
                                                                    title="Add To quickview"
                                                                    href="/asd"
                                                                >
                                                                    <i className="fa fa-eye" />
                                                                </a>
                                                            </div>
                                                            <button
                                                                className="wishlist"
                                                                type="button"
                                                                title="Add to Wish List "
                                                                onClick={() => cart.add('49')}
                                                            >
                                                                <i className="fa fa-heart" />
                                                            </button>
                                                            <button
                                                                className="compare_button"
                                                                type="button"
                                                                title="Add to compare "
                                                                onClick={() => cart.add('49')}
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
                                                            <a href="asd ">round toe Shoes </a>
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
                                                    <a href="/product&product_id=45">
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
                                                                onClick={() => cart.add('49')}
                                                                title="Add to Cart"
                                                            >
                                                                <i
                                                                    className="fa fa-shopping-cart"
                                                                    area-hidden="true"
                                                                />{" "}
                                                            </button>
                                                            <div className="quickview-button">
                                                                <a
                                                                    className="quickbox"
                                                                    title="Add To quickview"
                                                                    href="/quick_view&product_id=45"
                                                                >
                                                                    <i className="fa fa-eye" />
                                                                </a>
                                                            </div>
                                                            <button
                                                                className="wishlist"
                                                                type="button"
                                                                title="Add to Wish List "
                                                                onClick={() => cart.add('49')}
                                                            >
                                                                <i className="fa fa-heart" />
                                                            </button>
                                                            <button
                                                                className="compare_button"
                                                                type="button"
                                                                title="Add to compare "
                                                                onClick={() => cart.add('49')}
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
                                                            <a href="/product&product_id=45 ">
                                                                tid watches nato{" "}
                                                            </a>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span
                    className="featured_default_width"
                    style={{ display: "none", visibility: "hidden" }}
                />
                <div className="subbanner-cms">
                    <div className="container">
                        <div className="row">
                            <div className="subbanner-inner-block1">
                                <div className="subbanner1_img">
                                    <a href="#" title="banner1">
                                        <img
                                            className="subbanner_image1"
                                            src="/images/Subbanner1.jpg"
                                            alt=""
                                        />
                                    </a>
                                    <div className="description">
                                        <div className="title">Flat 45% Off</div>
                                        <div className="subtitle">
                                            Shop Designer<span> Hand Bags</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="subbanner-inner-block2">
                                <div className="subbanner2_img">
                                    <a href="#" title="banner2">
                                        <img
                                            className="subbanner2_image2"
                                            src="/images/Subbanner2.jpg"
                                            alt=""
                                        />
                                    </a>
                                    <div className="description">
                                        <div className="title">Flat 45% Off</div>
                                        <div className="subtitle">
                                            Brand Casual<span> Men Shoes</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box webdigifyblog">
                    <div className="container">
                        <div className="row">
                            <div className="box-heading">From The Blog</div>
                            <div className="box-content">
                                <div className="box-product blogcarousel" id="blog-carousel">
                                    <div className="blog-item">
                                        <div className="product-block">
                                            <div className="blog-left">
                                                <div className="blog-image">
                                                    <img
                                                        src="/images/blog5-1098x737.jpg"
                                                        alt="From The Blog"
                                                        title="From The Blog"
                                                        className="img-thumbnail"
                                                    />
                                                    <div className="post-image-hover"> </div>
                                                    <p className="post_hover">
                                                        <a
                                                            className="icon zoom"
                                                            title="Click to view Full Image "
                                                            href="/images/blog5-1098x737.jpg"
                                                            data-lightbox="example-set"
                                                        >
                                                            <i className="fa fa-search-plus" />{" "}
                                                        </a>
                                                        <a
                                                            className="icon readmore_link"
                                                            title="Click to view Read More "
                                                            href="/blogger&blogger_id=5"
                                                        >
                                                            <i className="fa fa-link" />
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="blog-right">
                                                <div className="date-time">
                                                    {" "}
                                                    <i className="fa fa-calendar" /> 11 Sep 2021
                                                </div>
                                                <h4>
                                                    <a href="/blogger&blogger_id=5">
                                                        Libero lorem vehicula qunato verbl
                                                    </a>{" "}
                                                </h4>
                                                <div className="blog-desc">
                                                    {" "}
                                                    Libero lorem vehicula qunato verbl Libero lorem vehicula
                                                    qunato verbl Libero lor...{" "}
                                                </div>
                                                <div className="view-blog">
                                                    <div className="write-comment">
                                                        {" "}
                                                        <a href="/blogger&blogger_id=5">0 Comments</a>{" "}
                                                    </div>
                                                    <div className="read-more">
                                                        {" "}
                                                        <a href="/blogger&blogger_id=5">
                                                            <i className="fa fa-link" /> read more
                                                        </a>{" "}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-item">
                                        <div className="product-block">
                                            <div className="blog-left">
                                                <div className="blog-image">
                                                    <img
                                                        src="/images/blog4-1098x737.jpg"
                                                        alt="From The Blog"
                                                        title="From The Blog"
                                                        className="img-thumbnail"
                                                    />
                                                    <div className="post-image-hover"> </div>
                                                    <p className="post_hover">
                                                        <a
                                                            className="icon zoom"
                                                            title="Click to view Full Image "
                                                            href="/images/blog4-1098x737.jpg"
                                                            data-lightbox="example-set"
                                                        >
                                                            <i className="fa fa-search-plus" />{" "}
                                                        </a>
                                                        <a
                                                            className="icon readmore_link"
                                                            title="Click to view Read More "
                                                            href="/blogger&blogger_id=4"
                                                        >
                                                            <i className="fa fa-link" />
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="blog-right">
                                                <div className="date-time">
                                                    {" "}
                                                    <i className="fa fa-calendar" /> 11 Sep 2021
                                                </div>
                                                <h4>
                                                    <a href="/blogger&blogger_id=4">
                                                        Libero loremnun ivftrc vehicula
                                                    </a>{" "}
                                                </h4>
                                                <div className="blog-desc">
                                                    {" "}
                                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                    laboris nisi ut aliqu...{" "}
                                                </div>
                                                <div className="view-blog">
                                                    <div className="write-comment">
                                                        {" "}
                                                        <a href="/blogger&blogger_id=4">0 Comments</a>{" "}
                                                    </div>
                                                    <div className="read-more">
                                                        {" "}
                                                        <a href="/blogger&blogger_id=4">
                                                            <i className="fa fa-link" /> read more
                                                        </a>{" "}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-item">
                                        <div className="product-block">
                                            <div className="blog-left">
                                                <div className="blog-image">
                                                    <img
                                                        src="/images/blog3-1098x737.jpg"
                                                        alt="From The Blog"
                                                        title="From The Blog"
                                                        className="img-thumbnail"
                                                    />
                                                    <div className="post-image-hover"> </div>
                                                    <p className="post_hover">
                                                        <a
                                                            className="icon zoom"
                                                            title="Click to view Full Image "
                                                            href="/images/blog3-1098x737.jpg"
                                                            data-lightbox="example-set"
                                                        >
                                                            <i className="fa fa-search-plus" />{" "}
                                                        </a>
                                                        <a
                                                            className="icon readmore_link"
                                                            title="Click to view Read More "
                                                            href="/blogger&blogger_id=3"
                                                        >
                                                            <i className="fa fa-link" />
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="blog-right">
                                                <div className="date-time">
                                                    {" "}
                                                    <i className="fa fa-calendar" /> 11 Sep 2021
                                                </div>
                                                <h4>
                                                    <a href="/blogger&blogger_id=3">
                                                        Nostrum ufrytb Iesumgtn Christum{" "}
                                                    </a>{" "}
                                                </h4>
                                                <div className="blog-desc">
                                                    {" "}
                                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                    laboris nisi ut aliqu...{" "}
                                                </div>
                                                <div className="view-blog">
                                                    <div className="write-comment">
                                                        {" "}
                                                        <a href="/blogger&blogger_id=3">0 Comments</a>{" "}
                                                    </div>
                                                    <div className="read-more">
                                                        {" "}
                                                        <a href="/blogger&blogger_id=3">
                                                            <i className="fa fa-link" /> read more
                                                        </a>{" "}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-item">
                                        <div className="product-block">
                                            <div className="blog-left">
                                                <div className="blog-image">
                                                    <img
                                                        src="/images/blog2-1098x737.jpg"
                                                        alt="From The Blog"
                                                        title="From The Blog"
                                                        className="img-thumbnail"
                                                    />
                                                    <div className="post-image-hover"> </div>
                                                    <p className="post_hover">
                                                        <a
                                                            className="icon zoom"
                                                            title="Click to view Full Image "
                                                            href="/images/blog2-1098x737.jpg"
                                                            data-lightbox="example-set"
                                                        >
                                                            <i className="fa fa-search-plus" />{" "}
                                                        </a>
                                                        <a
                                                            className="icon readmore_link"
                                                            title="Click to view Read More "
                                                            href="/blogger&blogger_id=2"
                                                        >
                                                            <i className="fa fa-link" />
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="blog-right">
                                                <div className="date-time">
                                                    {" "}
                                                    <i className="fa fa-calendar" /> 11 Sep 2021
                                                </div>
                                                <h4>
                                                    <a href="/blogger&blogger_id=2">
                                                        Excepteur sint occaecat cupidatat
                                                    </a>{" "}
                                                </h4>
                                                <div className="blog-desc">
                                                    {" "}
                                                    Duis aute irure dolor in reprehenderit in voluptate velit
                                                    esse cillum dolore eu ...{" "}
                                                </div>
                                                <div className="view-blog">
                                                    <div className="write-comment">
                                                        {" "}
                                                        <a href="/blogger&blogger_id=2">0 Comments</a>{" "}
                                                    </div>
                                                    <div className="read-more">
                                                        {" "}
                                                        <a href="/blogger&blogger_id=2">
                                                            <i className="fa fa-link" /> read more
                                                        </a>{" "}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-item">
                                        <div className="product-block">
                                            <div className="blog-left">
                                                <div className="blog-image">
                                                    <img
                                                        src="/images/blog1-1098x737.jpg"
                                                        alt="From The Blog"
                                                        title="From The Blog"
                                                        className="img-thumbnail"
                                                    />
                                                    <div className="post-image-hover"> </div>
                                                    <p className="post_hover">
                                                        <a
                                                            className="icon zoom"
                                                            title="Click to view Full Image "
                                                            href="/images/blog1-1098x737.jpg"
                                                            data-lightbox="example-set"
                                                        >
                                                            <i className="fa fa-search-plus" />{" "}
                                                        </a>
                                                        <a
                                                            className="icon readmore_link"
                                                            title="Click to view Read More "
                                                            href="/blogger&blogger_id=1"
                                                        >
                                                            <i className="fa fa-link" />
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="blog-right">
                                                <div className="date-time">
                                                    {" "}
                                                    <i className="fa fa-calendar" /> 11 Sep 2021
                                                </div>
                                                <h4>
                                                    <a href="/blogger&blogger_id=1">
                                                        Peat book is a treatise frbhtn
                                                    </a>{" "}
                                                </h4>
                                                <div className="blog-desc">
                                                    {" "}
                                                    Link: St. Louis Blues Audio shortcode: “Lorem ipsum dolor
                                                    sit amet, consectetur ...{" "}
                                                </div>
                                                <div className="view-blog">
                                                    <div className="write-comment">
                                                        {" "}
                                                        <a href="/blogger&blogger_id=1">0 Comments</a>{" "}
                                                    </div>
                                                    <div className="read-more">
                                                        {" "}
                                                        <a href="/blogger&blogger_id=1">
                                                            <i className="fa fa-link" /> read more
                                                        </a>{" "}
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
                    className="blog_default_width"
                    style={{ display: "none", visibility: "hidden" }}
                />
                <div id="carousel-0" className="banners-slider-carousel">
                    <div className="container">
                        <div className="row">
                            <div className="customNavigation">
                                <a className="prev fa fa-arrow-left">&nbsp;</a>
                                <a className="next fa fa-arrow-right">&nbsp;</a>
                            </div>
                            <div className="product-carousel" id="module-0-carousel">
                                <div className="slider-item">
                                    <div className="product-block">
                                        <div className="product-block-inner">
                                            <a href="#">
                                                <img src="/images/b1-114x74.png" alt="Nintendo" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="product-block">
                                        <div className="product-block-inner">
                                            <a href="#">
                                                <img src="/images/b2-114x74.png" alt="Starbucks" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="product-block">
                                        <div className="product-block-inner">
                                            <a href="#">
                                                <img src="/images/b3-114x74.png" alt="Disney" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="product-block">
                                        <div className="product-block-inner">
                                            <a href="#">
                                                <img src="/images/b4-114x74.png" alt="Dell" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="product-block">
                                        <div className="product-block-inner">
                                            <a href="#">
                                                <img
                                                    src="/images/b5-114x74.png"
                                                    alt="Harley Davidson"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="product-block">
                                        <div className="product-block-inner">
                                            <a href="#">
                                                <img src="/images/b6-114x74.png" alt="Canon" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="product-block">
                                        <div className="product-block-inner">
                                            <a href="#">
                                                <img src="/images/b2-114x74.png" alt="Burger King" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="product-block">
                                        <div className="product-block-inner">
                                            <a href="#">
                                                <img src="/images/b3-114x74.png" alt="Coca Cola" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="product-block">
                                        <div className="product-block-inner">
                                            <a href="#">
                                                <img src="/images/b4-114x74.png" alt="Sony" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="product-block">
                                        <div className="product-block-inner">
                                            <a href="#">
                                                <img src="/images/b5-114x74.png" alt="RedBull" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="product-block">
                                        <div className="product-block-inner">
                                            <a href="#">
                                                <img src="/images/b6-114x74.png" alt="NFL" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span
                    className="module_default_width"
                    style={{ display: "none", visibility: "hidden" }}
                />
            </div>
        </>
    );
};