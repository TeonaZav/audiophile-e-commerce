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
};

const CartContext = React.createContext({
  cart: [],
  cartTotal: 0,
  totalItems: 0,
  addToCart: (id: number, quantity: number, product: any) => {},
  removeItem: (id: number) => {},
  toggleQuantity: (id: number, value: string) => {},
  modalIsOpen: false,
  openModal: () => {},
  closeModal: () => {},
  clearCard: () => {},
});
export const CartProvider = ({ children }: any) => {
  const [state, dispach] = useReducer(cart_reducer, initialState);
  //=====add to cart=====//
  const addToCart = (id: number, quantity: number, product: any) => {
    dispach({ type: ADD_TO_CART, payload: { id, quantity, product } });
  };
  const openModal = () => {
    dispach({ type: MODAL_OPEN });
  };
  const closeModal = () => {
    dispach({ type: MODAL_CLOSE });
  };
  const removeItem = (id: number) => {
    dispach({ type: REMOVE_CART_ITEM, payload: id });
  };
  const clearCard = () => {
    dispach({ type: CLEAR_CART });
  };
  const toggleQuantity = (id: number, value: string) => {
    dispach({ type: TOGGLE_CART_ITEM_QUANTITY, payload: { id, value } });
  };
  useEffect(() => {
    dispach({ type: COUNT_TOTALS });
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
