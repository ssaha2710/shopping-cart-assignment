import React from "react";
import Cart from "../../pages/cart";
import { Link } from "react-router-dom";
import SaabkaBazaar from "./../../../static/images/logo.png";
import "./header.css";

const Header = () => {
  return (
    <header>
      <img className="logo" src={SaabkaBazaar} alt="saabka-bazaar" />
      <nav className="nav-left">
        <Link to="/" className="site-title">
          Home
        </Link>
        <Link to="/products" className="site-title">
          Products
        </Link>
      </nav>
      <nav className="header-right">
        <Link to="/login">SignIn</Link>
        <Link to="/">Register</Link>
        <Cart />
      </nav>
    </header>
  );
};

export default Header;
