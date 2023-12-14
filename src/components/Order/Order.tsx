import React from 'react';
import { useOrderContext } from './OrderContext';
import"./Order.css";
import Categories from "../Menu/Categories";
import CardItem from "../CardItem/CardItem";
import {Link} from "react-router-dom";

const OrderPage = () => {
    // @ts-ignore
    const { selectedItems } = useOrderContext();

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
                 <span className="item-title"> {item.title} - ${item.price.toFixed(2)}</span>
                           <div className="part">
                            <button className="btn-remove">remove</button>
                            <span> quantity: 1</span>
                            <button className="btn-add">add</button>
                        </div>
                        <hr/>
                    </li>
                ))}
            </ul>
            </section>
        </main>
    );
};

export default OrderPage;