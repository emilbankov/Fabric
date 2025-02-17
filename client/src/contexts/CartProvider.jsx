import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(savedCart);
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product, selectedSize, gender, quantity, selectedType, price) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item.id === product.id && item.size === selectedSize && item.gender === gender && item.type === selectedType);

            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id && item.size === selectedSize && item.gender === gender && item.type === selectedType
                        ? { ...item, quantity: item.quantity + quantity, price }
                        : item
                );
            }

            return [...prevCart, { ...product, size: selectedSize, gender, quantity, type: selectedType, price }];
        });
    };

    const removeFromCart = (id, size, gender, type) => {
        setCart(prevCart =>
            prevCart.filter(item =>
                !(item.id === id && item.size === size && item.gender === gender && item.type === type)
            )
        );
    };

    const decreaseQuantity = (id, size, gender, type) => {
        setCart((prevCart) => {
            return prevCart.map(item =>
                item.id === id && item.size === size && item.gender === gender && item.type === type
                    ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
                    : item
            );
        });
    };

    const clearCart = () => setCart([]);

    const updateQuantity = (id, quantity) => {
        setCart((prevCart) => {
            return prevCart.map(item =>
                item.id === id ? { ...item, quantity } : item
            );
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, decreaseQuantity, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
}
