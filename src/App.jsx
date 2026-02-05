import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import HomePage from "./components/Home/HomePage.jsx";
export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HomePage />
        <h1>Welcome to the App</h1>
        <p>This is a simple React application.</p>
      </main>
    </div>
  );
}
