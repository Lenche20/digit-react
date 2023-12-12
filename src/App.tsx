import React, { useState } from 'react';
import Menu from './components/Menu/Menu';
import Categories from './components/Menu/Categories';
import items from './components/CardItem/data';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';

// const allCategories = ['all', ...new Set(items.map((item) => item.category))];

const App: React.FC = () => {
    const [menuItems, setMenuItems] = useState(items);
    // const [categories, setCategories] = useState(allCategories);

    const filterItems = (category: string) => {
        if (category === 'all') {
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    };

    return (
        <div>
            <Routes>
                <Route path="/Menu" element={<Header />} />
                {/* Add other routes here */}
            </Routes>

            <main>
                <section className="menu section">
                    <div className="title">
                        <h2>our menu</h2>
                        <div className="underline"></div>
                    </div>
                    {/*<Categories categories={categories} filterItems={filterItems} />*/}
                    {/*<Menu />*/}
                </section>
            </main>
        </div>
    );
};

export default App;
