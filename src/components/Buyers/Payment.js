import React from 'react';
import { loadStripe } from '@stripe/stripe-js'
import { useLoaderData } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js'
import CheckOut from './CheckOut';



const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

console.log('stripePromise', stripePromise);


const Payment = () => {
    const payment = useLoaderData()
    return (
        <div>
            <h1>Pay ${payment.product_price} for {payment.product_name}</h1>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOut
                        payment={payment}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;