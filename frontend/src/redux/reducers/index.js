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
  productName,
} from "./shop.reducers";
import { token } from "./user.reducers";

//
//
//
//
//
// combine all reducers
export const reducers = combineReducers({
  token,
  navState,
  updatedProducts,
  cartItems,
  categories,
  categoryName,
  categoryId,
  updatedCart,
  singleProduct,
  productName,
});
