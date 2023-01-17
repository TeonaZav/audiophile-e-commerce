import React, { useEffect, useContext, useReducer } from "react";
import cart_reducer from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CLEAR_CART,
  COUNT_TOTALS,
  TOGGLE_CART_ITEM_QUANTITY,
} from "../actions";
const initialState = {
  cart: [],
  cartTotal: 0,
  totalItems: 0,
  shipping: 50,
};
const CartContext = React.createContext();
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cart_reducer, initialState);
  //=====add to cart=====//
  const addToCart = (id, quantity, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, quantity, product } });
  };

  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
