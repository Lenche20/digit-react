import React, {useState, useEffect} from 'react';
import {useOrderContext} from './OrderContext';
import "./Order.css";
import {Link, useNavigate} from "react-router-dom";

const Order = () => {
    // @ts-ignore
    const {selectedItems, addToOrder, removeFromOrder} = useOrderContext();
    const [totalAmount, setTotalAmount] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        // Calculate the total amount from selected items
        const newTotalAmount = selectedItems.reduce((acc: any, item: any) => {
            return acc + item.price * item.quantity;
        }, 0);

        setTotalAmount(newTotalAmount);
    }, [selectedItems]);

    const goToFormPage = () => {
        navigate('.././form', {
            state: { totalAmount },
        });
    };

    return (
        <main className="order-main ">
            <section className="order section">

                <div className="title">
                    <h2>Your Order</h2>
                    <div className="order-underline"></div>
                </div>
                <Link to={'.././menu'}>
                    <button className="btn-menu">Menu</button>
                </Link>
                <button className="btn-form" onClick={goToFormPage}>
                    Continue to payment
                </button>
                <ul className="items-list">
                    {selectedItems.map((item: any) => (
                        <li key={item.id}>

                            <span
                                className="item-title"> {item.title} - {item.price ? `$${item.price.toFixed(2)}` : 'Price not available'} - Quantity: {item.quantity}</span>
                            <div className="part">
                                <button className="btn-remove" onClick={() => {
                                    removeFromOrder(item.id);
                                }}>remove
                                </button>
                                <span> quantity: {item.quantity}</span>
                                <button className="btn-add" onClick={() => {
                                    addToOrder(item);
                                }}>add
                                </button>
                            </div>
                            <hr/>
                        </li>
                    ))}
                </ul>
                <div className="totalOrder">Total: ${totalAmount.toFixed(2)}</div>
            </section>
        </main>
    );
};

export default Order;