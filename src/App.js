import React from'react';
//rotas
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
//componentes
import Navbar from './components/Navba';
import Footer from './components/Footer/Footer';
//import generateHTML from './pages/recherche';

import ReactDOM from 'react-dom/client';
import './node_modules/font-awesome/css/font-awesome.min.css';
import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { HomePage, Product, Products, AboutPage, ContactPage, Cart, Login, Register, Checkout, PageNotFound } from "./pages"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/product/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;