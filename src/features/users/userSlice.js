import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  userName: null,
  email: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {
    login(state, action) {
      const { userId, userName, email, token } = action.payload;
      state.userId = userId;
      state.userName = userName;
      state.email = email;
      state.isLoggedIn = true;

      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      localStorage.setItem("email", email);
    },
    logout(state) {
      state.isLoggedIn = false;

      state.userId = null;
      state.userName = null;
      state.email = null;

      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("email");
    },
    autoLogin(state, action) {
      const { userId, email, token } = action.payload;
      state.userId = userId;
      state.token = token;
      state.email = email;
      state.isLoggedIn = true;
    },
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
