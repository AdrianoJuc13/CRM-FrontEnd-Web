import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  currentId: "",
  loading: false,
  payload: [],
  error: "",
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
  reducers: {
    openPopUp: (state, action) => {
      state.isOpen = true;
      state.currentId = action.payload;
    },
    closePopUp: (state, action) => {
      state.isOpen = false;
      state.currentId = "";
    },
    changePage: (state, action) => {
      state.page = action.payload;
    },
  },
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
