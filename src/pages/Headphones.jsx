import React from "react";
import CategoryItems from "../components/sharedComponents/CategoryItems";
import Category from "../components/sharedComponents/Category";
import ProductList from "../components/ProductList";
import About from "../components/sharedComponents/About";
import Footer from "../components/sharedComponents/Footer";
import LoadingComponent from "../components/sharedComponents/LoadingComponent";
import { Scroll } from "../components/ScrollToTop";
import { motion } from "framer-motion";
import { useProductsContext } from "../context/products_context";
function Headphones(props) {
  const { headphones, productIsLoading } = useProductsContext();
  return (
    <Scroll>
      <motion.div>
        <Category category={"headphones"} />

        {productIsLoading ? (
          <LoadingComponent />
        ) : (
          <ProductList data={headphones} />
        )}
        <ProductList data={headphones} />
        <CategoryItems />
        <About />
        <Footer />
      </motion.div>
    </Scroll>
  );
}

export default Headphones;
