'use client';

import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
            billing_details: {
                email: email,
            },
        });

        if (error) {
            console.log(error);
        } else {
            console.log(paymentMethod);
            // Send the payment method ID and amount to your backend to process the payment
        }
    };

    return (
        <form onSubmit={handleSubmit} className='bg-white p-6 rounded shadow-md'>
            <h2 className='text-2xl mb-4'>Donate</h2>
            <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700'>Email</label>
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    required
                />
            </div>
            <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700'>Amount</label>
                <input
                    type='number'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    required
                />
            </div>
            <div className='mb-4'>
                <CardElement className='p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
            </div>
            <button
                type='submit'
                className='w-full bg-indigo-600 text-white p-2 rounded-md shadow hover:bg-indigo-700'
                disabled={!stripe}
            >
                Donate
            </button>
        </form>
    );
};

export default PaymentForm;
