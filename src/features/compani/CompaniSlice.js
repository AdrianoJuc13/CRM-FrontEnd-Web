import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  payload: [],
  error: "",
};

// Generates pending, fulfilled and rejected action types
export const fetchCompani = createAsyncThunk("user/fetchCompani", async () => {
  return axios
    .get(
      // `${"https://jsonplaceholder.typicode.com/users/"}`
      `${"http://136.255.168.27:5800/companii/pagination?limita=10&last_id="}${"start"}`
    )
    .then((response) => response.data);
});

const CompaniSlice = createSlice({
  name: "compani",
  initialState,
  reducers: {},
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

// export const {
//   setIdPop,
//   openPopUp,
//   closePopUp,
//   changePage,
//   openPopDown,
//   closePopDown,
// } = CompaniSlice.actions;

export default CompaniSlice.reducer;
