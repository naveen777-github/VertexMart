import React from "react";
import "./ProductsList.css";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  return (
    <section className="products_list_section">
      <header className="align-center products_list_header">Products</header>

      <select name="sort" className="products_list_sort">
        <option value="default">Sort By</option>
        <option value="price_low_high">Price: Low to High</option>
        <option value="price_high_low">Price: High to Low</option>
        <option value="rating_low_high">Rating: Low to High</option>
        <option value="rating_high_low">Rating: High to Low</option>
        <option value="newest">Newest Arrivals</option>
      </select>
      <div className="align-center products_cards_container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default ProductsList;
