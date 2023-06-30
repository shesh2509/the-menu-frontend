import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
import {deleteFromCart} from '../actions/cartActions'
import Checkout from "../components/Checkout";

export default function CartScreen() {
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  var subtotal = cartItems.reduce((x,item) => x+item.price, 0)
  const dispatch = useDispatch();
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 style={{ fontSize: "40px" }}>My Cart</h2>
            <hr/>
          {cartItems.map(item => {
            return <div className="flex-container">

                <div className="text-left m-1 w-100">
                    <h1>{item.name} [{item.varient}]</h1>
                    <h1>Price : {item.quantity} * {item.prices[0][item.varient]} = {item.price}</h1>
                    <h1 style={{display:'inline'}}>Quantity  </h1>
                    <i className="fa fa-plus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item, item.quantity+1, item.varient))}}></i>
                    <b>{item.quantity}</b>
                    <i className="fa fa-minus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item, item.quantity-1, item.varient))}}></i>
                    <hr/>
                </div>
                <div className="m-1 w-100">
                    <img src={item.image} alt="" style={{height:'80px', width:'80px'}}></img>
                </div>
                <div className="m-1 w-100">
                <i className="fa fa-trash mt-5" aria-hidden="true" onClick={()=>{dispatch(deleteFromCart(item))}}></i>
                </div>
            </div>
          })}
        </div>

        <div className="col-md-4 text-right">
            <h2 style={{fontSize:'40px'}}>SubTotal : {subtotal} /-</h2>
            <Checkout subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
}
