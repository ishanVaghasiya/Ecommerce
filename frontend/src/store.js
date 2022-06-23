import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productsListReducer,
  singleProductReducer,
} from "./redux/reducers/productsReducer";
import { cartReducer } from "./redux/reducers/cartReducer";
import { userReducer } from "./redux/reducers/userReducer";

const reducer = combineReducers({
  productList: productsListReducer,
  singleProduct: singleProductReducer,
  cart: cartReducer,
  userLogin: userReducer,
});

// const userInfoInStorage = localStorage.getItem("userInfo")
//   ? JSON.parse(localStorage.getItem("userInfo"))
//   : [];

const existItemInStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const intialState = {
  cart: { cartItems: existItemInStorage },
  // userLogin : {userInfo : userInfoInStorage}
};
const middleware = [thunk];

const store = createStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
