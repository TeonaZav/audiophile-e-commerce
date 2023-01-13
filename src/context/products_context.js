import React, { useContext, useReducer } from "react";
import reducer from "../reducers/products_reducer";

import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from "../actions";

const initialState = {
  menuIsClose: true,
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispach] = useReducer(reducer, initialState);
  const openSidebar = () => {
    dispach({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispach({ type: SIDEBAR_CLOSE });
  };

  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  );
};
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
