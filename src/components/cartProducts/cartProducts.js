import React, { useState, useEffect, useContext } from "react";
import { cartContext } from "../../Context/context";
import "./cartProducts.css";
import LowestPrice from "./../../../public/static/images/lowest-price.png";

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
      {products.map((el, idx) => {
        return (
          el.quantity > 0 && (
            <div className="cart-list-product" key={el.id}>
              <img data-testid="img" src={el.imageURL} alt={el.name} />
              <div className="cart-details">
                <p data-testid="item-name">{el.name}</p>
                <div className="cart-modifier">
                  <button
                    data-testid={`decrement-button-${idx}`}
                    onClick={() => decrementQuantity(el.id)}
                  >
                    -
                  </button>
                  <p data-testid={`item-quantity-${idx}`}> {el.quantity} </p>
                  <button
                    data-testid={`increment-button-${idx}`}
                    onClick={() => incrementQuantity(el.id)}
                  >
                    +
                  </button>
                  <span data-testid="item-price">X {`Rs . ${el.price}`}</span>
                </div>
              </div>
              <div data-testid="total-price" className="cart-price">{`Rs . ${
                el.price * el.quantity
              }`}</div>
            </div>
          )
        );
      })}
      {products.length > 0 && (
        <aside className="lowest-price">
          <img src={LowestPrice} alt="Lowest Price banner" />
          <p>You won't find it cheaper anywhere</p>
        </aside>
      )}
    </>
  );
};

export default CartProducts;
