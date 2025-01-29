import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

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
    const [auth, setAuth] = useState({

    });

    const loginSubmitHandler = (values) => {
        console.log(values);
    };

    return (
        <>
            <Header />
            
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/about' element={<About />} />
                <Route path='/blogs' element={<Blogs />} />
                <Route path='/account' element={<Account />} />
                <Route path='/login' element={<Login loginSubmitHandler={loginSubmitHandler} />} />
                <Route path='/register' element={<Register />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
