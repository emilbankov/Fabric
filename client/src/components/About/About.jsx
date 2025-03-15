import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MetaTags from '../Meta Tags/MetaTags';

export default function About() {
    let location = useLocation();

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
                title="Fabric | За нас"
                description="Разберете повече за Fabric - нашата мисия, ценности и история. Ние сме тук, за да ви предложим уникални и качествени дрехи."
                keywords="Fabric, за нас, мисия, ценности, история, дрехи, мода, онлайн магазин, about, about page, about us, learn more about us, mission, history, clothes, clothing website, clothing"
            />
            <div className="information-information-4   layout-2 left-col">
                <div className="content_headercms_bottom" />
                <div className="content-top-breadcum">
                    <div className="container">
                        <div className="row">
                            <div id="title-content"></div>
                        </div>
                    </div>
                </div>
                <div id="information-information" className="container">
                    <ul className="breadcrumb">
                        <li>
                            <Link to="/">
                                <i className="fa fa-home" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">За нас</Link>
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
                                                    src="images/left-banner-272x340.jpg"
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
                        </aside>
                        <div id="content" className="col-sm-9">
                            <h1 className="page-title">За нас</h1>
                            <div className="aboutus">
                                <h3>Кои сме ние?</h3>
                                <div className="image1"> </div>
                                <div className="about-content">
                                    Ние сме екип от ентусиасти, които вярват, че модата трябва да бъде забавна, достъпна и уникална за всеки. Създадохме Fabric, за да предложим нещо различно – дрехи, които не само изглеждат страхотно, но и казват нещо за вас. Защото, нека си признаем, всеки има история, която заслужава да бъде разказана!
                                </div>
                            </div>
                            <div className="aboutus">
                                <h3>Нашата мисия</h3>
                                <div className="image2"> </div>
                                <div className="about-content">
                                    Нашата мисия е проста: да ви накараме да се усмихнете, докато обличате любимите си дрехи. Искаме да ви предложим не просто дрехи, а начин на живот. Защо да носите нещо обикновено, когато можете да бъдете екстравагантни, смели и уникални? Ние сме тук, за да ви помогнем да изразите себе си!
                                </div>
                            </div>
                            <div className="aboutus">
                                <h3>Защо избрахме името Fabric?</h3>
                                <div className="image3"> </div>
                                <div className="about-content">
                                    Защото всяка дреха е като плат – тя е основата на вашия стил. Ние сме като майсторите, които създават нещо красиво от този плат. И защо Fabric? Защото звучи модерно, стилно и лесно за запомняне. Освен това, кой не обича да се увива в мека и удобна дреха?
                                </div>
                            </div>
                            <div className="aboutus">
                                <h3>Нашите ценности</h3>
                                <div className="image4"> </div>
                                <div className="about-content">
                                    Ние вярваме в качеството, устойчивостта и креативността. Всяка дреха, която предлагаме, е създадена с любов и внимание към детайла. Също така, ние се стремим да бъдем екологично отговорни, затова използваме устойчиви материали и практики. Защото модата може да бъде и етична!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};