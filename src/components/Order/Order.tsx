import React, {useState} from 'react'
import "./Order.css"

import OrderItem from '../OrderItem/OrderItem';
import order_items from "../OrderItem/data";
import {Link} from "react-router-dom";

type OrderProps = {
    order_items: {
        title: string
        description: string
    }[]
}

const Order = () => {

    const [orderItems, setOrderItems] = useState(order_items)

    return (
        <>
            <main>
                <section className="order section">
                    <div className="title">
                        <h2>Your order</h2>
                        <div className="underline"></div>
                    </div>
                    <button className="btn-menu"><Link to="/menu">Browse menu</Link></button>
                    <button className="btn-form"><Link to="/form">Continue to payment</Link></button>

                    <OrderItem order_items={orderItems} />
                </section>
            </main>

        </>
    );
};

export default Order;
