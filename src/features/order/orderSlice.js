import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchOrdersFromDb,
  fetchSingleOrderFromDb,
  placeOrderToDb,
} from "./orderAPI";

const initialState = {
  orders: [],
  currentOrder: null,
  loading: false,
  error: null,
  status: false,
};

export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async ({ uid }, thunkAPI) => {
    try {
      return await fetchOrdersFromDb({ uid });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchSingleOrder = createAsyncThunk(
  "orders/fetchSingleOrder",
  async ({ orderId, uid }, thunkAPI) => {
    try {
      return await fetchSingleOrderFromDb({ orderId, uid });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const placeOrder = createAsyncThunk(
  "orders/placeOrder",
  async ({ uid, orderDetails }, thunkAPI) => {
    try {
      return await placeOrderToDb({ uid, orderDetails });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrder(state, action) {
      state.orders = action.payload;
    },
    clearOrders(state) {
      state.orders = [];
      state.currentOrder = null;
      state.orderPlaced = false;
    },
    clearOrderPlaced(state) {
      state.orderPlaced = false;
    },
  },
  extraReducers: (builder) => {
    builder
      //fetch all orders
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //fetch single order
      .addCase(fetchSingleOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSingleOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.currentOrder = action.payload;
      })
      .addCase(fetchSingleOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //place order
      .addCase(placeOrder.pending, (state) => {
        state.loading = true;
        state.orderPlaced = false;
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders.push(action.payload);
        state.orderPlaced = true;
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const orderActions = orderSlice.actions;
export default orderSlice.reducer;
