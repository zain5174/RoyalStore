import { icons } from "../assets/assets.js";
import { Link } from 'react-router-dom';

const menu = ["Earbuds", "Watches", "MobileAccessories"];
const Sidebar = ({ setSidebaropen }) => {
  return (
    <div>
      <div >
        <div className="bg-secondary h-13 flex items-center justify-between p-5">
          <h1 className="text-white font-extrabold">Royal Store</h1>
          <icons.IoMdClose
            onClick={() => setSidebaropen(false)}
            className="text-white text-2xl"
          />
        </div>

        <div className="flex flex-col gap-3 p-5">
          {menu.map((item) => (
            <Link
              to={`/products/${item.toLowerCase()}`}
              key={item}
              onClick={() => setSidebaropen(false)}
              className="text-sm md:text-md font-semibold border-b-[0.5px] border-lightgray pb-2 text-darkgray hover:text-primary transition-all duration-300"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;