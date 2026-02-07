import React from "react";
import "./ProductCard.css";
import iphone from "../../assets/iphone.jpg";
import star from "../../assets/white-star.png";
import cart from "../../assets/basket.png";

const ProductCard = () => {
  return (
    <article className="product_card">
      <div className="product_image">
        <a href="">
          <img src={iphone} alt="Product" className="product_image" />
        </a>
      </div>
      <div className="product_info">
        <h3 className="product_name">iPhone 14 Pro</h3>
        <p className="product_price">$999</p>
        <a href="#" className="product_link">
          View Details
        </a>
        <footer className="align-center product_info_footer">
          <div className="align-center">
            <p className="align-center product_rating">
              4.5
              <img src={star} alt="Rating" />
            </p>
            <p className="product_review_count">120 </p>
          </div>

          <button className="add_to_cart">
            <img src={cart} alt="Add to Cart" />
          </button>
        </footer>
      </div>
    </article>
  );
};

export default ProductCard;
