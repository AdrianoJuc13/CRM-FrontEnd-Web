import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "sidemenu",
  initialState,
  reducers: {
    openSideMenu: (state, action) => {
      state.isOpen = true;
    },
    closeSideMenu: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { openSideMenu, closeSideMenu } = modalSlice.actions;

export default modalSlice.reducer;
