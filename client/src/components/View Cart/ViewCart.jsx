import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartProvider";
import { Link, useLocation } from "react-router-dom";
import { gender } from "../../lib/dictionary";

export default function ViewCart() {
    const location = useLocation();
    const { cart, updateQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);

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
            <div className="checkout-cart   layout-2 left-col">
                <div className="content_headercms_bottom" />
                <div className="content-top-breadcum">
                    <div className="container">
                        <div className="row">
                            <div id="title-content"></div>
                        </div>
                    </div>
                </div>
                <div id="checkout-cart" className="container">
                    <ul className="breadcrumb">
                        <li><Link to="/"><i className="fa fa-home" /></Link></li>
                        <li><Link to="/view-cart">Количка</Link></li>
                    </ul>
                    <div className="row">
                        <aside id="column-left" className="col-sm-3 hidden-xs">
                            <div className="box">
                                <div className="box-heading">Account</div>
                                <div className="list-group">
                                    <a
                                        href="/index.php?route=account/login"
                                        className="list-group-item"
                                    >
                                        Login{" "}
                                    </a>{" "}
                                    <a
                                        href="/index.php?route=account/register"
                                        className="list-group-item"
                                    >
                                        Register
                                    </a>{" "}
                                    <a
                                        href="/index.php?route=account/forgotten"
                                        className="list-group-item"
                                    >
                                        Forgotten Password{" "}
                                    </a>
                                    <a
                                        href="/index.php?route=account/account "
                                        className="list-group-item"
                                    >
                                        My Account{" "}
                                    </a>
                                    <a
                                        href="/index.php?route=account/address"
                                        className="list-group-item"
                                    >
                                        Address Book
                                    </a>{" "}
                                    <a
                                        href="/index.php?route=account/wishlist "
                                        className="list-group-item"
                                    >
                                        Wish List{" "}
                                    </a>{" "}
                                    <a
                                        href="/index.php?route=account/order "
                                        className="list-group-item"
                                    >
                                        Order History{" "}
                                    </a>{" "}
                                    <a
                                        href="/index.php?route=account/download"
                                        className="list-group-item"
                                    >
                                        Downloads{" "}
                                    </a>
                                    <a
                                        href="/index.php?route=account/recurring"
                                        className="list-group-item"
                                    >
                                        Recurring payments{" "}
                                    </a>{" "}
                                    <a
                                        href="/index.php?route=account/reward "
                                        className="list-group-item"
                                    >
                                        Reward Points{" "}
                                    </a>{" "}
                                    <a
                                        href="/index.php?route=account/return"
                                        className="list-group-item"
                                    >
                                        Returns{" "}
                                    </a>{" "}
                                    <a
                                        href="/index.php?route=account/transaction"
                                        className="list-group-item"
                                    >
                                        Transactions{" "}
                                    </a>{" "}
                                    <a
                                        href="/index.php?route=account/newsletter"
                                        className="list-group-item"
                                    >
                                        Newsletter{" "}
                                    </a>
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
                            <span
                                className="latest_default_width"
                                style={{ display: "none", visibility: "hidden" }}
                            />
                        </aside>
                        <div id="content" className="col-sm-9">
                            <h1 className="page-title">Количка</h1>
                            <form action="" method="">
                                {cart && cart.map((item, index) => (
                                    <table key={`${item.id}-${item.size}-${item.type || "default"}`} className="table table-bordered shopping-cart responsive">
                                        <tbody>
                                            <tr>
                                                <td className="text-center">Име</td>
                                                <td className="text-center">
                                                    <Link to={`/clothing/details/${item.id}`}>
                                                        {item.name}
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">Снимка</td>
                                                <td className="text-center">
                                                    <Link to={`/clothing/details/${item.id}`}>
                                                        <img
                                                            src={`https://res.cloudinary.com/dfttdd1vq/image/upload/f_webp,q_auto/w_55,h_68${item.image}`}
                                                            alt={item.name}
                                                            title={item.name}
                                                            className="img-thumbnail"
                                                            loading="lazy"
                                                        />
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">Модел</td>
                                                <td className="text-center">
                                                    #{item.model}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">Размер</td>
                                                <td className="text-center">
                                                    {item.size.slice(0, 3)}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">Пол</td>
                                                <td className="text-center">
                                                    {gender[item.gender]}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">Тип</td>
                                                <td className="text-center">
                                                    {item?.type?.slice(0, 28) || "—"}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">Количество</td>
                                                <td className="text-center">
                                                    <div className="input-group btn-block" style={{ maxWidth: 200 }}>
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary responsive-buttons"
                                                            onClick={() => decreaseQuantity(item.id, item.size, item.gender, item.type)}
                                                        >
                                                            -
                                                        </button>
                                                        <input
                                                            type="text"
                                                            name={`quantity[${item.id}]`}
                                                            value={item.quantity}
                                                            size={1}
                                                            className="form-control text-center"
                                                            readOnly
                                                        />
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary responsive-buttons"
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">Общо</td>
                                                <td className="text-center">
                                                    {(item.price * item.quantity).toFixed(2)} лв.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center"></td>
                                                <td className="text-center">
                                                    <button
                                                        type="button"
                                                        className="btn btn-danger btn-xs"
                                                        onClick={() => removeFromCart(item.id, item.size, item.gender, item.type)}
                                                    >
                                                        <i className="fa fa-times" />
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                ))}
                            </form>
                            <form action="" method="">
                                <div className="table-responsive">
                                    <table className="table table-bordered shopping-cart">
                                        <thead>
                                            <tr>
                                                <td className="text-center">Име</td>
                                                <td className="text-center">Снимка</td>
                                                <td className="text-center">Модел</td>
                                                <td className="text-center">Размер</td>
                                                <td className="text-center">Пол</td>
                                                <td className="text-center">Тип</td>
                                                <td className="text-center">Количество</td>
                                                <td className="text-center">Общо</td>
                                                <td className="text-center"></td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart && cart.map((item, index) => (
                                                <tr key={`${item.id}-${item.size}-${item.type || "default"}`}>
                                                    <td className="text-center">
                                                        <Link to={`/clothing/details/${item.id}`}>
                                                            {item.name}
                                                        </Link>
                                                    </td>
                                                    <td className="text-center">
                                                        <Link to={`/clothing/details/${item.id}`}>
                                                            <img
                                                                src={`https://res.cloudinary.com/dfttdd1vq/image/upload/f_webp,q_auto/w_55,h_68${item.image}`}
                                                                alt={item.name}
                                                                title={item.name}
                                                                className="img-thumbnail"
                                                                loading="lazy"
                                                            />
                                                        </Link>
                                                    </td>
                                                    <td className="text-center">#{item.model}</td>
                                                    <td className="text-center">{item.size.slice(0, 3)}</td>
                                                    <td className="text-center">{gender[item.gender]}</td>
                                                    <td className="text-center">{item?.type?.slice(0, 28) || "—"}</td>
                                                    <td className="text-center">
                                                        <div className="input-group btn-block" style={{ maxWidth: 200 }}>
                                                            <button
                                                                type="button"
                                                                className="btn btn-primary"
                                                                onClick={() => decreaseQuantity(item.id, item.size, item.gender, item.type)}
                                                            >
                                                                -
                                                            </button>
                                                            <input
                                                                type="text"
                                                                name={`quantity[${item.id}]`}
                                                                value={item.quantity}
                                                                size={1}
                                                                className="form-control text-center"
                                                                readOnly
                                                            />
                                                            <button
                                                                type="button"
                                                                className="btn btn-primary"
                                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">{(item.price * item.quantity).toFixed(2)} лв.</td>
                                                    <td className="text-center">
                                                        <button
                                                            type="button"
                                                            className="btn btn-danger btn-xs"
                                                            onClick={() => removeFromCart(item.id, item.size, item.gender, item.type)}
                                                        >
                                                            <i className="fa fa-times" />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                            <div className="row">
                                <div className="col-sm-4 col-sm-offset-8">
                                    <table className="table table-bordered">
                                        <tbody>
                                            {/* <tr>
                                                <td className="text-right">
                                                    <strong>VAT (20%):</strong>
                                                </td>
                                                <td className="text-right total">$40.00</td>
                                            </tr> */}
                                            <tr>
                                                <td className="text-right">
                                                    <strong>Общо:</strong>
                                                </td>
                                                <td className="text-right total">
                                                    {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)} лв.
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="buttons clearfix">
                                <div className="pull-left">
                                    <Link to="/" className="btn btn-primary">Продължете пазаруване</Link>
                                </div>
                                <div className="pull-right">
                                    <Link to="/checkout" className="btn btn-primary">Поръчай</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};