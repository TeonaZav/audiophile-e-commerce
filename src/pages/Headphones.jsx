import React from "react";
import Header from "../components/sharedComponents/Header";
import CategoryItems from "../components/sharedComponents/CategoryItems";
import Category from "../components/sharedComponents/Category";
import ProductList from "../components/ProductList";
import About from "../components/sharedComponents/About";
import Footer from "../components/sharedComponents/Footer";
import LoadingComponent from "../components/sharedComponents/LoadingComponent";
import data from "../data.json";
import { useProductsContext } from "../context/products_context";
function Headphones(props) {
  const { headphones, productIsLoading } = useProductsContext();
  return (
    <div>
      <Header />
      <Category category={"headphones"} />

      {productIsLoading ? (
        <LoadingComponent />
      ) : (
        <ProductList data={headphones} />
      )}
      <ProductList data={headphones} />
      <CategoryItems />
      <About />
      <Footer />
    </div>
  );
}

export default Headphones;
