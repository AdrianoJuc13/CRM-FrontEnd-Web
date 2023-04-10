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
export const fetchCompani = createAsyncThunk("user/fetchCompani", async () => {
  return axios
    .get(
      `${"http://63.250.60.35:5800/companii/pagination?limita=10&last_id="}${"start"}`
    )
    .then((response) => response.data);
});

const CompaniSlice = createSlice({
  name: "compani",
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
    builder.addCase(fetchCompani.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCompani.fulfilled, (state, action) => {
      state.loading = false;
      state.payload = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCompani.rejected, (state, action) => {
      state.loading = false;
      state.payload = [];
      state.error = action.error.message;
    });
  },
});

export const { openPopUp, closePopUp, changePage } = CompaniSlice.actions;

export default CompaniSlice.reducer;
