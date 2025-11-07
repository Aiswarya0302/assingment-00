// src/components/Footer.jsx
import React from "react";

function Footer({ text }) {
  return (
    <footer style={{ background: "#f1f1f1", padding: "10px", textAlign: "center" }}>
      <p>{text}</p>
    </footer>
  );
}

export default Footer;
