import { store } from "../../../store";
import { createAsyncThunk } from "@reduxjs/toolkit";

const axios = require("axios");

export const getNumberOfCompanies = createAsyncThunk(
  "companies/getNumberOfCompanies",
  async ({}) => {
    const state = store.getState();
    const authState = state.authentificationState;
    const companiesState = state.companiesState;
    const configState = state.configurationState;
    if (authState.isLoggedIn == false) throw Error("User is not logged in");

    const url = configState.backendHostname + "/companii/getNumber";
    const headers = {
      Authorization: `${authState.token}`,
    };
    const params = {
      limit: companiesState.itemsPerPage,
      page: companiesState.currentPage,
    };
    return axios
      .get(url, {
        headers: headers,
        params: params,
      })
      .then((response) => {
        {
          return response.data;
        }
      });
  }
);
