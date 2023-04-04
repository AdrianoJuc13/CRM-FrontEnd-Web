import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  currentId: "",
};

const popUp = createSlice({
  name: "popup",
  initialState,
  reducers: {
    openPopUp: (state, action) => {
      state.isOpen = true;
      state.currentId = action.payload;
    },
    closePopUp: (state, action) => {
      state.isOpen = false;
      state.currentId = "";
    },
  },
});

export const { openPopUp, closePopUp } = popUp.actions;

export default popUp.reducer;
