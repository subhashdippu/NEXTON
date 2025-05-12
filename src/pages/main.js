import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import Cards from "../components/cards";
import Footer from "../components/footer";
function HomePage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Cards />
      <Outlet />
      <Footer />
    </div>
  );
}
export default HomePage;
