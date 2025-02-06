import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthProvider';
import AuthGuard from './guards/AuthGuard';

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Catalog from './components/Catalog/Catalog';
import AddClothing from './components/Add Clothing/AddClothing';
import SearchResults from './components/Search Results/SearchResults';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Account from './components/Account/Account';
import Login from "./components/Login/Login";
import Register from './components/Register/Register';
import Logout from './components/Logout/Logout';
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <AuthProvider>
                <Header />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/catalog' element={<Catalog />} />
                    <Route path='/search-results' element={<SearchResults />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/blogs' element={<Blogs />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />

                    <Route element={<AuthGuard />}>
                        <Route path='/account' element={<Account />} />
                        <Route path='/add-clothing' element={<AddClothing />} />
                        <Route path='/logout' element={<Logout />} />
                    </Route>
                </Routes>

                <Footer />
            </AuthProvider>
        </>
    );
}

export default App;
