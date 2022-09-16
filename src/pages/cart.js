import React , { useState ,useContext, useEffect} from "react";
import CartImage from "./../../static/images/cart.svg";
import SaabkaBazaar from  "./../../static/images/logo.png";
import Modal from "../components/Modal/Modal";
import { cartContext } from "../context"; 
import "./cart.css";


const Cart = ()=>{
    const { cart ,setCart } = useContext(cartContext);
    const [ openModal , setOpenModal] = useState(false);
    const [ cartCount ,setCartCount ] = useState(0);

    useEffect(()=>{
        setCartCount(itemCount())
    },[cart])
    const itemCount = () =>{
        const itemCount = cart.reduce(
            (acc, el) => acc + el.quantity,
            0
          );
          return itemCount
    }
    return (
        <div>
            <img  src={SaabkaBazaar} alt="saabka-bazaar" />
            <img src={CartImage} alt="Cart Image" onClick={()=> setOpenModal(true)}/>
            {cartCount}{ cartCount> 1 ? "items" : "item" }
             {openModal && <Modal setOpenModal = {setOpenModal} itemCount= {cartCount} productDetails={cart}/>}  
        </div>
    )
}

export default Cart;