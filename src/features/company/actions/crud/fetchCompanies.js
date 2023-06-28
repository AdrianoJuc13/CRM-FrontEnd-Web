import { store } from "../../../../store";
import { createAsyncThunk } from "@reduxjs/toolkit";

const axios = require("axios");

export const fetchCompanies = createAsyncThunk(
  "companies/fetchCompanies",
  async ({ page }) => {
    const state = store.getState();
    const authState = state.authentificationState;
    const configState = state.configurationState;
    const companiesState = state.companiesState;

    if (authState.isLoggedIn == false) throw Error("User is not logged in");

    if (page > companiesState.lastCompanyIds.length + 1 || page < 1) {
      throw Error("Page requested is incorect");
    }

    const last_id = companiesState.lastCompanyIds[page - 1];

    const url = configState.backendHostname + "/companii/pagination";
    const headers = {
      Authorization: `${authState.token}`,
    };
    const params = {
      limita: configState.itemsPerPage,
      last_id: companiesState.lastId,
    };
    return axios
      .get(url, {
        headers: headers,
        params: params,
      })
      .then((response) => response.data);
  }
);
