import React, { createContext, useContext, useState } from 'react';

// @ts-ignore
const OrderContext = createContext();

export const useOrderContext = () => {
    return useContext(OrderContext);
};

// @ts-ignore
export const OrderProvider = ({ children }) => {
    const [selectedItems, setSelectedItems] = useState([]);

    const addToOrder = (item: any) => {
        // @ts-ignore
        setSelectedItems([...selectedItems, item]);
    };

    const removeFromOrder = (itemId: any) => {
        // @ts-ignore
        const updatedItems = selectedItems.filter((item) => item.id !== itemId);
        setSelectedItems(updatedItems);
    };

    const clearOrder = () => {
        setSelectedItems([]);
    };

    return (
        <OrderContext.Provider
            value={{ selectedItems, addToOrder, removeFromOrder, clearOrder }}
        >
            {children}
        </OrderContext.Provider>
    );
};