import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const payment = useLoaderData()
    console.log('payment', payment);
    return (
        <div>
            <h1>Pay ${payment.product_price} for {payment.product_name}</h1>
        </div>
    );
};

export default Payment;