import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import Spinner from '../Spinner/Spinner';

const CheckOut = ({ payment }) => {
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");

    const stripe = useStripe();
    const elements = useElements();

    const { product_price, user_name, user_email, _id, product_id } = payment;


    useEffect(() => {
        fetch('https://drift-server.vercel.app/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: localStorage.getItem('secret-token')
            },
            body: JSON.stringify({ price: product_price })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))
    }, [product_price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log(error);
            setCardError(error.message)
        }
        if (!error) {
            setCardError('');
        }

        setSuccess('');
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user_name,
                        email: user_email
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message)
            return;
        }
        if (paymentIntent.status === 'succeeded') {


            const payment = {
                price: product_price,
                transactionId: paymentIntent.id,
                user_email,
                user_name,
                orderId: _id,
                product_id
            }

            fetch('https://drift-server.vercel.app/payment', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        setSuccess('Congrats! Your payment is successful');
                        setTransactionId(paymentIntent.id);
                    }
                })



            fetch(`https://drift-server.vercel.app/products/${product_id}`, {
                method: 'PUT',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        console.log(data);
                    }
                })



        }
        setProcessing(false)
        console.log("paymentIntent", paymentIntent);
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='custom-button' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>

            <p>{cardError}</p>

            {
                processing ? <Spinner></Spinner> : success &&
                    <div>
                        {success}
                        <p>Transaction Id: {transactionId}</p>
                    </div>
            }

        </>
    );
};

export default CheckOut;