import productReducer from "../features/product/ProductSlice";
import cartReducer from "../features/cart/CartSlice";
import cartUIReducer from "../features/cart/cartUISlice";
import userReducer from "../features/users/userSlice"
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartUI: cartUIReducer,
    product: productReducer,
    user: userReducer,
  },
});

export default store;
