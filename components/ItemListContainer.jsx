import React, { useState } from "react";

export default function ItemListContainer({ greeting, products, extras, addToCart }) {
  const [selectedExtras, setSelectedExtras] = useState([]);

  const toggleExtra = (extra) => {
    if (selectedExtras.includes(extra)) {
      setSelectedExtras(selectedExtras.filter(e => e !== extra));
    } else {
      setSelectedExtras([...selectedExtras, extra]);
    }
  };

  return (
    <main className="mx-auto max-w-6xl p-6">
      <section className="rounded-2xl border p-10 text-center">
        <h1 className="mb-2 text-2xl font-bold">{greeting}</h1>
        <p className="opacity-80 mb-4">
          Selecciona tus productos y extras.
        </p>

        <div className="mb-6">
          {products.map(product => (
            <div key={product.id} className="flex items-center justify-between border p-4 rounded-xl mb-2">
              <span>{product.name} - ${product.price}</span>
              <button
                className="px-3 py-1 border rounded-xl hover:opacity-80 transition"
                onClick={() => addToCart(product)}
              >
                Agregar
              </button>
            </div>
          ))}
        </div>

        <div>
          <h2 className="font-semibold mb-2">Extras:</h2>
          <div className="flex gap-4 justify-center flex-wrap">
            {extras.map(extra => (
              <button
                key={extra.id}
                className={`px-3 py-1 border rounded-xl transition ${selectedExtras.includes(extra.name) ? 'bg-gray-200' : ''}`}
                onClick={() => toggleExtra(extra.name)}
              >
                {extra.name}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
