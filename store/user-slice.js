import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isLoggedIn: false,
    errorMessage: " ",
    userimg:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  reducers: {
    login(state, action) {
      state.user = {
        username: action.payload.username.split("@")[0],
        password: action.payload.password,
      };
      state.isLoggedIn = true;
      state.setErrorMessage = " ";
    },
    logout(state, action) {
      state.user = null;
      state.isLoggedIn = false;
      state.errorMessage = " ";
    },
    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
    setImage(state, action) {
      state.userimg = action.payload;
    },
  },
});
export const UserActions = userSlice.actions;
export default userSlice;
