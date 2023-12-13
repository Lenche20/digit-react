import React, {useState} from "react";
import "./OrderItem.css";
import order_items from './data';

const OrderItem = ({ order_items }: { order_items: Array<{ id: any; title: any; category: any; price: any; img:any; desc: any }> }) => {
    return (
        <div className="order-center">
            {order_items.map((order_item) => (
                <article key={order_item.id} className="order-item">

                    <div className="order-item-info">
                        <div>
                            <h4>{order_item.title}</h4>
                            <h4 className="price">N{order_item.price}</h4>
                        </div>
                        <p className="order-item-text">{order_item.desc}</p>
<span className="btns"
>
                        <a href="#" className="customize"><span className="btn-text">
                            Customize item</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                            </svg>
                        </a></span>
<span>tekst</span>
                        <span className="btns">
                        <a href="#" className="read-more"><span className="btn-text">
                            Remove from the order</span>
                            <button className="icon">
                                <img  src="https://imgs.search.brave.com/w91jnEAnu2PNxqCH5cy4nUm4tpuX0BWQgMc1_1n3XSQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzI4LzkyLzkz/LzM2MF9GXzUyODky/OTM3N19LVHlNbG0w/Nm1ZeE9VNzRzTmJu/NVJ5Nm5LZmVQZkph/cy5qcGc" alt="Icon" />
                            </button>

                        </a></span>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default OrderItem;
