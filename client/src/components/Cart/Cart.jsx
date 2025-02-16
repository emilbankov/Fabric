import { useEffect, useContext } from "react";
import $ from "jquery";
import { CartContext } from "../../contexts/CartProvider";
import { Link } from "react-router-dom";

export default function Cart() {
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
    console.log(cart);

    // Calculate total price
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
                                        {cart.map((item) => (
                                            <tr key={item.id}>
                                                <td className="text-center">
                                                    <Link to={`/clothing/details/${item.id}`}>
                                                        <img
                                                            src={`https://res.cloudinary.com/dfttdd1vq/image/upload/w_55,h_68${item.images.find(image => image.side === 'front')?.path}`}
                                                            alt={item.name}
                                                            className="img-thumbnail"
                                                        />
                                                    </Link>
                                                </td>
                                                <td className="text-left">
                                                    <Link t={`/clothing/details/${item.id}`}>{item.name}</Link>
                                                </td>
                                                <td className="text-right">x{item.quantity}</td>
                                                <td className="text-right">{(item.price * item.quantity).toFixed(2)} лв.</td>
                                                <td className="text-center">
                                                    <button
                                                        type="button"
                                                        className="btn btn-danger btn-xs"
                                                        onClick={() => removeFromCart(item.id)}
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
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td className="text-right"><strong>Общо</strong></td>
                                                <td className="text-right">{total.toFixed(2)} лв.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className="text-right button-container">
                                        <a href="#"><strong> Виж количка</strong></a>
                                        &nbsp;&nbsp;&nbsp;
                                        <a href="#"><strong> Поръчай</strong></a>
                                    </p>
                                </div>
                            </li>
                        </>
                    ) : (
                        <li>
                            <p className="text-center">Your shopping bag is empty!</p>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}
