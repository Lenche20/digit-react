import React from 'react';
import { useOrderContext } from '../Order/OrderContext';
import './CardItem.css';

// @ts-ignore
const CardItem = ({ items }) => {
    // @ts-ignore
    const { addToOrder } = useOrderContext();

    return (
        <div className="section-center">
            {items.map((item:any) => (
                <article key={item.id} className="menu-item">
                    <figure>
                        <img src={item.img} alt={item.title} />
                        <figcaption>
                            {item.title}
                            <p className="itemdesc">{item.desc}</p>
                            <span className="spanbuttonprice">
                <button
                    className="button"
                    onClick={() => {
                        addToOrder(item);
                        alert(`${item.title} successfully added to order!`);
                    }}
                >
                  Add to order
                </button>
                <p className="itemprice">{item.price}$</p>
              </span>
                        </figcaption>
                    </figure>
                </article>
            ))}
        </div>
    );
};

export default CardItem;