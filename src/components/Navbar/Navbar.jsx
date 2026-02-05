import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import Nav_Links from "./Nav_Links.jsx";

const Navbar = () => {
  return (
    <nav className="align-center navbar">
      <div className="align-center logo">
        <img src={logo} alt="VertexMart Logo" className="logo-image" />
        <form className=" align-center search-form">
          <input
            type="text"
            placeholder="Search products..."
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
      <div className="spacer" />

      <div className="align-center nav_links_form">
        <Nav_Links title="Home" link="/home" />

        <Nav_Links title="Products" link="/products" />
        <Nav_Links title="LogIN" link="/login" />
        <Nav_Links title="SignUp" link="/signup" />
        <Nav_Links title="My Orders" link="/myorders" />
        <Nav_Links title="LogOut" link="/logout" />
        <a href="/cart" className=" align-center cart-link">
          🛒 Cart
          <p className="align-center cart-count">0</p>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
