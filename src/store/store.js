import productReducer from "../features/product/ProductSlice";
import cartReducer from "../features/cart/CartSlice";
import { configureStore } from "@reduxjs/toolkit";



const store = configureStore({
  reducer: { cart: cartReducer, product: productReducer },
});

export default store;
