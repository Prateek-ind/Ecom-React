import productReducer from "../features/product/ProductSlice";
import cartReducer from "../features/cart/CartSlice";
import cartUIReducer from "../features/cart/cartUISlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartUI: cartUIReducer,
    product: productReducer,
  },
});

export default store;
