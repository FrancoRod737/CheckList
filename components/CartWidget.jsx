import React from "react";

export default function CartWidget({ totalItems }) {
  return (
    <button
      aria-label="Carrito"
      className="relative inline-flex items-center gap-2 rounded-xl border px-3 py-2 hover:shadow-sm transition"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M7 4h-.18C5.4 4 4.3 5.1 4.3 6.4c0 .1 0 .1.1.2l1.5 6.3c.2.8 1 1.3 1.8 1.3h8.7c.8 0 1.6-.5 1.8-1.3l1.4-5.7c.2-.8-.4-1.6-1.2-1.8-.1 0-.2-.1-.3-.1H7Zm0 2h10.7l-1.2 4.9c0 .1-.1.1-.1.1H7.7L6.7 6.5c0-.3.1-.5.3-.5H7Zm-.5 12.5a1.75 1.75 0 1 0 3.5 0 1.75 1.75 0 0 0-3.5 0Zm8.5 0a1.75 1.75 0 1 0 3.5 0 1.75 1.75 0 0 0-3.5 0Z" />
      </svg>
      <span>Carrito</span>
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 min-w-[22px] rounded-full bg-black px-1 text-center text-xs font-bold text-white">
          {totalItems}
        </span>
      )}
    </button>
  );
}
