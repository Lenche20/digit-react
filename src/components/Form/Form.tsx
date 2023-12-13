import React, {useEffect, useState} from 'react';
import './Form.css';

type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

type OrderDetails = {
    cartItems: CartItem[];
    deliveryOption: 'delivery' | 'pickup';
    paymentOption: 'online' | 'card' | 'cash';
    tipPercentage: number;
    subtotal: number;
    taxRate: number;
    total: number;
};

const Form = () => {
    const [orderDetails, setOrderDetails] = useState<OrderDetails>({
        cartItems: [],
        deliveryOption: 'delivery',
        paymentOption: 'online',
        tipPercentage: 0,
        subtotal: 0,
        taxRate: 0.0875, // 8.75% tax
        total: 0,
    });

    // When any relevant value changes, recalculate the subtotal and total
    useEffect(() => {
        const newSubtotal = orderDetails.cartItems.reduce(
            (acc, item) => acc + item.price * item.quantity, 0
        );
        const newTotal = calculateTotal(newSubtotal, orderDetails.tipPercentage, orderDetails.taxRate, orderDetails.deliveryOption);
        setOrderDetails(prevDetails => ({
            ...prevDetails,
            subtotal: newSubtotal,
            total: newTotal,
        }));
    }, [orderDetails.cartItems, orderDetails.tipPercentage, orderDetails.taxRate, orderDetails.deliveryOption]);

    // Change delivery option handler
    const handleDeliveryOptionChange = (option: 'delivery' | 'pickup') => {
        setOrderDetails(prevDetails => ({
            ...prevDetails,
            deliveryOption: option,
        }));
    };

    // Change payment option handler
    const handlePaymentOptionChange = (option: 'online' | 'card' | 'cash') => {
        setOrderDetails(prevDetails => ({
            ...prevDetails,
            paymentOption: option,
        }));
    };

    // Change tip percentage handler
    const handleTipPercentageChange = (percentage: number) => {
        setOrderDetails(prevDetails => ({
            ...prevDetails,
            tipPercentage: percentage,
        }));
    };

    // Calculate the total cost
    const calculateTotal = (
        subtotal: number,
        tipPercentage: number,
        taxRate: number,
        deliveryOption: 'delivery' | 'pickup'
    ): number => {
        const deliveryCharge = deliveryOption === 'delivery' ? 3.00 : 0;
        const tax = subtotal * taxRate;
        const tip = subtotal * (tipPercentage / 100);
        return subtotal + tax + tip + deliveryCharge;
    };

    // Render cart items
    const renderCartItems = () => {
        return orderDetails.cartItems.map(item => (
            <div key={item.id} className="cart-item">
                <span>{item.name}</span>
                <div className="quantity-controls">
                    <button onClick={() => changeItemQuantity(item.id, false)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => changeItemQuantity(item.id, true)}>+</button>
                </div>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        ));
    };

    // Function to change item quantity
    const changeItemQuantity = (itemId: number, increment: boolean) => {
        const newCartItems = orderDetails.cartItems.map(item => {
            if (item.id === itemId) {
                return { ...item, quantity: increment ? item.quantity + 1 : Math.max(item.quantity - 1, 0) };
            }
            return item;
        }).filter(item => item.quantity > 0); // Remove items with 0 quantity

        setOrderDetails(prevDetails => ({
            ...prevDetails,
            cartItems: newCartItems,
        }));
    };

    return (
        <div className="form-container">
            <div className="section">
                <div className="section-header">Your Cart</div>
                <div className="cart-items">
                    {renderCartItems()}
                </div>
            </div>

            <div className="section">
                <div className="section-header">Delivery Options</div>
                <div className="radio-group">
                    <div
                        className={`radio-option ${orderDetails.deliveryOption === 'delivery' ? 'selected' : ''}`}
                        onClick={() => handleDeliveryOptionChange('delivery')}
                    >
                        Delivery
                    </div>
                    <div
                        className={`radio-option ${orderDetails.deliveryOption === 'pickup' ? 'selected' : ''}`}
                        onClick={() => handleDeliveryOptionChange('pickup')}
                    >
                        Pickup
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="section-header">Payment Options</div>
                <div className="radio-group">
                    <div
                        className={`radio-option ${orderDetails.paymentOption === 'online' ? 'selected' : ''}`}
                        onClick={() => handlePaymentOptionChange('online')}
                    >
                        Online Payment
                    </div>
                    <div
                        className={`radio-option ${orderDetails.paymentOption === 'card' ? 'selected' : ''}`}
                        onClick={() => handlePaymentOptionChange('card')}
                    >
                        Card
                    </div>
                    <div
                        className={`radio-option ${orderDetails.paymentOption === 'cash' ? 'selected' : ''}`}
                        onClick={() => handlePaymentOptionChange('cash')}
                    >
                        Cash
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="section-header">Tip</div>
                <div className="button-group">
                    {[0, 10, 15, 20].map((tip) => (
                        <button
                            key={tip}
                            className={`button ${orderDetails.tipPercentage === tip ? 'selected' : ''}`}
                            onClick={() => handleTipPercentageChange(tip)}
                        >
                            {tip}%
                        </button>
                    ))}
                </div>
            </div>

            <div className="order-summary">
                <div className="summary-item">
                    <div>Subtotal</div>
                    <div>${orderDetails.subtotal.toFixed(2)}</div>
                </div>
                <div className="summary-item">
                    <div>Tax</div>
                    <div>${(orderDetails.subtotal * orderDetails.taxRate).toFixed(2)}</div>
                </div>
                <div className="summary-item">
                    <div>Total</div>
                    <div>${orderDetails.total.toFixed(2)}</div>
                </div>
                <button className="proceed-button">Proceed to Payment</button>
            </div>
        </div>
    );
};

export default Form;