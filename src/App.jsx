import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import HomePage from "./components/Home/HomePage.jsx";
import ProductsPage from "./components/Products/ProductsPage.jsx";
import SingleProductPage from "./components/Products/SingleProductPage.jsx";
export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        {/* <HomePage /> */}

        {/* <ProductsPage /> */}
        <SingleProductPage />
      </main>
    </div>
  );
}
