import React, { useEffect, useState } from 'react';
import './Form.css';
import { Link, useLocation } from "react-router-dom";

type OrderDetails = {
    deliveryOption: 'delivery' | 'pickup';
    paymentOption: 'online' | 'card' | 'cash';
    tipPercentage: number;
    subtotal: number;
    total: number;
    address: string;
    cardName: string;
    cardNumber: string;
    validThru: string;
    cvv: string;
};

const Form = () => {
    const [, setTipAmount] = useState(0);
    const location = useLocation();
    const totalAmountFromOrder = location.state?.totalAmount || 0;
    const [orderDetails, setOrderDetails] = useState<OrderDetails>({
        deliveryOption: 'delivery',
        paymentOption: 'online',
        tipPercentage: 0,
        subtotal: 0,
        total: 0,
        address: '',
        cardName: '',
        cardNumber: '',
        validThru: '',
        cvv: '',
    });

    useEffect(() => {
        const newSubtotal = totalAmountFromOrder;
        const newTotal = calculateTotal(newSubtotal, orderDetails.tipPercentage, orderDetails.deliveryOption);
        setOrderDetails(prevDetails => ({
            ...prevDetails,
            subtotal: newSubtotal,
            total: newTotal,
        }));
    }, [orderDetails.tipPercentage, orderDetails.deliveryOption, totalAmountFromOrder]);

    const handleDeliveryOptionChange = (option: 'delivery' | 'pickup') => {
        setOrderDetails(prevDetails => ({
            ...prevDetails,
            deliveryOption: option,
        }));
    };

    const handlePaymentOptionChange = (option: 'online' | 'card' | 'cash') => {
        setOrderDetails(prevDetails => ({
            ...prevDetails,
            paymentOption: option,
        }));
    };

    const handleTipPercentageChange = (percentage: number) => {
        const tip = totalAmountFromOrder * (percentage / 100);
        setOrderDetails(prevDetails => ({
            ...prevDetails,
            tipPercentage: percentage,
        }));
        setTipAmount(tip);
    };

    const calculateTotal = (
        subtotal: number,
        tipPercentage: number,
        deliveryOption: 'delivery' | 'pickup'
    ): number => {
        const deliveryCharge = deliveryOption === 'delivery' ? 3.00 : 0;
        const tip = subtotal * (tipPercentage / 100);
        return subtotal + tip + deliveryCharge;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof OrderDetails) => {
        setOrderDetails(prevDetails => ({
            ...prevDetails,
            [field]: e.target.value,
        }));
    };

    const resetOrderDetails = () => {
        setOrderDetails({
            deliveryOption: 'delivery',
            paymentOption: 'online',
            tipPercentage: 0,
            subtotal: 0,
            total: 0,
            address: '',
            cardName: '',
            cardNumber: '',
            validThru: '',
            cvv: '',
        });
        setTipAmount(0);
    };

    const handleFinishOrder = () => {
        if (orderDetails.deliveryOption === 'delivery' && !orderDetails.address.trim()) {
            alert('Please enter a valid address.');
            return;
        }

        if (orderDetails.paymentOption === 'card') {
            if (!orderDetails.cardName.trim() || !orderDetails.cardNumber.trim() || !orderDetails.validThru.trim() || !orderDetails.cvv.trim()) {
                alert('Please fill in all the card details.');
                return;
            }
            const cardNumberRegex = /^[0-9]{16}$/;
            if (!cardNumberRegex.test(orderDetails.cardNumber)) {
                alert('Please enter a valid 16-digit card number.');
                return;
            }

            const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
            if (!expiryRegex.test(orderDetails.validThru)) {
                alert('Please enter a valid expiry date in MM/YY format.');
                return;
            }

            const cvvRegex = /^[0-9]{3}$/;
            if (!cvvRegex.test(orderDetails.cvv)) {
                alert('Please enter a valid 3-digit CVV.');
                return;
            }
        }

        resetOrderDetails();
        //resetOrder();

        alert('Order complete!');
    };

    return (
        <div className="form-container">
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

            {orderDetails.deliveryOption === 'delivery' && (
                <div className="section">
                    <input
                        type="text"
                        placeholder="Address"
                        value={orderDetails.address}
                        onChange={(e) => handleInputChange(e, 'address')}
                    />
                </div>
            )}

            <div className="section">
                <div className="section-header">Payment Options</div>
                <div className="radio-group">
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

            {orderDetails.paymentOption === 'card' && (
                <div className="section">
                    <input
                        type="text"
                        placeholder="Cardholder Name"
                        value={orderDetails.cardName}
                        onChange={(e) => handleInputChange(e, 'cardName')}
                    />
                    <input
                        type="text"
                        placeholder="Card Number"
                        value={orderDetails.cardNumber}
                        onChange={(e) => handleInputChange(e, 'cardNumber')}
                    />
                    <input
                        type="text"
                        placeholder="Valid Thru MM/YY"
                        value={orderDetails.validThru}
                        onChange={(e) => handleInputChange(e, 'validThru')}
                    />
                    <input
                        type="text"
                        placeholder="CVV"
                        value={orderDetails.cvv}
                        onChange={(e) => handleInputChange(e, 'cvv')}
                    />
                </div>
            )}

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
                    <div>${totalAmountFromOrder.toFixed(2)}</div>
                </div>
                <div className="summary-item">
                    <div>Tip</div>
                    <div>${((totalAmountFromOrder * orderDetails.tipPercentage)/100).toFixed(2)}</div>
                </div>
                <div className="summary-item">
                    <div>Total</div>
                    <div>${(totalAmountFromOrder+((totalAmountFromOrder * orderDetails.tipPercentage)/100)).toFixed(2)}</div>
                </div>
                <button className="proceed-button" onClick={handleFinishOrder}>Finish ordering</button>
                <Link to="/order">
                    <button className="proceed-button">Back to ordering</button>
                </Link>
            </div>
        </div>
    );
};

export default Form;
