import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as clothesService from "../../services/clothesService"
import { homeCategories, testimonials, typeTranslations } from "../../lib/dictionary";
import { addToWishlist } from '../../services/authService';
import AuthContext from "../../contexts/AuthProvider";
import CustomNotification from "../CustomNotification/CustomNotification";
import { useWishlist } from "../../contexts/WishlistProvider";
import MetaTags from '../Meta Tags/MetaTags';

export default function Home() {
    const location = useLocation();
    const navigate = useNavigate();
    const [newest, setNewest] = useState([]);
    const [mostSold, setMostSold] = useState([]);
    const { isAuthenticated } = useContext(AuthContext);
    const [notification, setNotification] = useState({ message: '', type: '' });
    const { handleAddToWishlist } = useWishlist();

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

    const handleWishlistClick = async (id, productName, productType) => {
        setNotification({ message: '' });
        setTimeout(() => {
            handleAddToWishlist(
                id,
                () => {
                    setNotification({ message: '' });
                    setTimeout(() => {
                        setNotification({
                            message: `Успешно добавихте ${typeTranslations[productType]} ${productName} към любими!`,
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

    return (
        <>
            <MetaTags 
                title="Начало - Fabric"
                description="Fabric - Вашият онлайн магазин за модерни дрехи и аксесоари. Разгледайте нашите най-нови и най-продавани продукти."
                keywords="дрехи, дреха, мода, онлайн магазин, тениски, тениска, суичъри, суичър, блузи, блуза, 
                        къси панталони, къси панталон, комплекти, комплект, кърпи, кърпа, бандани, бандана, 
                        плажни кърпи, плажна кърпа, аксесоари, аксесоар, Fabric, fabric,
                        clothes, clothing, fashion, online store, t-shirts, t-shirt, sweatshirts, sweatshirt, 
                        blouses, blouse, shorts, short, sets, set, towels, towel, bandanas, bandana, 
                        beach towels, beach towel, accessories, accessory"
            />
            
            {notification.message && (
                <CustomNotification
                    message={notification.message}
                />
            )}
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
                                    <Link to="/catalog?type=t_shirt&sort=new&size=20"><img src="/images/banner 1.jpg" alt="банер тениски" className="img-responsive banner-img-100" /></Link>
                                </div>
                                <div className="swiper-slide text-center">
                                    <Link to="/catalog?type=long_t_shirt&sort=new&size=20"><img src="/images/banner 2.jpg" alt="банер блузи" className="img-responsive banner-img-100" /></Link>
                                </div>
                                <div className="swiper-slide text-center">
                                    <Link to="/catalog?type=sweatshirt&sort=new&size=20"><img src="/images/banner 3.jpg" alt="банер сутчъри" className="img-responsive banner-img-100" /></Link>
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
            </div>
        </>
    );
};