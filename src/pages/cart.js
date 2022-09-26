import React, { useState, useContext, useEffect } from "react";
import CartImage from "./../../static/images/cart.svg";
import { cartContext } from "../Context/context";
import { modalContext } from "../Context/modalContext";
import "./cart.css";
import { cartCountContext } from "../Context/cartCountContext";

const Cart = () => {
  const { cart } = useContext(cartContext);
  const { setOpenModal } = useContext(modalContext);
  const { cartCount, setCartCount } = useContext(cartCountContext);

  useEffect(() => {
    setCartCount(itemCount());
  }, [cart]);
  const itemCount = () => {
    const itemCount = cart.reduce((acc, el) => acc + el.quantity, 0);
    return itemCount;
  };
  return (
    <aside>
      <img
        src={CartImage}
        alt="Cart Image"
        onClick={() => setOpenModal(true)}
      />
      {cartCount}
      {cartCount > 1 ? "items" : "item"}
    </aside>
  );
};

export default Cart;
