import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const sideMenuSlice = createSlice({
  name: "sideMenu",
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

export const { openSideMenu, closeSideMenu } = sideMenuSlice.actions;

export default sideMenuSlice.reducer;
