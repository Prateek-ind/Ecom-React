import productReducer from "../features/product/ProductSlice";
import cartReducer from "../features/cart/CartSlice";
import cartUIReducer from "../features/cart/cartUISlice";
import authReducer from "../features/auth/authSlice"
import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../features/users/profileSlice"
// import orderReducer from '../features/order/orderSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartUI: cartUIReducer,
    product: productReducer,
    auth: authReducer,
    userProfile: profileReducer,
    // orders: orderReducer,
  },
});

export default store;
