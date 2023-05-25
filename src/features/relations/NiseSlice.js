import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  payload: [],
  error: "",
};

export const fetchNise = createAsyncThunk("/fetchNise", async () => {
  return (
    axios
      // .get("http://63.250.60.35:5800/nise/getAll")
      .get("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.data)
  );
});

const NiseSlice = createSlice({
  name: "nise",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchNise.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchNise.fulfilled, (state, action) => {
      state.loading = false;
      state.payload = action.payload;
      state.error = "";
    });
    builder.addCase(fetchNise.rejected, (state, action) => {
      state.loading = false;
      state.payload = [];
      state.error = action.error.message;
    });
  },
});
export default NiseSlice.reducer;
