import React from "react";
import "./OrderItem.css";

const OrderItem = ({ order_items }: { order_items: Array<{ id: any; title: any; category: any; price: any;quantity:any; img:any; desc: any }> }) => {
    return (
        <div className="order-center">
            {order_items.map((order_item) => (
                <article key={order_item.id} className="order-item">
                    <div className="order-item-info">
                        <div className="key-info">
                            <h4 >{order_item.title}</h4>
                            <h4 className="price">{order_item.price}$</h4>
                        </div>
                        <p className="order-item-desc">{order_item.desc}</p>
                        <span className="quantity-centar">
                              <button className="remove-btn">
                                  Remove
                              </button>
                        <span className="quantity">quantity: {order_item.quantity}</span>
                        <button className="add-btn">
                            Add
                        </button>
                        </span>
                        <hr/>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default OrderItem;
