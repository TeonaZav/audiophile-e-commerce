import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from "../actions";

const products_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    console.log({ ...state, menuIsClose: true });
    return { ...state, menuIsClose: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    console.log({ ...state, menuIsClose: false });
    return { ...state, menuIsClose: false };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
