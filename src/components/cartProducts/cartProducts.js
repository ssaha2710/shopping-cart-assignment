import React, { useState, useEffect, useContext } from "react";
import { cartContext } from "../../Context/context";
import "./cartProducts.css";

const CartProducts = ({ productDetails, setTotalPrice }) => {
  const [products, setProducts] = useState(productDetails);
  const { setCart } = useContext(cartContext);

  useEffect(() => {
    setTotalPrice(sumTotal());
    setCart(products);
  }, [products]);
  const mapProduct = (value, selected) => {
    return products.map((el) =>
      el.id === selected.id
        ? {
            ...selected,
            quantity: selected.quantity + value,
            stock: selected.stock - value,
          }
        : el
    );
  };
  const incrementQuantity = (id) => {
    let selected = products.find((el) => el.id === id);
    setProducts(mapProduct(1, selected));
  };
  const decrementQuantity = (id) => {
    let selected = products.find((el) => el.id === id);
    setProducts(mapProduct(-1, selected).filter((el) => el.quantity > 0));
  };
  const sumTotal = () => {
    const totalPrice = products.reduce(
      (acc, el) => acc + el.price * el.quantity,
      0
    );
    return totalPrice;
  };
  return (
    <>
      {products.map((el) => {
        return (
          el.quantity > 0 && (
            <div className="cart-list-product" key={el.id}>
              <img src={el.imageURL} alt={el.name} />
              <div className="cart-details">
                <p>{el.name}</p>
                <div className="cart-modifier">
                  <button onClick={() => decrementQuantity(el.id)}>-</button>
                  <p> {el.quantity} </p>
                  <button onClick={() => incrementQuantity(el.id)}>+</button>
                  <span>X {`Rs . ${el.price}`}</span>
                </div>
              </div>
              <div className="cart-price">{`Rs . ${
                el.price * el.quantity
              }`}</div>
            </div>
          )
        );
      })}
    </>
  );
};

export default CartProducts;
