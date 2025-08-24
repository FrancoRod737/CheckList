import React from "react";
import CartWidget from "./CartWidget";

export default function NavBar({ cartItems }) {
  return (
    <header className="border-b bg-white/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <a href="#" className="flex items-center gap-2 text-xl font-semibold">
          <span role="img" aria-label="logo">🛍️</span>
          <span>TechStore</span>
        </a>
        <ul className="hidden items-center gap-6 md:flex">
          <li><a className="hover:opacity-80" href="#">Inicio</a></li>
          <li><a className="hover:opacity-80" href="#">Laptops</a></li>
          <li><a className="hover:opacity-80" href="#">Celulares</a></li>
          <li><a className="hover:opacity-80" href="#">Accesorios</a></li>
        </ul>
        <CartWidget totalItems={cartItems.length} />
      </nav>
    </header>
  );
}
