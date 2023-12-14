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
                <Link to={'.././menu'}><button className="btn-menu">Menu</button> </Link>
                <Link to={'.././form'}><button className="btn-form">Continue to payment</button></Link>
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
                <div>Total:</div>
            </section>
        </main>
    );
};

export default Order;