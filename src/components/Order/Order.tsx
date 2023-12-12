import React, {useState} from 'react'
import "./Order.css"

import OrderItem from '../OrderItem/OrderItem';
import Categories from './Categories';
import order_items from "../OrderItem/data";

type MenuProps = {
    order_items: {
        title: string
        description: string
    }[]
}

// @ts-ignore
// const Menu = ({ items }: MenuProps) =>{
//
//    // return <OrderItem/>
//    //
//    //  return {items.map(e => <OrderItem title={e.title} description={e.description} />)}
//
// }


const allCategories = ['all', ...new Set(order_items.map((order_item) => order_item.category))];

const Order = () => {
    // const menuItemsData = [
    //    {
    //        id: 1,
    //        title: "Item 1",
    //        category: 'dinner',
    //        price: 10.99,
    //        img: "item1.jpg",
    //        desc: "Description for item 1"
    //    },
    //       ];

    const [orderItems, setOrderItems] = useState(order_items)
    const [categories, setCategories] = useState(allCategories)

    // const filterItems = (category: string) => {
    //     if (category === 'all') {
    //         setMenuItems(items)
    //         return
    //     }
    //     const newItems = items.filter((item) => item.category === category)
    //     setMenuItems(newItems)
    // }
    // const categories=[];
    return (
        <>

            <main>
                <section className="menu section">
                    <div className="title">
                        <h2>Your order</h2>
                        <div className="underline"></div>
                    </div>
                    {/*<Categories categories={categories} filterItems={filterItems} />*/}
                    <OrderItem  order_items={orderItems}/>

                </section>
            </main>

        </>
    );
};

export default Order;
