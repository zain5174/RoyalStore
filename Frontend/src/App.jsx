import Navbar from "./components/Navbar.jsx";
import Cart from "./components/Cart.jsx";
import Home from "./Pages/Home.jsx";
import Products from "./Pages/Products.jsx";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;