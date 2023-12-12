import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Categories from './components/Menu/Categories';
import items from './components/CardItem/data';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
    const [menuItems, setMenuItems] = useState(items);

    const filterItems = (category: string) => {
        if (category === 'all') {
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    };

    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    {/* Define your routes here */}
                    {/* Example: <Route path="/menu" element={<MenuComponent />} /> */}
                </Routes>

                <main>
                    {/* Uncomment or add your main content here */}
                    {/* <Categories categories={categories} filterItems={filterItems} />
                    <Menu items={menuItems} /> */}
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
