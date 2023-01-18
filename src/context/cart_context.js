import React, { useEffect, useContext, useReducer } from "react";
import cart_reducer from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  MODAL_OPEN,
  MODAL_CLOSE,
  REMOVE_CART_ITEM,
  CLEAR_CART,
  COUNT_TOTALS,
  TOGGLE_CART_ITEM_QUANTITY,
} from "../actions";
const getLocalStCard = () => {
  const localCard = localStorage.getItem("cart");
  if (localCard) {
    return JSON.parse(localCard);
  } else {
    return [];
  }
};
const initialState = {
  modalIsOpen: false,
  // cart: [],
  cart: getLocalStCard(), //temporary
  totalItems: 0,
  cartTotal: 0,
  shipping: 50,
  vat: 0,
  orderSubtotal: 0,
};

const CartContext = React.createContext();
export const CartProvider = ({ children }) => {
  const [state, dispach] = useReducer(cart_reducer, initialState);
  //=====add to cart=====//
  const addToCart = (id, quantity, product) => {
    dispach({ type: ADD_TO_CART, payload: { id, quantity, product } });
  };
  const openModal = () => {
    dispach({ type: MODAL_OPEN });
  };
  const closeModal = () => {
    dispach({ type: MODAL_CLOSE });
  };
  const removeItem = (id) => {
    dispach({ type: REMOVE_CART_ITEM, payload: id });
  };
  const clearCard = () => {
    dispach({ type: CLEAR_CART });
  };
  const toggleQuantity = (id, value) => {
    dispach({ type: TOGGLE_CART_ITEM_QUANTITY, payload: { id, value } });
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        openModal,
        closeModal,
        removeItem,
        clearCard,
        toggleQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
