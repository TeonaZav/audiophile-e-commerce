import React from "react";
import Category from "../components/sharedComponents/Category";
import CategoryItems from "../components/sharedComponents/CategoryItems";
import LoadingComponent from "../components/sharedComponents/LoadingComponent";
import About from "../components/sharedComponents/About";
import Footer from "../components/sharedComponents/Footer";
import ProductList from "../components/ProductList";
import { Scroll } from "../components/ScrollToTop";
import { motion } from "framer-motion";
import { useProductsContext } from "../context/products_context";

function Speakers() {
  const { speakers, productIsLoading } = useProductsContext();
  return (
    <Scroll>
      <motion.div>
        <Category category={"speakers"} />
        {productIsLoading ? (
          <LoadingComponent />
        ) : (
          <ProductList data={speakers} />
        )}

        <CategoryItems />
        <About />
        <Footer />
      </motion.div>
    </Scroll>
  );
}

export default Speakers;
