import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: {}, totalQuantity: 0, totalAmount: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const id = product.id;

      if (state.items[id]) {
        state.items[id].quantity += 1;
      } else {
        state.items[id] = { ...product, quantity: 1 };
      }
      state.totalQuantity++;
      state.totalAmount += product.price;
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
