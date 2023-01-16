import React from "react";
import Header from "../components/sharedComponents/Header";
import Hero from "../components/hompageComponents/Hero";
import About from "../components/sharedComponents/About";
import Footer from "../components/sharedComponents/Footer";
import CategoryItems from "../components/sharedComponents/CategoryItems";
import HompageProducts from "../components/hompageComponents/HompageProducts";
import { motion } from "framer-motion";
import { Scroll } from "../components/ScrollToTop";
function Home(props) {
  return (
    <Scroll>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <Hero />
        <CategoryItems />
        <HompageProducts />
        <About />
        <Footer />
      </motion.div>
    </Scroll>
  );
}

export default Home;
