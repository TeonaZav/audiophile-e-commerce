import React, { useState, useContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Earphones from "../pages/Earphones";
import Headphones from "../pages/Headphones";
import Speakers from "../pages/Speakers";
import Products from "../pages/Products";
import SingleProduct from "../pages/SingleProduct";
import Checkout from "../pages/Checkout";
import { AnimatePresence } from "framer-motion";
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact={true} element={<Home>Hii Welcome home</Home>} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products:id" element={<SingleProduct />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </AnimatePresence>
  );
}
export default AnimatedRoutes;
