import React from "react";
import Header from "../components/sharedComponents/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/sharedComponents/Footer";
import CategoryItems from "../components/sharedComponents/CategoryItems";
import HompageProducts from "../components/HompageProducts";
function Home(props) {
  return (
    <div>
      <Header />
      <Hero />
      <CategoryItems />
      <HompageProducts />
      <About />
      <Footer />
    </div>
  );
}

export default Home;
