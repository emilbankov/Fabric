import { useEffect, useContext } from "react";
import $ from "jquery";
import { CartContext } from "../../contexts/CartProvider";
import { Link, useLocation } from "react-router-dom";
import { gender } from "../../lib/dictionary";

export default function Cart() {
    const location = useLocation();
    const { cart, removeFromCart } = useContext(CartContext);

    useEffect(() => {
        $("#cart .dropdown-toggle").click(function (e) {
            e.preventDefault();
            $(this).toggleClass("active");
            $(".cart-menu").slideToggle(800);
        });

        return () => {
            $("#cart .dropdown-toggle").off("click");
        };
    }, []);

    useEffect(() => {
        $(".cart-menu").hide();
        $("#cart .dropdown-toggle").removeClass("active");
    }, [location.pathname, location.search]);

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="col-sm-3 header_cart">
            <div id="cart" className="btn-group btn-block">
                <button type="button" className="btn btn-inverse btn-block btn-lg dropdown-toggle">
                    <div className="cart_detail">
                        <div className="cart_image" />
                        <span id="cart-total">
                            <span className="item-count">{cart.reduce((total, item) => total + item.quantity, 0)}</span>
                            <span className="price"> ${total.toFixed(2)} </span>
                            <span className="mycart">My cart</span>
                        </span>
                    </div>
                </button>

                <ul className="dropdown-menu pull-right cart-menu">
                    {cart.length > 0 ? (
                        <>
                            <li>
                                <table className="table table-striped">
                                    <tbody>
                                        {cart.map((item, index) => (
                                            <tr key={`${item.id}-${item.size}-${item.gender}-${item.type}-${index}`}>
                                                <td className="text-center">
                                                    <Link to={`/clothing/details/${item.id}`}>
                                                        <img
                                                            src={`https://res.cloudinary.com/dfttdd1vq/image/upload/f_webp,q_auto/w_55,h_68${item.image}`}
                                                            alt={item.name}
                                                            className="img-thumbnail"
                                                            loading="lazy"
                                                        />
                                                    </Link>
                                                </td>
                                                <td className="text-left">
                                                    <Link to={`/clothing/details/${item.id}`}>{item.name}</Link>
                                                    <br />
                                                    {item.model.length === 4 ? (
                                                        <><small>{item.size.slice(0, 3)}</small> | <small>{gender[item.gender]}</small> | <small>{item.type.slice(0, 28)}</small></>
                                                    ) : (
                                                        <><small>{item.size.slice(0, 3)}</small> | <small>{gender[item.gender]}</small></>
                                                    )}

                                                </td>
                                                <td className="text-center">x{item.quantity}</td>
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
                            </li>

                            <li>
                                <div className="cart-table">
                                    <table className="table table-bordered table-price">
                                        <tbody>
                                            <tr>
                                                <td className="text-center"><strong>Общо: {total.toFixed(2)} лв.</strong></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className="text-right button-container">
                                        <Link to={`/view-cart`}><strong> Виж количка</strong></Link>
                                        &nbsp;&nbsp;&nbsp;
                                        <Link to="/checkout"><strong> Поръчай</strong></Link>
                                    </p>
                                </div>
                            </li>
                        </>
                    ) : (
                        <li><p className="text-center">Количката ви е празна!</p></li>
                    )}
                </ul>
            </div>
        </div>
    );
}
