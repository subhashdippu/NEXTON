import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Banner from "../components/banner";
function HomePage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Outlet />
    </div>
  );
}
export default HomePage;
