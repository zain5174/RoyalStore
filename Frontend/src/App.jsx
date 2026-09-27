import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Cart from "./components/Cart.jsx";
import Adminlogin from "./components/admin/Adminlogin.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import { useAppContext } from "./context/AppContext.jsx";
import AdminLayout from "./Pages/Admin/AdminLayout.jsx";
const App = () => {
  const { isAdmin } = useAppContext();
  const location = useLocation();
  const isAdminPath = location.pathname.includes("/admin");

  return (
    <div>
      {isAdminPath ? null : <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/admin"
          element={isAdmin ? <AdminLayout /> : <Adminlogin />}
        />
      </Routes>
    </div>
  );
};

export default App;
