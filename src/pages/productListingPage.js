import React  , { useState , useEffect, useContext } from "react";
import axios from "axios";
import { cartContext } from "../context";
import "./productListingPage.css";


const ProductListingPage = () =>{
    const [ categories , setCategories] = useState([]);
    const [ products , setProducts] = useState([]);
    const [ filteredProducts ,setFilteredProducts] = useState([]);
    const [ selectCategory , setSelectCategory ] = useState("");
    const { cart ,setCart  } = useContext(cartContext);
    const [ isSelected , setIsSelected] = useState(false);


    useEffect(()=>{
        fetchCategories();
        fetchProducts();
    },[])
    const fetchCategories = () =>{
        axios.get("http://localhost:3000/categories")
        .then(res => setCategories(res.data))
    }
    const fetchProducts = ()=>{
        axios.get("http://localhost:3000/products")
        .then(res=> {
            setProducts(res.data)
        })
    }
    const categoryHandler = (id) =>{
        setIsSelected(prev => !prev);
        setSelectCategory(categories.find(el=> el.id === id).name);
        setFilteredProducts(products.filter(el=> el.category ===id))
    }
    const addCart =  async(product) =>{    
        const ProductExist = cart.find(item => item.id === product.id);
        if (ProductExist) {
            setCart(
              cart.map(item =>
                item.id === product.id
                  ? { ...ProductExist, quantity: ProductExist.quantity + 1 , stock: ProductExist.stock - 1 }
                  : item
              )
            );
          }else {
            setCart([...cart, { 
                ...product, 
                quantity: 1 ,
                stock: product.stock - 1
              }]);
          }

    }
    return(
      <div className="product-listing-page">
        <div className="categories">
            {categories.map((el)=>{
                return <div className = {(selectCategory === el.name) && isSelected ? "selected" : "not-selected"} onClick={()=> categoryHandler(el.id)}>{el.name}</div>
            })}
        </div>
        <div className="products">
          {!isSelected && products.map(el=>{
            return (
                <div className="product">
                    <div className="product-name">{el.name}</div>
                    <img src ={el.imageURL}/>
                    <div className="product-desc"> {el.description}</div>
                    <div>{`MRP Rs.${el.price}`}</div>
                    <button className="buy-btn" onClick={()=>addCart(el)}>BUY NOW</button>
                    </div>
            )
          })}
        {isSelected && filteredProducts.map(el=>{
            return (
                <div className="product">
                    <div className="product-name">{el.name}</div>
                    <img src ={el.imageURL}/>
                    <div className="product-desc"> {el.description}</div>
                    <div>{`MRP Rs.${el.price}`}</div>
                    <button className="buy-btn"onClick = {()=>addCart(el)}>Buy Now</button>
                    </div>
            )
          })}
        </div>
        </div>
    )
}

export default ProductListingPage;