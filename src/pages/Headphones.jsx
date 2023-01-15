import React from "react";
import Header from "../components/sharedComponents/Header";
import CategoryItems from "../components/sharedComponents/CategoryItems";
import ProductList from "../components/ProductList";
import About from "../components/About";
import Footer from "../components/sharedComponents/Footer";
import data from "../data.json";
function Headphones(props) {
  const headphonesData = data.filter((el) => el.category === "headphones");
  return (
    <div>
      <Header />
      <ProductList data={headphonesData} />
      <CategoryItems />
      <About />
      <Footer />
    </div>
  );
}

export default Headphones;
