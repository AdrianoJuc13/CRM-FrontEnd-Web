import axios from "axios";
import { store } from "../../../store";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  companies: [],
  currentPage: 1,
  pagesLoaded: 0,
  lastId: "start",
  hasMore: true,
  error: "",
};

// Generates pending, fulfilled and rejected action types
export const fetchCompanies = createAsyncThunk(
  "companiesPage/fetchCompanies",
  async () => {
    const authState = store.getState().authentification;
    const configState = store.getState().configuration;
    const companiesPageState = store.getState().companiesPage;

    if (authState.isLoggedIn === false) throw Error("User is not logged in");

    const url = configState.backendHostname + "/companii/pagination";
    const headers = {
      Authorization: `${authState.token}`,
    };
    const params = {
      limita: configState.itemsPerPage,
      last_id: companiesPageState.lastId,
    };

    return axios
      .get(url, {
        headers: headers,
        params: params,
      })
      .then((response) => response.data);
  }
);

const CompaniesPageSlice = createSlice({
  name: "companiesPage",
  initialState,
  reducers: {
    pageUp(state, action) {
      if (state.hasMore === true) {
        if (state.currentPage <= state.pagesLoaded) {
          state.currentPage++;
        }
      } else {
        state.error = "There are no more pages to load";
      }
    },
    pageDown(state) {
      if (state.currentPage >= 2) state.currentPage--;
    },
    clearError(state) {
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCompanies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCompanies.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload);
      if (action.payload.status === 200) {
        state.pagesLoaded++;
        state.companies = state.companies.concat(action.payload.data);
        state.hasMore = action.payload.hasMore;
        state.lastId = state.companies[state.companies.length - 1].companie_id;
      }
      // state.payload = action.payload.companies;
      state.error = "";
    });
    builder.addCase(fetchCompanies.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { pageUp, pageDown, clearError } = CompaniesPageSlice.actions;
export default CompaniesPageSlice.reducer;
