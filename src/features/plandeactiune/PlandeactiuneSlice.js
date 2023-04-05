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
export const fetchPlandeactiune = createAsyncThunk(
  "user/fetchPlandeactiune",
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

const PlandeactiuneSlice = createSlice({
  name: "plandeactiune",
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
    builder.addCase(fetchPlandeactiune.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPlandeactiune.fulfilled, (state, action) => {
      state.loading = false;
      state.payload = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPlandeactiune.rejected, (state, action) => {
      state.loading = false;
      state.payload = [];
      state.error = action.error.message;
    });
  },
});

export const { openPopUp, closePopUp, changePage } = PlandeactiuneSlice.actions;

export default PlandeactiuneSlice.reducer;
