import React, { useState, useEffect, useContext } from "react";
import "./Modal.css";
import CartProducts from "../cartProducts/cartProducts";
import { cartCountContext } from "../../Context/cartCountContext";

const Modal = ({ setOpenModal, productDetails }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartCount } = useContext(cartCountContext);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <span> My Cart {cartCount > 0 ? `(${cartCount} item)` : ""} </span>
          <button onClick={() => setOpenModal(false)}>X</button>
        </div>
        <div className={cartCount > 0 ? "modal-body" : "modal-empty-body"}>
          {cartCount > 0 ? (
            <CartProducts
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
              productDetails={productDetails}
            />
          ) : (
            <>
              <p>No items in your cart</p>
              <p>Your favourite items are just a click away</p>
            </>
          )}
        </div>
        <div className={cartCount > 0 ? "cart-footer" : "footer"}>
          {cartCount > 0 ? "Promo code can be applied on payment page" : ""}
          <button onClick={() => setOpenModal(false)}>
            {cartCount > 0
              ? `Proceed to Checkout Rs.${totalPrice}  >`
              : "Start Shopping "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
