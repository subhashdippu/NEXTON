import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaShippingFast } from "react-icons/fa";
import { RiRefund2Fill } from "react-icons/ri";
import { TbArrowsLeftRight } from "react-icons/tb";
import { FiGlobe } from "react-icons/fi";
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
  const cards = [
    {
      title: "For Men's",
      subtitle: "Starting at $24",
      bg: "bg-sky-300",
    },
    {
      title: "For Women's",
      subtitle: "Starting at $19",
      bg: "bg-purple-300",
    },
    {
      title: "Accessories",
      subtitle: "Explore accessories",
      bg: "bg-orange-200",
    },
  ];
  const features = [
    {
      icon: <FaShippingFast size={24} className="text-[#0e0e2c]" />,
      title: "Free shipping",
      desc: "On orders over $50.00",
    },
    {
      icon: <TbArrowsLeftRight size={24} className="text-[#0e0e2c]" />,
      title: "Very easy to return",
      desc: "Just phone number",
    },
    {
      icon: <FiGlobe size={24} className="text-[#0e0e2c]" />,
      title: "Worldwide delivery",
      desc: "Fast delivery worldwide",
    },
    {
      icon: <RiRefund2Fill size={24} className="text-[#0e0e2c]" />,
      title: "Refunds policy",
      desc: "60 days return for any reason",
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
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white border border-gray-200 rounded-2xl flex  md:flex-row justify-between divide-y md:divide-y-0 md:divide-x">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4 px-6 py-6 w-full md:w-1/4"
            >
              <div>{feature.icon}</div>
              <div>
                <p className="font-semibold text-[#0e0e2c]">{feature.title}</p>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="text-center px-4 py-12">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-gray-700 mb-10">
          Start exploring.{" "}
          <span className="font-normal">Good things are waiting for you</span>
        </h2>

        {/* Cards */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {cards.map((item, index) => (
            <div
              key={index}
              className={`w-full max-w-[300px] ${item.bg} rounded-2xl px-6 py-6 flex justify-between items-center`}
            >
              {/* Left: Text */}
              <div className="text-left">
                <h3 className="text-lg font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-800 mt-1">{item.subtitle}</p>
              </div>

              {/* Right: Centered "SHOP NOW" */}
              <div className="flex items-center gap-2">
                <div className="h-10 w-[2px] bg-black" />
                <span className="text-sm font-medium text-gray-900 whitespace-nowrap">
                  SHOP NOW →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === 2 ? "bg-gray-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Banner;
