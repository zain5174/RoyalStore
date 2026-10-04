import React from 'react';
import Heroslider from "../components/Heroslider.jsx";
const Home = () => {
  return (
    <div className="mt-10">
      <Heroslider />
      <div className="w-full overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-[marquee_15s_linear_infinite]">
          <div className="flex gap-5 mt-5 font-[500]">
            <p>Welcome to Royal Store</p>
            <p>•</p>

            <p>Delivery on Prepaid Orders</p>
            <p>•</p>
            <p>7 Days Replacement & 1 Year Warranty</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
