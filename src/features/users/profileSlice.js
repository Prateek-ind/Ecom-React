import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  address: "",
  city: "",
  state: "",
  country: "India",
  pinCode: "",
  isLoaded: "",
};

const profileSlice = createSlice({
  name: "userProfile",
  initialState: initialState,
  reducers: {
    setProfile(state, action) {
      Object.assign(state, action.payload);
      state.isLoaded = true;
    },
    clearProfile() {
      return initialState;
    },
  },
});

export const profileActions = profileSlice.actions;
export default profileSlice.reducer;
