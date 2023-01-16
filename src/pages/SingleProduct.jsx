import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/sharedComponents/Header";
import Product from "../components/product/Product";
import LoadingComponent from "../components/sharedComponents/LoadingComponent";
import { useProductsContext } from "../context/products_context";
function SingleProduct() {
  const url = "http://localhost:5000/api/v1/products/all";
  const { id } = useParams();
  const { itemIsLoading, item, getProduct, itemFetchError } =
    useProductsContext();
  useEffect(() => {
    getProduct(url, id);
  }, [id]);

  return (
    <>
      <Header />
      {itemIsLoading ? (
        <LoadingComponent />
      ) : !item ? (
        "Error!"
      ) : (
        <Product item={item} />
      )}
    </>
  );
}

export default SingleProduct;
