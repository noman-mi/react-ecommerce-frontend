import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from './Pages/Contact'
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Dashboard from "./Pages/Dashboard";
import Signin from "./Pages/Signin";
import AddProduct from "./Pages/AddProduct";
import ViewProduct from "./Pages/ViewProduct";
import Home from "./pages/Home";
import Contact from "./Pages/Contact";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";

function App() {

  return (

    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/viewproduct" element={<ViewProduct />} />
      </Routes>

    </div>
  );
}

export default App;
