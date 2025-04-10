import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <footer>
                <div id="footer">
                    <div className="container">
                        <div className="row">
                            <div className="footer-blocks">
                                <div className="footer-right">
                                    <div className="content_footer_left" />
                                </div>
                                <div className="footer-left">
                                    <div id="block_4" className="footer-area">
                                        <div className="content_footer_right">
                                            <div id="block_1" className="footer-area col-sm-3 column" style={{ textAlign: "center" }}>
                                                <h5 className="toggle" >Контакти</h5>
                                                <ul className="list-unstyled">
                                                    {/* <li>
                                                        <div className="address">
                                                            <div className="address-text">Address</div>
                                                            <div className="contact_address">
                                                                Fabric
                                                            </div>
                                                        </div>
                                                    </li> */}
                                                    <li>
                                                        <div className="contact" style={{ paddingTop: "0" }}>
                                                            <a href="tel:+359892046660">
                                                                <div className="contact-text">Phone</div>
                                                                <div className="contact_phone">
                                                                    +359 892 046 660
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="email" style={{ paddingTop: "0" }}>
                                                            <div className="email-text">Mail</div>
                                                            <a href="#" className="email_link">
                                                                fabricbgclothes@gmail.com
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a target="_blanc" href="https://www.facebook.com/profile.php?id=61573919165882">
                                                            <div className="contact" style={{ padding: "0" }}>
                                                                <div className="facebook_text">Facebook</div>
                                                                <div className="contact_phone">
                                                                    Fabric.net
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="block_3" className="footer-area">
                                        <div id="info" className="col-sm-3 column" style={{ textAlign: "center" }}>
                                            <h5 style={{ textTransform: "none" }}>За нас</h5>
                                            <ul className="list-unstyled">
                                                <li><Link to="/about">За нас</Link></li>
                                                <li><Link to="/contact">Контакти</Link></li>
                                                <li><Link to="/sitemap">Карта на сайта</Link></li>
                                                <li><Link to="/privacy-policy">Политика за поверителност</Link></li>
                                                <li><Link to="/terms-and-conditions">Общи условия</Link></li>
                                            </ul>
                                        </div>
                                        <div id="extra-link" className="col-sm-3 column" style={{ textAlign: "center" }}>
                                            <h5>Акаунт</h5>
                                            <ul className="list-unstyled">
                                                <li><Link to="/login">Вход</Link></li>
                                                <li><Link to="/register">Регистрация</Link></li>
                                                <li><Link to="/account">Акаунт</Link></li>
                                                <li><Link to="/orders-history">Мои поръчки</Link></li>
                                                <li><Link to="/wishlist">Любими</Link></li>
                                            </ul>
                                        </div>
                                        <div id="account_link" className="col-sm-3 column" style={{ textAlign: "center" }}>
                                            <h5>Категории</h5>
                                            <ul className="list-unstyled">
                                                <li><Link to="/catalog?type=t_shirt&sort=new&size=20">Тениски</Link></li>
                                                <li><Link to="/catalog?type=long_t_shirt&sort=new&size=20">Блузи</Link></li>
                                                <li><Link to="/catalog?type=sweatshirtt&sort=new&size=20">Суитчъри</Link></li>
                                                <li><Link to="/catalog?type=shorts&sort=new&size=20">Къси панталони</Link></li>
                                                <li><Link to="/catalog?type=kits&sort=new&size=20">Комплекти</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottomfooter">
                    <div className="container">
                        <div className="row">
                            <p className="powered">
                                &copy; {new Date().getFullYear()} Fabric. All rights reserved.
                            </p>
                            <div className="footer-logo" />
                        </div>
                    </div>
                </div>
            </footer >
        </>
    );
};