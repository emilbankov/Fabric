import { createContext, useState, useEffect, useContext } from "react";
import { login, register, profile } from '../services/authService';
import * as clothesService from "../services/clothesService"
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartProvider";

const AuthContext = createContext();

AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const { clearCart } = useContext(CartContext);
    const [auth, setAuth] = useState(() => {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');
        const roles = localStorage.getItem('roles') ? JSON.parse(localStorage.getItem('roles')) : [];
        const userProfile = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : null;

        if (accessToken && refreshToken) {
            return {
                accessToken,
                refreshToken,
                roles,
                userProfile
            };
        }

        return {};
    });
    const [authError, setAuthError] = useState(null);

    const updateUserProfile = (profileData) => {
        setAuth(state => ({
            ...state,
            userProfile: profileData
        }));
        localStorage.setItem('userProfile', JSON.stringify(profileData));
    };

    useEffect(() => {
        if (auth.accessToken && !auth.userProfile) {
            profile()
                .then(profileData => {
                    updateUserProfile(profileData);
                })
                .catch(error => console.error('Failed to fetch profile:', error));
        }
    }, [auth.accessToken]);

    const addClothHandler = async (values) => {
        try {
            const payload = { ...values };

            if (payload.type === "KIT") {
                delete payload.backImage;
            }

            await clothesService.create(
                payload.name,
                payload.description,
                payload.price,
                payload.type,
                payload.category,
                payload.model,
                payload.frontImage,
                payload.backImage
            );

            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    const loginSubmitHandler = async (values) => {
        setAuthError(null);
        try {
            const result = await login(values.email, values.password);

            localStorage.removeItem('userProfile');

            setAuth({
                ...result,
                userProfile: null
            });

            localStorage.setItem('accessToken', result.accessToken);
            localStorage.setItem('refreshToken', result.refreshToken);
            localStorage.setItem('roles', JSON.stringify(result.roles || []));

            const currentPath = window.location.pathname;
            if (currentPath === '/checkout') {
                return;
            }
            navigate("/");
        } catch (error) {
            if (error?.errors?.[0] === "Bad credentials") {
                setAuthError("Невалиден имейл или парола");
            } else {
                setAuthError("Възникна грешка при влизането");
            }
            throw error;
        }
    };

    const registerSubmitHandler = async (values) => {
        setAuthError(null);
        try {
            if (values.password === values.confirmPassword) {
                const result = await register(
                    values.firstName,
                    values.lastName,
                    values.email,
                    values.phoneNumber,
                    values.address,
                    values.region,
                    values.city,
                    values.password
                );

                setAuth(result);
                localStorage.setItem('accessToken', result.accessToken);
                localStorage.setItem('refreshToken', result.refreshToken);
                localStorage.setItem('roles', JSON.stringify(result.roles || []));
                navigate("/");
            }
        } catch (error) {
            setAuthError(error.errors?.[0].includes('Email') ? 'Акаунт с този имейл вече съществува' : 'Регистрацията не е успешна');
            throw error;
        }
    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('roles');
        localStorage.removeItem('userProfile');
        clearCart();
        navigate("/");
    };

    return (
        <AuthContext.Provider value={{
            addClothHandler,
            loginSubmitHandler,
            registerSubmitHandler,
            logoutHandler,
            email: auth.email,
            isAuthenticated: !!auth.accessToken,
            isAdmin: auth?.roles?.includes("ADMIN") || false,
            isModerator: auth?.roles?.includes("MODERATOR") || false,
            userProfile: auth.userProfile,
            authError,
            clearAuthError: () => setAuthError(null),
            updateUserProfile
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;