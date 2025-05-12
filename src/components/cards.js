import React from "react";

const cards = () => {
  const products = [
    {
      products_id: 1,
      image:
        "https://static8.depositphotos.com/1020341/896/i/950/depositphotos_8969502-stock-photo-human-face-with-cracked-texture.jpg",
      title: "Black Automatic Watch",
      category: "Accessories",
      price: "$169.99",
      oldPrice: "$199.99",
      discount: "50% Discount",
      rating: 4.9,
      reviews: 98,
    },
    {
      products_id: 2,
      image:
        "https://static8.depositphotos.com/1020341/896/i/950/depositphotos_8969502-stock-photo-human-face-with-cracked-texture.jpg",
      title: "Black Automatic Watch",
      category: "Accessories",
      price: "$169.99",
      oldPrice: "$199.99",
      discount: "50% Discount",
      rating: 4.9,
      reviews: 98,
    },
    {
      products_id: 3,
      image:
        "https://static8.depositphotos.com/1020341/896/i/950/depositphotos_8969502-stock-photo-human-face-with-cracked-texture.jpg",
      title: "Black Automatic Watch",
      category: "Accessories",
      price: "$169.99",
      oldPrice: "$199.99",
      discount: "50% Discount",
      rating: 4.9,
      reviews: 98,
    },
    {
      products_id: 4,
      image:
        "https://static8.depositphotos.com/1020341/896/i/950/depositphotos_8969502-stock-photo-human-face-with-cracked-texture.jpg",
      title: "Black Automatic Watch",
      category: "Accessories",
      price: "$169.99",
      oldPrice: "$199.99",
      discount: "50% Discount",
      rating: 4.9,
      reviews: 98,
    },
  ];
  return (
    <div>
      {" "}
      <section className="px-6  md:p-16 mx-auto  max-w-8xl">
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Recommendations.{" "}
          <span className="font-normal text-gray-500">
            Best matching products for you
          </span>
        </h2>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 ">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              {/* Image Box */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[300px] object-cover"
                />

                {/* Discount Badge */}
                {item.discount && (
                  <span className="absolute top-3 left-3 bg-white text-sm font-semibold text-gray-800 px-2 py-1 rounded-full shadow">
                    {item.discount}
                  </span>
                )}

                {/* Cart Icon */}
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100">
                  🛍️
                </button>
              </div>

              {/* Product Details */}
              <div className="p-4">
                {/* <h3 className="font-semibold text-gray-900 text-sm">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs">{item.category}</p> */}

                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs">{item.category}</p>
                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <span className="text-sm font-semibold text-gray-900 block">
                      {item.price}
                    </span>
                    <span className="text-xs text-gray-400 line-through">
                      {item.oldPrice}
                    </span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 text-sm mt-2">
                  <span className="text-yellow-500">⭐</span>
                  <span className="text-gray-800">{item.rating}</span>
                  <span className="text-gray-500">({item.reviews})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="px-6  md:p-16 mx-auto  max-w-8xl">
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Best Sellers.{" "}
          <span className="font-normal text-gray-500">
            Best matching products for you
          </span>
        </h2>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 ">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              {/* Image Box */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[300px] object-cover"
                />

                {/* Discount Badge */}
                {item.discount && (
                  <span className="absolute top-3 left-3 bg-white text-sm font-semibold text-gray-800 px-2 py-1 rounded-full shadow">
                    {item.discount}
                  </span>
                )}

                {/* Cart Icon */}
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100">
                  🛍️
                </button>
              </div>

              {/* Product Details */}
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs">{item.category}</p>
                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <span className="text-sm font-semibold text-gray-900 block">
                      {item.price}
                    </span>
                    <span className="text-xs text-gray-400 line-through">
                      {item.oldPrice}
                    </span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 text-sm mt-2">
                  <span className="text-yellow-500">⭐</span>
                  <span className="text-gray-800">{item.rating}</span>
                  <span className="text-gray-500">({item.reviews})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gray-100 rounded-3xl p-10 md:p-16 mx-auto my-10 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Text Content */}
          <div className="max-w-lg text-center md:text-left space-y-4">
            <p className="text-gray-500 text-lg font-medium">
              100% Original Products
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
              The All New Fashion <br /> Collection Items
            </h2>
            <p className="text-gray-600 text-xl">
              Starting from: <span className="font-semibold">$59.99</span>
            </p>
            <button className="mt-4 px-8 py-3 bg-gray-900 text-white text-lg rounded-full shadow-md hover:bg-gray-800 transition">
              Shop now
            </button>
          </div>

          {/* Right Image */}
          <div className="mt-10 md:mt-0 md:ml-10">
            <img
              src="https://img.freepik.com/free-vector/male-photographer-with-camera-hand-drawn-sketch-vector_460848-14670.jpg?semt=ais_hybrid&w=740" // Replace with actual image path
              alt="Fashion Model"
              className="w-full max-w-sm object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default cards;
