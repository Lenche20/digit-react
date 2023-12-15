import React, { createContext, useContext, useState } from 'react';


// @ts-ignore
const OrderContext = createContext();

export const useOrderContext = () => {
    return useContext(OrderContext);
};

// @ts-ignore
export const OrderProvider = ({ children }) => {
    const [selectedItems, setSelectedItems] = useState([]);

    const addToOrder = (item:any) => {
        // @ts-ignore
        const existingItemIndex = selectedItems.findIndex((selectedItem) => selectedItem.id === item.id);

        if (existingItemIndex !== -1) {
            const updatedItems = [...selectedItems];
            // @ts-ignore
            updatedItems[existingItemIndex] = {
                // @ts-ignore
                ...updatedItems[existingItemIndex],
                // @ts-ignore
                quantity: updatedItems[existingItemIndex].quantity + 1,
            };
            // @ts-ignore
            setSelectedItems(updatedItems);
        } else {
            // @ts-ignore
            setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
        }
    };
    const removeFromOrder = (itemId:any, quantityToRemove:any) => {
        const updatedItems = selectedItems.map((selectedItem) =>
            // @ts-ignore
            selectedItem.id === itemId
                // @ts-ignore
                ? { ...selectedItem, quantity: selectedItem.quantity - quantityToRemove }
                : selectedItem
        );
        // @ts-ignore
        setSelectedItems(updatedItems.filter((item) => item.quantity > 0));
    };

    return (
        <OrderContext.Provider
            value={{ selectedItems, addToOrder, removeFromOrder }}
        >
            {children}
        </OrderContext.Provider>
    );
};