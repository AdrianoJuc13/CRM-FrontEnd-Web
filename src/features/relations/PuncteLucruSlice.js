import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  payload: [],
  error: "",
};

export const fetchPuncteLucru = createAsyncThunk(
  "/fetchPuncteLucru",
  async () => {
    return axios
      .get("http://63.250.60.35:5800/puncteLucru/getAll")
      .then((response) => response.data);
  }
);

const PuncteLucruSlice = createSlice({
  name: "punctelucru",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPuncteLucru.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPuncteLucru.fulfilled, (state, action) => {
      state.loading = false;
      state.payload = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPuncteLucru.rejected, (state, action) => {
      state.loading = false;
      state.payload = [];
      state.error = action.error.message;
    });
  },
});
export default PuncteLucruSlice.reducer;
