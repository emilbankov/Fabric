import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MetaTags from '../Meta Tags/MetaTags';

export default function TermsAndConditions() {
    const location = useLocation();

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
                title="Fabric | Общи условия"
                description="Разгледайте Общите условия на Fabric. Нашите правила и условия уреждат използването на сайта, поръчките, доставките и връщането на продукти."
                keywords="Fabric, общи условия, правила, поръчки, доставки, връщане на продукти, terms and conditions, rules, orders, delivery, returns"
            />
            <div className="information-information-3 layout-2 left-col">
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
                        <li style={{ listStyle: "disc" }}>
                            <Link to="/">
                                <i className="fa fa-home" />
                            </Link>
                        </li>
                        <li style={{ listStyle: "disc" }}>
                            <Link to="/terms-and-conditions">
                                Общи условия
                            </Link>
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
                            <h1 className="page-title">Общи условия</h1>

                            <div className="aboutus">
                                <h3>Въведение</h3>
                                <div className="about-content">
                                    <p>Тези "Общи условия" уреждат използването на уебсайта Fabric (https://fabric-bg.com) за продажба на облекло. С използването на нашия сайт вие потвърждавате, че сте запознати и приемате тези условия.</p>
                                </div>
                            </div>

                            <div className="aboutus">
                                <h3>Потребителски акаунти</h3>
                                <div className="about-content">
                                    <p>Регистрация: Потребителите могат да създадат акаунт, като попълнят задължителните полета (Име, Фамилия, E-mail, Телефонен номер, Област, Град, Адрес, Парола).</p>
                                    <p>Отговорност: Потребителят носи отговорност за запазването на своя акаунт и парола. В случай на неоторизирана употреба, незабавно се свържете с нас.</p>
                                </div>
                            </div>

                            <div className="aboutus">
                                <h3>Поръчки и процес на поръчване</h3>
                                <div className="about-content">
                                    <ul>
                                        <li style={{ listStyle: "disc" }}>Поръчките могат да бъдат направени както от регистрирани потребители, така и от гости.</li>
                                        <li style={{ listStyle: "disc" }}>След подаването на поръчката чрез уебсайта вие ще получите потвърждение по имейл.</li>
                                        <li style={{ listStyle: "disc" }}>Обработката на поръчките се извършва чрез електронна комуникация, като окончателното потвърждение и детайлите за доставка се изпращат на предоставения имейл.</li>
                                        <li style={{ listStyle: "disc" }}>Поръчаните от Вас стоки ще бъдат доставени с куриерска фирма "Еконт Експрес" ООД на посочения от Вас адрес или в избран офис на "Еконт".</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="aboutus">
                                <h3>Плащане и доставка</h3>
                                <div className="about-content">
                                    <ul>
                                        <li style={{ listStyle: "disc" }}>Плащането не се извършва онлайн.</li>
                                        <li style={{ listStyle: "disc" }}>При получаване на доставката вие плащате сумата директно на куриера/транспортната фирма "Еконт".</li>
                                        <li style={{ listStyle: "disc" }}>Нашата роля е да улесним процеса на поръчка и доставка, като не поемаме отговорност за начина на извършване на доставката от Еcount.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="aboutus">
                                <h3>Връщане на продукти и рекламации</h3>
                                <div className="about-content">
                                    <ul>
                                        <li style={{ listStyle: "disc" }}>В рамките на 14-дневен срок от получаването на стоката имате право да върнете закупения продукт, при условие че стоката се намира във вида, в който е получена, без да е била ползвана и не е с ненарушена оригинална опаковка.</li>
                                        <li style={{ listStyle: "disc" }}>Транспортните разходи за връщането на стоката са за сметка на клиента.</li>
                                        <li style={{ listStyle: "disc" }}>В случай на несъответствие между поръчана и доставена стока, което не е било възможно да бъде установено в момента на доставката, стоката се подменя в срок от 4 работни дни (време необходимо за изработката на нов продукт) след заявката на клиента и при извършен оглед за установяване на несъответствието.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="aboutus">
                                <h3>Отговорност и ограничения</h3>
                                <div className="about-content">
                                    <ul>
                                        <li style={{ listStyle: "disc" }}>Нашият уебсайт служи като платформа за представяне на облекло и улесняване на поръчките.</li>
                                        <li style={{ listStyle: "disc" }}>Ние не носим отговорност за щети, загуби или неудобства, произтичащи от действията на доставчика (Еcount) или при несъответствие в доставката, освен ако това не се дължи на наша пряка небрежност.</li>
                                        <li style={{ listStyle: "disc" }}>Всички продукти се предлагат "каквито са", като подробната информация за всеки продукт е описана на съответната страница.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="aboutus">
                                <h3>Правна основа и приложимо право</h3>
                                <div className="about-content">
                                    <ul>
                                        <li style={{ listStyle: "disc" }}>Тези Общи условия се уреждат от българското законодателство.</li>
                                        <li style={{ listStyle: "disc" }}>Ние обработваме личните ви данни на основание договорно изпълнение (за изпълнение на поръчки) и законови задължения (например данъчно отчитане).</li>
                                        <li style={{ listStyle: "disc" }}>При възникнали спорове, страните се задължават да търсят решение по взаимно съгласие. Ако това не е възможно, споровете ще бъдат разрешавани според законодателството на Република България.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="aboutus">
                                <h3>Промени в Общите условия</h3>
                                <div className="about-content">
                                    <ul>
                                        <li style={{ listStyle: "disc" }}>Запазваме правото да променяме тези Общи условия по всяко време.</li>
                                        <li style={{ listStyle: "disc" }}>Всяка промяна ще бъде публикувана на уебсайта с актуализирана дата и ще влезе в сила от момента на публикуването.</li>
                                        <li style={{ listStyle: "disc" }}>Препоръчваме ви редовно да преглеждате Общите условия, за да сте информирани за евентуални изменения.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="aboutus">
                                <h3>Контактна информация</h3>
                                <div className="about-content">
                                    <p>Ако имате въпроси, коментари или искания, свързани с тези Общи условия, моля свържете се с нас на:</p>
                                    <ul>
                                        <li style={{ listStyle: "disc" }}>Имейл: fabricbgclothes@gmail.com</li>
                                        <li style={{ listStyle: "disc" }}>Телефон: <a style={{ textDecoration: "underline" }} href="tel:+359892046660">+359 892 046 660</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
