import React, { useState } from 'react';

import Home from './components/Home/Home';
import Order from './components/Order/Order';
import Form from './components/Form/Form';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import Error from "./components/Error/Error";
import "./index.css"
import AboutUs from "./components/AboutUs/AboutUs";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/order" element={<Order />} />
                <Route path="/form" element={<Form />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/*" element={<Error/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;
