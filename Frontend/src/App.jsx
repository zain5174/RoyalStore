import Navbar from "./components/Navbar.jsx";
import Cart from "./components/Cart.jsx";
import Home from "./Pages/Home.jsx";
import Products from "./Pages/Products.jsx";
import Adminlogin from "./components/admin/Adminlogin.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import AdminLayout from "./Pages/Admin/AdminLayout.jsx";
const App = () => {
  const location = useLocation();

  const isAdminPath = location.pathname.includes("/admin");
  return (
    <div>
      {isAdminPath ? null : <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<AdminLayout />} />
      </Routes>
    </div>
  );
};

export default App;
