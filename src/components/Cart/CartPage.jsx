import React from "react";
import "./CartPage.css";
import user from "../../assets/user.webp";
import { Table } from "../Common/Table.jsx";

const CartPage = () => {
  const profile = {
    name: "Ram",
    email: "ram@gmail.com",
  };

  const subtotal = 20;
  const shippingCharge = 5;
  const total = subtotal + shippingCharge;

  const formatCurrency = (value) => `$${value.toFixed(2)}`;

  const summaryRows = [
    { label: "Subtotal", value: subtotal },
    { label: "Shipping Charge", value: shippingCharge },
    { label: "Total", value: total, isTotal: true },
  ];

  return (
    <section className="cart-page">
      <div className="cart-page__container">
        <img src={user} alt={`${profile.name} profile`} />
        <h1 className="user_profile">{profile.name}</h1>
        <p className="user_email">{profile.email}</p>
      </div>

      <Table
        headings={["Product", "Price", "Quantity", "Total"]}
        rows={[["Product 1", "$10.00", "2", "$20.00"]]}
      />

      <div className=" align-center  cart-container">
        <table className="cart-table">
          <thead>
            <tr>
              <th scope="col">Summary</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {summaryRows.map(({ label, value, isTotal }) => (
              <tr key={label} className={isTotal ? "cart-table__total" : ""}>
                <td>{label}</td>
                <td>{formatCurrency(value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="align-center checkout-container">
        <button className="search-button">Checkout</button>
      </div>
    </section>
  );
};

export default CartPage;
