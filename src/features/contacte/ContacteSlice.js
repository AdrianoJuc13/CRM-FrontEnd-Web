import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  isOpenDown: false,
  currentId: "",
  loading: false,
  payload: [],
  error: "",
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
    openPopDown: (state, action) => {
      state.isOpenDown = true;
      state.currentId = action.payload;
    },
    closePopDown: (state, action) => {
      state.isOpenDown = false;
      state.currentId = "";
    },
  },
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
