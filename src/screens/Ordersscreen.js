/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrders } from '../actions/orderAction'
import Loading from '../components/Loading'
import Error from '../components/Error'


export default function Ordersscreen() {

    const dispatch = useDispatch()
    const orderstate = useSelector(state => state.getUserOrdersReducer)

    const {orders, error, loading} = orderstate

    useEffect(() => {
        dispatch(getUserOrders())
    },[])
    return (
        <div>
            <h2 style={{fontSize:'40px'}}>My Orders</h2>
            <div className='row justify-content-center'>
                {loading && (<Loading/>)}
                {error && (<Error error='Something went wrong'/>)}
                {orders && orders.map(order => {
                    return <div className='col-md-8 m-2 p-1' style={{backgroundColor:"lightgreen"}}>
                        <div className='flex-container'>
                            <div className='text-start w-100 m-1'>
                                <h2 className='mb-4' style={{fontSize:'25px'}}>Items</h2>
                                {order.orderItems.map(item => {
                                    return <div>
                                        <p>{item.name} [{item.varient}] * {item.quantity} = {item.price}</p>
                                    </div>
                                })}
                            </div>
                            <div className='text-start w-100 m-1'>
                                <h2 className='mb-4' style={{fontSize:'25px'}}>Address</h2>
                                <p>Street : {order.shippingAddress.street}</p>
                                <p>City : {order.shippingAddress.city}</p>
                                <p>Country : {order.shippingAddress.country}</p>
                                <p>Pincode : {order.shippingAddress.pincode}</p>
                            </div>
                            <div className='text-start w-100 m-1'>
                                <h2 className='mb-4' style={{fontSize:'25px'}}>Order  Info</h2>
                                <p>Order Amount : {order.orderAmount}</p>
                                <p>Date : {order.createdAt.substring(0,10)}</p>
                                <p>Transaction Id : {order.transactionId}</p>
                                <p>Order Id : {order._id}</p>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
