import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uid: null,
  email: null,
  token: null,
  tokenExpiry: null,
  isLoggedIn: false,
  authInitialized: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setAuthInitialized(state){
        state.authInitialized = true
    },
    login(state, action) {
      const { uid, email, token, tokenExpiry } = action.payload;
      state.uid = uid;
      state.email = email;
      state.isLoggedIn = true;
      state.token = token;
      state.tokenExpiry = tokenExpiry;
      localStorage.setItem("token", token);
      localStorage.setItem("uid", uid);
      localStorage.setItem("email", email);
      localStorage.setItem("tokenExpiry", tokenExpiry);
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = null;
      state.uid = null;
      state.email = null;
      state.tokenExpiry = null
      localStorage.removeItem("token");
      localStorage.removeItem("uid");
      localStorage.removeItem("email");
    },
    autoLogin(state, action) {
      const { uid, email, token, tokenExpiry } = action.payload;
      state.uid = uid;
      state.token = token;
      state.email = email;
      state.tokenExpiry = tokenExpiry;
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
