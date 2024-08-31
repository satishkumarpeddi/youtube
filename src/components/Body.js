import React from "react";
import { SideBar, VideoContainer } from "../components";
import { Outlet } from "react-router-dom";
const Body = () => {
  return (
    <div className="grid grid-cols-[auto,1fr]">
      <div className="absolute z-20 bg-white ">
        <SideBar />
      </div>
      <div className="overflow-x-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
