import { combineReducers } from "redux";
import { navState } from "./nav.reducers";
import {
  updatedProducts,
  cartItems,
  categories,
  categoryName,
  categoryId,
  updatedCart,
  singleProduct,
  productName
} from "./shop.reducers";
import {
  username,
  password,
  userId,
  displayName,
  userEmail,
  userLink,
  loading,
  loginSuccess,
  token,
  error,
  isLoggedIn,
  userOrders
} from "./user.reducers";

//
//
//
//
//
// combine all reducers
export const reducers = combineReducers({
  username,
  password,
  userId,
  displayName,
  userEmail,
  userLink,
  loading,
  loginSuccess,
  token,
  error,
  navState,
  isLoggedIn,
  userOrders,
  updatedProducts,
  cartItems,
  categories,
  categoryName,
  categoryId,
  updatedCart,
  singleProduct,
  productName
});
