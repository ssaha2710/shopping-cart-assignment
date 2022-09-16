import React, {useEffect , useState} from "react";
import { useHistory  } from "react-router-dom";
import axios from "axios";
import "./category.css";

const Category = () =>{
    const [ categories ,setCategories] = useState([]);
    const history = useHistory();
  

    useEffect(() =>{
        axios.get("http://localhost:3000/categories")
        .then(res => setCategories(res.data))
    },[])


    return (
        <div className="category-container">
            {categories.map(el =>{
                 return (
                    <li className="category-item">
                        <div className="category-name">{el.name}</div>
                        <div className="desc">{el.description}</div>
                        <img src ={el.imageUrl} alt={el.name}/>
                        <button onClick={()=>history.push("/products")}>{`Explore ${el.key}`}</button>
                    </li>
                )
            })}
            </div>
    )
}

export default Category;