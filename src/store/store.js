import productReducer from "../features/product/ProductSlice";
import cartReducer from "../features/cart/CartSlice";
import cartUIReducer from "../features/cart/cartUISlice";
import userReducer from "../features/users/userSlice"
import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../features/users/profileSlice"

const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartUI: cartUIReducer,
    product: productReducer,
    user: userReducer,
    userProfile: profileReducer,
  },
});

export default store;
