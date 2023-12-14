import React from 'react';
import { useOrderContext } from './OrderContext';

const OrderPage = () => {
    // @ts-ignore
    const { selectedItems } = useOrderContext();

    return (
        <div>
            <h2>Your Order</h2>
            <ul>
                {selectedItems.map((item:any) => (
                    <li key={item.id}>
                        {item.title} - ${item.price.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderPage;