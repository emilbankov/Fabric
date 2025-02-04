import { useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import { login, register } from './services/authService';
import AuthContext from './contexts/authContext';

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Catalog from './components/Catalog/Catalog';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Account from './components/Account/Account';
import Login from "./components/Login/Login";
import Register from './components/Register/Register';
import Footer from "./components/Footer/Footer";

function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});

    const loginSubmitHandler = async (values) => {
        try {
            const result = await login(values.email, values.password);
            console.log(result);
            
            setAuth(result);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    const registerSubmitHandler = async (values) => {
        try {
            if (values.password === values.confirmPassword) {
                const result = await register(values.firstName, values.lastName, values.email, values.telephone, values.address, values.password);
                console.log(result);
                setAuth(result);
                navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <AuthContext.Provider value={{ loginSubmitHandler, registerSubmitHandler, email: auth.email, isAuthenticated: !!auth.email }}>
                <Header />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/catalog' element={<Catalog />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/blogs' element={<Blogs />} />
                    <Route path='/account' element={<Account />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>

                <Footer />
            </AuthContext.Provider>
        </>
    );
}

export default App;
