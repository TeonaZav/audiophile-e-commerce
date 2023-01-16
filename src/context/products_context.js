import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import data from "../data.json";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  PRODUCTS_FETCH_START,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_ERROR,
  ITEM_FETCH_START,
  ITEM_FETCH_SUCCESS,
  ITEM_FETCH_ERROR,
} from "../actions";
const headphonesData = data.filter((el) => el.category === "headphones");
const earphonesData = data.filter((el) => el.category === "earphones");
const speakerssData = data.filter((el) => el.category === "speakers");

const initialState = {
  menuIsClose: true,
  productIsLoading: false,
  // products: [],
  // headphones: [],
  // earphones: [],
  // speakers: [],
  // productsFetchError: false,
  // itemIsLoading: false,
  // itemFetchError: false,
  // item: {},
  products: data, //local data.json for development
  headphones: headphonesData,
  earphones: earphonesData,
  speakers: speakerssData,
  item: {},
};

const ProductsContext = React.createContext();
// const url = "http://localhost:5000/api/v1/products/all";
const url = "../data.json";
export const ProductsProvider = ({ children }) => {
  const [state, dispach] = useReducer(reducer, initialState);
  const openSidebar = () => {
    dispach({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispach({ type: SIDEBAR_CLOSE });
  };
  /*================
    get products data   / Temporarily unavailable
   =================*/
  // const getProducts = async (url) => {
  //   dispach({ type: PRODUCTS_FETCH_START });
  //   try {
  //     const res = await axios.get(url);
  //     const products = res.data;
  //     dispach({ type: PRODUCTS_FETCH_SUCCESS, payload: products.data });
  //     console.log(products.data);
  //   } catch (error) {
  //     dispach({ type: PRODUCTS_FETCH_ERROR });
  //   }
  // };
  /*================
    get product by ID / Temporarily unavailable
   =================*/
  // const getProduct = async (url, id) => {
  //   dispach({ type: ITEM_FETCH_START });
  //   try {
  //     const res = await axios.get(`${url}/${id}`);
  //     const item = res.data;
  //     dispach({ type: ITEM_FETCH_SUCCESS, payload: item.data.product });
  //     console.log(item.data.product);
  //   } catch (error) {
  //     dispach({ type: ITEM_FETCH_ERROR });
  //   }
  // };
  // useEffect(() => {
  //   getProducts(url);
  // }, []);
  /*================
    get product by ID from local data.json/ Temporarily unavailable
   =================*/
  const getProduct = (id) => {
    const filtered = data.filter((el) => el.id == id);
    console.log(filtered[0]);
    dispach({ type: ITEM_FETCH_SUCCESS, payload: filtered[0] });
  };

  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, getProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
