import React from "react";
import Header from "../components/sharedComponents/Header";
import Category from "../components/sharedComponents/Category";
import CategoryItems from "../components/sharedComponents/CategoryItems";
import About from "../components/About";
import Footer from "../components/sharedComponents/Footer";
import ProductList from "../components/ProductList";
import data from "../data.json";
function Earphones(props) {
  const earphonesData = data.filter((el) => el.category === "earphones");
  return (
    <div>
      <Header />
      <Category category={"earphones"} />
      <ProductList data={earphonesData} />
      <CategoryItems />
      <About />
      <Footer />
    </div>
  );
}

export default Earphones;
