import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Css/Payment.css";
import { CardCvcElement, CardNumberElement, CardExpiryElement, useStripe, Elements,useElements } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js"

import API from "../Api"
const stripePromise = loadStripe('pk_test_51NiVoJSDWqjglPyjCiGHQwUWZ5MomtW3lWAJwKZPTDieWr0d8Z6de229SLxKTrp9sf2tm9AQSEdvFFgDZnrN0Hjd00Lpy2h2sy');

function PaymentForm() {
  const navigate = useNavigate();
    const stripe = useStripe();
    const [option, setOption] = useState(0);
    const [paymetntStatus,setStatus]=useState(true)
    const [error, setError] = useState(true);
    const elements = useElements();
    const handleTestTransfer = async () => {
        if (!stripe) {
          return;
        }
        const { paymentMethod, error } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardNumberElement),
          });
        
          if (error) {
           // localStorage.setItem("statusPayment",error.message)
           setError(error.message)
            console.error('Error creating payment method:', error);
          } else {
            setStatus(false)
        try {
          let response = await fetch(`${API}/payment`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({paymentMethodId: paymentMethod.id})
          });
          if (response.ok) {
             let  res= await response.json()
            console.log(res)
            await new Promise(resolve => setTimeout(resolve, 4000));
            // navigate("/success")
            alert("payment successfully done")
            navigate("/video_consult");
            localStorage.setItem("statusPayment",true)
            console.log('Test money transfer successful');
          } else {
            // localStorage.setItem("statusPayment",true)
            console.error('Test money transfer failed');
          }
        } catch (error) {
          localStorage.setItem("statusPayment",false)
          localStorage.setItem("error",JSON.stringify(error))
          console.error('Error:', error);
        }
      }
    };
   
    const handleOptionClick = (value) => {
      setOption(value);
    };
    return (
        <>
        {
          paymetntStatus?<>
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
                          <label>amount</label>
                          <div className="card-number-input amount">
                            <input type="text"  placeholder='amount'/>
                          </div>
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
                    <button onClick={handleTestTransfer} >Pay</button>
                   {
                    error?<h3>{error}</h3>:""
                   }
                    </div>
                    {/* Rest of your payment page content */}
                </div>
            </div>
            </>: <div className="spinner-container">
      <div className="loading-spinner">
      </div>
      <p >Processing payment... Please wait.</p>
        
    </div>
}
        </>
    );
}
function Payment() {
    return <>
        <Elements stripe={stripePromise}>
            <PaymentForm />
        </Elements>
    </>
}
export default Payment