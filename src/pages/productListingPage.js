import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { cartContext } from "../Context/context";
import "./productListingPage.css";
import DocumentTitle from "react-document-title";

const ProductListingPage = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectCategory, setSelectCategory] = useState("");
  const { cart, setCart } = useContext(cartContext);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);
  const fetchCategories = () => {
    axios
      .get("http://localhost:3000/categories")
      .then((res) => setCategories(res.data));
  };
  const fetchProducts = () => {
    axios.get("http://localhost:3000/products").then((res) => {
      setProducts(res.data);
    });
  };
  const categoryHandler = (id) => {
    setIsSelected((prev) => !prev);
    setSelectCategory(categories.find((el) => el.id === id).name);
    setFilteredProducts(products.filter((el) => el.category === id));
  };
  const addCart = async (product) => {
    const ProductExist = cart.find((item) => item.id === product.id);
    if (ProductExist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...ProductExist,
                quantity: ProductExist.quantity + 1,
                stock: ProductExist.stock - 1,
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
          stock: product.stock - 1,
        },
      ]);
    }
  };
  return (
    <DocumentTitle title="Saabka-Bazaar/products">
      <div className="product-listing-page">
        <div className="categories">
          {categories.map((el, idx) => {
            return (
              <div
                data-testid={`categories-${idx}`}
                key={idx}
                className={
                  selectCategory === el.name && isSelected
                    ? "selected"
                    : "not-selected"
                }
                onClick={() => categoryHandler(el.id)}
              >
                {el.name}
              </div>
            );
          })}
        </div>
        <ul className="products">
          {!isSelected &&
            products.map((el, idx) => {
              return (
                <li
                  className="product"
                  data-testid={`products-${idx}`}
                  key={el.id}
                >
                  <div className="prod-name">{el.name}</div>
                  <img src={el.imageURL} alt={el.description} />
                  <div className="product-desc"> {el.description}</div>
                  <section>
                    <p>{`MRP Rs.${el.price}`}</p>
                    <button className="buy-btn" onClick={() => addCart(el)}>
                      BUY NOW
                    </button>
                  </section>
                </li>
              );
            })}
          {isSelected &&
            filteredProducts.map((el, idx) => {
              return (
                <li className="product" key={idx}>
                  <div className="prod-name">{el.name}</div>
                  <img src={el.imageURL} alt={el.description} />
                  <div className="product-desc"> {el.description}</div>
                  <section>
                    <p>{`MRP Rs.${el.price}`}</p>
                    <button className="buy-btn" onClick={() => addCart(el)}>
                      BUY NOW
                    </button>
                  </section>
                </li>
              );
            })}
        </ul>
      </div>
    </DocumentTitle>
  );
};

export default ProductListingPage;
