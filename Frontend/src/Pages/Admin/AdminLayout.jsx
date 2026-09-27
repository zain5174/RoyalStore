import { Link, NavLink } from "react-router-dom";
import { icons } from "../../assets/assets.js";
import { useAppContext } from "../../context/AppContext.jsx";
const AdminLayout = () => {
  const { setIsAdmin } = useAppContext();
  const sidebarLinks = [
    { name: "Dashboard", path: "/", icon: icons.LuLayoutDashboard },
    { name: "Add Product", path: "/admin", icon: icons.AiOutlineProduct },
    {
      name: "Product List",
      path: "/admin/productlist",
      icon: icons.GoTasklist,
    },
    { name: "Orders", path: "/admin/orders", icon: icons.IoMdCart },
  ];
  const logout = async () => {
    setIsAdmin(false);
  };
  return (
    <>
      <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
        <Link>
          <h1 className="text-black">Royal store</h1>
        </Link>
        <div className="flex items-center gap-5 text-gray-500">
          <p>Hi! Admin</p>
          <button
            onClick={logout}
            className="border rounded-full text-sm px-4 py-1"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="md:w-64 w-16 border-r h-[550px] text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
        {sidebarLinks.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            end={item.path === "/admin"}
            className={`flex items-center py-3 px-4 gap-3 
                            ${
                              index === 0
                                ? "border-r-4 md:border-r-[6px] bg-indigo-500/10 border-indigo-500 text-indigo-500"
                                : "hover:bg-gray-100/90 border-white text-gray-700"
                            }`}
          >
            <item.icon />
            <p className="md:block hidden text-center">{item.name}</p>
          </NavLink>
        ))}
      </div>
    </>
  );
};
export default AdminLayout;
