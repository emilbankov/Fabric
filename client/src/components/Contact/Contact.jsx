import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Contact() {
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
            <div className="information-contact   layout-2 left-col">
                <div className="content_headercms_bottom" />
                <div className="content-top-breadcum">
                    <div className="container">
                        <div className="row">
                            <div id="title-content"></div>
                        </div>
                    </div>
                </div>
                <div id="information-contact" className="container">
                    <ul className="breadcrumb">
                        <li><Link to="/"><i className="fa fa-home" /></Link></li>
                        <li><Link to="/contact">Контакти</Link></li>
                    </ul>
                    <div className="row">
                        <aside id="column-left" className="col-sm-3 hidden-xs">
                            <div className="box">
                                <div className="box-heading">Information</div>
                                <div className="list-group">
                                    <Link className="list-group-item" to="/about">
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
                                        Политика за поверителност
                                    </Link>
                                    <Link
                                        className="list-group-item"
                                        to="/terms-and-conditions"
                                    >
                                        Общи условия{" "}
                                    </Link>
                                    <Link className="list-group-item" to="/contact">
                                        Контакти{" "}
                                    </Link>
                                    <Link className="list-group-item" to="/sitemap">
                                        Карта на сайта{" "}
                                    </Link>
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
                                <div className="box-heading">Account</div>
                                <div className="list-group">
                                    <Link to="/login" className="list-group-item">
                                        Login{" "}
                                    </Link>{" "}
                                    <Link to="/register" className="list-group-item">
                                        Register
                                    </Link>{" "}
                                    <Link to="/forgotten" className="list-group-item">
                                        Forgotten Password{" "}
                                    </Link>
                                    <Link to="/account " className="list-group-item">
                                        My Account{" "}
                                    </Link>
                                    <Link to="/address" className="list-group-item">
                                        Address Book
                                    </Link>{" "}
                                    <Link to="/wishlist " className="list-group-item">
                                        Wish List{" "}
                                    </Link>{" "}
                                    <Link to="/order " className="list-group-item">
                                        Order History{" "}
                                    </Link>{" "}
                                    <Link to="/download" className="list-group-item">
                                        Downloads{" "}
                                    </Link>
                                    <Link to="/recurring" className="list-group-item">
                                        Recurring payments{" "}
                                    </Link>{" "}
                                    <Link to="/reward " className="list-group-item">
                                        Reward Points{" "}
                                    </Link>{" "}
                                    <Link to="/return" className="list-group-item">
                                        Returns{" "}
                                    </Link>{" "}
                                    <Link to="/transaction" className="list-group-item">
                                        Transactions{" "}
                                    </Link>{" "}
                                    <Link to="/newsletter" className="list-group-item">
                                        Newsletter{" "}
                                    </Link>
                                </div>
                            </div>
                        </aside>
                        <div id="content" className="col-sm-9">
                            <h1>Контакти</h1>
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <div className="row contact-info">
                                        <div className="address-detail">
                                            <strong>Fabric</strong>
                                            {/* <address style={{ marginBottom: "10px" }}>ж.к. Христо Ботев - Юг, ул. "Славееви гори" №47А, 4004 Пловдив, България</address>
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.123123123123!2d24.7287739!3d42.1249508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd1aa8f4a1103%3A0xc3e37ff81727cb3b!2z0JzQsNCz0LDQstC40L0g0JLQsNC90L3QtdC7!5e0!3m2!1sbg!2sbg!4v1691234567890"
                                                width="100%"
                                                height="300"
                                                style={{ border: 0 }}
                                                allowFullScreen
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                            />
                                            <a
                                                href="https://www.google.com/maps/place/Магазин+Ванел/@42.124951,24.728774,18z/data=!4m6!3m5!1s0x14acd1aa8f4a1103:0xc3e37ff81727cb3b!8m2!3d42.1249508!4d24.7287739!16s%2Fg%2F11fb2pw5v8?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D"
                                                target="_blank"
                                                className="btn btn-info"
                                                style={{ color: "#fff", marginTop: "10px", float: "right" }}
                                            >
                                                <i className="fa fa-map-marker" /> Виж Google Maps{" "}
                                            </a> */}
                                        </div>
                                        <div className="telephone">
                                            <strong>Телефон</strong>
                                            <address>+359 892 046 660</address>
                                        </div>
                                        <div className="time">
                                            <strong>Работно време</strong>
                                            <address>08:00 до 18:00ч.</address>
                                        </div>
                                        <div className="comment">
                                            <strong>Описание</strong>
                                            <address>
                                                Fabric е вашият избор за модерни и стилни дрехи с уникални принтове и високо качество. Ние предлагаме разнообразие от модели за всеки вкус и повод, които ще подчертаят вашата индивидуалност. Посетете ни и открийте най-новите тенденции в света на модата!
                                            </address>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <form
                                action="information/contact"
                                method="post"
                                encType="multipart/form-data"
                                className="form-horizontal"
                            >
                                <fieldset>
                                    <legend>Contact Form</legend>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="input-name">
                                            Имена
                                        </label>
                                        <div className="col-sm-10">
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
                                        <label className="col-sm-2 control-label" htmlFor="input-email">
                                            E-mail
                                        </label>
                                        <div className="col-sm-10">
                                            <input
                                                type="text"
                                                name="email"
                                                defaultValue=""
                                                id="input-email"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="input-enquiry">
                                            Запитване
                                        </label>
                                        <div className="col-sm-10">
                                            <textarea
                                                name="enquiry"
                                                rows={10}
                                                id="input-enquiry"
                                                className="form-control"
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="buttons">
                                    <div className="pull-right">
                                        <input
                                            className="btn btn-primary"
                                            type="submit"
                                            value="Изпрати"
                                        />
                                    </div>
                                </div>
                            </form> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};