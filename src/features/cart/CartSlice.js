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
    removeFromCart(state, action) {
      const product = action.payload;
      const id = product.id;

      if (!state.items[id]) return;

      if (state.items[id].quantity > 1) {
        state.items[id].quantity -= 1;
      } else {
        delete state.items[id];
      }
      state.totalQuantity -= 1;
      state.totalAmount -= product.price;
    },
    deleteFromCart(state, action) {
      const product = action.payload;
      const id = product.id;
      if (!state.items[id]) return;

      state.totalQuantity -= state.items[id].quantity;
      state.totalAmount -= state.items[id].quantity * state.items[id].price;

      delete state.items[id];
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
