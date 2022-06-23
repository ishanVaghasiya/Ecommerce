import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILS,
  SINGLE_PRODUCT_LIST_REQUEST,
  SINGLE_PRODUCT_LIST_SUCCESS,
  SINGLE_PRODUCT_LIST_FAILS,
} from "../constant/productConstant";

const productsListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { products: action.payload };
    case PRODUCT_LIST_FAILS:
      return { error: action.payload };
    default:
      return state;
  }
};

const singleProductReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case SINGLE_PRODUCT_LIST_REQUEST:
      return { ...state };
    case SINGLE_PRODUCT_LIST_SUCCESS:
      return { product: action.payload };
    case SINGLE_PRODUCT_LIST_FAILS:
      return { error: action.payload };
    default:
      return state;
  }
};

export { productsListReducer, singleProductReducer };
