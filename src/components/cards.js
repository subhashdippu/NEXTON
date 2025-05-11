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
    // Repeat for other products...
  ];
  return (
    <div>
      {" "}
      <section className="px-6 py-12">
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Recommendations.{" "}
          <span className="font-normal text-gray-500">
            Best matching products for you
          </span>
        </h2>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
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
    </div>
  );
};

export default cards;
