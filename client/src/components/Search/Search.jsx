import { useEffect, useState } from "react";
import * as clothesService from "../../services/clothesService";
import { Link, useNavigate } from "react-router-dom";

export default function Search() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (query.length < 1) {
            setResults([]);
            return;
        }

        setLoading(true);

        const delayDebounceFn = setTimeout(() => {
            clothesService.search(query)
                .then(result => {
                    setResults(result);
                    setLoading(false);
                })
                .catch(err => {
                    console.log(err);
                    setLoading(false);
                });
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [query]);

    const handleViewAllResultsClick = () => {
        setQuery("");
    };

    const handleSearchClick = () => {
        if (query.trim()) {
            navigate(`/search-results?name=${query}`);
            setQuery("");
        }
    };

    return (
        <>
            <div className="col-sm-5 header_search">
                <div id="search">
                    <div id="searchbox" className="input-group searchtoggle">
                        <input
                            type="text"
                            name="search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Търсене на продукти..."
                            className="form-control input-lg"
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    handleSearchClick();
                                }
                            }}
                        />
                        <span className="input-group-btn">
                            <button
                                type="button"
                                className="btn btn-default btn-lg"
                                onClick={handleSearchClick}
                            >
                                Търсене
                            </button>
                        </span>
                    </div>
                    {query && query.length > 0 && (
                        <div className="live-search" style={{ display: query?.length > 0 ? "block" : "none" }}>
                            {loading && <img className="loading" src="/images/loading.gif" />}
                            <ul>
                                {results.clothes && results.clothes.slice(0, 6).map((product) => (
                                    <li key={product.id}>
                                        <Link
                                            to={`/clothing/details/${product.id}`}
                                            title={product.name}
                                            onClick={() => setQuery("")}
                                        >
                                            <div className="product-image col-sm-3 col-xs-4">
                                                <img alt={product.name} src={`https://res.cloudinary.com/dfttdd1vq/image/upload${product.images.find(image => image.side === 'front')?.path}`} />
                                            </div>
                                            <div className="search-description col-sm-9 col-xs-8">
                                                <div className="product-name">
                                                    {product.name}
                                                    <p>{product.description}</p>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price">{product.price.toFixed(2)} лв.</span>
                                                    {product.special && <span className="special">${product.special}</span>}
                                                </div>
                                            </div>
                                            <span style={{ clear: "both" }} />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="result-text">
                                <Link
                                    to={`/search-results?name=${query}`}
                                    className="view-all-results"
                                    onClick={handleViewAllResultsClick}
                                >
                                    Виж всички резултати ({results.total_items})
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
