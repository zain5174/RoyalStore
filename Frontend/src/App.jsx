import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Cart from "./components/Cart.jsx";
import Adminlogin from "./components/admin/Adminlogin.jsx";
import AddProducts from "./pages/admin/AddProducts.jsx";
import ProductList from "./pages/admin/ProductList.jsx";
import Orders from "./pages/admin/Orders.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import { useAppContext } from "./context/AppContext.jsx";
import AdminLayout from "./pages/admin/AdminLayout.jsx";
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
        >
          <Route index element={isAdmin ? <AddProducts /> : null} />
          <Route path="/admin/productlist" element={<ProductList />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
