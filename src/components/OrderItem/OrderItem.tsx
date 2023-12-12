import React, {useState} from "react";
import "./OrderItem.css";

import order_items from './data';

const OrderItem = ({ order_items }: { order_items: Array<{ id: any; title: any; category: any; price: any; img:any; desc: any }> }) => {
    return (
        <div className="section-center">
            {order_items.map((order_item) => (
                <article key={order_item.id} className="menu-item">
                    <img src={order_item.img} alt={order_item.title} className="photo" />
                    <div className="item-info">
                        <header>
                            <h4>{order_item.title}</h4>
                            <h4 className="price">N{order_item.price}</h4>
                        </header>
                        <p className="item-text">{order_item.desc}</p>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default OrderItem;
