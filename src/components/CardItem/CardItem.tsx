import React, {useState} from "react";
import "./CardItem.css";

import items from './data';

const CardItem = ({ items }: { items: Array<{ id: any; title: any; category: any; price: any; img:any; desc: any }> }) => {
    return (
        <div className="section-center">
            {items.map((item) => (
                <article key={item.id} className="menu-item">
                    <img src={item.img} alt={item.title} className="photo" />
                    <div className="item-info">
                        <header>
                            <h4>{item.title}</h4>
                            <h4 className="price">N{item.price}</h4>
                        </header>
                        <p className="item-text">{item.desc}</p>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default CardItem;
