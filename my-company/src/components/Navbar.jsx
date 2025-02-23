import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#34495e",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "#ecf0f1", margin: "0" }}>My Company</h2>
      <div>
        <Link
          to="/"
          style={{
            color: "#ecf0f1",
            textDecoration: "none",
            margin: "0 10px",
            fontSize: "16px",
          }}
        >
          Home
        </Link>
        <Link
          to="/about"
          style={{
            color: "#ecf0f1",
            textDecoration: "none",
            margin: "0 10px",
            fontSize: "16px",
          }}
        >
          About
        </Link>
        <Link
          to="/services"
          style={{
            color: "#ecf0f1",
            textDecoration: "none",
            margin: "0 10px",
            fontSize: "16px",
          }}
        >
          Services
        </Link>
        <Link
          to="/contact"
          style={{
            color: "#ecf0f1",
            textDecoration: "none",
            margin: "0 10px",
            fontSize: "16px",
          }}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
