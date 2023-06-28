import { store } from "../../store";
import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  isLoggedIn: false,
  token: "",
  uid: "",
  username: "",
  error: "",
};

// Generates pending, fulfilled and rejected action types
export const fetchLogin = createAsyncThunk(
  "authentification/fetchLogin",
  async ({ email, password }) => {
    const configState = store.getState().configurationState;
    return axios
      .post(`${configState.backendHostname}/auth/login`, {
        email: email,
        password: password,
      })
      .then((response) => response.data);
  }
);

export const fetchRegister = createAsyncThunk(
  "authentification/fetchRegister",
  async ({ email, password }) => {
    const configState = store.getState().configurationState;
    const response = await axios.post(
      `${configState.backendHostname}/auth/register`,
      {
        email: email,
        password: password,
      }
    );
    return response.data;
  }
);

const AuthSlice = createSlice({
  name: "authentification",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload);
      if (action.payload.success === true) {
        state.token = action.payload.token;
        state.username = action.payload.user;
        state.isLoggedIn = true;
      } else {
        state.error = "An error occured in login process";
      }
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = "An error occured in login process";
    });

    builder.addCase(fetchRegister.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRegister.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload);
      if (action.payload.success === true) {
        state.token = action.payload.token;
        state.username = action.payload.user;
        state.isLoggedIn = true;
      } else {
        state.loading = false;
        state.error = "An error occured in registration process";
      }
    });
    builder.addCase(fetchRegister.rejected, (state, action) => {
      state.loading = false;
      console.log(action);
      state.error = "An error occured in registration process";
    });
  },
});

export default AuthSlice.reducer;
