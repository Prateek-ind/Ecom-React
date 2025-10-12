import { createSlice } from "@reduxjs/toolkit";
import { makhanaProducts, teaProducts } from "./Products";

const initialState = { items: [makhanaProducts, teaProducts], loading: false, error: null };

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
});

export default productSlice.reducer;
export const productActions = productSlice.actions;
