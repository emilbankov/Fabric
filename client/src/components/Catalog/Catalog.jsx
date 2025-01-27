import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Catalog() {
    let location = useLocation();

    useEffect(() => {
        const gridButton = document.querySelector(".btn-list-grid .grid");
        const listButton = document.querySelector(".btn-list-grid .list");
        const products = document.querySelectorAll(".product-layout");

        // Function to set active class and update product layout
        const setGridView = () => {
            gridButton.classList.add("active");
            listButton.classList.remove("active");

            products.forEach((product) => {
                product.className = "product-layout product-grid col-lg-3 col-md-4 col-sm-4 col-xs-6";
            });
        };

        const setListView = () => {
            listButton.classList.add("active");
            gridButton.classList.remove("active");

            products.forEach((product) => {
                product.className = "product-layout product-list col-xs-12";
            });
        };

        // Set grid view as default
        setGridView();

        // Event listeners
        gridButton.addEventListener("click", setGridView);
        listButton.addEventListener("click", setListView);

        // Cleanup event listeners on unmount
        return () => {
            gridButton.removeEventListener("click", setGridView);
            listButton.removeEventListener("click", setListView);
        };
    }, []);

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
            <div className="product-category-20   layout-2 left-col">
                <div className="content_headercms_bottom" />
                <div className="content-top-breadcum">
                    <div className="container">
                        <div className="row">
                            <div id="title-content"></div>
                        </div>
                    </div>
                </div>
                <div id="product-special" className="container">
                    <ul className="breadcrumb">
                        <li>
                            <Link to="/">
                                <i className="fa fa-home" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/catalog">Men</Link>
                        </li>
                    </ul>
                    <div className="row">
                        <aside id="column-left" className="col-sm-3 hidden-xs">
                            <div className="box">
                                <div className="box-heading">Refine Search</div>
                                <div className="list-group ">
                                    {" "}
                                    <a className="list-group-item heading">Category</a>
                                    <div className="list-group-item  ">
                                        <div id="filter-group1">
                                            <div className="checkbox">
                                                <label>
                                                    {" "}
                                                    <input type="checkbox" name="filter[]" defaultValue={1} />
                                                    Shoes (5)
                                                </label>
                                            </div>
                                            <div className="checkbox">
                                                <label>
                                                    {" "}
                                                    <input type="checkbox" name="filter[]" defaultValue={2} />
                                                    Clothes (4)
                                                </label>
                                            </div>
                                            <div className="checkbox">
                                                <label>
                                                    {" "}
                                                    <input type="checkbox" name="filter[]" defaultValue={3} />
                                                    Bags (10)
                                                </label>
                                            </div>
                                            <div className="checkbox">
                                                <label>
                                                    {" "}
                                                    <input type="checkbox" name="filter[]" defaultValue={4} />
                                                    Accessories (12)
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="list-group-item heading">Color</a>
                                    <div className="list-group-item  ">
                                        <div id="filter-group2">
                                            <div className="checkbox">
                                                <label>
                                                    {" "}
                                                    <input type="checkbox" name="filter[]" defaultValue={5} />
                                                    White (6)
                                                </label>
                                            </div>
                                            <div className="checkbox">
                                                <label>
                                                    {" "}
                                                    <input type="checkbox" name="filter[]" defaultValue={6} />
                                                    red (7)
                                                </label>
                                            </div>
                                            <div className="checkbox">
                                                <label>
                                                    {" "}
                                                    <input type="checkbox" name="filter[]" defaultValue={7} />
                                                    green (6)
                                                </label>
                                            </div>
                                            <div className="checkbox">
                                                <label>
                                                    {" "}
                                                    <input type="checkbox" name="filter[]" defaultValue={8} />
                                                    blue (9)
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="list-group-item heading">price</a>
                                    <div className="list-group-item  ">
                                        <div id="filter-group3">
                                            <div className="checkbox">
                                                <label>
                                                    {" "}
                                                    <input type="checkbox" name="filter[]" defaultValue={9} />
                                                    $50.00 - $100.00 (8)
                                                </label>
                                            </div>
                                            <div className="checkbox">
                                                <label>
                                                    {" "}
                                                    <input type="checkbox" name="filter[]" defaultValue={10} />
                                                    $101.00 - $150.00 (1)
                                                </label>
                                            </div>
                                            <div className="checkbox">
                                                <label>
                                                    {" "}
                                                    <input type="checkbox" name="filter[]" defaultValue={11} />
                                                    $151.00 - $200.00 (2)
                                                </label>
                                            </div>
                                            <div className="checkbox">
                                                <label>
                                                    {" "}
                                                    <input type="checkbox" name="filter[]" defaultValue={12} />
                                                    $201.00 - Above (5)
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel-footer text-right">
                                        <button
                                            type="button"
                                            id="button-filter"
                                            className="btn btn-primary"
                                        >
                                            Refine Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <meta
                                httpEquiv="Content-Type"
                                content="text/html; charset=iso-8859-1"
                            />
                            <title>Untitled Document</title>
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
                                                                    src="/images/8-70x70.jpg"
                                                                    title="tote bags for women"
                                                                    alt="tote bags for women"
                                                                    className="img-responsive reg-image"
                                                                />
                                                                <img
                                                                    className="img-responsive hover-image"
                                                                    src="/images/13-70x70.jpg"
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
                                                                    src="/images/11-70x70.jpg"
                                                                    title="Men's lace up Shoes"
                                                                    alt="Men's lace up Shoes"
                                                                    className="img-responsive reg-image"
                                                                />
                                                                <img
                                                                    className="img-responsive hover-image"
                                                                    src="/images/17-70x70.jpg"
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
                                                                    src="/images/4-70x70.jpg"
                                                                    title="round toe Shoes"
                                                                    alt="round toe Shoes"
                                                                    className="img-responsive reg-image"
                                                                />
                                                                <img
                                                                    className="img-responsive hover-image"
                                                                    src="/images/6-70x70.jpg"
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
                        </aside>
                        <div id="content" className="col-sm-9">
                            <h2 className="page-title">Men</h2>
                            <div className="row category_thumb">
                                <div className="col-sm-2 category_img">
                                    <img
                                        src="/images/category-baner-1098x200.jpg"
                                        alt="Men"
                                        title="Men"
                                        className="img-thumbnail"
                                    />
                                </div>
                                <div className="col-sm-10 category_description">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of type
                                    and scrambled it to make a type specimen book. It has survived not
                                    only five centuries, but also the leap into electronic{" "}
                                </div>
                            </div>
                            <h3 className="refine-search">Refine Search</h3>
                            <div className="row">
                                <div className="col-sm-12 category_list">
                                    <ul>
                                        <li>
                                            <a href="product/category&path=20_59">Pocket Squares (5)</a>
                                        </li>
                                        <li>
                                            <a href="product/category&path=20_26">Luxe (4)</a>
                                        </li>
                                        <li>
                                            <a href="product/category&path=20_27">Topwear (6)</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="category_filter">
                                <div className="col-md-4 btn-list-grid">
                                    <div className="btn-group">
                                        <button
                                            type="button"
                                            id="grid-view"
                                            className="btn btn-default grid"
                                            title="Grid"
                                        >
                                            <i className="fa fa-th" />
                                        </button>
                                        <button
                                            type="button"
                                            id="list-view"
                                            className="btn btn-default list"
                                            title="List"
                                        >
                                            <i className="fa fa-th-list" />
                                        </button>
                                    </div>
                                </div>
                                <div className="compare-total">
                                    <a href="product/compare" id="compare-total">
                                        Product Compare (0)
                                    </a>
                                </div>
                                <div className="pagination-right">
                                    <div className="sort-by-wrapper">
                                        <div className="col-md-2 text-right sort-by">
                                            <label className="control-label" htmlFor="input-sort">
                                                Sort By:
                                            </label>
                                        </div>
                                        <div className="col-md-3 text-right sort">
                                            <select
                                                id="input-sort"
                                                className="form-control"
                                                onchange="location = this.value;"
                                            >
                                                <option
                                                    value="productcatalog.html&sort=p.sort_order&order=ASC "
                                                    selected="selected"
                                                >
                                                    Default
                                                </option>
                                                <option value="productcatalog.html&sort=pd.name&order=ASC ">
                                                    Name (A - Z){" "}
                                                </option>
                                                <option value="productcatalog.html&sort=pd.name&order=DESC ">
                                                    Name (Z - A){" "}
                                                </option>
                                                <option value="productcatalog.html&sort=p.price&order=ASC ">
                                                    Price (Low &gt; High){" "}
                                                </option>
                                                <option value="productcatalog.html&sort=p.price&order=DESC ">
                                                    Price (High &gt; Low){" "}
                                                </option>
                                                <option value="productcatalog.html&sort=rating&order=DESC ">
                                                    Rating (Highest){" "}
                                                </option>
                                                <option value="productcatalog.html&sort=rating&order=ASC ">
                                                    Rating (Lowest){" "}
                                                </option>
                                                <option value="productcatalog.html&sort=p.model&order=ASC ">
                                                    Model (A - Z){" "}
                                                </option>
                                                <option value="productcatalog.html&sort=p.model&order=DESC ">
                                                    Model (Z - A){" "}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="show-wrapper">
                                        <div className="col-md-1 text-right show">
                                            <label className="control-label" htmlFor="input-limit">
                                                Show:
                                            </label>
                                        </div>
                                        <div className="col-md-2 text-right limit">
                                            <select
                                                id="input-limit"
                                                className="form-control"
                                                onchange="location = this.value;"
                                            >
                                                <option
                                                    value="productcatalog.html&limit=15 "
                                                    selected="selected"
                                                >
                                                    15
                                                </option>
                                                <option value="productcatalog.html&limit=25 ">25 </option>
                                                <option value="productcatalog.html&limit=50 ">50 </option>
                                                <option value="productcatalog.html&limit=75 ">75 </option>
                                                <option value="productcatalog.html&limit=100 ">100 </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="product-layout product-list col-xs-12">
                                    <div className="product-block product-thumb">
                                        <div className="product-block-inner">
                                            <div className="image outstock">
                                                <a href="product/product&path=20&product_id=35">
                                                    <img
                                                        src="/images/2-264x380.jpg"
                                                        title="black v neck cashmere sweater"
                                                        alt="black v neck cashmere sweater"
                                                        className="img-responsive reg-image"
                                                    />
                                                    <img
                                                        className="img-responsive hover-image"
                                                        src="/images/20-264x380.jpg"
                                                        title="black v neck cashmere sweater"
                                                        alt="black v neck cashmere sweater"
                                                    />
                                                </a>
                                            </div>
                                            <div className="status_stock">
                                                Out of stock
                                                <button
                                                    className="wishlist_button"
                                                    type="button"
                                                    data-toggle="tooltip"
                                                    title="Add to Wish List "
                                                    onclick="wishlist.add('35 ');"
                                                >
                                                    <i className="fa fa-heart" />
                                                </button>
                                            </div>
                                            <div className="product-details grid">
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
                                                        <a href="product/product&path=20&product_id=35">
                                                            black v neck cashmere sweater
                                                        </a>
                                                    </h4>
                                                    <p className="price">$122.00</p>
                                                </div>
                                            </div>
                                            <div className="product-details list">
                                                <div className="caption">
                                                    <h4>
                                                        <a href="product/product&path=20&product_id=35">
                                                            black v neck cashmere sweater
                                                        </a>
                                                    </h4>
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
                                                    <p className="desc">
                                                        Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry. Lorem Ipsum has been the industry's
                                                        standard dummy text ever since the 1500s, when an unknown
                                                        printer took a galley of type a..
                                                    </p>
                                                    <p className="price">$122.00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-layout product-list col-xs-12">
                                    <div className="product-block product-thumb">
                                        <div className="product-block-inner">
                                            <div className="image">
                                                <a href="product/product&path=20&product_id=42">
                                                    <img
                                                        src="/images/1-264x380.jpg"
                                                        title="Hoodie for men"
                                                        alt="Hoodie for men"
                                                        className="img-responsive reg-image"
                                                    />
                                                    <img
                                                        className="img-responsive hover-image"
                                                        src="/images/14-264x380.jpg"
                                                        title="Hoodie for men"
                                                        alt="Hoodie for men"
                                                    />
                                                </a>
                                                <div className="saleback">
                                                    <div className="saleicon sale">10%</div>
                                                </div>
                                                <div className="product_hover_block">
                                                    <div className="action">
                                                        <button
                                                            type="button"
                                                            className="cart_button"
                                                            onclick="cart.add('42 ');"
                                                            title="Add to Cart"
                                                        >
                                                            <i className="fa fa-shopping-cart" area-hidden="true" />{" "}
                                                        </button>
                                                        <div className="quickview-button">
                                                            <a
                                                                className="quickbox"
                                                                title="Add To quickview"
                                                                href="product/quick_view&path=20&product_id=42"
                                                            >
                                                                <i className="fa fa-eye" />
                                                            </a>
                                                        </div>
                                                        <button
                                                            className="wishlist"
                                                            type="button"
                                                            title="Add to Wish List "
                                                            onclick="wishlist.add('42 ');"
                                                        >
                                                            <i className="fa fa-heart" />
                                                        </button>
                                                        <button
                                                            className="compare_button"
                                                            type="button"
                                                            title="Add to compare "
                                                            onclick="compare.add('42 ');"
                                                        >
                                                            <i className="fa fa-exchange" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-details grid">
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
                                                        <a href="product/product&path=20&product_id=42">
                                                            Hoodie for men
                                                        </a>
                                                    </h4>
                                                    <p className="price">
                                                        <span className="price-new">$110.00</span>{" "}
                                                        <span className="price-old">$122.00</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="product-details list">
                                                <div className="caption">
                                                    <h4>
                                                        <a href="product/product&path=20&product_id=42">
                                                            Hoodie for men
                                                        </a>
                                                    </h4>
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
                                                    <p className="desc">
                                                        The 30-inch Apple Cinema HD Display delivers an amazing
                                                        2560 x 1600 pixel resolution. Designed specifically for
                                                        the creative professional, this display provides more
                                                        space for easier access to all the..
                                                    </p>
                                                    <p className="price">
                                                        <span className="price-new">$110.00</span>{" "}
                                                        <span className="price-old">$122.00</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-layout product-list col-xs-12">
                                    <div className="product-block product-thumb">
                                        <div className="product-block-inner">
                                            <div className="image">
                                                <a href="product/product&path=20&product_id=43">
                                                    <img
                                                        src="/images/13-264x380.jpg"
                                                        title="Layered Crop Top"
                                                        alt="Layered Crop Top"
                                                        className="img-responsive reg-image"
                                                    />
                                                    <img
                                                        className="img-responsive hover-image"
                                                        src="/images/19-264x380.jpg"
                                                        title="Layered Crop Top"
                                                        alt="Layered Crop Top"
                                                    />
                                                </a>
                                                <div className="product_hover_block">
                                                    <div className="action">
                                                        <button
                                                            type="button"
                                                            className="cart_button"
                                                            onclick="cart.add('43 ');"
                                                            title="Add to Cart"
                                                        >
                                                            <i className="fa fa-shopping-cart" area-hidden="true" />{" "}
                                                        </button>
                                                        <div className="quickview-button">
                                                            <a
                                                                className="quickbox"
                                                                title="Add To quickview"
                                                                href="product/quick_view&path=20&product_id=43"
                                                            >
                                                                <i className="fa fa-eye" />
                                                            </a>
                                                        </div>
                                                        <button
                                                            className="wishlist"
                                                            type="button"
                                                            title="Add to Wish List "
                                                            onclick="wishlist.add('43 ');"
                                                        >
                                                            <i className="fa fa-heart" />
                                                        </button>
                                                        <button
                                                            className="compare_button"
                                                            type="button"
                                                            title="Add to compare "
                                                            onclick="compare.add('43 ');"
                                                        >
                                                            <i className="fa fa-exchange" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-details grid">
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
                                                        <a href="product/product&path=20&product_id=43">
                                                            Layered Crop Top
                                                        </a>
                                                    </h4>
                                                    <p className="price">$602.00</p>
                                                </div>
                                            </div>
                                            <div className="product-details list">
                                                <div className="caption">
                                                    <h4>
                                                        <a href="product/product&path=20&product_id=43">
                                                            Layered Crop Top
                                                        </a>
                                                    </h4>
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
                                                    <p className="desc">
                                                        Intel Core 2 Duo processor Powered by an Intel Core 2 Duo
                                                        processor at speeds up to 2.16GHz, the new MacBook is the
                                                        fastest ever. 1GB memory, larger hard drives The new
                                                        MacBook now c..
                                                    </p>
                                                    <p className="price">$602.00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-layout product-list col-xs-12">
                                    <div className="product-block product-thumb">
                                        <div className="product-block-inner">
                                            <div className="image">
                                                <a href="product/product&path=20&product_id=30">
                                                    <img
                                                        src="/images/16-264x380.jpg"
                                                        title="long sleeve Shirts"
                                                        alt="long sleeve Shirts"
                                                        className="img-responsive reg-image"
                                                    />
                                                    <img
                                                        className="img-responsive hover-image"
                                                        src="/images/3-264x380.jpg"
                                                        title="long sleeve Shirts"
                                                        alt="long sleeve Shirts"
                                                    />
                                                </a>
                                                <div className="saleback">
                                                    <div className="saleicon sale">20%</div>
                                                </div>
                                                <div className="product_hover_block">
                                                    <div className="action">
                                                        <button
                                                            type="button"
                                                            className="cart_button"
                                                            onclick="cart.add('30 ');"
                                                            title="Add to Cart"
                                                        >
                                                            <i className="fa fa-shopping-cart" area-hidden="true" />{" "}
                                                        </button>
                                                        <div className="quickview-button">
                                                            <a
                                                                className="quickbox"
                                                                title="Add To quickview"
                                                                href="product/quick_view&path=20&product_id=30"
                                                            >
                                                                <i className="fa fa-eye" />
                                                            </a>
                                                        </div>
                                                        <button
                                                            className="wishlist"
                                                            type="button"
                                                            title="Add to Wish List "
                                                            onclick="wishlist.add('30 ');"
                                                        >
                                                            <i className="fa fa-heart" />
                                                        </button>
                                                        <button
                                                            className="compare_button"
                                                            type="button"
                                                            title="Add to compare "
                                                            onclick="compare.add('30 ');"
                                                        >
                                                            <i className="fa fa-exchange" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-details grid">
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
                                                        <a href="product/product&path=20&product_id=30">
                                                            long sleeve Shirts
                                                        </a>
                                                    </h4>
                                                    <p className="price">
                                                        <span className="price-new">$98.00</span>{" "}
                                                        <span className="price-old">$122.00</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="product-details list">
                                                <div className="caption">
                                                    <h4>
                                                        <a href="product/product&path=20&product_id=30">
                                                            long sleeve Shirts
                                                        </a>
                                                    </h4>
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
                                                    <p className="desc">
                                                        Canon's press material for the EOS 5D states that it
                                                        'defines (a) new D-SLR category', while we're not
                                                        typically too concerned with marketing talk this
                                                        particular statement is clearly pretty accurate...
                                                    </p>
                                                    <p className="price">
                                                        <span className="price-new">$98.00</span>{" "}
                                                        <span className="price-old">$122.00</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-layout product-list col-xs-12">
                                    <div className="product-block product-thumb">
                                        <div className="product-block-inner">
                                            <div className="image">
                                                <a href="product/product&path=20&product_id=48">
                                                    <img
                                                        src="/images/11-264x380.jpg"
                                                        title="Men's lace up Shoes"
                                                        alt="Men's lace up Shoes"
                                                        className="img-responsive reg-image"
                                                    />
                                                    <img
                                                        className="img-responsive hover-image"
                                                        src="/images/17-264x380.jpg"
                                                        title="Men's lace up Shoes"
                                                        alt="Men's lace up Shoes"
                                                    />
                                                </a>
                                                <div className="product_hover_block">
                                                    <div className="action">
                                                        <button
                                                            type="button"
                                                            className="cart_button"
                                                            onclick="cart.add('48 ');"
                                                            title="Add to Cart"
                                                        >
                                                            <i className="fa fa-shopping-cart" area-hidden="true" />{" "}
                                                        </button>
                                                        <div className="quickview-button">
                                                            <a
                                                                className="quickbox"
                                                                title="Add To quickview"
                                                                href="product/quick_view&path=20&product_id=48"
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
                                            <div className="product-details grid">
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
                                                        <a href="product/product&path=20&product_id=48">
                                                            Men's lace up Shoes
                                                        </a>
                                                    </h4>
                                                    <p className="price">$122.00</p>
                                                </div>
                                            </div>
                                            <div className="product-details list">
                                                <div className="caption">
                                                    <h4>
                                                        <a href="product/product&path=20&product_id=48">
                                                            Men's lace up Shoes
                                                        </a>
                                                    </h4>
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
                                                    <p className="desc">
                                                        More room to move. With 80GB or 160GB of storage and up to
                                                        40 hours of battery life, the new iPod classic lets you
                                                        enjoy up to 40,000 songs or up to 200 hours of video or
                                                        any combination where..
                                                    </p>
                                                    <p className="price">$122.00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-layout product-list col-xs-12">
                                    <div className="product-block product-thumb">
                                        <div className="product-block-inner">
                                            <div className="image">
                                                <a href="product/product&path=20&product_id=33">
                                                    <img
                                                        src="/images/15-264x380.jpg"
                                                        title="Pacsafe Intasafe  Laptop Backpack"
                                                        alt="Pacsafe Intasafe  Laptop Backpack"
                                                        className="img-responsive reg-image"
                                                    />
                                                    <img
                                                        className="img-responsive hover-image"
                                                        src="/images/3-264x380.jpg"
                                                        title="Pacsafe Intasafe  Laptop Backpack"
                                                        alt="Pacsafe Intasafe  Laptop Backpack"
                                                    />
                                                </a>
                                                <div className="product_hover_block">
                                                    <div className="action">
                                                        <button
                                                            type="button"
                                                            className="cart_button"
                                                            onclick="cart.add('33 ');"
                                                            title="Add to Cart"
                                                        >
                                                            <i className="fa fa-shopping-cart" area-hidden="true" />{" "}
                                                        </button>
                                                        <div className="quickview-button">
                                                            <a
                                                                className="quickbox"
                                                                title="Add To quickview"
                                                                href="product/quick_view&path=20&product_id=33"
                                                            >
                                                                <i className="fa fa-eye" />
                                                            </a>
                                                        </div>
                                                        <button
                                                            className="wishlist"
                                                            type="button"
                                                            title="Add to Wish List "
                                                            onclick="wishlist.add('33 ');"
                                                        >
                                                            <i className="fa fa-heart" />
                                                        </button>
                                                        <button
                                                            className="compare_button"
                                                            type="button"
                                                            title="Add to compare "
                                                            onclick="compare.add('33 ');"
                                                        >
                                                            <i className="fa fa-exchange" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-details grid">
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
                                                        <a href="product/product&path=20&product_id=33">
                                                            Pacsafe Intasafe Laptop Backpack
                                                        </a>
                                                    </h4>
                                                    <p className="price">$242.00</p>
                                                </div>
                                            </div>
                                            <div className="product-details list">
                                                <div className="caption">
                                                    <h4>
                                                        <a href="product/product&path=20&product_id=33">
                                                            Pacsafe Intasafe Laptop Backpack
                                                        </a>
                                                    </h4>
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
                                                    <p className="desc">
                                                        Imagine the advantages of going big without slowing down.
                                                        The big 19" 941BW monitor combines wide aspect ratio with
                                                        fast pixel response time, for bigger images, more room to
                                                        work and crisp motion..
                                                    </p>
                                                    <p className="price">$242.00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-layout product-list col-xs-12">
                                    <div className="product-block product-thumb">
                                        <div className="product-block-inner">
                                            <div className="image">
                                                <a href="product/product&path=20&product_id=31">
                                                    <img
                                                        src="/images/7-264x380.jpg"
                                                        title="Propel IDP Sportstyle Sneakers"
                                                        alt="Propel IDP Sportstyle Sneakers"
                                                        className="img-responsive reg-image"
                                                    />
                                                    <img
                                                        className="img-responsive hover-image"
                                                        src="/images/12-264x380.jpg"
                                                        title="Propel IDP Sportstyle Sneakers"
                                                        alt="Propel IDP Sportstyle Sneakers"
                                                    />
                                                </a>
                                                <div className="product_hover_block">
                                                    <div className="action">
                                                        <button
                                                            type="button"
                                                            className="cart_button"
                                                            onclick="cart.add('31 ');"
                                                            title="Add to Cart"
                                                        >
                                                            <i className="fa fa-shopping-cart" area-hidden="true" />{" "}
                                                        </button>
                                                        <div className="quickview-button">
                                                            <a
                                                                className="quickbox"
                                                                title="Add To quickview"
                                                                href="product/quick_view&path=20&product_id=31"
                                                            >
                                                                <i className="fa fa-eye" />
                                                            </a>
                                                        </div>
                                                        <button
                                                            className="wishlist"
                                                            type="button"
                                                            title="Add to Wish List "
                                                            onclick="wishlist.add('31 ');"
                                                        >
                                                            <i className="fa fa-heart" />
                                                        </button>
                                                        <button
                                                            className="compare_button"
                                                            type="button"
                                                            title="Add to compare "
                                                            onclick="compare.add('31 ');"
                                                        >
                                                            <i className="fa fa-exchange" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-details grid">
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
                                                        <a href="product/product&path=20&product_id=31">
                                                            Propel IDP Sportstyle Sneakers
                                                        </a>
                                                    </h4>
                                                    <p className="price">$98.00</p>
                                                </div>
                                            </div>
                                            <div className="product-details list">
                                                <div className="caption">
                                                    <h4>
                                                        <a href="product/product&path=20&product_id=31">
                                                            Propel IDP Sportstyle Sneakers
                                                        </a>
                                                    </h4>
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
                                                    <p className="desc">
                                                        Engineered with pro-level features and performance, the
                                                        12.3-effective-megapixel D300 combines brand new
                                                        technologies with advanced features inherited from Nikon's
                                                        newly announced D3 professional ..
                                                    </p>
                                                    <p className="price">$98.00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-layout product-list col-xs-12">
                                    <div className="product-block product-thumb">
                                        <div className="product-block-inner">
                                            <div className="image">
                                                <a href="product/product&path=20&product_id=47">
                                                    <img
                                                        src="/images/4-264x380.jpg"
                                                        title="round toe Shoes"
                                                        alt="round toe Shoes"
                                                        className="img-responsive reg-image"
                                                    />
                                                    <img
                                                        className="img-responsive hover-image"
                                                        src="/images/6-264x380.jpg"
                                                        title="round toe Shoes"
                                                        alt="round toe Shoes"
                                                    />
                                                </a>
                                                <div className="product_hover_block">
                                                    <div className="action">
                                                        <button
                                                            type="button"
                                                            className="cart_button"
                                                            onclick="cart.add('47 ');"
                                                            title="Add to Cart"
                                                        >
                                                            <i className="fa fa-shopping-cart" area-hidden="true" />{" "}
                                                        </button>
                                                        <div className="quickview-button">
                                                            <a
                                                                className="quickbox"
                                                                title="Add To quickview"
                                                                href="product/quick_view&path=20&product_id=47"
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
                                            <div className="product-details grid">
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
                                                        <a href="product/product&path=20&product_id=47">
                                                            round toe Shoes
                                                        </a>
                                                    </h4>
                                                    <p className="price">$122.00</p>
                                                </div>
                                            </div>
                                            <div className="product-details list">
                                                <div className="caption">
                                                    <h4>
                                                        <a href="product/product&path=20&product_id=47">
                                                            round toe Shoes
                                                        </a>
                                                    </h4>
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
                                                    <p className="desc">
                                                        Stop your co-workers in their tracks with the stunning new
                                                        30-inch diagonal HP LP3065 Flat Panel Monitor. This
                                                        flagship monitor features best-in-class performance and
                                                        presentation features on a huge w..
                                                    </p>
                                                    <p className="price">$122.00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-layout product-list col-xs-12">
                                    <div className="product-block product-thumb">
                                        <div className="product-block-inner">
                                            <div className="image">
                                                <a href="product/product&path=20&product_id=32">
                                                    <img
                                                        src="/images/12-264x380.jpg"
                                                        title="Self-Design Sweater"
                                                        alt="Self-Design Sweater"
                                                        className="img-responsive reg-image"
                                                    />
                                                    <img
                                                        className="img-responsive hover-image"
                                                        src="/images/13-264x380.jpg"
                                                        title="Self-Design Sweater"
                                                        alt="Self-Design Sweater"
                                                    />
                                                </a>
                                                <div className="product_hover_block">
                                                    <div className="action">
                                                        <button
                                                            type="button"
                                                            className="cart_button"
                                                            onclick="cart.add('32 ');"
                                                            title="Add to Cart"
                                                        >
                                                            <i className="fa fa-shopping-cart" area-hidden="true" />{" "}
                                                        </button>
                                                        <div className="quickview-button">
                                                            <a
                                                                className="quickbox"
                                                                title="Add To quickview"
                                                                href="product/quick_view&path=20&product_id=32"
                                                            >
                                                                <i className="fa fa-eye" />
                                                            </a>
                                                        </div>
                                                        <button
                                                            className="wishlist"
                                                            type="button"
                                                            title="Add to Wish List "
                                                            onclick="wishlist.add('32 ');"
                                                        >
                                                            <i className="fa fa-heart" />
                                                        </button>
                                                        <button
                                                            className="compare_button"
                                                            type="button"
                                                            title="Add to compare "
                                                            onclick="compare.add('32 ');"
                                                        >
                                                            <i className="fa fa-exchange" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-details grid">
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
                                                        <a href="product/product&path=20&product_id=32">
                                                            Self-Design Sweater
                                                        </a>
                                                    </h4>
                                                    <p className="price">$122.00</p>
                                                </div>
                                            </div>
                                            <div className="product-details list">
                                                <div className="caption">
                                                    <h4>
                                                        <a href="product/product&path=20&product_id=32">
                                                            Self-Design Sweater
                                                        </a>
                                                    </h4>
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
                                                    <p className="desc">
                                                        Revolutionary multi-touch interface. iPod touch features
                                                        the same multi-touch screen technology as iPhone. Pinch to
                                                        zoom in on a photo. Scroll through your songs and videos
                                                        with a flick. Flip throug..
                                                    </p>
                                                    <p className="price">$122.00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-layout product-list col-xs-12">
                                    <div className="product-block product-thumb">
                                        <div className="product-block-inner">
                                            <div className="image">
                                                <a href="product/product&path=20&product_id=29">
                                                    <img
                                                        src="/images/19-264x380.jpg"
                                                        title="Self-Designed Tank Top"
                                                        alt="Self-Designed Tank Top"
                                                        className="img-responsive reg-image"
                                                    />
                                                    <img
                                                        className="img-responsive hover-image"
                                                        src="/images/20-264x380.jpg"
                                                        title="Self-Designed Tank Top"
                                                        alt="Self-Designed Tank Top"
                                                    />
                                                </a>
                                                <div className="product_hover_block">
                                                    <div className="action">
                                                        <button
                                                            type="button"
                                                            className="cart_button"
                                                            onclick="cart.add('29 ');"
                                                            title="Add to Cart"
                                                        >
                                                            <i className="fa fa-shopping-cart" area-hidden="true" />{" "}
                                                        </button>
                                                        <div className="quickview-button">
                                                            <a
                                                                className="quickbox"
                                                                title="Add To quickview"
                                                                href="product/quick_view&path=20&product_id=29"
                                                            >
                                                                <i className="fa fa-eye" />
                                                            </a>
                                                        </div>
                                                        <button
                                                            className="wishlist"
                                                            type="button"
                                                            title="Add to Wish List "
                                                            onclick="wishlist.add('29 ');"
                                                        >
                                                            <i className="fa fa-heart" />
                                                        </button>
                                                        <button
                                                            className="compare_button"
                                                            type="button"
                                                            title="Add to compare "
                                                            onclick="compare.add('29 ');"
                                                        >
                                                            <i className="fa fa-exchange" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-details grid">
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
                                                            <i className="fa fa-star-o fa-stack-2x" />
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x" />
                                                        </span>
                                                    </div>
                                                    <h4>
                                                        <a href="product/product&path=20&product_id=29">
                                                            Self-Designed Tank Top
                                                        </a>
                                                    </h4>
                                                    <p className="price">$337.99</p>
                                                </div>
                                            </div>
                                            <div className="product-details list">
                                                <div className="caption">
                                                    <h4>
                                                        <a href="product/product&path=20&product_id=29">
                                                            Self-Designed Tank Top
                                                        </a>
                                                    </h4>
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
                                                            <i className="fa fa-star-o fa-stack-2x" />
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x" />
                                                        </span>
                                                    </div>
                                                    <p className="desc">
                                                        Redefine your workday with the Palm Treo Pro smartphone.
                                                        Perfectly balanced, you can respond to business and
                                                        personal email, stay on top of appointments and contacts,
                                                        and use Wi-Fi or GPS when you&amp;rsq..
                                                    </p>
                                                    <p className="price">$337.99</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-layout product-list col-xs-12">
                                    <div className="product-block product-thumb">
                                        <div className="product-block-inner">
                                            <div className="image">
                                                <a href="product/product&path=20&product_id=40">
                                                    <img
                                                        src="/images/5-264x380.jpg"
                                                        title="Solid A-Line Top"
                                                        alt="Solid A-Line Top"
                                                        className="img-responsive reg-image"
                                                    />
                                                    <img
                                                        className="img-responsive hover-image"
                                                        src="/images/10-264x380.jpg"
                                                        title="Solid A-Line Top"
                                                        alt="Solid A-Line Top"
                                                    />
                                                </a>
                                                <div className="product_hover_block">
                                                    <div className="action">
                                                        <button
                                                            type="button"
                                                            className="cart_button"
                                                            onclick="cart.add('40 ');"
                                                            title="Add to Cart"
                                                        >
                                                            <i className="fa fa-shopping-cart" area-hidden="true" />{" "}
                                                        </button>
                                                        <div className="quickview-button">
                                                            <a
                                                                className="quickbox"
                                                                title="Add To quickview"
                                                                href="product/quick_view&path=20&product_id=40"
                                                            >
                                                                <i className="fa fa-eye" />
                                                            </a>
                                                        </div>
                                                        <button
                                                            className="wishlist"
                                                            type="button"
                                                            title="Add to Wish List "
                                                            onclick="wishlist.add('40 ');"
                                                        >
                                                            <i className="fa fa-heart" />
                                                        </button>
                                                        <button
                                                            className="compare_button"
                                                            type="button"
                                                            title="Add to compare "
                                                            onclick="compare.add('40 ');"
                                                        >
                                                            <i className="fa fa-exchange" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-details grid">
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
                                                            <i className="fa fa-star-o fa-stack-2x" />
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x" />
                                                        </span>
                                                    </div>
                                                    <h4>
                                                        <a href="product/product&path=20&product_id=40">
                                                            Solid A-Line Top
                                                        </a>
                                                    </h4>
                                                    <p className="price">$123.20</p>
                                                </div>
                                            </div>
                                            <div className="product-details list">
                                                <div className="caption">
                                                    <h4>
                                                        <a href="product/product&path=20&product_id=40">
                                                            Solid A-Line Top
                                                        </a>
                                                    </h4>
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
                                                            <i className="fa fa-star-o fa-stack-2x" />
                                                        </span>
                                                        <span className="fa fa-stack">
                                                            <i className="fa fa-star-o fa-stack-2x" />
                                                        </span>
                                                    </div>
                                                    <p className="desc">
                                                        iPhone is a revolutionary new mobile phone that allows you
                                                        to make a call by simply tapping a name or number in your
                                                        address book, a favorites list, or a call log. It also
                                                        automatically syncs all your..
                                                    </p>
                                                    <p className="price">$123.20</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-layout product-list col-xs-12">
                                    <div className="product-block product-thumb">
                                        <div className="product-block-inner">
                                            <div className="image outstock">
                                                <a href="product/product&path=20&product_id=46">
                                                    <img
                                                        src="/images/14-264x380.jpg"
                                                        title="Solid Men & Women Muffler"
                                                        alt="Solid Men & Women Muffler"
                                                        className="img-responsive reg-image"
                                                    />
                                                    <img
                                                        className="img-responsive hover-image"
                                                        src="/images/2-264x380.jpg"
                                                        title="Solid Men & Women Muffler"
                                                        alt="Solid Men & Women Muffler"
                                                    />
                                                </a>
                                            </div>
                                            <div className="status_stock">
                                                Out of stock
                                                <button
                                                    className="wishlist_button"
                                                    type="button"
                                                    data-toggle="tooltip"
                                                    title="Add to Wish List "
                                                    onclick="wishlist.add('46 ');"
                                                >
                                                    <i className="fa fa-heart" />
                                                </button>
                                            </div>
                                            <div className="product-details grid">
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
                                                        <a href="product/product&path=20&product_id=46">
                                                            Solid Men &amp; Women Muffler
                                                        </a>
                                                    </h4>
                                                    <p className="price">$1,202.00</p>
                                                </div>
                                            </div>
                                            <div className="product-details list">
                                                <div className="caption">
                                                    <h4>
                                                        <a href="product/product&path=20&product_id=46">
                                                            Solid Men &amp; Women Muffler
                                                        </a>
                                                    </h4>
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
                                                    <p className="desc">
                                                        Unprecedented power. The next generation of processing
                                                        technology has arrived. Built into the newest VAIO
                                                        notebooks lies Intel's latest, most powerful innovation
                                                        yet: Intel® Centrino® 2 pr..
                                                    </p>
                                                    <p className="price">$1,202.00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-layout product-list col-xs-12">
                                    <div className="product-block product-thumb">
                                        <div className="product-block-inner">
                                            <div className="image">
                                                <a href="product/product&path=20&product_id=44">
                                                    <img
                                                        src="/images/20-264x380.jpg"
                                                        title="Striped Men & Women Muffler"
                                                        alt="Striped Men & Women Muffler"
                                                        className="img-responsive reg-image"
                                                    />
                                                    <img
                                                        className="img-responsive hover-image"
                                                        src="/images/8-264x380.jpg"
                                                        title="Striped Men & Women Muffler"
                                                        alt="Striped Men & Women Muffler"
                                                    />
                                                </a>
                                                <div className="product_hover_block">
                                                    <div className="action">
                                                        <button
                                                            type="button"
                                                            className="cart_button"
                                                            onclick="cart.add('44 ');"
                                                            title="Add to Cart"
                                                        >
                                                            <i className="fa fa-shopping-cart" area-hidden="true" />{" "}
                                                        </button>
                                                        <div className="quickview-button">
                                                            <a
                                                                className="quickbox"
                                                                title="Add To quickview"
                                                                href="product/quick_view&path=20&product_id=44"
                                                            >
                                                                <i className="fa fa-eye" />
                                                            </a>
                                                        </div>
                                                        <button
                                                            className="wishlist"
                                                            type="button"
                                                            title="Add to Wish List "
                                                            onclick="wishlist.add('44 ');"
                                                        >
                                                            <i className="fa fa-heart" />
                                                        </button>
                                                        <button
                                                            className="compare_button"
                                                            type="button"
                                                            title="Add to compare "
                                                            onclick="compare.add('44 ');"
                                                        >
                                                            <i className="fa fa-exchange" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-details grid">
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
                                                        <a href="product/product&path=20&product_id=44">
                                                            Striped Men &amp; Women Muffler
                                                        </a>
                                                    </h4>
                                                    <p className="price">$1,202.00</p>
                                                </div>
                                            </div>
                                            <div className="product-details list">
                                                <div className="caption">
                                                    <h4>
                                                        <a href="product/product&path=20&product_id=44">
                                                            Striped Men &amp; Women Muffler
                                                        </a>
                                                    </h4>
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
                                                    <p className="desc">
                                                        MacBook Air is ultrathin, ultraportable, and ultra unlike
                                                        anything else. But you don’t lose inches and pounds
                                                        overnight. It’s the result of rethinking conventions. Of
                                                        multiple wireless inn..
                                                    </p>
                                                    <p className="price">$1,202.00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-layout product-list col-xs-12">
                                    <div className="product-block product-thumb">
                                        <div className="product-block-inner">
                                            <div className="image">
                                                <a href="product/product&path=20&product_id=45">
                                                    <img
                                                        src="/images/9-264x380.jpg"
                                                        title="tid watches nato"
                                                        alt="tid watches nato"
                                                        className="img-responsive reg-image"
                                                    />
                                                    <img
                                                        className="img-responsive hover-image"
                                                        src="/images/14-264x380.jpg"
                                                        title="tid watches nato"
                                                        alt="tid watches nato"
                                                    />
                                                </a>
                                                <div className="product_hover_block">
                                                    <div className="action">
                                                        <button
                                                            type="button"
                                                            className="cart_button"
                                                            onclick="cart.add('45 ');"
                                                            title="Add to Cart"
                                                        >
                                                            <i className="fa fa-shopping-cart" area-hidden="true" />{" "}
                                                        </button>
                                                        <div className="quickview-button">
                                                            <a
                                                                className="quickbox"
                                                                title="Add To quickview"
                                                                href="product/quick_view&path=20&product_id=45"
                                                            >
                                                                <i className="fa fa-eye" />
                                                            </a>
                                                        </div>
                                                        <button
                                                            className="wishlist"
                                                            type="button"
                                                            title="Add to Wish List "
                                                            onclick="wishlist.add('45 ');"
                                                        >
                                                            <i className="fa fa-heart" />
                                                        </button>
                                                        <button
                                                            className="compare_button"
                                                            type="button"
                                                            title="Add to compare "
                                                            onclick="compare.add('45 ');"
                                                        >
                                                            <i className="fa fa-exchange" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-details grid">
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
                                                        <a href="product/product&path=20&product_id=45">
                                                            tid watches nato
                                                        </a>
                                                    </h4>
                                                    <p className="price">$2,000.00</p>
                                                </div>
                                            </div>
                                            <div className="product-details list">
                                                <div className="caption">
                                                    <h4>
                                                        <a href="product/product&path=20&product_id=45">
                                                            tid watches nato
                                                        </a>
                                                    </h4>
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
                                                    <p className="desc">
                                                        Latest Intel mobile architecture Powered by the most
                                                        advanced mobile processors from Intel, the new Core 2 Duo
                                                        MacBook Pro is over 50% faster than the original Core Duo
                                                        MacBook Pro and now sup..
                                                    </p>
                                                    <p className="price">$2,000.00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-layout product-list col-xs-12">
                                    <div className="product-block product-thumb">
                                        <div className="product-block-inner">
                                            <div className="image">
                                                <a href="product/product&path=20&product_id=28">
                                                    <img
                                                        src="/images/10-264x380.jpg"
                                                        title="Women Solid Backpack"
                                                        alt="Women Solid Backpack"
                                                        className="img-responsive reg-image"
                                                    />
                                                    <img
                                                        className="img-responsive hover-image"
                                                        src="/images/12-264x380.jpg"
                                                        title="Women Solid Backpack"
                                                        alt="Women Solid Backpack"
                                                    />
                                                </a>
                                                <div className="product_hover_block">
                                                    <div className="action">
                                                        <button
                                                            type="button"
                                                            className="cart_button"
                                                            onclick="cart.add('28 ');"
                                                            title="Add to Cart"
                                                        >
                                                            <i className="fa fa-shopping-cart" area-hidden="true" />{" "}
                                                        </button>
                                                        <div className="quickview-button">
                                                            <a
                                                                className="quickbox"
                                                                title="Add To quickview"
                                                                href="product/quick_view&path=20&product_id=28"
                                                            >
                                                                <i className="fa fa-eye" />
                                                            </a>
                                                        </div>
                                                        <button
                                                            className="wishlist"
                                                            type="button"
                                                            title="Add to Wish List "
                                                            onclick="wishlist.add('28 ');"
                                                        >
                                                            <i className="fa fa-heart" />
                                                        </button>
                                                        <button
                                                            className="compare_button"
                                                            type="button"
                                                            title="Add to compare "
                                                            onclick="compare.add('28 ');"
                                                        >
                                                            <i className="fa fa-exchange" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-details grid">
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
                                                        <a href="product/product&path=20&product_id=28">
                                                            Women Solid Backpack
                                                        </a>
                                                    </h4>
                                                    <p className="price">$122.00</p>
                                                </div>
                                            </div>
                                            <div className="product-details list">
                                                <div className="caption">
                                                    <h4>
                                                        <a href="product/product&path=20&product_id=28">
                                                            Women Solid Backpack
                                                        </a>
                                                    </h4>
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
                                                    <p className="desc">
                                                        HTC Touch - in High Definition. Watch music videos and
                                                        streaming content in awe-inspiring high definition clarity
                                                        for a mobile experience you never thought possible.
                                                        Seductively sleek, the HTC Touch H..
                                                    </p>
                                                    <p className="price">$122.00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pagination-wrapper">
                                <div className="col-sm-6 text-left page-link">
                                    <ul className="pagination">
                                        <li className="active">
                                            <span>1</span>
                                        </li>
                                        <li>
                                            <a href="catalog.html?page=2">2</a>
                                        </li>
                                        <li>
                                            <a href="catalog.html?page=2">&gt;</a>
                                        </li>
                                        <li>
                                            <a href="catalog.html?page=2">&gt;|</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-sm-6 text-right page-result">
                                    Showing 1 to 15 of 16 (2 Pages)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};