import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isOpenUp: false,
  isOpenDown: false,
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
    setIdPop: (state, action) => {
      state.currentId = action.payload;
    },
    openPopUp: (state, action) => {
      state.isOpenUp = true;
    },
    closePopUp: (state, action) => {
      state.isOpenUp = false;
    },
    changePage: (state, action) => {
      state.page = action.payload;
    },

    openPopDown: (state, action) => {
      state.isOpenDown = true;
    },
    closePopDown: (state, action) => {
      state.isOpenDown = false;
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

export const {
  setIdPop,
  openPopUp,
  closePopUp,
  changePage,
  openPopDown,
  closePopDown,
} = CompaniSlice.actions;

export default CompaniSlice.reducer;
