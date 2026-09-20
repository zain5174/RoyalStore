import React from 'react';
import { icons } from "../assets/assets.js";
import { Link } from 'react-router-dom';

const menu = ["Earbuds","Watches","Mobile Accessories" ]
const Sidebar = ({sidebaropen,setSidebaropen}) => {
  return (
    <div>
      <div className="">
        <div className="bg-secondary h-13 flex items-center justify-between p-5">
              <h1 className="text-white font-extrabold">Royal Store</h1>
          <icons.IoMdClose onClick={() => setSidebaropen(false)} className="text-white text-2xl"/>
        </div>
        //menu categhory
        <div className="">
        {
          menu.map((item) => (
          <Link to={`/products/${item.toLowerCase()}`} key={item}>{item}</Link>
         ))
        }
          
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
