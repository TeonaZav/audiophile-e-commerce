import React from "react";
import Header from "../components/sharedComponents/Header";
import Category from "../components/sharedComponents/Category";
import CategoryItems from "../components/sharedComponents/CategoryItems";
import LoadingComponent from "../components/sharedComponents/LoadingComponent";
import About from "../components/sharedComponents/About";
import Footer from "../components/sharedComponents/Footer";
import ProductList from "../components/ProductList";
import data from "../data.json";
import { useProductsContext } from "../context/products_context";

function Speakers() {
  const { speakers, productIsLoading } = useProductsContext();
  return (
    <div>
      <Header />
      <Category category={"speakers"} />
      {productIsLoading ? (
        <LoadingComponent />
      ) : (
        <ProductList data={speakers} />
      )}

      <CategoryItems />
      <About />
      <Footer />
    </div>
  );
}

export default Speakers;
