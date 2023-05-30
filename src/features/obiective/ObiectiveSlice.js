import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  payload: [],
  error: "",
};

// Generates pending, fulfilled and rejected action types
export const fetchObiective = createAsyncThunk(
  "user/fetchObiective",
  async () => {
    return axios
      .get(`${"https://jsonplaceholder.typicode.com/users/"}`)
      .then((response) => response.data);
  }
);

const ObiectiveSlice = createSlice({
  name: "obiective",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchObiective.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchObiective.fulfilled, (state, action) => {
      state.loading = false;
      state.payload = action.payload;
      state.error = "";
    });
    builder.addCase(fetchObiective.rejected, (state, action) => {
      state.loading = false;
      state.payload = [];
      state.error = action.error.message;
    });
  },
});

// export const { openPopUp, closePopUp, changePage } = ObiectiveSlice.actions;

export default ObiectiveSlice.reducer;
