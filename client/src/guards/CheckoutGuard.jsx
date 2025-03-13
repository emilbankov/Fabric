import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "../contexts/CartProvider";

export default function CheckoutGuard({ children }) {
    const { cart } = useContext(CartContext);

    // Redirect to the cart page if the cart is empty
    if (cart.length === 0) {
        return <Navigate to="/view-cart" />;
    }

    // Allow access to the Checkout page if the cart is not empty
    return children;
} 