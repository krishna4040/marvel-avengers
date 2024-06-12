import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  email: "",
  image: "",
  status: false,
};

const userSlice = createSlice({
  name: "user-slice",
  initialState,
  reducers: {
    _login: (state, action: any) => {
      state.id = action.id;
      state.name = action.name;
      state.email = action.email;
      state.image = action.image;
      state.status = action.status;
    },
    _logout: (state, action) => {
      state.id = "";
      state.name = "";
      state.email = "";
      state.image = "";
      state.status = false;
    },
  },
});

export const { _login, _logout } = userSlice.actions;

export default userSlice.reducer;
