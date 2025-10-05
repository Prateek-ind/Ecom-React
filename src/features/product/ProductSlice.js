import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], loading: false, error: null }

 const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {}
})

export default productSlice.reducer;
export const productActions = productSlice.actions
