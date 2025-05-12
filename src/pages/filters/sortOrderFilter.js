import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Range } from "react-range";
import { Link } from "react-router-dom"; // 1️⃣
import {
  setPriceRange,
  setSelectedCats,
  setSortOrder,
} from "../../redux/productSlice";

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
      <aside className="w-[309px] space-y-8 pr-6 text-[#2C2C2C] font-medium">
        {/* Sort Order */}
        <div>
          <h2 className="text-xl font-bold mb-4">Sort order</h2>
          <div className="space-y-4">
            {[
              "Most Popular",
              "Best Rating",
              "Newest",
              "Price Low - High",
              "Price High - Low",
            ].map((sort) => (
              <label key={sort} className="flex items-center gap-3">
                <input
                  type="radio"
                  name="sort"
                  checked={sortOrder === sort}
                  onChange={() => dispatch(setSortOrder(sort))}
                  className="w-5 h-5 rounded-full accent-blue-500"
                />
                {sort}
              </label>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
