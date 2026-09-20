import React, { useState } from 'react';
import { icons } from "../assets/assets.js";
import Sidebar from "../components/Sidebar.jsx"
const Navbar = () => {
  const [sidebaropen, setSidebaropen] = useState(false)
  return (
    <>
      <div className="relative h-14 w-full bg-white flex items-center justify-between shadow-sm shadow-black-500 px-4 md:px-6 lg:px-8 xl:px-10">
        <div className="" onClick={() => setSidebaropen(true)}>
          <icons.FaBars className="text-black text-2xl" />
        </div>
        <div className="">
          <h1 className="text-black font-extrabold">Royal Store</h1>
        </div>
        <div className="flex items-center gap-4">
          <icons.IoSearch className="text-black text-2xl" />
          <div className="relative">
            
          <icons.IoMdCart className="text-black text-2xl" />
          <span className="bg-secondary h-3 w-3 rounded-full absolute top-0 -right-1 text-[9px] flex items-center justify-center text-white p-1">2</span>
          </div>
        </div>
      
        <div className={`bg-white absolute top-0 left-0 min-h-screen w-[80vw] transition-transform duration-300 ${sidebaropen ? "translate-x-0" : "-translate-x-full"}`}>
          <Sidebar sidebaropen={sidebaropen}
      setSidebaropen={setSidebaropen}/>
        </div>
      </div>
    </>
  );
};

export default Navbar;
