import React from "react";
import "./MyOrder.css";
import { Table } from "../Common/Table";

const MyOrder = () => {
  return (
    <section className="align-center myorder-container">
      <h1 className="myorder-title">My Orders</h1>
      <Table
        headings={["Order ID", "Product", "Status", "Total"]}
        rows={[["12345", "Wireless Headphones", "Delivered", "$99.99"]]}
      />
    </section>
  );
};

export default MyOrder;
