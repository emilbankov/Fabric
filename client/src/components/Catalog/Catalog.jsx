import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as clothesService from "../../services/clothesService";
import { categories } from "../../lib/dictionary";

export default function Catalog() {
    const location = useLocation();
    const navigate = useNavigate();

    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get("type") || "";
    const sort = queryParams.get("sort") || "";
    const size = queryParams.get("size") || "";
    const page = parseInt(queryParams.get("page") || "1", 10);
    const selectedCategories = queryParams.get("category") || "";
    const categoryParam = queryParams.get("category") || "";
    const categoryArray = categoryParam ? categoryParam.split(",") : [];

    const [checkedCategories, setCheckedCategories] = useState(
        selectedCategories ? selectedCategories.split(",") : []
    );
    const [catalog, setCatalog] = useState([]);
    const [mostSold, setMostSold] = useState([]);
    const [productsCount, setProductsCount] = useState([]);

    useEffect(() => {
        Promise.all([
            clothesService.getCatalog(type, sort, size, page, categoryArray),
            clothesService.getMostSold(),
            clothesService.getProductsCount(),
        ])
            .then(([catalog, mostSold, productsCount]) => {
                setCatalog(catalog);
                setMostSold(mostSold);
                setProductsCount(productsCount);
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
            });
    }, [location.search, type, sort, size, page, selectedCategories]);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const categoryParam = queryParams.get("category") || "";
        setCheckedCategories(categoryParam ? categoryParam.split(",") : []);
    }, [location.search]);

    const handleSortChange = (e) => {
        const newSort = e.target.value;
        const params = new URLSearchParams(location.search);
        params.set("sort", newSort);
        navigate(`${location.pathname}?${params.toString()}`);
    };

    const handleSizeChange = (e) => {
        const newSize = e.target.value;
        const params = new URLSearchParams(location.search);
        params.set("size", newSize);
        navigate(`${location.pathname}?${params.toString()}`);
    };

    const handlePageChange = (newPage) => {
        const params = new URLSearchParams(location.search);
        params.set("page", newPage);
        navigate(`${location.pathname}?${params.toString()}`);
    };

    const handleCategoryChange = (categoryId) => {
        setCheckedCategories((prevCheckedCategories) => {
            if (prevCheckedCategories.includes(categoryId)) {
                return prevCheckedCategories.filter((id) => id !== categoryId);
            } else {
                return [...prevCheckedCategories, categoryId];
            }
        });
    };

    const applyFilter = () => {
        const params = new URLSearchParams(location.search);
        if (checkedCategories.length > 0) {
            params.set("category", checkedCategories.join(","));
            console.log("Selected categories:", checkedCategories);
        } else {
            params.delete("category");
        }
        navigate(`${location.pathname}?${params.toString()}`);
    };

    const resetFilters = () => {
        const params = new URLSearchParams(location.search);

        params.delete("category");
        params.set("page", "1");

        navigate(`${location.pathname}?${params.toString()}`);

        setCheckedCategories([]);
    };


    useEffect(() => {
        const gridButton = document.getElementById("grid-view");
        const listButton = document.getElementById("list-view");
        const products = document.querySelectorAll(".product-layout");

        const setGridView = () => {
            gridButton.classList.add("active");
            listButton.classList.remove("active");

            products.forEach((product) => {
                product.className =
                    "product-layout product-grid col-lg-3 col-md-4 col-sm-4 col-xs-6";
            });
        };

        const setListView = () => {
            listButton.classList.add("active");
            gridButton.classList.remove("active");

            products.forEach((product) => {
                product.className = "product-layout product-list col-xs-12";
            });
        };

        setGridView();

        gridButton.addEventListener("click", setGridView);
        listButton.addEventListener("click", setListView);

        return () => {
            gridButton.removeEventListener("click", setGridView);
            listButton.removeEventListener("click", setListView);
        };
    }, [catalog.clothes]);

    useEffect(() => {
        const existingScript = document.querySelector('script[src="/js/custom.js"]');
        if (existingScript && existingScript.parentNode) {
            existingScript.parentNode.removeChild(existingScript);
        }

        const script = document.createElement("script");
        script.src = "/js/custom.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, [location.pathname, catalog.clothes, mostSold.clothes]);

    return (
        <>
            <div className="product-category-20 layout-2 left-col">
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
                                <div className="box-heading">Филтрирано търсене</div>
                                <div className="list-group">
                                    <a className="list-group-item heading">Категории</a>
                                    <div className="list-group-item">
                                        <div id="filter-group1">
                                            {categories.map((category) => (
                                                <div className="checkbox" key={category.id}>
                                                    <label>
                                                        <input
                                                            type="checkbox"
                                                            name="filter[]"
                                                            value={category.id}
                                                            checked={checkedCategories.includes(
                                                                category.id.toString()
                                                            )}
                                                            onChange={() =>
                                                                handleCategoryChange(category.id.toString())
                                                            }
                                                        />
                                                        {category.name}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="panel-footer text-right">
                                        {checkedCategories.length !== 0 && (
                                            <button
                                                type="button"
                                                className="btn btn-danger btn-lg btn-block"
                                                onClick={resetFilters}
                                            >
                                                Изчисти филтри
                                            </button>
                                        )}
                                        <button
                                            type="button"
                                            id="button-filter"
                                            className="btn btn-primary"
                                            onClick={applyFilter}
                                        >
                                            Филтрирай
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
                                <div id="banner0" className="swiper-container single-banner">
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
                                    <div className="swiper-pagination" />
                                </div>
                            </div>
                            <div className="box latest">
                                <div className="box-heading">Latest Product</div>
                                <div className="box-content">
                                    <div className="box-product productbox-grid" id=" latest-grid">
                                        {mostSold.clothes &&
                                            mostSold.clothes.slice(0, 3).map((item) => (
                                                <div className="product-items" key={item.id}>
                                                    <div className="product-items">
                                                        <div className="product-block product-thumb transition">
                                                            <div className="product-block-inner">
                                                                <div className="image">
                                                                    <Link to={`/clothing/details/${item.id}`}>
                                                                        <img
                                                                            src={`https://res.cloudinary.com/dfttdd1vq/image/upload/${item.images[0].path}`}
                                                                            title="tote bags for women"
                                                                            alt="tote bags for women"
                                                                            className="img-responsive reg-image"
                                                                        />

                                                                        {item.type !== "KIT" && (
                                                                            <img
                                                                                src={`https://res.cloudinary.com/dfttdd1vq/image/upload/${item.images[1].path}`}
                                                                                title="tote bags for women"
                                                                                alt="tote bags for women"
                                                                                className="img-responsive hover-image"
                                                                            />
                                                                        )}

                                                                        {item.type === "KIT" && (
                                                                            <img
                                                                                src={`https://res.cloudinary.com/dfttdd1vq/image/upload/${item.images[0].path}`}
                                                                                title="tote bags for women"
                                                                                alt="tote bags for women"
                                                                                className="img-responsive hover-image"
                                                                            />
                                                                        )}
                                                                    </Link>
                                                                </div>
                                                                <div className="product-details">
                                                                    <div className="caption">
                                                                        <h4>
                                                                            <a href="=49 ">{item.name}</a>
                                                                        </h4>
                                                                        <p className="price">
                                                                            {item.price.toFixed(2)} лв.
                                                                        </p>
                                                                    </div>
                                                                    <div className="product_hover_block">
                                                                        <div className="action">
                                                                            <button
                                                                                type="button"
                                                                                className="cart_button"
                                                                                title="Add to Cart"
                                                                            >
                                                                                <i
                                                                                    className="fa fa-shopping-cart"
                                                                                    area-hidden="true"
                                                                                />
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
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
                                <div className="pagination-right">
                                    <div className="sort-by-wrapper">
                                        <div className="col-md-3 text-right sort">
                                            <select
                                                id="input-sort"
                                                className=" form-control catalog"
                                                onChange={handleSortChange}
                                                value={sort}
                                            >
                                                <option value="new">Сортирай</option>
                                                <option value="name_asc">Име (А - Я)</option>
                                                <option value="name_desc">Име (Я - А)</option>
                                                <option value="price_asc">Най-ниска цена</option>
                                                <option value="price_desc">Най-висока цена</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="show-wrapper">
                                        <div className="col-md-1 text-right show">
                                            <label className="control-label" htmlFor="input-limit">
                                                Подреди по:
                                            </label>
                                        </div>
                                        <div className="col-md-2 text-right limit">
                                            <select
                                                id="input-limit"
                                                className="form-control size"
                                                onChange={handleSizeChange}
                                                value={size}
                                            >
                                                <option value="20">20</option>
                                                <option value="40">40</option>
                                                <option value="60">60</option>
                                                <option value="80">80</option>
                                                <option value="100">100 </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                {catalog.clothes && catalog.clothes.map(item => (
                                    <div className="product-layout product-grid col-lg-3 col-md-4 col-sm-4 col-xs-6" key={item.id}>
                                        <div className="product-block product-thumb">
                                            <div className="product-block-inner">
                                                <div className="image">
                                                    <Link to={`/clothing/details/${item.id}`}>
                                                        <img
                                                            src={`https://res.cloudinary.com/dfttdd1vq/image/upload/w_250,h_275/${item.images[0].path}`}
                                                            title={item.name}
                                                            alt={item.name}
                                                            className="img-responsive reg-image"
                                                        />
                                                        {item.type !== "KIT" && (
                                                            <img
                                                                src={`https://res.cloudinary.com/dfttdd1vq/image/upload/${item.images[1].path}`}
                                                                title={item.name}
                                                                alt={item.name}
                                                                className="img-responsive hover-image"
                                                            />
                                                        )}
                                                        {item.type === "KIT" && (
                                                            <img
                                                                src={`https://res.cloudinary.com/dfttdd1vq/image/upload/${item.images[0].path}`}
                                                                title={item.name}
                                                                alt={item.name}
                                                                className="img-responsive hover-image"
                                                            />
                                                        )}
                                                    </Link>
                                                    <div className="product_hover_block">
                                                        <div className="action">
                                                            <button
                                                                type="button"
                                                                className="cart_button"
                                                                title="Add to Cart"
                                                            >
                                                                <i className="fa fa-shopping-cart" aria-hidden="true" />{" "}
                                                            </button>
                                                            <button
                                                                className="wishlist"
                                                                type="button"
                                                                title="Add to Wish List "
                                                            >
                                                                <i className="fa fa-heart" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-details grid">
                                                    <div className="caption">
                                                        <h4>
                                                            <a href={`product/product&path=20&product_id=${item.id}`}>
                                                                {item.name}
                                                            </a>
                                                        </h4>
                                                        <p className="price">{item.price.toFixed(2)} лв.</p>
                                                    </div>
                                                </div>
                                                <div className="product-details list">
                                                    <div className="caption">
                                                        <h4>
                                                            <a href={`product/product&path=20&product_id=${item.id}`}>
                                                                {item.name}
                                                            </a>
                                                        </h4>
                                                        <p className="desc">
                                                            {item.description}
                                                        </p>
                                                        <p className="price">{item.price.toFixed(2)} лв.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* <div className="product-layout product-list col-xs-12">
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
                                                        >
                                                            <i className="fa fa-heart" />
                                                        </button>
                                                        <button
                                                            className="compare_button"
                                                            type="button"
                                                            title="Add to compare "
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
                                </div> */}
                            </div>
                            <div className="pagination-wrapper">
                                <div className="col-sm-6 text-left page-link">
                                    <ul className="pagination">
                                        {page > 1 && (
                                            <>
                                                <li>
                                                    <a
                                                        onClick={() => handlePageChange(1)}
                                                        role="button"
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        |&lt;
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        onClick={() => handlePageChange(page - 1)}
                                                        role="button"
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        &lt;
                                                    </a>
                                                </li>
                                            </>
                                        )}
                                        {(() => {
                                            const totalPages = Math.max(1, catalog.total_pages || 1);
                                            let startPage = Math.max(1, page - 1);
                                            let endPage = Math.min(totalPages, startPage + 2);

                                            if (endPage - startPage < 2) {
                                                startPage = Math.max(1, endPage - 2);
                                            }

                                            return [...Array(Math.max(0, endPage - startPage + 1))].map(
                                                (_, index) => {
                                                    const pageNumber = startPage + index;
                                                    return (
                                                        <li
                                                            key={pageNumber}
                                                            className={page === pageNumber ? "active" : ""}
                                                        >
                                                            <a
                                                                onClick={() => handlePageChange(pageNumber)}
                                                                role="button"
                                                                style={{ cursor: "pointer" }}
                                                            >
                                                                {pageNumber}
                                                            </a>
                                                        </li>
                                                    );
                                                }
                                            );
                                        })()}
                                        {page < catalog.total_pages && (
                                            <>
                                                <li>
                                                    <a
                                                        onClick={() => handlePageChange(page + 1)}
                                                        role="button"
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        &gt;
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        onClick={() =>
                                                            handlePageChange(catalog.total_pages)
                                                        }
                                                        role="button"
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        &gt;|
                                                    </a>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                                <div className="col-sm-6 text-right page-result">
                                    Показвани {catalog.items_on_page} от {size} (
                                    {catalog.total_pages} Страници)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
