import React, { useState } from 'react';
import { icons } from "../assets/assets.js";
import Sidebar from "../components/Sidebar.jsx"
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [sidebaropen, setSidebaropen] = useState(false)
  return (
    <>
      <div className="relative h-14 w-full bg-white flex items-center justify-between shadow-sm shadow-black-500 px-4 md:px-6 lg:px-8 xl:px-10 z-50">
        <div className="" onClick={() => setSidebaropen(true)}>
          <icons.HiBars3 className="text-black text-2xl" />
        </div>
        <div className="">
          <h1 className="text-black font-extrabold">Royal Store</h1>
        </div>
        <div className="flex items-center gap-4">
          <icons.IoIosSearch className="text-black text-2xl" />
          <div className="relative">
            <Link to="/cart">
            
          <icons.IoCartOutline className="text-black text-2xl" />
          <span className="bg-secondary h-3 w-3 rounded-full absolute top-0 -right-1 text-[9px] flex items-center justify-center text-white p-1">2</span>
            </Link>
          </div>
        </div>
      
        <div className={`bg-white fixed top-0 left-0 min-h-screen w-[80vw] transition-transform duration-300 z-[9999] ${sidebaropen ? "translate-x-0" : "-translate-x-full"}`}>
          <Sidebar sidebaropen={sidebaropen}
      setSidebaropen={setSidebaropen}/>
        </div>
      </div>
    </>
  );
};

export default Navbar;
