import { createSlice } from "@reduxjs/toolkit";
import { allProducts } from "./Products";

const processProducts = (data, type, categoryKey) => {
  const category = data[categoryKey];

  if (!category) return {};

  const processed = {};

  for (const key in category) {
    processed.push({
      ...category[key],
      id: key,
      type,
      category: categoryKey,
    });
  }
  return processed;
};

const initialState = {
  allProducts: allProducts,
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
});

export default productSlice.reducer;
export const productActions = productSlice.actions;
