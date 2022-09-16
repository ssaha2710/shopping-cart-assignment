import React, { useState , useEffect ,useContext} from "react";
import { cartContext } from "./../../context";

const CartProducts = ({productDetails, setTotalPrice}) => {
    const [products ,setProducts] = useState(productDetails)
    const { setCart } = useContext(cartContext);

    useEffect(()=>{
        setTotalPrice(sumTotal())
        setCart(products);
    },[products])
    const mapProduct = (value,selected) =>{ 
        return products.map(el => el.id === selected.id ? {...selected, quantity: selected.quantity + value, stock: selected.stock - value }: el)
    }
    const incrementQuantity = (id) =>{
        let selected = products.find(el => el.id === id);
        setProducts(mapProduct(1,selected))

    }
    const decrementQuantity = (id) =>{
        let selected = products.find(el => el.id === id);
        setProducts(mapProduct(-1,selected).filter(el => el.quantity> 0))

    }
    const sumTotal = () =>{
        const totalPrice = products.reduce(
            (acc, el) => acc + (el.price * el.quantity) ,
            0
          );
          return totalPrice
    }
    return  (<div>
    {products.map(el =>{
        return (el.quantity > 0 && (
            <div>
                {el.name}
                <img src={el.imageURL}/>
                <button onClick={()=>decrementQuantity(el.id)}>-</button>
                <div> {el.quantity} </div>
                <button onClick={()=>incrementQuantity(el.id)}>+</button>
                {el.price * el.quantity}
            </div>
        ))
    })} 
 </div>)
}

export default CartProducts;