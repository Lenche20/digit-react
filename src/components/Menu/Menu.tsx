import React, {useState} from 'react'
import "./Menu.css"

import CardItem from '../CardItem/CardItem';
import Categories from './Categories';
import items from "../CardItem/data";

type MenuProps = {
    items: {
    title: string
        description: string
    }[]
}

// @ts-ignore
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

const Menu = () => {


     const [menuItems, setMenuItems] = useState(items)
    const [categories, setCategories] = useState(allCategories)

    const filterItems = (category: string) => {
        if (category === 'all') {
            setMenuItems(items)
            return
        }
        const newItems = items.filter((item) => item.category === category)
        setMenuItems(newItems)
    }
    return (
        <>

            <main>
                <section className="menu section">
                    <div className="title">
                        <h2>our menu</h2>
                        <div className="underline"></div>
                    </div>
                    <Categories categories={categories} filterItems={filterItems} />
                    <CardItem  items={menuItems}/>

                </section>
            </main>

        </>
    );
};

export default Menu;
