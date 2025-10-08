import { createSlice } from "@reduxjs/toolkit";
import { makhanaProducts } from "./makhanaProducts";

initialItemsItems = [{ makhanaProducts }];

const initialState = { items: [], loading: false, error: null };

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
});

export default productSlice.reducer;
export const productActions = productSlice.actions;
