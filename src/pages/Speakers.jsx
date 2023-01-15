import React from "react";
import Header from "../components/sharedComponents/Header";
import Category from "../components/sharedComponents/Category";
import CategoryItems from "../components/sharedComponents/CategoryItems";
import About from "../components/About";
import Footer from "../components/sharedComponents/Footer";
import ProductList from "../components/ProductList";
import data from "../data.json";
import { useProductsContext } from "../context/products_context";
const speakerssData = data.filter((el) => el.category === "speakers");
function Speakers() {
  const { speakers, productIsLoading } = useProductsContext();
  return (
    <div>
      <Header />
      <Category category={"speakers"} />
      <ProductList data={speakers} />
      <CategoryItems />
      <About />
      <Footer />
    </div>
  );
}

export default Speakers;
