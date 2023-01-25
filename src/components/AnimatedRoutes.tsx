import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Earphones from "../pages/Earphones";
import Headphones from "../pages/Headphones";
import Speakers from "../pages/Speakers";
import Products from "../pages/Products";
import SingleProduct from "../pages/SingleProduct";
import Checkout from "../pages/Checkout";
import Header from "./sharedComponents/Header";
import { AnimatePresence } from "framer-motion";
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/earphones" element={<Earphones />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/products" element={<Products />} />
          <Route path="/all/:id" element={<SingleProduct />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
export default AnimatedRoutes;
