import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";

import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  PRODUCTS_FETCH_START,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_ERROR,
} from "../actions";

const initialState = {
  menuIsClose: true,
  productIsLoading: false,
  products: [],
  productsFetchError: false,
};

const ProductsContext = React.createContext();
const url = "http://localhost:5000/api/v1/products/all";
export const ProductsProvider = ({ children }) => {
  const [state, dispach] = useReducer(reducer, initialState);
  const openSidebar = () => {
    dispach({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispach({ type: SIDEBAR_CLOSE });
  };
  /*================
    get products data 
   =================*/
  const getProducts = async (url) => {
    dispach({ type: PRODUCTS_FETCH_START });
    try {
      const res = await axios.get(url);
      const products = res.data;
      dispach({ type: PRODUCTS_FETCH_SUCCESS, payload: products });
      console.log(products.data);
    } catch (error) {
      dispach({ type: PRODUCTS_FETCH_ERROR });
    }
  };
  useEffect(() => {
    getProducts(url);
  }, []);
  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  );
};
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
