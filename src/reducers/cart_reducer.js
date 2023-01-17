import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CLEAR_CART,
  COUNT_TOTALS,
  TOGGLE_CART_ITEM_QUANTITY,
} from "../actions";
const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, quantity, product } = action.payload;
    const item = state.cart.find((el) => el.id === id);
    if (item) {
      const tempCard = state.cart.map((el) => {
        if (el.id === id) {
          let newQuantity = el.quantity + quantity;
          return { ...el, quantity: newQuantity };
        } else {
          return el;
        }
      });
    } else {
      const newItem = {
        id: id,
        name: product.name,
        price: product.price,
        image: `/assets/cart/image-${product.slug}.jpg`,
        quantity: quantity,
      };
      console.log(newItem);
      return { ...state, cart: [state.cart, newItem] };
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};
export default cart_reducer;
