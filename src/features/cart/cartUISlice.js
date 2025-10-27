import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: false };

const cartUISlice = createSlice({
  name: "cartUI",
  initialState: initialState,
  reducers: {
    openCart(state) {
      state.isOpen = true;
    },
    closeCart(state) {
      state.isOpen = false;
    },
    toggleCart(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export default cartUISlice.reducer;
export const cartUIActions = cartUISlice.actions;
