import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-full mt-6   mx-auto max-w-[1200px]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
