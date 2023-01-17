import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CLEAR_CART,
  COUNT_TOTALS,
  TOGGLE_CART_ITEM_QUANTITY,
} from "../actions";
const cart_reducer = (state, action) => {
  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};
export default cart_reducer;
