import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom"; // 1️⃣

export default function ProductPage() {
  const dispatch = useDispatch();
  const {
    values,
    selectedCats,
    sortOrder,
    products: reduxProducts,
  } = useSelector((state) => state.product);

  // Compute filtered and sorted products
  const filtered = useMemo(() => {
    return reduxProducts
      .filter((p) => {
        if (p.price < values[0] || p.price > values[1]) return false;
        if (selectedCats.length && !selectedCats.includes(p.category))
          return false;
        return true;
      })
      .sort((a, b) => {
        switch (sortOrder) {
          case "Best Rating":
            return b.rating - a.rating;
          case "Newest":
            return new Date(b.addedAt) - new Date(a.addedAt);
          case "Price Low - High":
            return a.price - b.price;
          case "Price High - Low":
            return b.price - a.price;
          default:
            return b.reviews - a.reviews; // "Most Popular"
        }
      });
  }, [values, selectedCats, sortOrder, reduxProducts]);
  return (
    <div>
      {/* Sidebar */}
      <aside className="w-[309px] space-y-8 pr-6 text-[#2C2C2C] font-medium"></aside>

      {/* Product Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((product) => (
          // 3️⃣ Wrap the card in a Link
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="block bg-white rounded-xl shadow-sm overflow-hidden"
          >
            <div className="relative">
              {/* Use the first image in the array */}
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-[300px] object-cover"
              />

              {product.oldPrice > product.price && (
                <span className="absolute top-3 left-3 bg-white text-sm font-semibold text-gray-800 px-2 py-1 rounded-full shadow">
                  -
                  {Math.round(
                    ((product.oldPrice - product.price) / product.oldPrice) *
                      100
                  )}
                  %
                </span>
              )}
            </div>

            <div className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {product.title}
                  </h3>
                  <p className="text-gray-500 text-xs">{product.category}</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-semibold text-gray-900 block">
                    ${product.price}
                  </span>
                  <span className="text-xs text-gray-400 line-through">
                    ${product.oldPrice}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-sm mt-2">
                <span className="text-yellow-500">⭐</span>
                <span className="text-gray-800">{product.rating}</span>
                <span className="text-gray-500">({product.reviews})</span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
