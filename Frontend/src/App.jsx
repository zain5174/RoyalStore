import Navbar from "./components/Navbar.jsx";
import { Route, Routes, useLocation } from 'react-router-dom';
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
