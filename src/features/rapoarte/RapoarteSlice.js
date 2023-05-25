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
export const fetchRapoarte = createAsyncThunk(
  "user/fetchRapoarte",
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

const RapoarteSlice = createSlice({
  name: "rapoarte",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRapoarte.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRapoarte.fulfilled, (state, action) => {
      state.loading = false;
      state.payload = action.payload;
      state.error = "";
    });
    builder.addCase(fetchRapoarte.rejected, (state, action) => {
      state.loading = false;
      state.payload = [];
      state.error = action.error.message;
    });
  },
});

export const { openPopUp, closePopUp, changePage } = RapoarteSlice.actions;

export default RapoarteSlice.reducer;
