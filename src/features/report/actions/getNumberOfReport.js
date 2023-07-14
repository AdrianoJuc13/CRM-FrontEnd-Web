import { store } from "../../../store";
import { createAsyncThunk } from "@reduxjs/toolkit";

const axios = require("axios");

export const getNumberOfReport = createAsyncThunk(
  "report/getNumberOfReport",
  async () => {
    const state = store.getState();
    const authState = state.authentificationState;
    const reportState = state.reportState;
    const configState = state.configurationState;
    if (authState.isLoggedIn === false) throw Error("User is not logged in");

    const url = configState.backendHostname + "/prospectare/getNumber";
    const headers = {
      Authorization: `${authState.token}`,
    };
    const params = {
      limit: reportState.itemsPerPage,
      page: reportState.currentPage,
    };
    return axios
      .get(url, {
        headers: headers,
        params: params,
      })
      .then((response) => {
        return response.data;
      });
  }
);
