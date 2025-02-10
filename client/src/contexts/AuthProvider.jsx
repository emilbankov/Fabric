import { createContext, useState } from "react";
import { login, register } from '../services/authService';
import * as clothesService from "../services/clothesService"
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(() => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');

        return {};
    });

    const addClothHandler = async (values) => {
        try {
            const result = await clothesService.create(values.name, values.description, values.price, values.type, values.category, values.model, values.frontImage, values.backImage);
            navigate("/catalog");
        } catch (error) {
            console.log(error);
        }
    };

    const loginSubmitHandler = async (values) => {
        try {
            const result = await login(values.email, values.password);
            console.log(result);

            setAuth(result);
            localStorage.setItem('accessToken', result.accessToken);
            localStorage.setItem('refreshToken', result.refreshToken);
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
        navigate("/");
    };

    return (
        <AuthContext.Provider value={{ addClothHandler, loginSubmitHandler, registerSubmitHandler, logoutHandler, email: auth.email, isAuthenticated: !!auth.accessToken, isAdmin: auth?.roles?.includes("ADMIN") || false }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;