import React from "react";
import "./ProductsSideBar.css";
const ProductsSideBar = () => {
  return (
    <aside className="products_sidebar">
      <h2>Category</h2>
      <div className="products_sidebar_links">
        <a href="#">All Products</a>
        <a href="#">Electronics</a>
        <a href="#">Clothing</a>
        <a href="#">Home & Kitchen</a>
        <a href="#">Books</a>
        <a href="#">Toys & Games</a>
      </div>
    </aside>
  );
};

export default ProductsSideBar;
