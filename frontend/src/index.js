import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Home';
import AdminPage from './pages/AdminPage';
import Contact from './pages/Contact';
//componentes
import Navba from './components/Navba';
import Footer from './components/Footer/Footer';
import generateHTML from './pages/recherche';
import Navbar from './Navbar';

import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import {  Product, Products, AboutPage, ContactPage, Cart, Login, Register, Checkout, PageNotFound,Cham,Coloc} from "./pages"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navba />
    
    <Provider store={store}>
        <Routes>
        <Route path='/AdminPage' element={<AdminPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Chambre' element={<Cham />} />
        <Route path='/Colocation' element={<Coloc />} />
       
        <Route path='/about' element={<AboutPage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path='/Navbar' element={<Navbar />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/product/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Provider>
  </BrowserRouter>
);