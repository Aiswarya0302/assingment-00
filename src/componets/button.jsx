// src/components/Button.jsx
import React from "react";

function Button({ label, onClick, color }) {
  const btnStyle = {
    backgroundColor: color || "blue",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    margin: "5px",
  };

  return <button style={btnStyle} onClick={onClick}>{label}</button>;
}

export default Button;
