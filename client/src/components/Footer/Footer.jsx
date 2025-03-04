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
                                            <div id="block_1" className="footer-area col-sm-3 column">
                                                <h5 className="toggle">Quick Imformation</h5>
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <div className="address">
                                                            <div className="address-text">Address</div>
                                                            <div className="contact_address">
                                                                My Company, 42 Puffin street Puffinville France
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="contact">
                                                            <div className="contact-text">Phone</div>
                                                            <div className="contact_phone">
                                                                +01 2222 365 /(+91) 01 2345 6789
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="email">
                                                            <div className="email-text">Mail</div>
                                                            <a href="#" className="email_link">
                                                                someone@example.com
                                                            </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="block_3" className="footer-area">
                                        <div id="info" className="col-sm-3 column" style={{ textAlign: "center" }}>
                                            <h5>About</h5>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <Link to="/about">За нас</Link>
                                                </li>
                                                <li>
                                                    <a href="/information&information_id=6">
                                                        Delivery Information
                                                    </a>
                                                </li>
                                                <li>
                                                    <Link to="/privacy-policy">Политика за поверителност</Link>
                                                </li>
                                                <li>
                                                    <a href="/information&information_id=5">
                                                        Terms &amp; Conditions
                                                    </a>
                                                </li>
                                                <li>
                                                    <Link to="/contact">Контакти</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div id="extra-link" className="col-sm-3 column" style={{ textAlign: "center" }}>
                                            <h5>Help</h5>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a href="/contact">Контакти</a>
                                                </li>
                                                <li>
                                                    <a href="/manufacturer">Brands</a>
                                                </li>
                                                <li>
                                                    <a href="/voucher">Special Discount</a>
                                                </li>
                                                <li>
                                                    <a href="/special">Specials</a>
                                                </li>
                                                <li>
                                                    <a href="/wishlist">Wish List</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div id="account_link" className="col-sm-3 column" style={{ textAlign: "center" }}>
                                            <h5>Policy</h5>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a href="/account">Policy</a>
                                                </li>
                                                <li>
                                                    <Link to="/orders-history">Мои поръчки</Link>
                                                </li>
                                                <li>
                                                    <a href="/manufacturer">Brands</a>
                                                </li>
                                                <li>
                                                    <a href="/sitemap">Site Map</a>
                                                </li>
                                                <li>
                                                    <a href="/newsletter">Newsletter</a>
                                                </li>
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
            </footer>
        </>
    );
};