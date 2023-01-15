import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  PRODUCTS_FETCH_START,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_ERROR,
} from "../actions";

const products_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    console.log({ ...state, menuIsClose: true });
    return { ...state, menuIsClose: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    console.log({ ...state, menuIsClose: false });
    return { ...state, menuIsClose: false };
  }
  if (action.type === PRODUCTS_FETCH_START) {
    console.log({ ...state, productIsLoading: true });
    return { ...state, productIsLoading: true };
  }
  if (action.type === PRODUCTS_FETCH_SUCCESS) {
    console.log({
      ...state,
      products: action.payload,
      productIsLoading: false,
    });
    return { ...state, products: action.payload, productIsLoading: false };
  }
  if (action.type === PRODUCTS_FETCH_ERROR) {
    return { ...state, productIsLoading: false, productsFetchError: true };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
