import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  payload: [],
  error: "",
};

// Generates pending, fulfilled and rejected action types
export const fetchLogin = createAsyncThunk("user/fetchLogin", async () => {
  return axios
    .post(`${"http://136.255.168.27:5800/auth/login"}`, {
      email: "matei.anutei24@gmail.com",
      password: "test123",
    })
    .then((response) => response.data);
});

const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.payload = action.payload;
      state.error = "";
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.loading = false;
      state.payload = [];
      state.error = action.error.message;
    });
  },
});

export default LoginSlice.reducer;
