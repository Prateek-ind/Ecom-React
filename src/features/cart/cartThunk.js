import { createAsyncThunk } from "@reduxjs/toolkit";

const rdbUrl =
  "https://healthy-buddie-project-f6ce6-default-rtdb.firebaseio.com/";

let idToken = null;
export const setIdToken = (token) => {
  idToken = token;
};

export const fetchCartFromDB = createAsyncThunk(
  "cart/fetchCart",
  async (userId, thunkAPI) => {
    const url = `${rdbUrl}/carts/${userId}.json?auth=${idToken || ""}`;
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
    const url = `${rdbUrl}/carts/${userId}.json?auth=${idToken || ""}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cartItems),
    });
    if (!response.ok) throw new Error("Failed to save cart");
    return cartItems;
  }
);
