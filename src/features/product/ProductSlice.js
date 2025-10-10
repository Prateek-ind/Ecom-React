import { createSlice } from "@reduxjs/toolkit";
import { makhanaProducts } from "./makhanaProducts";


const initialState = { items: [makhanaProducts], loading: false, error: null };

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
});

export default productSlice.reducer;
export const productActions = productSlice.actions;
