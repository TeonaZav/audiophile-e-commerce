import React from "react";
import Header from "../components/sharedComponents/Header";
import ProdusctsItem from "../components/ProdusctsItem";
import CategoryItems from "../components/sharedComponents/CategoryItems";

import About from "../components/About";
import Footer from "../components/sharedComponents/Footer";
function Headphones(props) {
  return (
    <div>
      <Header />
      <ProdusctsItem />
      <CategoryItems />
      <About />
      <Footer />
    </div>
  );
}

export default Headphones;
