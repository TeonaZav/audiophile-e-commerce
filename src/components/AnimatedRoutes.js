import React, { useState, useContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Earphones from "../pages/Earphones";
import Headphones from "../pages/Headphones";
import { AnimatePresence } from "framer-motion";
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact={true} element={<Home>Hii Welcome home</Home>} />
      </Routes>
    </AnimatePresence>
    // }
  );
}
export default AnimatedRoutes;
