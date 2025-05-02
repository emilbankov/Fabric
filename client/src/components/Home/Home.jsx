import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { testimonials, typeTranslationsPlural, categoriesMap } from "../../lib/dictionary";
import MetaTags from '../Meta Tags/MetaTags';
import { getHomeCategories, getNewest } from "../../services/clothesService";

export default function Home() {
    const location = useLocation();
    const navigate = useNavigate();
    const [typeCategories, setTypeCategories] = useState({});
    const [newest, setNewest] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // Define the desired order of types
    const typeOrder = ["T_SHIRT", "LONG_T_SHIRT", "SWEATSHIRT", "SHORTS", "KITS", "BANDANAS"];

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

    useEffect(() => {
        const fetchHomeCategories = async () => {
            setIsLoading(true);
            try {
                const [categories, newestItems] = await Promise.all([
                    getHomeCategories(),
                    getNewest()
                ]);
                setTypeCategories(categories);
                setNewest(newestItems);
                console.log(newest);

            } catch (error) {
                console.error("Failed to fetch home categories:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchHomeCategories();
    }, []);

    // Sort the types based on the defined order
    const sortedTypes = Object.keys(typeCategories).sort((a, b) => {
        return typeOrder.indexOf(a) - typeOrder.indexOf(b);
    });

    return (
        <>
            <MetaTags
                title="Fabric | Начало"
                description="Fabric - Вашият онлайн магазин за модерни дрехи и аксесоари. Разгледайте нашите най-нови и най-продавани продукти."
                keywords="дрехи, дреха, мода, онлайн магазин, тениски, тениска, суичъри, суичър, блузи, блуза, 
                        къси панталони, къси панталон, комплекти, комплект, кърпи, кърпа, бандани, бандана, 
                        плажни кърпи, плажна кърпа, аксесоари, аксесоар, Fabric, fabric,
                        clothes, clothing, fashion, online store, t-shirts, t-shirt, sweatshirts, sweatshirt, 
                        blouses, blouse, shorts, short, sets, set, towels, towel, bandanas, bandana, 
                        beach towels, beach towel, accessories, accessory"
            />
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
                                    <Link to="/catalog?type=t_shirt&sort=new&size=20"><img src="/images/banners/t_shirt.png" alt="банер тениски" className="img-responsive banner-img-100" /></Link>
                                </div>
                                {/* <div className="swiper-slide text-center">
                                    <Link to="/catalog?type=long_t_shirt&sort=new&size=20"><img src="/images/banner 2.jpg" alt="банер блузи" className="img-responsive banner-img-100" /></Link>
                                </div>
                                <div className="swiper-slide text-center">
                                    <Link to="/catalog?type=sweatshirt&sort=new&size=20"><img src="/images/banner 3.jpg" alt="банер сутчъри" className="img-responsive banner-img-100" /></Link>
                                </div> */}
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
                {isLoading ? (
                    <div style={{ margin: '12% auto 8.4%' }} className="text-center">
                        <img src="/images/loader.gif" alt="Loading..." />
                    </div>
                ) : (
                    <div className="category_list_cms bottom-to-top hb-animate-element">
                        {sortedTypes.map((type) => (
                            <div key={type} className="container">
                                <div className="category-section">
                                    <h1 className="category_title" style={{ fontSize: "24px", margin: "0" }}>
                                        {typeTranslationsPlural[type] || type}
                                    </h1>
                                    <div className="categories-cards-home">
                                        {typeCategories[type].map((category) => (
                                            <div
                                                className="col-6 col-md-4 col-lg-2-1 category-icon categories-responsive home-categories-card"
                                                key={category}
                                                onClick={() => navigate(`/catalog?type=${type.toLowerCase()}&category=${category}&sort=new&size=20`)}
                                                style={{ padding: "0 7.5px" }}
                                            >
                                                <div className="icon-wrapper">
                                                    <img
                                                        src={`/images/categories-${type.toLowerCase()}/${category}.webp`}
                                                        alt={category}
                                                        className="img-responsive"
                                                    />
                                                    <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{categoriesMap[category]}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="hometab box" style={{ marginTop: "78px" }}>
                    <div className="container">
                        <div className="row">
                            <div className="tab-head">
                                <div className="hometab-heading box-heading">Най-нови артикули</div>
                                {/* <div id="tabs" className="htabs">
                                    <ul className="etabs">
                                        <li className="tab"><a href="#tab-latest">Най-нови</a></li>
                                        <li className="tab"></li>
                                        <li className="tab"><a href="#tab-special">Най-продавани</a></li>
                                    </ul>
                                </div> */}
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
                                                <div className="slider-item" key={clothing.id} style={{ width: "284px" }}>
                                                    <div className="product-block product-thumb transition">
                                                        <div className="product-block-inner">
                                                            <div className="image">
                                                                <Link to={`/clothing/details/${clothing.id}`}>
                                                                    <img
                                                                        src={`https://fabric-bg.com/images-ftp${clothing.images.find(image => image.side === 'front')?.path}.webp`}
                                                                        title={clothing.name}
                                                                        alt={clothing.name}
                                                                        className="img-responsive reg-image"
                                                                    />
                                                                    {clothing.type !== "KIT" && (
                                                                        <img
                                                                            src={`https://fabric-bg.com/images-ftp${clothing.images.find(image => image.side === 'back')?.path}.webp`}
                                                                            title={clothing.name}
                                                                            alt={clothing.name}
                                                                            className="img-responsive hover-image"
                                                                        />
                                                                    )}
                                                                    {clothing.type === "KIT" && (
                                                                        <img
                                                                            src={`https://fabric-bg.com/images-ftp${clothing.images.find(image => image.side === 'front')?.path}.webp`}
                                                                            title={clothing.name}
                                                                            alt={clothing.name}
                                                                            className="img-responsive hover-image"
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
                                        </div>
                                    </div>
                                </div>
                                <span
                                    className="tablatest_default_width"
                                    style={{ display: "none", visibility: "hidden" }}
                                />
                            </div>
                            {/* <div id="tab-special" className="tab-content">
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
                                                                        src={`https://res.cloudinary.com/dfttdd1vq/image/upload${product.images.find(image => image.side === 'front')?.path}`}
                                                                        title={product.name}
                                                                        alt={product.name}
                                                                        className="img-responsive reg-image"
                                                                    />

                                                                    {product.type !== "KIT" && (
                                                                        <img
                                                                            src={`https://res.cloudinary.com/dfttdd1vq/image/upload${product.images.find(image => image.side === 'back')?.path}`}
                                                                            title={product.name}
                                                                            alt={product.name}
                                                                            className="img-responsive hover-image"
                                                                        />
                                                                    )}

                                                                    {product.type === "KIT" && (
                                                                        <img
                                                                            src={`https://res.cloudinary.com/dfttdd1vq/image/upload${product.images.find(image => image.side === 'front')?.path}`}
                                                                            title={product.name}
                                                                            alt={product.name}
                                                                            className="img-responsive hover-image"
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
                            </div> */}
                        </div>
                    </div>
                </div>

                <div id="parallaxcmsblock" className="block parallax">
                    <div id="wdcmstestimonial">
                        <div className="wdtestimonial-main">
                            <div className="wdtestimonial-content">
                                <div className="wdtestimonial-inner">
                                    <ul id="wdtestimonial-carousel" className="wd-carousel">
                                        {testimonials.map((testimonial, index) => (
                                            <li key={index}>
                                                <div className="testimonial-image">
                                                    <img
                                                        alt=""
                                                        src={testimonial.image}
                                                        width={86}
                                                        height={86}
                                                    />
                                                </div>
                                                <div className="testimonial-content">
                                                    <div className="testimonial-desc">
                                                        <p>{testimonial.comment}</p>
                                                    </div>
                                                    <div className="quote_img" />
                                                    <div className="testimonial-user-title">
                                                        <h4>{testimonial.name}</h4>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};