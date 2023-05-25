import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  payload: [],
  error: "",

  currentId: "",
  page: 1,
};

// Generates pending, fulfilled and rejected action types
export const fetchOportunitati = createAsyncThunk(
  "user/fetchOportunitati",
  async () => {
    return axios
      .get(
        `${"https://jsonplaceholder.typicode.com/users/"}${
          initialState.currentId
        }`
      )
      .then((response) => response.data);
  }
);

const OportunitatiSlice = createSlice({
  name: "oportunitati",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOportunitati.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchOportunitati.fulfilled, (state, action) => {
      state.loading = false;
      state.payload = action.payload;
      state.error = "";
    });
    builder.addCase(fetchOportunitati.rejected, (state, action) => {
      state.loading = false;
      state.payload = [];
      state.error = action.error.message;
    });
  },
});

export const { openPopUp, closePopUp, changePage } = OportunitatiSlice.actions;

export default OportunitatiSlice.reducer;
