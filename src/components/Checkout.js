import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from '../actions/orderAction'
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";

export default function Checkout({subtotal}) {

    const orderstate = useSelector((state) => state.placeOrderReducer)
    const {loading, error, success} = orderstate
    const dispatch = useDispatch()
    function tokenHander(token){
        console.log(token)
        dispatch(placeOrder(token, subtotal))
    }

  return (
    <div>

        {loading && (<Loading/>)}
        {error && (<Error error='Something went wrong'/>)}
        {success && (<Success success='Your Order Placed Successfully'/>)}

        <StripeCheckout
            amount={subtotal * 100}
            shippingAddress
            token={tokenHander}
            stripeKey='pk_test_51NOEjdSIvXmcdHPzek13ygIzzo2jUhm4taPzfHwmlI6Vss2wlJmdBLHiDs1CRf7lxllbo5mB9GC3VQr7Ph4bhvuq00U3hVt98x'
            currency='INR'
        >

            <button className='btn'>Pay Now</button>

        </StripeCheckout> 
    </div>
  )
}
