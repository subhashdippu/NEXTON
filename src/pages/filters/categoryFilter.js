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
    products: reduxProducts,
  } = useSelector((state) => state.product);

  return (
    <div className="flex gap-[20px] p-6" style={{ width: "1296px" }}>
      {/* Sidebar */}
      <aside className="w-[309px] space-y-8 pr-6 text-[#2C2C2C] font-medium">
        {/* Categories */}
        <div>
          <h2 className="text-xl font-bold mb-4">Categories</h2>
          <div className="space-y-4">
            {[
              "Men’s fashion",
              "Women’s fashion",
              "Kids & Toys",
              "Accessories",
              "Cosmetics",
              "Shoes",
              "Sports",
            ].map((cat) => (
              <label
                key={cat}
                className="flex items-center gap-3 text-base text-[#4F4F4F]"
              >
                <input
                  type="checkbox"
                  checked={selectedCats.includes(cat)}
                  onChange={() => {
                    const updatedCats = selectedCats.includes(cat)
                      ? selectedCats.filter((c) => c !== cat)
                      : [...selectedCats, cat];
                    dispatch(setSelectedCats(updatedCats));
                  }}
                  className="w-5 h-5 rounded border-2 border-[#B0BEC5] accent-blue-500"
                />
                {cat}
              </label>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
