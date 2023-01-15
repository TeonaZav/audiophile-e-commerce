import React from "react";
import Header from "../components/sharedComponents/Header";
import CategoryItems from "../components/sharedComponents/CategoryItems";
import About from "../components/About";
import Footer from "../components/sharedComponents/Footer";
import ProductList from "../components/ProductList";
import data from "../data.json";
const speakerssData = data.filter((el) => el.category === "speakers");
function Speakers() {
  return (
    <div>
      <Header />
      <ProductList data={speakerssData} />
      <CategoryItems />
      <About />
      <Footer />
    </div>
  );
}

export default Speakers;
