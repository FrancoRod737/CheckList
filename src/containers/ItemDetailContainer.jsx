import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ItemDetail from "../components/ItemDetail";

export default function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((p) => p.id.toString() === itemId));
      }, 500);
    });

    getProduct.then((res) => setProduct(res));
  }, [itemId]);

  return (
    <div>
      {product ? <ItemDetail product={product} /> : <p style={{ padding: "20px" }}>Cargando...</p>}
    </div>
  );
}
