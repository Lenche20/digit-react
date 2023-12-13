import React, { useState } from 'react';

// @ts-ignore
import Home from './components/Home/Home';

import Order from './components/Order/Order';

import Payment from './components/Payment/Payment';
// @ts-ignore
// import Reviews from './components/Reviews/Reviews';

import Menu from './components/Menu/Menu';
import Categories from './components/Menu/Categories';
import items from './components/CardItem/data';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Footer from "./components/Footerlence/Footer";

import Error from "./components/Error/Error";
import "./index.css"
import FoodPopUp from "./components/FoodPopUp/FoodPopUp";

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

    const [menuItems, setMenuItems] = useState(items)
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />

                <Route path="/order" element={<Order />} />
                <Route path="/payment" element={<Payment/>}/>
                {/*<Route path="/menu/" element={ <OrderItem  items={menuItems}/>}/>*/}
                <Route path="/*" element={<Error/>} />
                {/*<Route path="/Reviews" element={<Reviews />} />*/}

            </Routes>
            <Footer/>
        </div>
    );
};

export default App;
