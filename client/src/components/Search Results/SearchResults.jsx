import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as clothesService from "../../services/clothesService";
import { homeCategories, typeTranslations } from "../../lib/dictionary";
import MetaTags from '../Meta Tags/MetaTags';

export default function SearchResults() {
    const location = useLocation();
    const navigate = useNavigate();

    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get("name") || "";
    const sort = queryParams.get("sort") || "";
    const selectedTypes = queryParams.get("type") || "";
    const size = queryParams.get("size") || "20";
    const page = parseInt(queryParams.get("page") || "1", 10);
    const typeParam = queryParams.get("type") || "";
    const type = typeParam ? typeParam.split(",") : [];

    const [checkedTypes, setCheckedTypes] = useState(selectedTypes ? selectedTypes.split(",") : []);
    const [results, setResults] = useState({ clothes: [] });

    useEffect(() => {
        Promise.all([
            clothesService.searchWithFilters(name, sort, size, page, type),
        ])
            .then(([searchResults]) => {
                setResults(searchResults);
            })
            .catch(err => {
                console.error('Search Error:', err);
            })
    }, [name, sort, selectedTypes, size, page]);

    const handleTypeChange = (typeId) => {
        setCheckedTypes((prevCheckedTypes) => {
            if (prevCheckedTypes.includes(typeId)) {
                return prevCheckedTypes.filter((id) => id !== typeId);
            } else {
                return [...prevCheckedTypes, typeId];
            }
        });
    };

    const applyFilter = () => {
        const params = new URLSearchParams(location.search);
        if (checkedTypes.length > 0) {
            params.set("type", checkedTypes.join(","));
        } else {
            params.delete("type");
        }
        navigate(`${location.pathname}?${params.toString()}`);
    };

    const resetFilters = () => {
        const params = new URLSearchParams(location.search);
        params.delete("type");
        params.set("page", "1");
        navigate(`${location.pathname}?${params.toString()}`);
        setCheckedTypes([]);
    };

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

    useEffect(() => {
        const gridButton = document.getElementById("grid-view");
        const listButton = document.getElementById("list-view");
        const products = document.querySelectorAll(".product-layout");

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

        setGridView();

        gridButton.addEventListener("click", setGridView);
        listButton.addEventListener("click", setListView);

        return () => {
            gridButton.removeEventListener("click", setGridView);
            listButton.removeEventListener("click", setListView);
        };
    }, [results.clothes]);

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
    }, [location.pathname, results.clothes]);

    return (
        <>
            <MetaTags
                title="Fabric | Резултати от търсене"
                description="Намерете това, което търсите във Fabric. Разгледайте резултатите от вашето търсене и открийте най-добрите продукти за вас."
                keywords="Fabric, резултати от търсенето, търсене, продукти, филтри, сортиране, search results, search, products, filters, sorting"
            />
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
                        <li><Link to="/"><i className="fa fa-home" /></Link></li>
                        <li><Link to={`/search-results?name=${name}`}>Търсене</Link></li>
                    </ul>
                    <div className="row">
                        <aside id="column-left" className="col-sm-3 hidden-xs">
                            <div className="box">
                                <div className="box-heading">Филтрирано търсене</div>
                                <div className="list-group">
                                    <a className="list-group-item heading">Тип</a>
                                    <div className="list-group-item">
                                        <div id="filter-group1">
                                            {Object.entries(typeTranslations)
                                                .filter(([id]) => id !== "BANDANAS")
                                                .map(([id, name]) => (
                                                    <div className="checkbox" key={id}>
                                                        <label>
                                                            <input
                                                                type="checkbox"
                                                                name="filter[]"
                                                                value={id}
                                                                checked={checkedTypes.includes(id)}
                                                                onChange={() => handleTypeChange(id)}
                                                            />
                                                            {name}
                                                        </label>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                    <div className="panel-footer text-right">
                                        {checkedTypes.length !== 0 && (
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
                            {/* <div className="swiper-viewport">
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
                                    <div className="swiper-pagination" />
                                </div>
                            </div> */}
                            <div className="box latest">
                                <div className="box-heading" style={{ textAlign: "center" }}>Категории</div>
                                <div className="box-content">
                                    <div className="box-product productbox-grid" id=" latest-grid">
                                        {homeCategories.map((category) => (
                                            <div className="product-items" key={category.id}>
                                                <div className="product-items">
                                                    <div className="product-block product-thumb transition">
                                                        <div className="product-block-inner">
                                                            <div className="image">
                                                                <Link to={category.link}>
                                                                    <img
                                                                        src={category.image}
                                                                        title={category.name}
                                                                        alt={category.name}
                                                                        className="img-responsive reg-image"
                                                                        loading="lazy"
                                                                    />
                                                                </Link>
                                                            </div>
                                                            <div className="product-details">
                                                                <div className="caption">
                                                                    <h4 style={{ textTransform: "none" }}>
                                                                        <Link to={category.link}>{category.name}</Link>
                                                                    </h4>
                                                                </div>
                                                                <div className="product_hover_block">
                                                                    <div className="action">
                                                                        <button
                                                                            type="button"
                                                                            className="cart_button"
                                                                            onClick={() => navigate(`/clothing/details/${category.id}`)}
                                                                            title="Add to Cart"
                                                                        >
                                                                            <i className="极fa fa-shopping-cart" area-hidden="true" />
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
                            <h2 className="page-title">Търсене</h2>
                            {/* <div className="row category_thumb">
                                <div className="col-sm-2 category_img">
                                    <img
                                        src="/images/category-baner-1098x200.jpg"
                                        alt="Men"
                                        title="Men"
                                        className="img-thumbnail"
                                    />
                                </div>
                            </div> */}
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
                                                className="form-control catalog"
                                                onChange={handleSortChange}
                                                value={sort}
                                                style={{ textAlign: "center" }}
                                            >
                                                <option value="">Сортирай</option>
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
                                                style={{ textAlign: "center" }}
                                            >
                                                <option value="20">20</option>
                                                <option value="40">40</option>
                                                <option value="60">60</option>
                                                <option value="80">80</option>
                                                <option value="100">100</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="row product-layoutrow">
                                {results.clothes && results.clothes.map((item) => (
                                    <div key={item.id} className="product-layout product-grid col-lg-3 col-md-4 col-sm-4 col-xs-6">
                                        <div className="product-block product-thumb">
                                            <div className="product-block-inner">
                                                <div className="image">
                                                    <Link to={`/clothing/details/${item.id}`}>
                                                        <img
                                                            src={`https://res.cloudinary.com/dfttdd1vq/image/upload/f_webp,q_auto/w_250,h_300${item.images.find(image => image.side === 'front')?.path}`}
                                                            title={item.name}
                                                            alt={item.name}
                                                            className="img-responsive reg-image"
                                                            loading="lazy"
                                                        />
                                                        {(item.type !== "KIT" && item.type !== "TOWELS" && item.type !== "BANDANAS") && (
                                                            <img
                                                                src={`https://res.cloudinary.com/dfttdd1vq/image/upload/f_webp,q_auto${item.images.find(image => image.side === 'back')?.path}`}
                                                                title={item.name}
                                                                alt={item.name}
                                                                className="img-responsive hover-image"
                                                                loading="lazy"
                                                            />
                                                        )}
                                                        {(item.type === "KIT" || item.type === "TOWELS" || item.type === "BANDANAS") && (
                                                            <img
                                                                src={`https://res.cloudinary.com/dfttdd1vq/image/upload/f_webp,q_auto${item.images.find(image => image.side === 'front')?.path}`}
                                                                title={item.name}
                                                                alt={item.name}
                                                                className="img-responsive hover-image"
                                                                loading="lazy"
                                                            />
                                                        )}
                                                    </Link>
                                                </div>
                                                {item?.discountPrice && (
                                                    <div className="saleback"><div className="saleicon sale">{(Math.ceil((item.price - item.discountPrice) / item.price * 100))}%</div></div>
                                                )}
                                                <div className="product-details grid">
                                                    <div className="caption">
                                                        <h4>
                                                            <Link to={`/clothing/details/${item.id}`}>
                                                                {item.name}
                                                            </Link>
                                                        </h4>
                                                        <p className="price">
                                                            {item?.discountPrice ? (
                                                                <>
                                                                    <span className="price-new">{item?.discountPrice?.toFixed(2)} лв.</span>
                                                                    <span className="price-old">{item?.price?.toFixed(2)} лв.</span>
                                                                </>
                                                            ) : (
                                                                <span className="price-new">{item?.price?.toFixed(2)} лв.</span>
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="product-details list">
                                                    <div className="caption">
                                                        <h4>
                                                            <Link to={`/clothing/details/${item.id}`}>
                                                                {item.name}
                                                            </Link>
                                                        </h4>
                                                        <p className="desc">
                                                            {item.description}
                                                        </p>
                                                        <p className="price">
                                                            {item?.discountPrice ? (
                                                                <>
                                                                    <span className="price-new">{item?.discountPrice?.toFixed(2)} лв.</span>
                                                                    <span className="price-old">{item?.price?.toFixed(2)} лв.</span>
                                                                </>
                                                            ) : (
                                                                <span className="price-new">{item?.price?.toFixed(2)} лв.</span>
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
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
                                            const totalPages = Math.max(1, results.total_pages || 1);
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
                                        {page < results.total_pages && (
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
                                                        onClick={() => handlePageChange(results.total_pages)}
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
                                    Показвани {results.items_on_page} от {size} ({results.total_pages} Страници)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};