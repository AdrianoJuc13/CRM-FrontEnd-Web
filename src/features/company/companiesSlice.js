import { createSlice } from "@reduxjs/toolkit";

//import async thunk actions
import { fetchCompanies } from "./actions/crud/fetchCompanies";
import { addCompany } from "./actions/crud/addCompany";
import { updateCompany } from "./actions/crud/updateCompany";
import { deleteCompany } from "./actions/crud/deleteCompany";

//import ASYNC THUNK ACTIONS HANDLERS FOR ADD COMPANY
import { addCompanyPending } from "./handle_async_thunk/addCompany/pending";
import addCompanyFulfilled from "./handle_async_thunk/addCompany/fulfilled";
import addCompanyRejected from "./handle_async_thunk/addCompany/rejected";

//import ASYNC THUNK ACTIONS HANDLERS FOR UPDATE COMPANY
import updateCompanyPending from "./handle_async_thunk/updateCompany/pending";
import updateCompanyFulfilled from "./handle_async_thunk/updateCompany/fulfilled";
import updateCompanyRejected from "./handle_async_thunk/updateCompany/rejected";

//import ASYNC THUNK ACTIONS HANDLERS FOR DELETE COMPANY
import deleteCompanyPending from "./handle_async_thunk/deleteCompany/pending";
import deleteCompanyFulfilled from "./handle_async_thunk/deleteCompany/fulfilled";
import deleteCompanyRejected from "./handle_async_thunk/deleteCompany/rejected";

//import ASYNC THUNK ACTIONS HANDLERS FOR FETCH COMPANY
import fetchCompaniesPending from "./handle_async_thunk/fetchCompanies/pending";
import fetchCompaniesFulfilled from "./handle_async_thunk/fetchCompanies/fulfilled";
import fetchCompaniesRejected from "./handle_async_thunk/fetchCompanies/rejected";

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
    builder.addCase(fetchCompanies.pending, fetchCompaniesPending());
    builder.addCase(fetchCompanies.fulfilled, fetchCompaniesFulfilled());
    builder.addCase(fetchCompanies.rejected, fetchCompaniesRejected());

    //add company async thunk reducers
    builder.addCase(addCompany.pending, addCompanyPending());
    builder.addCase(addCompany.fulfilled, addCompanyFulfilled());
    builder.addCase(addCompany.rejected, addCompanyRejected());

    //update company async thunk reducers
    builder.addCase(updateCompany.pending, updateCompanyPending());
    builder.addCase(updateCompany.fulfilled, updateCompanyFulfilled());
    builder.addCase(updateCompany.rejected, updateCompanyRejected());

    //delete company async thunk reducers
    builder.addCase(deleteCompany.pending, deleteCompanyPending());
    builder.addCase(deleteCompany.fulfilled, deleteCompanyFulfilled());
    builder.addCase(deleteCompany.rejected, deleteCompanyRejected());
  },
});

export const { pageUp, pageDown } = CompaniesSlice.actions;
export default CompaniesSlice.reducer;
