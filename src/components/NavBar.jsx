import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav style={{ padding: "10px", background: "#333", color: "white" }}>
      <Link to="/" style={{ margin: "10px", color: "white" }}>Inicio</Link>
      <Link to="/category/celulares" style={{ margin: "10px", color: "white" }}>Celulares</Link>
      <Link to="/category/notebooks" style={{ margin: "10px", color: "white" }}>Notebooks</Link>
      <Link to="/category/auriculares" style={{ margin: "10px", color: "white" }}>Auriculares</Link>
    </nav>
  );
}
