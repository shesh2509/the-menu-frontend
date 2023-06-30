import React, {useState} from "react";
import { Modal } from 'react-bootstrap'
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";

export default function Pizza({pizza}){
    const [quantity, setquantity] = useState(1)
    const [varient, setvarient] = useState('Half')

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()
    function addtocart(){
        dispatch(addToCart(pizza, quantity, varient))
    }

    return (
        <div className="shadow-lg p-3 mb-5 bg-white rounded" key ={pizza._id}>
            <div onClick={handleShow}>
                <h1>{pizza.name}</h1>
                <img src={pizza.image} className="img-fluid" alt="" style={{height:'200px', width: '200px'}}></img>
            </div>
            <div className="flex-container">
                <div className="w-100 m-1">
                    <p>Varients</p>
                    <select className='form-control' value={varient} onChange={(e)=>{setvarient(e.target.value)}}>
                        {pizza.varients.map(varient =>{
                            return <option value={varient}>{varient}</option>
                        })}
                    </select>
                </div>
                <div className="w-100 m-1">
                    <p>Quantity</p>
                    <select className='form-control' value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
                        {[...Array(5).keys()].map((x, i) => {
                            return <option value={i+1}>{i+1}</option>
                        })}
                    </select>
                </div>
            </div>

            <div className="flex-container">
                <div className='m-1 w-100'>
                    <h1 className="mt-2">Price : {pizza.prices[0][varient] * quantity} Rs</h1>
                </div>
                <div className='m-2 w-100'>
                    <button className="btn" onClick={addtocart}>ADD TO CART</button>
                </div>
            </div>

            <Modal show={show}>
                <Modal.Header closeButton onClick={handleClose}>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img className="p-3" src={pizza.image} alt="" style={{height:'300px', width: '100%'}}></img>
                    <p className="mt-2">{pizza.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className="btn" onClick={handleClose}>CLOSE</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}