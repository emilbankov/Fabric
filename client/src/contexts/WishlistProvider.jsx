import { createContext, useContext, useState, useEffect } from "react";
import { getWishlist, addToWishlist, removeFromWishlist } from "../services/authService";
import AuthContext from "./AuthProvider";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);
    const [wishlist, setWishlist] = useState([]);
    const [wishlistCount, setWishlistCount] = useState(0);

    const fetchWishlist = async () => {
        if (isAuthenticated) {
            try {
                const wishlist = await getWishlist();
                setWishlist(wishlist);
                setWishlistCount(wishlist.length);
            } catch (error) {
                console.error("Failed to fetch wishlist:", error);
            }
        } else {
            setWishlist([]);
            setWishlistCount(0);
        }
    };

    const handleAddToWishlist = async (id, onSuccess, onError, onAlreadyInWishlist, onAuthenticated) => {
        if (!isAuthenticated) {
            onAuthenticated?.();
            return;
        }

        if (wishlist.some(item => item.id === id)) {
            onAlreadyInWishlist?.();
            return;
        }

        try {
            await addToWishlist(id);
            await fetchWishlist();
            onSuccess?.();
        } catch (error) {
            console.error("Failed to add to wishlist:", error);
            onError?.();
        }
    };

    const handleRemoveFromWishlist = async (id) => {
        if (isAuthenticated) {
            try {
                await removeFromWishlist(id);
                await fetchWishlist();
            } catch (error) {
                console.error("Failed to remove from wishlist:", error);
            }
        }
    };

    useEffect(() => {
        fetchWishlist();
    }, [isAuthenticated]);

    return (
        <WishlistContext.Provider value={{ 
            wishlist, 
            wishlistCount, 
            handleAddToWishlist, 
            handleRemoveFromWishlist 
        }}>
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => useContext(WishlistContext); 