import React from "react";
import Header from "../components/sharedComponents/Header";
import Hero from "../components/hompageComponents/Hero";
import About from "../components/sharedComponents/About";
import Footer from "../components/sharedComponents/Footer";
import CategoryItems from "../components/sharedComponents/CategoryItems";
import HompageProducts from "../components/hompageComponents/HompageProducts";
import { Scroll } from "../components/ScrollToTop";
function Home(props) {
  return (
    <Scroll>
      <div>
        <Header />
        <Hero />
        <CategoryItems />
        <HompageProducts />
        <About />
        <Footer />
      </div>
    </Scroll>
  );
}

export default Home;
