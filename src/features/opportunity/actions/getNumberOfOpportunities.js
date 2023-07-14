import { store } from "../../../store";
import { createAsyncThunk } from "@reduxjs/toolkit";

const axios = require("axios");

export const getNumberOfOpportunities = createAsyncThunk(
  "contacts/getNumberOfContacts",
  async () => {
    const state = store.getState();
    const authState = state.authentificationState;
    const opportunitiesState = state.opportunitiesState;
    const configState = state.configurationState;
    if (authState.isLoggedIn === false) throw Error("User is not logged in");

    const url = configState.backendHostname + "/opportunities/getNumber";
    const headers = {
      Authorization: `${authState.token}`,
    };
    const params = {
      limit: opportunitiesState.itemsPerPage,
      page: opportunitiesState.currentPage,
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
