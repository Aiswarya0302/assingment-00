// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";

export default function App() {
  const handleClick = (msg) => alert(msg);

  return (
    <div>
      <Header title="Welcome to My React App" />
      <main style={{ textAlign: "center", margin: "20px" }}>
        <h2>Reusable Button Demo</h2>
        <Button label="Click Me" color="green" onClick={() => handleClick("Button Clicked!")} />
        <Button label="Learn More" color="purple" onClick={() => handleClick("Learn More Clicked!")} />
      </main>
      <Footer text="© 2025 Ishu’s React App. All rights reserved." />
    </div>
  );
}


