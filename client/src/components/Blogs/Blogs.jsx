import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Blogs() {
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
            <div className="information-blogger-blogs   layout-2 left-col">
                <div className="content_headercms_bottom" />
                <div className="content-top-breadcum">
                    <div className="container">
                        <div className="row">
                            <div id="title-content"></div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <ul className="breadcrumb">
                        <li>
                            <Link to="/">
                                <i className="fa fa-home" />
                            </Link>
                        </li>
                        <li>
                            <a href="information/blogger">Blogs</a>{" "}
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
                            <div className="box latest">
                                <div className="box-heading">Latest Product</div>
                                <div className="box-content">
                                    <div className="box-product  productbox-grid" id=" latest-grid">
                                        <div className="product-items">
                                            <div className="product-items">
                                                <div className="product-block product-thumb transition">
                                                    <div className="product-block-inner">
                                                        <div className="image">
                                                            <a href="product/product&product_id=49">
                                                                <img
                                                                    src="catalog/8-70x70.jpg"
                                                                    title="tote bags for women"
                                                                    alt="tote bags for women"
                                                                    className="img-responsive reg-image"
                                                                />
                                                                <img
                                                                    className="img-responsive hover-image"
                                                                    src="catalog/13-70x70.jpg"
                                                                    title="tote bags for women"
                                                                    alt="tote bags for women"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="product-details">
                                                            <div className="caption">
                                                                <div className="rating">
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                </div>
                                                                <h4>
                                                                    <a href="product/product&product_id=49 ">
                                                                        tote bags for women{" "}
                                                                    </a>
                                                                </h4>
                                                                <p className="price">
                                                                    $241.99
                                                                    <span className="price-tax">Ex Tax: $199.99</span>
                                                                </p>
                                                            </div>
                                                            <div className="product_hover_block">
                                                                <div className="action">
                                                                    <button
                                                                        type="button"
                                                                        className="cart_button"
                                                                        onclick="cart.add('49 ');"
                                                                        title="Add to Cart"
                                                                    >
                                                                        <i
                                                                            className="fa fa-shopping-cart"
                                                                            area-hidden="true"
                                                                        />
                                                                    </button>
                                                                    <div className="quickview-button">
                                                                        <a
                                                                            className="quickbox"
                                                                            title="Add To quickview"
                                                                            href="product/quick_view&product_id=49"
                                                                        >
                                                                            <i className="fa fa-eye" />
                                                                        </a>
                                                                    </div>
                                                                    <button
                                                                        className="wishlist"
                                                                        type="button"
                                                                        title="Add to Wish List "
                                                                        onclick="wishlist.add('49 ');"
                                                                    >
                                                                        <i className="fa fa-heart" />
                                                                    </button>
                                                                    <button
                                                                        className="compare_button"
                                                                        type="button"
                                                                        title="Add to compare "
                                                                        onclick="compare.add('49 ');"
                                                                    >
                                                                        <i className="fa fa-exchange" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-items">
                                            <div className="product-items">
                                                <div className="product-block product-thumb transition">
                                                    <div className="product-block-inner">
                                                        <div className="image">
                                                            <a href="product/product&product_id=48">
                                                                <img
                                                                    src="catalog/11-70x70.jpg"
                                                                    title="Men's lace up Shoes"
                                                                    alt="Men's lace up Shoes"
                                                                    className="img-responsive reg-image"
                                                                />
                                                                <img
                                                                    className="img-responsive hover-image"
                                                                    src="catalog/17-70x70.jpg"
                                                                    title="Men's lace up Shoes"
                                                                    alt="Men's lace up Shoes"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="product-details">
                                                            <div className="caption">
                                                                <div className="rating">
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                </div>
                                                                <h4>
                                                                    <a href="product/product&product_id=48 ">
                                                                        Men's lace up Shoes{" "}
                                                                    </a>
                                                                </h4>
                                                                <p className="price">
                                                                    $122.00
                                                                    <span className="price-tax">Ex Tax: $100.00</span>
                                                                </p>
                                                            </div>
                                                            <div className="product_hover_block">
                                                                <div className="action">
                                                                    <button
                                                                        type="button"
                                                                        className="cart_button"
                                                                        onclick="cart.add('48 ');"
                                                                        title="Add to Cart"
                                                                    >
                                                                        <i
                                                                            className="fa fa-shopping-cart"
                                                                            area-hidden="true"
                                                                        />
                                                                    </button>
                                                                    <div className="quickview-button">
                                                                        <a
                                                                            className="quickbox"
                                                                            title="Add To quickview"
                                                                            href="product/quick_view&product_id=48"
                                                                        >
                                                                            <i className="fa fa-eye" />
                                                                        </a>
                                                                    </div>
                                                                    <button
                                                                        className="wishlist"
                                                                        type="button"
                                                                        title="Add to Wish List "
                                                                        onclick="wishlist.add('48 ');"
                                                                    >
                                                                        <i className="fa fa-heart" />
                                                                    </button>
                                                                    <button
                                                                        className="compare_button"
                                                                        type="button"
                                                                        title="Add to compare "
                                                                        onclick="compare.add('48 ');"
                                                                    >
                                                                        <i className="fa fa-exchange" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-items">
                                            <div className="product-items">
                                                <div className="product-block product-thumb transition">
                                                    <div className="product-block-inner">
                                                        <div className="image">
                                                            <a href="product/product&product_id=47">
                                                                <img
                                                                    src="catalog/4-70x70.jpg"
                                                                    title="round toe Shoes"
                                                                    alt="round toe Shoes"
                                                                    className="img-responsive reg-image"
                                                                />
                                                                <img
                                                                    className="img-responsive hover-image"
                                                                    src="catalog/6-70x70.jpg"
                                                                    title="round toe Shoes"
                                                                    alt="round toe Shoes"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="product-details">
                                                            <div className="caption">
                                                                <div className="rating">
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                    <span className="fa fa-stack">
                                                                        <i className="fa fa-star fa-stack-2x" />
                                                                        <i className="fa fa-star-o fa-stack-2x" />
                                                                    </span>
                                                                </div>
                                                                <h4>
                                                                    <a href="product/product&product_id=47 ">
                                                                        round toe Shoes{" "}
                                                                    </a>
                                                                </h4>
                                                                <p className="price">
                                                                    $122.00
                                                                    <span className="price-tax">Ex Tax: $100.00</span>
                                                                </p>
                                                            </div>
                                                            <div className="product_hover_block">
                                                                <div className="action">
                                                                    <button
                                                                        type="button"
                                                                        className="cart_button"
                                                                        onclick="cart.add('47 ');"
                                                                        title="Add to Cart"
                                                                    >
                                                                        <i
                                                                            className="fa fa-shopping-cart"
                                                                            area-hidden="true"
                                                                        />
                                                                    </button>
                                                                    <div className="quickview-button">
                                                                        <a
                                                                            className="quickbox"
                                                                            title="Add To quickview"
                                                                            href="product/quick_view&product_id=47"
                                                                        >
                                                                            <i className="fa fa-eye" />
                                                                        </a>
                                                                    </div>
                                                                    <button
                                                                        className="wishlist"
                                                                        type="button"
                                                                        title="Add to Wish List "
                                                                        onclick="wishlist.add('47 ');"
                                                                    >
                                                                        <i className="fa fa-heart" />
                                                                    </button>
                                                                    <button
                                                                        className="compare_button"
                                                                        type="button"
                                                                        title="Add to compare "
                                                                        onclick="compare.add('47 ');"
                                                                    >
                                                                        <i className="fa fa-exchange" />
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
                            <span
                                className="latest_default_width"
                                style={{ display: "none", visibility: "hidden" }}
                            />
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
                        <div id="content" className="col-sm-9  all-blog">
                            <h1>All Blogs</h1>
                            <div className="panel-default">
                                <div className="panel panel-default">
                                    <div className="panel-body">
                                        <div className="blog-left-content">
                                            <div className="blog-image">
                                                <img
                                                    src="catalog/blog5-1098x737.jpg"
                                                    alt="Blogs"
                                                    title="Blogs"
                                                    className="img-thumbnail"
                                                />
                                                <div className="post-image-hover"> </div>
                                                <p className="post_hover">
                                                    <a
                                                        className="icon zoom"
                                                        title="Click to view Full Image "
                                                        href="catalog/blog5-1098x737.jpg"
                                                        data-lightbox="example-set"
                                                    >
                                                        <i className="fa fa-search-plus" />{" "}
                                                    </a>
                                                    <a
                                                        className="icon readmore_link"
                                                        title="Click to view Read More "
                                                        href="information/blogger&blogger_id=5"
                                                    >
                                                        <i className="fa fa-link" />
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="blog-right-content">
                                            <h5>
                                                <a href="information/blogger&blogger_id=5">
                                                    Libero lorem vehicula qunato verbl
                                                </a>
                                            </h5>
                                            <div className="blog-date"> 11 September, 2021</div>
                                            <div className="blog-desc">
                                                Libero lorem vehicula qunato verbl Libero lorem vehicula
                                                qunato verbl Libero lorem vehicula qunato verbl{" "}
                                            </div>
                                            <div className="read-more">
                                                {" "}
                                                <a href="information/blogger&blogger_id=5">read more</a>{" "}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-body">
                                        <div className="blog-left-content">
                                            <div className="blog-image">
                                                <img
                                                    src="catalog/blog4-1098x737.jpg"
                                                    alt="Blogs"
                                                    title="Blogs"
                                                    className="img-thumbnail"
                                                />
                                                <div className="post-image-hover"> </div>
                                                <p className="post_hover">
                                                    <a
                                                        className="icon zoom"
                                                        title="Click to view Full Image "
                                                        href="catalog/blog4-1098x737.jpg"
                                                        data-lightbox="example-set"
                                                    >
                                                        <i className="fa fa-search-plus" />{" "}
                                                    </a>
                                                    <a
                                                        className="icon readmore_link"
                                                        title="Click to view Read More "
                                                        href="information/blogger&blogger_id=4"
                                                    >
                                                        <i className="fa fa-link" />
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="blog-right-content">
                                            <h5>
                                                <a href="information/blogger&blogger_id=4">
                                                    Libero loremnun ivftrc vehicula
                                                </a>
                                            </h5>
                                            <div className="blog-date"> 11 September, 2021</div>
                                            <div className="blog-desc">
                                                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                laboris nisi ut aliquip ex ea commodo consequat. Excepteur
                                                sint occaecat cupidatat non proident, sunt in culpa qui
                                                officia deserunt mollit anim id est laborum. Lorem ipsum dolor
                                                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna aliqua.{" "}
                                            </div>
                                            <div className="read-more">
                                                {" "}
                                                <a href="information/blogger&blogger_id=4">read more</a>{" "}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-body">
                                        <div className="blog-left-content">
                                            <div className="blog-image">
                                                <img
                                                    src="catalog/blog3-1098x737.jpg"
                                                    alt="Blogs"
                                                    title="Blogs"
                                                    className="img-thumbnail"
                                                />
                                                <div className="post-image-hover"> </div>
                                                <p className="post_hover">
                                                    <a
                                                        className="icon zoom"
                                                        title="Click to view Full Image "
                                                        href="catalog/blog3-1098x737.jpg"
                                                        data-lightbox="example-set"
                                                    >
                                                        <i className="fa fa-search-plus" />{" "}
                                                    </a>
                                                    <a
                                                        className="icon readmore_link"
                                                        title="Click to view Read More "
                                                        href="information/blogger&blogger_id=3"
                                                    >
                                                        <i className="fa fa-link" />
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="blog-right-content">
                                            <h5>
                                                <a href="information/blogger&blogger_id=3">
                                                    Nostrum ufrytb Iesumgtn Christum{" "}
                                                </a>
                                            </h5>
                                            <div className="blog-date"> 11 September, 2021</div>
                                            <div className="blog-desc">
                                                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                laboris nisi ut aliquip ex ea commodo onsequat. Duis aute
                                                irure dolor in reprehenderit in voluptate velit esse cillum
                                                dolore eu fugiat nulla pariatur{" "}
                                            </div>
                                            <div className="read-more">
                                                {" "}
                                                <a href="information/blogger&blogger_id=3">read more</a>{" "}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-body">
                                        <div className="blog-left-content">
                                            <div className="blog-image">
                                                <img
                                                    src="catalog/blog2-1098x737.jpg"
                                                    alt="Blogs"
                                                    title="Blogs"
                                                    className="img-thumbnail"
                                                />
                                                <div className="post-image-hover"> </div>
                                                <p className="post_hover">
                                                    <a
                                                        className="icon zoom"
                                                        title="Click to view Full Image "
                                                        href="catalog/blog2-1098x737.jpg"
                                                        data-lightbox="example-set"
                                                    >
                                                        <i className="fa fa-search-plus" />{" "}
                                                    </a>
                                                    <a
                                                        className="icon readmore_link"
                                                        title="Click to view Read More "
                                                        href="information/blogger&blogger_id=2"
                                                    >
                                                        <i className="fa fa-link" />
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="blog-right-content">
                                            <h5>
                                                <a href="information/blogger&blogger_id=2">
                                                    Excepteur sint occaecat cupidatat
                                                </a>
                                            </h5>
                                            <div className="blog-date"> 11 September, 2021</div>
                                            <div className="blog-desc">
                                                Duis aute irure dolor in reprehenderit in voluptate velit esse
                                                cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                occaecat cupidatat non proident, sunt in culpa qui officia
                                                deserunt mollit anim id est laborum. Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                nulla pariatur. Excepteur sint occaecat cupidatat non
                                                proident, sunt in culpa qui officia deserunt mollit anim id
                                                est laborum.{" "}
                                            </div>
                                            <div className="read-more">
                                                {" "}
                                                <a href="information/blogger&blogger_id=2">read more</a>{" "}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-body">
                                        <div className="blog-left-content">
                                            <div className="blog-image">
                                                <img
                                                    src="catalog/blog1-1098x737.jpg"
                                                    alt="Blogs"
                                                    title="Blogs"
                                                    className="img-thumbnail"
                                                />
                                                <div className="post-image-hover"> </div>
                                                <p className="post_hover">
                                                    <a
                                                        className="icon zoom"
                                                        title="Click to view Full Image "
                                                        href="catalog/blog1-1098x737.jpg"
                                                        data-lightbox="example-set"
                                                    >
                                                        <i className="fa fa-search-plus" />{" "}
                                                    </a>
                                                    <a
                                                        className="icon readmore_link"
                                                        title="Click to view Read More "
                                                        href="information/blogger&blogger_id=1"
                                                    >
                                                        <i className="fa fa-link" />
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="blog-right-content">
                                            <h5>
                                                <a href="information/blogger&blogger_id=1">
                                                    Peat book is a treatise frbhtn
                                                </a>
                                            </h5>
                                            <div className="blog-date"> 11 September, 2021</div>
                                            <div className="blog-desc">
                                                Link: St. Louis Blues Audio shortcode: “Lorem ipsum dolor sit
                                                amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                rep.,
                                            </div>
                                            <div className="read-more">
                                                {" "}
                                                <a href="information/blogger&blogger_id=1">read more</a>{" "}
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