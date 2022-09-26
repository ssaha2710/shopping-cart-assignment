import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./category.css";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/categories")
      .then((res) => setCategories(res.data));
  }, []);

  return (
    <ul className="category-container">
      {categories.map((el, idx) => {
        return (
          <li className={`category-item-${idx}`}>
            <img src={el.imageUrl} alt={el.name} />
            <div className="category-details">
              <p>{el.name}</p>
              <p>{el.description}</p>
              <button
                onClick={() => navigate("/products")}
              >{`Explore ${el.key}`}</button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Category;
// //
