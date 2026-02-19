import React from "react";
import "./Quantity.css";
const Quantity = () => {
  return (
    <div>
      {" "}
      <div className="align_center quantity_input">
        <button className="quantity_input_button" disabled>
          -
        </button>
        <p className="quantity_input_count"> 1</p>
        <button className="quantity_input_button">+</button>
      </div>
    </div>
  );
};

export default Quantity;
