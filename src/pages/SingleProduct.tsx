import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/sharedComponents/Footer";
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
      getProduct(Number(id)); //temporary
    } else {
      console.log("hii");
    }
  }, [id]);

  return (
    <Scroll>
      <motion.div>
        {/* <Header />
      {itemIsLoading ? (
        <LoadingComponent />
      ) : !item ? (
        "Error!"
      ) : (
        <Product item={item} />
      )} */}

        <Product item={item} />
        <Footer />
      </motion.div>
    </Scroll>
  );
}

export default SingleProduct;
