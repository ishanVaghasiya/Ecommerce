import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constant/cartConstant";

const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      //this is for latest product which is add to cart
      const item = action.payload;

      // this is for cheack the above item(latest item) is exit in cart or not
      const existItem = state.cartItems.find(
        (data) => data.product === item.product
      );
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((data) =>
            data.product === existItem.product ? item : data
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    
      default:
        return state;
        
      case CART_REMOVE_ITEM:
        return {
          ...state,
          cartItems: state.cartItems.filter((data) => data.product !== action.payload),

        }
 
  }
};


export { cartReducer };
