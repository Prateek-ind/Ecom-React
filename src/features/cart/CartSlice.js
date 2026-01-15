import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const rdbUrl =
  "https://healthy-buddie-project-f6ce6-default-rtdb.firebaseio.com/";

const updateShipping = (state) => {
  state.shipping = state.totalAmount >= state.freeShippingThreshold ? 0 : 100;
};

const initialState = {
  items: {},
  orderNote: "",
  totalQuantity: 0,
  totalAmount: 0,
  shipping: 100,
  freeShippingThreshold: 308.5,
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
      updateShipping(state);
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
      updateShipping(state);
    },
    deleteFromCart(state, action) {
      const product = action.payload;
      const id = product.id;
      if (!state.items[id]) return;

      state.totalQuantity -= state.items[id].quantity;
      state.totalAmount -=
        state.items[id].quantity * Number(state.items[id].discountedPrice);

      delete state.items[id];
      updateShipping(state);
    },
    setOrderNote(state, action) {
      state.orderNote = action.payload;
    },
    clearCart(state) {
      state.items = {};
      state.totalQuantity = 0;
      state.totalAmount = 0;
      state.orderNote = "";
      state.shipping = 100;
    },
    replaceCart(state, action) {
      state.items = action.payload.items || {};
      state.totalQuantity = action.payload.totalQuantity || 0;
      state.totalAmount = action.payload.totalAmount || 0;
      state.orderNote = action.payload.orderNote || "";
      updateShipping(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartFromDB.fulfilled, (state, action) => {
        state.items = action.payload;
        state.totalQuantity = Object.values(action.payload).reduce(
          (sum, item) => sum + item.quantity,
          0
        );
        state.totalAmount = Object.values(action.payload).reduce(
          (sum, item) => sum + item.quantity * Number(item.discountedPrice),
          0
        );
        updateShipping(state);
      })
      .addCase(saveCartToDB.fulfilled, (state, action) => {
        state.items = action.payload;
        updateShipping(state);
      });
  },
});

export const fetchCartFromDB = createAsyncThunk(
  "cart/fetchCart",
  async ({ userId }, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.user.token;
    const url = `${rdbUrl}/carts/${userId}.json?auth=${token || ""}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch cart");
    }
    const data = await response.json();
    return data || {};
  }
);

export const saveCartToDB = createAsyncThunk(
  "cart/saveCart",
  async ({ userId, cartItems }, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.user.token;
    const url = `${rdbUrl}/carts/${userId}.json?auth=${token || ""}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cartItems),
    });
    if (!response.ok) throw new Error("Failed to save cart");
    return cartItems;
  }
);

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
