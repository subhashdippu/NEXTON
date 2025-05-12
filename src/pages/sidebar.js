// components/Sidebar.jsx
import React from "react";
import CategoryFilter from "./filters/categoryFilter";
import PriceRangeFilter from "./filters/priceRangeFilter";
import Navbar from "../components/navbar";
// import SortOrderFilter from "./filters/sortOrderFilter";

export default function Sidebar() {
  return (
    <div>
      <Navbar />
      <CategoryFilter />
      <PriceRangeFilter />
    </div>
  );
}
