import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaStar, FaShoppingBag } from "react-icons/fa";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const sizes = ["S", "M", "L", "XL", "2XL"];

export default function ProductDetail() {
  const { id } = useParams();
  const products = useSelector((state) => state.product.products);

  const product = products.find((p) => p.id === parseInt(id, 10));
  const [selectedImage, setSelectedImage] = useState(
    product?.images?.[0] || ""
  );
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="p-8 text-red-500">Product not found</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row gap-10 p-8">
        {/* Left Panel - Images */}
        <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-1/2">
          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-2">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                className={`w-16 h-16 object-cover rounded-lg border cursor-pointer ${
                  selectedImage === img ? "ring-2 ring-black" : ""
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="relative w-full">
            <img
              src={selectedImage}
              alt="main"
              className="rounded-2xl w-full object-cover shadow-md"
            />
            <span className="absolute top-2 left-2 bg-white text-sm px-3 py-1 rounded-full shadow">
              🆕 New in
            </span>
          </div>
        </div>

        {/* Right Panel - Product Details */}
        <div className="max-w-xl w-full mx-auto bg-white border rounded-2xl p-6 shadow-sm space-y-6">
          {/* Rating and Price */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-1 text-gray-700 text-sm">
              <FaStar className="text-yellow-400" />
              <span className="font-semibold">{product.rating}</span>
              <span>•</span>
              <a href="#" className="underline">
                {product.reviews} reviews
              </a>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-sm text-gray-400 line-through">
                ${product.oldPrice.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Size */}
          <div>
            <p className="font-semibold text-gray-900 mb-2">
              Size: <span>{selectedSize}</span>
            </p>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-5 py-2 rounded-xl border text-sm font-medium ${
                    selectedSize === size
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-900 border-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-3">
            <div className="flex items-center border rounded-full px-3 py-1 bg-gray-50 gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-gray-500 text-lg"
              >
                −
              </button>
              <span className="font-medium text-gray-800">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="text-gray-500 text-lg"
              >
                +
              </button>
            </div>

            {/* Add to cart */}
            <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-medium shadow hover:bg-black transition">
              <FaShoppingBag />
              Add to cart
            </button>
          </div>

          {/* Summary */}
          <div className="border-t pt-4 space-y-2 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>
                ${product.price.toFixed(2)} x {quantity}
              </span>
              <span>${(product.price * quantity).toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax estimate</span>
              <span>$0</span>
            </div>
            <div className="border-t pt-3 flex justify-between font-semibold text-gray-900">
              <span>Total</span>
              <span>${(product.price * quantity).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-2xl lg:flex-row gap-10 p-8">{product.detail}</h1>
      <Footer />
    </div>
  );
}
