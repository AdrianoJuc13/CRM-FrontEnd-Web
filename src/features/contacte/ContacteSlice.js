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
export const fetchContacte = createAsyncThunk(
  "user/fetchContacte",
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

const ContacteSlice = createSlice({
  name: "contacte",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContacte.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchContacte.fulfilled, (state, action) => {
      state.loading = false;
      state.payload = action.payload;
      state.error = "";
    });
    builder.addCase(fetchContacte.rejected, (state, action) => {
      state.loading = false;
      state.payload = [];
      state.error = action.error.message;
    });
  },
});

export const { openPopDown, closePopDown, openPopUp, closePopUp, changePage } =
  ContacteSlice.actions;

export default ContacteSlice.reducer;
