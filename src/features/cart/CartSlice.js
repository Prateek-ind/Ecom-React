import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
  orderNote: "",
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const id = product.id;
      console.log(product.discountedPrice);

      if (state.items[id]) {
        state.items[id].quantity += 1;
      } else {
        state.items[id] = { ...product, quantity: 1 };
      }
      state.totalQuantity++;
      state.totalAmount += Number(product.discountedPrice);
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
      state.totalAmount -= Number(product.discountedPrice);
    },
    deleteFromCart(state, action) {
      const product = action.payload;
      const id = product.id;
      if (!state.items[id]) return;

      state.totalQuantity -= state.items[id].quantity;
      state.totalAmount -=
        state.items[id].quantity * Number(state.items[id].discountedPrice);

      delete state.items[id];
    },
    setOrderNote(state, action) {
      state.orderNote = action.payload; 
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
