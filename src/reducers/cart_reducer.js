import {
  ADD_TO_CART,
  MODAL_OPEN,
  MODAL_CLOSE,
  REMOVE_CART_ITEM,
  CLEAR_CART,
  COUNT_TOTALS,
  TOGGLE_CART_ITEM_QUANTITY,
} from "../actions";
const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, quantity, product } = action.payload;
    const item = state.cart.find((el) => el.id == id);
    if (item) {
      const tempCard = state.cart.map((el) => {
        if (el.id === id) {
          console.log(el.id, id);

          let newQuantity = el.quantity + quantity;
          console.log(el.quantity, quantity, newQuantity);
          return { ...el, quantity: newQuantity };
        } else {
          return { ...el };
        }
      });
      return { ...state, cart: tempCard };
    } else {
      const newItem = {
        id: id,
        name: product.slug.split("-")[0].toUpperCase(),
        price: product.price,
        image: `/assets/cart/image-${product.slug}.jpg`,
        quantity: quantity,
      };
      console.log(newItem);
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === MODAL_OPEN) {
    console.log({ ...state, modalIsOpen: true });
    return { ...state, modalIsOpen: true };
  }
  if (action.type === MODAL_CLOSE) {
    return { ...state, modalIsOpen: false };
  }
  if (action.type === REMOVE_CART_ITEM) {
    const newCart = state.cart.filter((el) => el.id !== action.payload);
    return { ...state, cart: newCart };
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === TOGGLE_CART_ITEM_QUANTITY) {
    const { id, value } = action.payload;
    const newCart = state.cart.map((el) => {
      if (id === el.id) {
        if (value === "increase") {
          let newQuantity = el.quantity + 1;
          return { ...el, quantity: newQuantity };
        } else if (value === "decrease" && el.quantity !== 1) {
          let newQuantity = el.quantity - 1;
          return { ...el, quantity: newQuantity };
        }
      } else {
        return el;
      }
    });
    return { ...state, cart: newCart };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};
export default cart_reducer;
