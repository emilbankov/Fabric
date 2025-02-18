import { createContext, useState } from "react";
import { login, register } from '../services/authService';
import * as clothesService from "../services/clothesService"
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(() => {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');
        const roles = localStorage.getItem('roles') ? JSON.parse(localStorage.getItem('roles')) : [];

        if (accessToken && refreshToken) {
            return {
                accessToken,
                refreshToken,
                roles
            };
        }

        return {};
    });

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
            
            navigate("/catalog?sort=new&size=20");
        } catch (error) {
            console.error(error);
        }
    };

    const loginSubmitHandler = async (values) => {
        try {
            const result = await login(values.email, values.password);
            console.log(result);

            setAuth(result);
            localStorage.setItem('accessToken', result.accessToken);
            localStorage.setItem('refreshToken', result.refreshToken);
            localStorage.setItem('roles', JSON.stringify(result.roles || []));
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    const registerSubmitHandler = async (values) => {
        try {
            if (values.password === values.confirmPassword) {
                const result = await register(values.firstName, values.lastName, values.email, values.phoneNumber, values.address, values.password);
                console.log(result);
                setAuth(result);
                localStorage.setItem('accessToken', result.accessToken);
                localStorage.setItem('refreshToken', result.refreshToken);
                localStorage.setItem('roles', JSON.stringify(result.roles || []));
                navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('roles');
        navigate("/");
    };

    return (
        <AuthContext.Provider value={{ addClothHandler, loginSubmitHandler, registerSubmitHandler, logoutHandler, email: auth.email, isAuthenticated: !!auth.accessToken, isAdmin: auth?.roles?.includes("ADMIN") || false }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;