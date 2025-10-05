import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalQuantity: 0, totalAmount: 0 }

 const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {}
})

export default cartSlice.reducer;
export const cartActions = cartSlice.actions
