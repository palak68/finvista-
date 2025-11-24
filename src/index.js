import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './landing page/home/HomePage';
import SupportPage from './landing page/support/Supportpage';
import PricingPage from './landing page/pricing/Pricingpage';
import AboutPage from './landing page/about/Aboutpage';
import ProductPage from './landing page/products/Productpage';
import Signup from './landing page/signup/Signup';
import Navbar from './landing page/Navbar';
import Footer from './landing page/Footer';
import NotFound from './landing page/not found';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Navbar />  
  <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/about' element={<AboutPage/>} />
    <Route path='/product' element={<ProductPage/>} />
    <Route path='/pricing' element={<PricingPage/>} />
    <Route path='/support' element={<SupportPage/>} />
    <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

