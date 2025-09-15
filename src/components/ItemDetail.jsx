import React from "react";

export default function ItemDetail({ product }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ width: "300px", height: "300px", objectFit: "cover" }} />
      <p>{product.description}</p>
      <p><strong>Precio: </strong>${product.price}</p>
    </div>
  );
}
