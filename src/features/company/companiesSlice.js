import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

//import async thunk actions
import { fetchCompanies } from "./actions/fetchCompanies";
import { addCompany } from "./actions/addCompany";
import { updateCompany } from "./actions/updateCompany";
import { deleteCompany } from "./actions/deleteCompany";

const initialState = {
  loading: false,
  companies: [],
  itemsPerPage: 5,

  currentPage: 1,
  maximumPage: 1,

  hasMore: true,
  error: "",

  loadingAddCompany: false,
  errorAddCompany: "",

  loadingUpdateCompany: false,
  errorUpdateCompany: "",

  loadingDeleteCompany: false,
  errorDeleteCompany: "",
};

// Generates pending, fulfilled and rejected action types

const CompaniesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    setItemsPerPage(state, action) {
      const itemsNumber = action.payload.itemsNumber;
      if (typeof itemsNumber != "number") {
        throw Error("the number of items must pe of type number");
      }
      if (itemsNumber < 0) {
        throw Error("invaild value for number of items");
      }
      state.itemsPerPage = itemsNumber;
    },
    pageUp(state, action) {
      if (state.hasMore === true) {
        if (state.currentPage < state.maximumPage) {
          state.currentPage++;
        } else if (
          state.currentPage == state.maximumPage &&
          state.loading == false
        ) {
          state.currentPage++;
        }
      } else {
        state.error = "There are no more pages to load";
      }
    },
    pageDown(state) {
      if (state.currentPage >= 2) state.currentPage--;
    },
  },
  extraReducers: (builder) => {
    //fetch companies async thunk reducers
    //FETCH PENDING
    builder.addCase(fetchCompanies.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    //FETCH FULFILLED
    builder.addCase(fetchCompanies.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      console.log(action.payload);
      if (action.payload.status == 200) {
        state.pagesLoaded++;
        state.companies = state.companies.concat(action.payload.data);
        state.hasMore = action.payload.hasMore;
        state.lastId = state.companies[state.companies.length - 1].companie_id;
      } else {
        state.error = "There was an error while fetching companies";
      }
      // state.payload = action.payload.companies;
      state.error = "";
    });
    //FETCH REJECTED
    builder.addCase(fetchCompanies.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    //add company async thunk reducers
    builder.addCase(addCompany.pending, (state) => {
      state.loadingAddCompany = true;
      state.errorAddCompany = "";
    });
    builder.addCase(addCompany.fulfilled, (state, action) => {
      state.loadingAddCompany = false;
      state.errorAddCompany = "";
      if (action.payload.status != 200) {
        state.errorAddCompany = "There was an error while adding your company";
      }
    });
    builder.addCase(addCompany.rejected, (state, action) => {
      state.loadingAddCompany = false;
      state.errorAddCompany = action.error.message;
    });

    //update company async thunk reducers
    builder.addCase(updateCompany.pending, (state) => {
      state.loadingUpdateCompany = true;
      state.errorUpdateCompany = "";
    });
    builder.addCase(updateCompany.fulfilled, (state, action) => {
      console.log(action.payload);
      state.loadingUpdateCompany = false;
      state.errorUpdateCompany = "";
      if (action.payload.status != 200) {
        state.errorUpdateCompany =
          "There was an error while updating your company";
      }
    });
    builder.addCase(updateCompany.rejected, (state, action) => {
      state.loadingUpdateCompany = false;
      state.state.errorUpdateCompany = action.error.message;
    });

    //delete company async thunk reducers
    builder.addCase(deleteCompany.pending, (state) => {
      state.loadingDeleteCompany = true;
      state.errorDeleteCompany = "";
    });
    builder.addCase(deleteCompany.fulfilled, (state, action) => {
      state.loadingDeleteCompany = false;
      state.errorDeleteCompany = "";
      if (action.payload.status != 200) {
        state.errorDeleteCompany =
          "There was an error while deleting your company";
      }
    });
    builder.addCase(deleteCompany.rejected, (state, action) => {
      state.loadingDeleteCompany = false;
      state.errorDeleteCompany = action.error.message;
    });
  },
});

export const { pageUp, pageDown } = CompaniesSlice.actions;
export default CompaniesSlice.reducer;
