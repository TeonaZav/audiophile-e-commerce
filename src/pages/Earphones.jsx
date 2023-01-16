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

function Earphones(props) {
  const earphonesData = data.filter((el) => el.category === "earphones");
  const { earphones, productIsLoading } = useProductsContext();
  return (
    <div>
      <Header />
      <Category category={"earphones"} />
      {productIsLoading ? (
        <LoadingComponent />
      ) : (
        <ProductList data={earphones} />
      )}

      <CategoryItems />
      <About />
      <Footer />
    </div>
  );
}

export default Earphones;
