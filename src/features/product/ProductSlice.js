import { createSlice } from "@reduxjs/toolkit";
import { makhanaProducts, teaProducts } from "./Products";

const processProducts = (data, categoryKey) => {
  const category = data[categoryKey];

  if (!category) return {};

  const processed = {};

  for (const key in category) {
    processed[key] = {
      ...category[key],
      id: key,
      category: categoryKey,
    };
  }
  return processed;
};

const initialState = {
  makhana: {
    singles: processProducts(makhanaProducts.makhana, "roastedMakhana"),
    combo: processProducts(makhanaProducts.makhana, "comboOfMakhana"),
  },
  tea: {
    singles: processProducts(teaProducts.tea, "tea"),
    combo: processProducts(teaProducts.tea, "teaCombo"),
  },
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
