import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { testimonials, typeTranslationsPlural, categoriesMap } from "../../lib/dictionary";
import MetaTags from '../Meta Tags/MetaTags';
import { getHomeCategories } from "../../services/clothesService";

export default function Home() {
    const location = useLocation();
    const navigate = useNavigate();
    const [typeCategories, setTypeCategories] = useState({});
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
    }, [location.pathname]);

    useEffect(() => {
        const fetchHomeCategories = async () => {
            setIsLoading(true);
            try {
                const categories = await getHomeCategories();
                setTypeCategories(categories);
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
                                                onClick={() => navigate(`/catalog?type=${type.toLowerCase()}&category=${category}`)}
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