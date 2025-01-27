import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function About() {
    let location = useLocation();

    useEffect(() => {
        const handleLoad = () => {
            const existingScript = document.querySelector('script[src="/js/custom.js"]');
            if (existingScript) {
                existingScript.remove();
            }

            const script = document.createElement('script');
            script.src = '/js/custom.js';
            script.async = true;
            document.body.appendChild(script);
        };

        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, [location]);

    return (
        <>
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
                            <Link to="/about">About Us</Link>
                        </li>
                    </ul>
                    <div className="row">
                        <aside id="column-left" className="col-sm-3 hidden-xs">
                            <div className="box">
                                <div className="box-heading">Information</div>
                                <div className="list-group">
                                    <Link className="list-group-item" to="/about">
                                        About Us{" "}
                                    </Link>
                                    <a
                                        className="list-group-item"
                                        href="information/information&information_id=6"
                                    >
                                        Delivery Information{" "}
                                    </a>
                                    <a
                                        className="list-group-item"
                                        href="information/information&information_id=3"
                                    >
                                        Privacy Policy{" "}
                                    </a>
                                    <a
                                        className="list-group-item"
                                        href="information/information&information_id=5"
                                    >
                                        Terms &amp; Conditions{" "}
                                    </a>
                                    <a className="list-group-item" href="contact.html">
                                        Contact Us{" "}
                                    </a>
                                    <a className="list-group-item" href="information/sitemap">
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
                                                    src="assets/images/left-banner-272x340.jpg"
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
                                    <Link to="/account" className="list-group-item">
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
                            <h1 className="page-title">About Us</h1>
                            <div className="aboutus">
                                <h3>The standard Lorem Ipsum passage</h3>
                                <div className="image1"> </div>
                                <div className="about-content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                                    accumsan turpis posuere cursus ultricies. Ut nunc justo, faucibus
                                    eget elit quis, vehicula rhoncus nulla. Phasellus convallis sem nec
                                    facilisis commodo. Fusce ut molestie turpis. Suspendisse aliquet sed
                                    massa in vulputate. Quisque gravida suscipit tincidunt.
                                </div>
                            </div>
                            <div className="aboutus">
                                <h3>At vero eos et accusamus et iusto odio dignissimos</h3>
                                <div className="image2"> </div>
                                <div className="about-content">
                                    Mauris elementum scelerisque elit non egestas. Cras lacus nibh,
                                    pretium quis bibendum nec, dapibus a metus. Morbi eros lectus,
                                    aliquam eu aliquam id, fringilla nec eros. Praesent suscipit commodo
                                    diam, non viverra turpis dapibus malesuada. Duis cursus metus eu sem
                                    eleifend, id rhoncus odio porttitor.
                                </div>
                            </div>
                            <div className="aboutus">
                                <h3>
                                    Certain circumstances and owing to the claims of duty or the
                                    obligations
                                </h3>
                                <div className="image3"> </div>
                                <div className="about-content">
                                    But I must explain to you how all this mistaken idea of denouncing
                                    pleasure and praising pain was born and I will give you a complete
                                    account of the system, and expound the actual teachings of the great
                                    explorer of the truth, the master-builder of human happiness. No one
                                    rejects, dislikes.
                                </div>
                            </div>
                            <div className="aboutus">
                                <h3>Integer ultrices laoreet nunc in gravida</h3>
                                <div className="image4"> </div>
                                <div className="about-content">
                                    Sed lobortis pulvinar viverra. Cum sociis natoque penatibus et
                                    magnis dis parturient montes, nascetur ridiculus mus. Mauris
                                    suscipit dolor scelerisque, bibendum tellus ac, pharetra sapien.
                                    Praesent lacinia scelerisque odio et consequat. In a facilisis
                                    lacus. Maecenas vel lobortis tellus.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};