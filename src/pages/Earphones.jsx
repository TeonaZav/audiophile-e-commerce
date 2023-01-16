import React from "react";
import Header from "../components/sharedComponents/Header";
import Category from "../components/sharedComponents/Category";
import CategoryItems from "../components/sharedComponents/CategoryItems";
import LoadingComponent from "../components/sharedComponents/LoadingComponent";
import About from "../components/sharedComponents/About";
import Footer from "../components/sharedComponents/Footer";
import ProductList from "../components/ProductList";
import { useProductsContext } from "../context/products_context";
import { Scroll } from "../components/ScrollToTop";
import { motion } from "framer-motion";
function Earphones(props) {
  const { earphones, productIsLoading } = useProductsContext();
  return (
    <Scroll>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <Category category={"earphones"} />
        {productIsLoading ? (
          <LoadingComponent />
        ) : (
          <ProductList data={earphones} />
        )}

        <CategoryItems />
        <About />
        <Footer />
      </motion.div>
    </Scroll>
  );
}

export default Earphones;
