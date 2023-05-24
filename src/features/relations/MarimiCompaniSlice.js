import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  payload: [],
  error: "",
};

export const fetchMarimiCompani = createAsyncThunk(
  "/fetchMarimiCompani",
  async () => {
    return axios
      .get("http://63.250.60.35:5800/companii/marime_companii/getAll?=")
      .then((response) => response.data);
  }
);

const MarimiCompaniSlice = createSlice({
  name: "marimicompani",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMarimiCompani.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMarimiCompani.fulfilled, (state, action) => {
      state.loading = false;
      state.payload = action.payload;
      state.error = "";
    });
    builder.addCase(fetchMarimiCompani.rejected, (state, action) => {
      state.loading = false;
      state.payload = [];
      state.error = action.error.message;
    });
  },
});
export default MarimiCompaniSlice.reducer;
