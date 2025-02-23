import React from "react";

function About() {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f4f4f4",
        textAlign: "center",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ color: "#333", marginBottom: "10px" }}>About Us</h2>
      <p style={{ color: "#666", fontSize: "18px", maxWidth: "600px", margin: "0 auto" }}>
        We are a company committed to delivering the best services to our customers. Our
        team works tirelessly to ensure high quality and customer satisfaction.
      </p>
    </div>
  );
}

export default About;
