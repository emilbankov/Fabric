import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function PrivacyPolicy() {
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
                            <a href="common/home">
                                <i className="fa fa-home" />
                            </a>
                        </li>
                        <li style={{ listStyle: "disc" }}>
                            <Link to="/privacy-policy">
                                Политика за поверителност
                            </Link>
                        </li>
                    </ul>
                    <div className="row">
                        <aside id="column-left" className="col-sm-3 hidden-xs">
                            <div className="box">
                                <div className="box-heading">Information</div>
                                <div className="list-group">
                                    <Link
                                        className="list-group-item"
                                        to="/about"
                                    >
                                        За нас{" "}
                                    </Link>
                                    <a
                                        className="list-group-item"
                                        href="information/information&information_id=6"
                                    >
                                        Delivery Information{" "}
                                    </a>
                                    <Link
                                        className="list-group-item"
                                        to="/privacy-policy"
                                    >
                                        Политика за поверителност{" "}
                                    </Link>
                                    <a
                                        className="list-group-item"
                                        href="information/information&information_id=5"
                                    >
                                        Общи условия{" "}
                                    </a>
                                    <Link
                                        className="list-group-item"
                                        to="/contact"
                                    >
                                        Контакти{" "}
                                    </Link>
                                    <a
                                        className="list-group-item"
                                        href="information/sitemap"
                                    >
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
                                                    src="https://opc.webdigify.com/OPC02/OPC037_vesture/image/cache/catalog/left-banner-272x340.jpg"
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
                                <div className="box-heading">Account</div>
                                <div className="list-group">
                                    <a
                                        href="account/login"
                                        className="list-group-item"
                                    >
                                        Login{" "}
                                    </a>{" "}
                                    <a
                                        href="account/register"
                                        className="list-group-item"
                                    >
                                        Register
                                    </a>{" "}
                                    <a
                                        href="account/forgotten"
                                        className="list-group-item"
                                    >
                                        Forgotten Password{" "}
                                    </a>
                                    <a
                                        href="account/account "
                                        className="list-group-item"
                                    >
                                        My Account{" "}
                                    </a>
                                    <a
                                        href="account/address"
                                        className="list-group-item"
                                    >
                                        Address Book
                                    </a>{" "}
                                    <a
                                        href="account/wishlist "
                                        className="list-group-item"
                                    >
                                        Wish List{" "}
                                    </a>{" "}
                                    <a
                                        href="account/order "
                                        className="list-group-item"
                                    >
                                        Order History{" "}
                                    </a>{" "}
                                    <a
                                        href="account/download"
                                        className="list-group-item"
                                    >
                                        Downloads{" "}
                                    </a>
                                    <a
                                        href="account/recurring"
                                        className="list-group-item"
                                    >
                                        Recurring payments{" "}
                                    </a>{" "}
                                    <a
                                        href="account/reward "
                                        className="list-group-item"
                                    >
                                        Reward Points{" "}
                                    </a>{" "}
                                    <a
                                        href="account/return"
                                        className="list-group-item"
                                    >
                                        Returns{" "}
                                    </a>{" "}
                                    <a
                                        href="account/transaction"
                                        className="list-group-item"
                                    >
                                        Transactions{" "}
                                    </a>{" "}
                                    <a
                                        href="account/newsletter"
                                        className="list-group-item"
                                    >
                                        Newsletter{" "}
                                    </a>
                                </div>
                            </div>
                        </aside>
                        <div id="content" className="col-sm-9">
                            <h1 className="page-title">Политика за Поверителност</h1>

                            <div className="aboutus">
                                <h3>Въведение</h3>
                                <div className="about-content">
                                    &nbsp;&nbsp;&nbsp;&nbsp;Ние се ангажираме да защитаваме вашата поверителност. Тази Политика за поверителност описва как събираме, използваме и защитаваме личните данни, предоставяни от вас при ползването на нашия уебсайт за поръчка на облекло, както и начина, по който обработваме технически данни за целите на сигурността.
                                </div>
                            </div>

                            <div className="aboutus">
                                <h3>Какви данни събираме</h3>
                                <div className="about-content">
                                    <h4>Лични данни:</h4>
                                    <p>При регистрация или поръчка (като регистриран потребител или гост) ние събираме следната информация:</p>
                                    <ul>
                                        <li style={{ listStyle: "disc" }}>Име, Фамилия</li>
                                        <li style={{ listStyle: "disc" }}>E-mail</li>
                                        <li style={{ listStyle: "disc" }}>Телефонен номер</li>
                                        <li style={{ listStyle: "disc" }}>Област, Град, Адрес</li>
                                        <li style={{ listStyle: "disc" }}>Парола (за регистрирани акаунти)</li>
                                    </ul>

                                    <h4>Технически данни:</h4>
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;За целите на сигурността нашият уебсайт предава технически данни като част от JWT токена за незабавна верификация на заявките. Тези данни могат да включват информация за браузъра и устройството, но не се съхраняват на нашите сървъри.</p>
                                </div>
                            </div>

                            <div className="aboutus">
                                <h3>Цел и правно основание за обработката на данни</h3>
                                <div className="about-content">
                                    <h4>Правно основание:</h4>
                                    <ul>
                                        <li style={{ listStyle: "disc" }}>Ние обработваме вашите лични данни на основание договорно изпълнение (за изпълнение на поръчки) и законови задължения (например данъчно отчитане).</li>
                                    </ul>

                                    <h4>Цел на обработката:</h4>
                                    <ul>
                                        <li style={{ listStyle: "disc" }}>Лични данни: Използват се за обработка на поръчки, управление на потребителските акаунти и комуникация с вас.</li>
                                        <li style={{ listStyle: "disc" }}>Технически данни: Използват се единствено за осигуряване на сигурността и верификация на заявките в реално време.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="aboutus">
                                <h3>Използване на вашите данни</h3>
                                <div className="about-content">
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Вашата информация се използва само за посочените цели. Ние не продаваме и не споделяме личните ви данни с трети страни за маркетингови цели. Техническите данни се използват само за моментална проверка и не се записват.</p>
                                </div>
                            </div>

                            <div className="aboutus">
                                <h3>Бисквитки и технологии за проследяване</h3>
                                <div className="about-content">
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Нашият уебсайт не използва бисквитки за събиране на лични данни. Ако в бъдеще решим да използваме бисквитки или други технологии за анализ (например инструменти като Google Analytics), ще предоставим допълнителна информация и ще осигурим необходимото съгласие от потребителите.</p>
                                </div>
                            </div>

                            <div className="aboutus">
                                <h3>Трети страни и външни услуги</h3>
                                <div className="about-content">
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;За целите на изпълнение на поръчките и доставките, ние споделяме ограничени данни (като адрес и телефонен номер) с нашите партньори – например транспортната фирма Еcount. Всички външни услуги и доставчици спазват строги мерки за сигурност при обработката на данните.</p>
                                </div>
                            </div>

                            <div className="aboutus">
                                <h3>Съхранение на данни</h3>
                                <div className="about-content">
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Личните ви данни се съхраняват за период от 5 години след последната ви поръчка, освен ако закон не изисква по-дълъг срок. Техническите данни се предават и използват в реално време и не се съхраняват.</p>
                                </div>
                            </div>

                            <div className="aboutus">
                                <h3>Защита на данните</h3>
                                <div className="about-content">
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Прилагаме адекватни мерки за защита на вашите лични данни. Въпреки това, не съществува напълно сигурен метод за предаване на данни през интернет или електронно съхранение.</p>
                                </div>
                            </div>

                            <div className="aboutus">
                                <h3>Защита на данните на деца</h3>
                                <div className="about-content">
                                    <p>Нашите услуги не са насочени към лица под 18 години. Ние не събираме съзнателно лични данни от деца.</p>
                                </div>
                            </div>

                            <div className="aboutus">
                                <h3>Вашите права</h3>
                                <div className="about-content">
                                    <p>Съгласно GDPR имате право да:</p>
                                    <ul>
                                        <li style={{ listStyle: "disc" }}>Получавате информация за събраните лични данни</li>
                                        <li style={{ listStyle: "disc" }}>Искате корекции или актуализации</li>
                                        <li style={{ listStyle: "disc" }}>Поискате изтриването на данните ви</li>
                                        <li style={{ listStyle: "disc" }}>Ограничите или възразите срещу обработката на вашите данни</li>
                                    </ul>
                                    <p>За упражняване на тези права, моля свържете се с нас на: [Въведете имейл/телефон за контакт].</p>
                                </div>
                            </div>

                            <div className="aboutus">
                                <h3>Промени в тази политика</h3>
                                <div className="about-content">
                                    <p>Можем периодично да актуализираме тази Политика за поверителност. Всички промени ще бъдат публикувани на тази страница с актуализирана дата.</p>
                                </div>
                            </div>

                            <div className="aboutus">
                                <h3>Контакт</h3>
                                <div className="about-content">
                                    <p>Ако имате въпроси или притеснения относно
                                        нашата Политика за поверителност, моля
                                        свържете се с нас на:
                                    </p>
                                    <ul>
                                        <li style={{ listStyle: "disc" }}>fabricbgclothes@gmail.com</li>
                                        <li style={{ listStyle: "disc" }}><a style={{ textDecoration: "underline" }} href="tel:+359892046660">+359 892 046 660</a></li>
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
