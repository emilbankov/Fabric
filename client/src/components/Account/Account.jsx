import { useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../../contexts/AuthProvider";
export default function Account() {
    let location = useLocation();
    const { isAuthenticated, userProfile } = useContext(AuthContext);

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
            <div className="account-login   layout-2 left-col">
                <div className="content_headercms_bottom" />
                <div className="content-top-breadcum">
                    <div className="container">
                        <div className="row">
                            <div id="title-content"></div>
                        </div>
                    </div>
                </div>
                <div id="account-login" className="container">
                    <ul className="breadcrumb">
                        <li>
                            <Link to="/">
                                <i className="fa fa-home" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/account">Account</Link>
                        </li>
                    </ul>
                    <div className="row">
                        <aside id="column-left" className="col-sm-3 hidden-xs">
                            <div className="box">
                                <div className="box-heading">Account</div>
                                <div className="user-profile">
                                    <div className="user-avatar">
                                        <img src="/images/avatar7.png" alt="User Avatar" />
                                    </div>
                                    {isAuthenticated && userProfile && (
                                        <>
                                            <h2 className="user-name">{`${userProfile.firstName} ${userProfile.lastName}`}</h2>
                                            <h3 className="user-email">{userProfile.email}</h3>
                                        </>
                                    )}
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
                        </aside>
                        <div id="content" className="col-sm-9">
                            <h1>Personal Information</h1>
                            <div className="row">
                                <div className="card h-100">
                                    <div className="card-body">
                                        {isAuthenticated && userProfile ? (
                                            <div className="row gutters">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="fullName">Име</label>
                                                        <span>{userProfile.firstName}</span>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="fullName">Фамилия</label>
                                                        <span>{userProfile.lastName}</span>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="email">E-mail</label>
                                                        <span>{userProfile.email}</span>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="phone">Телефон</label>
                                                        <span>{userProfile.phoneNumber}</span>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="street">Адрес</label>
                                                        <span>{userProfile.address}</span>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="city">Град</label>
                                                        <span>{userProfile.city}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div>Please log in to view your profile information.</div>
                                        )}
                                        <div className="row gutters">
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="text-right w-85m-30">
                                                    <button
                                                        type="button"
                                                        id="submit"
                                                        name="submit"
                                                        className="btn btn-primary"
                                                    >
                                                        Редактиране
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};