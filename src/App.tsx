import React, { useState } from 'react';

// @ts-ignore
import Home from './components/Home/Home';
// @ts-ignore
// import Ratings from './components/Ratings/Ratings';

import Menu from './components/Menu/Menu';
import Categories from './components/Menu/Categories';
import items from './components/CardItem/data';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Footer from "./components/Footerlence/Footer";

import Error from "./components/Error/Error";
import "./index.css"

// const allCategories = ['all', ...new Set(items.map((item) => item.category))];

const App: React.FC = () => {
    // const [menuItems, setMenuItems] = useState(items);
    // // const [categories, setCategories] = useState(allCategories);
    //
    // const filterItems = (category: string) => {
    //     if (category === 'all') {
    //         setMenuItems(items);
    //         return;
    //     }
    //     const newItems = items.filter((item) => item.category === category);
    //     setMenuItems(newItems);
    // };

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/Error" element={<Error/>} />
                {/*<Route path="/Ratings" element={<Ratings />} />*/}

            </Routes>
            <Footer/>
        </div>
    );
};

export default App;
