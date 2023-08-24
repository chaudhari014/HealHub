import React, { useState } from 'react';
import "../Css/Payment.css";
import { CardCvcElement, CardNumberElement, CardExpiryElement, useStripe, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js"
const stripePromise = loadStripe('pk_test_51NiVoJSDWqjglPyjCiGHQwUWZ5MomtW3lWAJwKZPTDieWr0d8Z6de229SLxKTrp9sf2tm9AQSEdvFFgDZnrN0Hjd00Lpy2h2sy');

function PaymentForm() {
    const stripe = useStripe();
    const [option, setOption] = useState(0);

    const handleOptionClick = (value) => {
      setOption(value);
    };

    return (
        <>
            <div className='paymentForm'>

                <div className='payOption'>
                <div>
                Payment option
            </div>
                    <ul>
                        <li className={option===0?"selected":""} onClick={()=>handleOptionClick(0)}>Debit/Credit Card</li>
                        <li className={option===1?"selected":""} onClick={()=>handleOptionClick(1)}>Net Banking</li>
                        <li className={option===2?"selected":""} onClick={()=>handleOptionClick(2)}>Upi</li>
                        <li className={option===3?"selected":""} onClick={()=>handleOptionClick(3)}>Google Pay</li>
                        <li className={option===4?"selected":""} onClick={()=>handleOptionClick(4)}>Paytm Wallet</li>
                        <li className={option===5?"selected":""} onClick={()=>handleOptionClick(5)}>Amazon Pay</li>
                    </ul>
                </div>

                <div className='cardForm'>
                    <div className="card-element-container">
                        <h3>Enter Card Details</h3>
                        <div className="custom-card-element">
                            <label>Card Number</label>
                            <div className="card-number-input">
                                <CardNumberElement
                                    options={{
                                        style: {
                                            base: {
                                                fontSize: '16px',
                                                color: '#424770',
                                            },
                                        }
                                    }}
                                />
                            </div>
                            <label>Expiration Date</label>
                            <div className="expiration-input">
                                <CardExpiryElement
                                    options={{
                                        style: {
                                            base: {
                                                fontSize: '16px',
                                                color: '#424770',
                                            },
                                        },
                                    }}
                                />
                            </div>
                            <label>CVV</label>
                            <div className="cvv-input">
                                <CardCvcElement
                                    options={{
                                        style: {
                                            base: {
                                                fontSize: '16px',
                                                color: '#424770',
                                            },
                                        },
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='PayBtn'>
                    <button >Pay</button>
                    </div>
                    {/* Rest of your payment page content */}
                </div>
            </div>

        </>
    );
}

export default function Payment() {
    return <>
        <Elements stripe={stripePromise}>
            <PaymentForm />
        </Elements>
    </>
}