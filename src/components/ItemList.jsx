import React from "react";
import Item from "./Item";

export default function ItemList({ products }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
      {products.map((prod) => (
        <Item key={prod.id} product={prod} />
      ))}
    </div>
  );
}
