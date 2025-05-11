import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import Cards from "../components/cards";
function HomePage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Cards />
      <Outlet />
    </div>
  );
}
export default HomePage;
