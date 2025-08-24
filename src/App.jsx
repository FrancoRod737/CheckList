import React, { useState } from "react";
import NavBar from "../components/NavBar";
import ItemListContainer from "../components/ItemListContainer";
import "./index.css";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: "Laptop Gamer", price: 1200 },
    { id: 2, name: "Celular Pro", price: 900 },
    { id: 3, name: "Auriculares Inalámbricos", price: 150 }
  ];

  const extras = [
    { id: "e1", name: "Garantía Extendida" },
    { id: "e2", name: "Soporte Técnico Premium" },
    { id: "e3", name: "Accesorios Adicionales" }
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <NavBar cartItems={cartItems} />
      <ItemListContainer
        greeting="¡Bienvenido/a a TechStore!"
        products={products}
        extras={extras}
        addToCart={addToCart}
      />
    </div>
  );
}
