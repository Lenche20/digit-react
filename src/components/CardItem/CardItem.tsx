import React from "react";
import "./CardItem.css";

// import FoodPopUp from "../FoodPopUp/FoodPopUp";
// import Modal from 'react-modal';


const CardItem = ({items}: {
    items: Array<{ id: any; title: any; category: any; price: any; img: any; desc: any }>
}) => {
    const addToOrder = (item: any) => {

    };

    return (
        <div className="section-center">
            {items.map((item) => (
                <article key={item.id} className="menu-item">
                    <figure>
                        <img src={item.img} alt={item.title}/>
                        <figcaption>{item.title}
                            <p className="itemdesc">{item.desc}</p>
                            <span className="spanbuttonprice">
                                <button className="button" onClick={() => addToOrder(item)}>
                                Add to order
                            </button>
                                <p className="itemprice">
                                    {item.price}$
                                </p>
                            </span>
                        </figcaption>
                    </figure>
                </article>
            ))}
        </div>
    );
};

export default CardItem;
