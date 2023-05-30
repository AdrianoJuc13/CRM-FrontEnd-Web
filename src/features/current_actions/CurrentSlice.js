import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  currentId: -1,
  page: 0,
  currentName: "",
};

const CurrentSlice = createSlice({
  name: "current",
  initialState,
  reducers: {
    openPop: (state, action) => {
      state.isOpen = true;
      state.currentId = action.payload;
    },
    closePop: (state, action) => {
      state.isOpen = false;
      state.currentId = -1;
    },
    changePage: (state, action) => {
      state.page = action.payload;
    },
    changeCurrentName: (state, action) => {
      state.currentName = action.payload;
    },
  },
});

export const { openPop, closePop, changePage, changeCurrentName } =
  CurrentSlice.actions;

export default CurrentSlice.reducer;
