import React, {useState} from 'react'
import "./Order.css"

import OrderItem from '../OrderItem/OrderItem';
import order_items from "../OrderItem/data";

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
                    <button className="btn-form">From</button>
                        <div>
                        <a href={"/form"}>Form</a>
                    </div>
                    <span>
                    <OrderItem order_items={orderItems} />
</span>
                </section>
            </main>

        </>
    );
};

export default Order;
