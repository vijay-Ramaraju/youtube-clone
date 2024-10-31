import React from "react";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";



const Body = () => {
  const toggleMenu = useSelector((state) => state.menu.toggleMenu);
  return (
    <div className="flex h-screen ">
      {toggleMenu && (
        <div className="w-2/12 transition-all duration-300">
          <SideBar />
        </div>
      )}
      <div
        className={`${
          toggleMenu ? "w-10/12" : "w-full"
        } flex-grow transition-all duration-300`}
      >
        <Outlet />
        {/* <MainContainer /> */}
      </div>
    </div>
  );
};  

export default Body;
