import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  backendHostname: "http://136.255.168.27:5800",
  itemsPerPage: 5,
  error: "",
};

// Generates pending, fulfilled and rejected action types
const configurationSlice = createSlice({
  name: "configuration",
  initialState,
  reducers: {
    changeItemsPerPage(state, action) {
      state.itemsPerPage = action.payload.number;
    },
    changeBackendHostname(state, action) {
      state.backendHostname = action.payload.hostname;
    },
  },
});

export const { changeItemsPerPage, changeBackendHostname } =
  configurationSlice.actions;
export default configurationSlice.reducer;
