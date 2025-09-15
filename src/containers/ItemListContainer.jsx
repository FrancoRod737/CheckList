import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ItemList from "../components/ItemList";

export default function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  const filteredProducts = categoryId
    ? products.filter((prod) => prod.category === categoryId)
    : products;

  return (
    <div>
      <h2 style={{ padding: "20px" }}>{greeting}</h2>
      <ItemList products={filteredProducts} />
    </div>
  );
}
