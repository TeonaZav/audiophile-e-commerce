import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/sharedComponents/Header";
import Product from "../components/product/Product";
import LoadingComponent from "../components/sharedComponents/LoadingComponent";
import BtnGoBack from "../components/product/BtnGoBack";
import { Scroll } from "../components/ScrollToTop";
import { motion } from "framer-motion";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
function SingleProduct() {
  // const url = "http://localhost:5000/api/v1/products/all";
  const { id } = useParams();
  const { itemIsLoading, item, getProduct, itemFetchError, products } =
    useProductsContext();

  console.log(id);
  useEffect(() => {
    // getProduct(url, id);
    if (id) {
      getProduct(id); //temporary
    } else {
      console.log("hii");
    }
  }, [id]);

  return (
    <Scroll>
      <motion.div exit={{ opacity: 0 }} transition={{ duration: 1 }}>
        {/* <Header />
      {itemIsLoading ? (
        <LoadingComponent />
      ) : !item ? (
        "Error!"
      ) : (
        <Product item={item} />
      )} */}
        <Header />

        <Product item={item} />
      </motion.div>
    </Scroll>
  );
}

export default SingleProduct;
