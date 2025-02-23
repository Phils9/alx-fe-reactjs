import React from "react";

function Home() {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#e3f2fd",
        textAlign: "center",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ color: "#0277bd", marginBottom: "10px" }}>Welcome to Our Website</h2>
      <p style={{ color: "#01579b", fontSize: "18px", maxWidth: "600px", margin: "0 auto" }}>
        Explore our platform and discover amazing opportunities and services tailored just for you.
      </p>
    </div>
  );
}

export default Home;
