import React from 'react'
import "./Menu.css"

import CardItem from '../CardItem/CardItem';
//'/src/components/CardItem/CardItem';

type MenuProps = {
    items: {
    title: string
        description: string
    }[]
}

// @ts-ignore
// const Menu = ({ items }: MenuProps) =>{
//
//    // return <CardItem/>
//    //
//    //  return {items.map(e => <CardItem title={e.title} description={e.description} />)}
//
// }






const Menu = () => {
     const menuItems = [
        {
            id: 1,
            title: "Item 1",
            img: "item1.jpg",
            price: 10.99,
            desc: "Description for item 1"
        },

    ];
    return (
        <>

            <main>
                <section className="menu section">
                    <div className="title">
                        <h2>our menu</h2>
                        <div className="underline"></div>
                    </div>
                    {/*<Categories categories={categories} filterItems={filterItems} />*/}
                    <CardItem  items={menuItems}/>
                </section>
            </main>

        </>
    );
};

export default Menu;
