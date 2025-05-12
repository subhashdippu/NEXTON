import React from "react";
import CategoryFilter from "./filters/categoryFilter";
import PriceRangeFilter from "./filters/priceRangeFilter";
import Navbar from "../components/navbar";
import SortOrderFilter from "./filters/sortOrderFilter";

export default function Sidebar() {
  return (
    <div>
      <Navbar />
      <div className="flex gap-[20px] p-6">
        <div className="w-[309px] space-y-8 pr-6 text-[#2C2C2C] font-medium">
          <CategoryFilter />
          <PriceRangeFilter />
          <SortOrderFilter />
        </div>
        {/* <ProductPage /> */}
      </div>
    </div>
  );
}
