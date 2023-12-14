import React from 'react';
import { useOrderContext } from './OrderContext';
import"./Order.css";
import {Link} from "react-router-dom";

const Order = () => {
    // @ts-ignore
    const { selectedItems, addToOrder, removeFromOrder } = useOrderContext();

    return (
        <main className="order-main ">
            <section className="order section">

                <div className="title">
            <h2>Your Order</h2>
                    <div className="order-underline"></div>
                </div>
                <button className="btn-menu"><Link to={'.././menu'}>Menu </Link></button>
                <button className="btn-form"><Link to={'.././form'}>Continue to payment</Link></button>
            <ul className="items-list">
                {selectedItems.map((item:any) => (
                   <li key={item.id}>

                 <span className="item-title"> {item.title} - {item.price ? `$${item.price.toFixed(2)}` : 'Price not available'} - Quantity: {item.quantity}</span>
                           <div className="part">
                            <button className="btn-remove" onClick={() => {
                                removeFromOrder(item.id);
                            }}>remove</button>
                            <span> quantity: {item.quantity}</span>
                            <button className="btn-add" onClick={() => {
                                addToOrder(item);
                            }}>add</button>
                        </div>
                        <hr/>
                    </li>
                ))}
            </ul>
            </section>
        </main>
    );
};

export default Order;