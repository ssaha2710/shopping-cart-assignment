import React from "react";
import Cart from "../pages/cart";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
    return (
    <div className="header-container">
      <ul className="nav">
        <li className="prod">
          <Link to="/">Home</Link>
        </li>
        <li className="prod1">
          <Link to="/products">products</Link>
        </li>
      </ul>
      <ul className="nav-right">
        <li className="prod">
          <Link to="/signin">SignIn</Link>
        </li>
        <li className="prod1">
          <Link to="/register">Register</Link>
        </li>
      </ul>
      <Cart/>
    </div>
    )
}

export default Header;