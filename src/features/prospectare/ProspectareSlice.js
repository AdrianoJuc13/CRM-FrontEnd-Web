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
export const fetchProspectare = createAsyncThunk(
  "user/fetchProspectare",
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

const ProspectareSlice = createSlice({
  name: "prospectare",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProspectare.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProspectare.fulfilled, (state, action) => {
      state.loading = false;
      state.payload = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProspectare.rejected, (state, action) => {
      state.loading = false;
      state.payload = [];
      state.error = action.error.message;
    });
  },
});

export const { openPopUp, closePopUp, changePage } = ProspectareSlice.actions;

export default ProspectareSlice.reducer;
