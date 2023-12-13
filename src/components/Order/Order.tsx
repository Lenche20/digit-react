import React, {useState} from 'react'
import "./Order.css"

import OrderItem from '../OrderItem/OrderItem';
// import Categories from './Categories';
import order_items from "../OrderItem/data";
import Form from "../Form/Form";

type OrderProps = {
    order_items: {
        title: string
        description: string
    }[]
}

// @ts-ignore
// const Order = ({ items }: OrderProps) =>{
//
//    // return <OrderItem/>
//    //
//    //  return {items.map(e => <OrderItem title={e.title} description={e.description} />)}
//
// }


// const allCategories = ['all', ...new Set(order_items.map((order_item) => order_item.category))];

const Order = () => {
    // const orderItemsData = [
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
    // const [categories, setCategories] = useState(allCategories)

    // const filterItems = (category: string) => {
    //     if (category === 'all') {
    //         setOrderItems(items)
    //         return
    //     }
    //     const newItems = items.filter((item) => item.category === category)
    //     setOrderItems(newItems)
    // }
    // const categories=[];
    return (
        <>

            <main>
                <section className="order section">
                    <div className="title">
                        <h2>Your order</h2>
                        <div className="underline"></div>
                    </div>
                    <div>
                        <a href={"/form"}>forma</a>
                    </div>
                    <span>
                    {/*<Categories categories={categories} filterItems={filterItems} />*/}
                    <OrderItem order_items={orderItems} />
</span>
                </section>
            </main>

        </>
    );
};

export default Order;
