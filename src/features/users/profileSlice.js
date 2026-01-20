import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  address: "",
  addressOptional: "",
  city: "",
  state: "",
  country: "India",
  pinCode: "",
  isLoaded: false,
};

const profileSlice = createSlice({
  name: "userProfile",
  initialState: initialState,
  reducers: {
    setProfile(state, action) {
      const profileData = action.payload || {}
      state.firstName = profileData.firstName || "";
      state.lastName = profileData.lastName || "";
      state.phoneNumber = profileData.phoneNumber || "";
      state.address = profileData.address || "";
      state.addressOptional = profileData.addressOptional || "";
      state.city = profileData.city || "";
      state.state = profileData.state || "";
      state.country = profileData.country || "India";
      state.pinCode = profileData.pinCode || "";
      state.isLoaded = true;
    },
    clearProfile() {
      return initialState;
    },
  },
});

export const profileActions = profileSlice.actions;
export default profileSlice.reducer;
