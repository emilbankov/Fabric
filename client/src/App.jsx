import { Routes, Route, useLocation } from 'react-router-dom';

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Contact from './components/Contact/Contact';
import Login from "./components/Login/Login";
import Register from './components/Register/Register';
import Footer from "./components/Footer/Footer";
import Catalog from './components/Catalog/Catalog';

function App() {


    return (
        <>
            <Header />
            
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
