import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      title: "Product 1",
      category: "Men’s fashion",
      price: 120,
      oldPrice: 200,
      rating: 4.2,
      reviews: 10,
      images: [
        "https://static8.depositphotos.com/1020341/896/i/950/depositphotos_8969502-stock-photo-human-face-with-cracked-texture.jpg",
      ],
      addedAt: "2024-01-01",
    },
    {
      id: 2,
      title: "Product 1",
      category: "Men’s fashion",
      price: 120,
      oldPrice: 200,
      rating: 4.2,
      reviews: 10,
      images: [
        "https://static8.depositphotos.com/1020341/896/i/950/depositphotos_8969502-stock-photo-human-face-with-cracked-texture.jpg",
      ],
      addedAt: "2024-01-01",
    },
    {
      id: 4,
      title: "Product 1",
      category: "Men’s fashion",
      price: 120,
      oldPrice: 200,
      rating: 4.2,
      reviews: 10,
      images: [
        "https://static8.depositphotos.com/1020341/896/i/950/depositphotos_8969502-stock-photo-human-face-with-cracked-texture.jpg",
      ],
      addedAt: "2024-01-01",
    },
    {
      id: 5,
      title: "Product 1",
      category: "Men’s fashion",
      price: 120,
      oldPrice: 200,
      rating: 4.2,
      reviews: 10,
      images: [
        "https://static8.depositphotos.com/1020341/896/i/950/depositphotos_8969502-stock-photo-human-face-with-cracked-texture.jpg",
      ],
      addedAt: "2024-01-01",
    },
  ], // Hardcoded product data here
  values: [100, 500], // Price range filter
  selectedCats: [], // Selected categories filter
  sortOrder: "Most Popular", // Sorting filter
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload; // Update products in the state
    },
    setPriceRange: (state, action) => {
      state.values = action.payload;
    },
    setSelectedCats: (state, action) => {
      state.selectedCats = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
  },
});

export const { setProducts, setPriceRange, setSelectedCats, setSortOrder } =
  productSlice.actions;
export default productSlice.reducer;
