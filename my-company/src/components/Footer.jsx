import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#2c3e50",
        color: "#ecf0f1",
        textAlign: "center",
        padding: "15px",
        position: "fixed",
        bottom: "0",
        width: "100%",
      }}
    >
      <p style={{ margin: "0", fontSize: "14px" }}>
        © {new Date().getFullYear()} My Company. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
