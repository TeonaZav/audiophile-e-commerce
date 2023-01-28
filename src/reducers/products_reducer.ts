import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  PRODUCTS_FETCH_START,
  PRODUCTS_FETCH_SUCCESS,
  // PRODUCTS_FETCH_ERROR,
  ITEM_FETCH_START,
  ITEM_FETCH_SUCCESS,
  ITEM_FETCH_ERROR,
} from "../actions";

const products_reducer = (state: any, action: any) => {
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
    const headphones = action.payload.filter(
      (el: any) => el.category === "headphones"
    );
    const earphones = action.payload.filter(
      (el: any) => el.category === "earphones"
    );
    const speakers = action.payload.filter(
      (el: any) => el.category === "speakers"
    );

    return {
      ...state,
      products: action.payload,
      productIsLoading: false,
      headphones,
      earphones,
      speakers,
    };
  }
  if (action.type === ITEM_FETCH_START) {
    return { ...state, itemIsLoading: true };
  }
  if (action.type === ITEM_FETCH_ERROR) {
    return { ...state, itemIsLoading: false, itemFetchError: true };
  }
  if (action.type === ITEM_FETCH_SUCCESS) {
    return {
      ...state,
      item: action.payload,
      itemIsLoading: false,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
