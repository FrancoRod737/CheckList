import React from "react";
import { Link } from "react-router-dom";

export default function Item({ product }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
      <img src={product.image} alt={product.name} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Link to={`/item/${product.id}`} style={{ color: "blue" }}>Ver detalle</Link>
    </div>
  );
}
