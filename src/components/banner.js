import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FiSearch } from "react-icons/fi";
const Banner = () => {
  const slides = [
    {
      id: 1,
      title: "Exclusive collection for everyone",
      subtitle: "Starting from: $49.99",
      img: "https://i.imgur.com/8Km9tLL.jpg",
    },
    {
      id: 2,
      title: "New arrivals just landed",
      subtitle: "From $39.99",
      img: "https://i.imgur.com/mAChFeF.png",
    },
  ];
  return (
    <div>
      {" "}
      <section className="bg-[#f7f7f8] px-6 py-12">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="flex  md:flex-row items-center justify-between gap-8 max-w-7xl mx-auto">
                <div className="max-w-lg space-y-6 text-center md:text-left">
                  <p className="text-gray-600 text-lg">{slide.subtitle}</p>
                  <h1 className="text-4xl md:text-5xl font-bold text-[#0e0e2c] leading-tight">
                    {slide.title}
                  </h1>
                  <button className="bg-[#0e0e2c] text-white px-6 py-3 rounded-full flex items-center gap-2 text-lg shadow-md hover:opacity-90 transition">
                    Explore now <FiSearch size={20} />
                  </button>
                </div>
                <img
                  src={slide.img}
                  alt="Hero model"
                  className="w-72 md:w-96 object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Banner;
