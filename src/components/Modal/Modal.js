import React, { useState ,useEffect} from "react";
import "./Modal.css";
import CartProducts from "../cartProducts/cartProducts";


const Modal = ({setOpenModal ,itemCount, productDetails}) => {
  const [ totalPrice , setTotalPrice ] = useState(0);
  
  return (
    <div className="modalBackground">
        <div className="modalContainer">
          <div className="title">
            <span> My Cart  </span>
            <button onClick={()=> setOpenModal(false)}>X</button>
          </div>
            <div className="body">{itemCount > 0? <CartProducts totalPrice={totalPrice} setTotalPrice= {setTotalPrice} productDetails={productDetails}/> : "No items in your cart"  }</div>
            <button className="footer" onClick = {()=> setOpenModal(false)}>{itemCount>0 ? `Proceed to Checkout Rs.${totalPrice}`: "Start Shopping " }</button>
        </div>
    </div>
  )
}

export default Modal;