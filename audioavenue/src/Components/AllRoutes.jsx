import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import BeautyProducts from "../pages/BeautyProducts";
import Contact from "../pages/Contact";
import KidsProducts from "../pages/KidsProducts";
import Login from "../pages/Login";
import ManProducts from "../pages/ManProducts";
import PagenotFound from "../pages/PagenotFound";
import Products from "../pages/Products";
import SingleProduct from "../pages/SingleProduct";
import WomanProducts from "../pages/WomanProducts";
import Cart from "../pages/Cart";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import Thankyou from "../pages/Thankyou";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />

        <Route path="*" element={<PagenotFound></PagenotFound>} />
        <Route path="/products" element={<Products></Products>} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart></Cart>
            </PrivateRoute>
          }
        />
        <Route
          path="/singleproduct/:section/:id"
          element={<SingleProduct></SingleProduct>}
        />
        <Route path="/cart" element={<Cart></Cart>} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
