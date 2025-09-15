import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenido a la tienda" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Categoría" />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
      </Routes>
    </div>
  );
}
