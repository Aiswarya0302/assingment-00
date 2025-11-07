// src/components/Header.jsx
import React from "react";

function Header({ title }) {
  return (
    <header style={{ background: "#282c34", color: "white", padding: "15px", textAlign: "center" }}>
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
