import { store } from "../../../../store";
import { createAsyncThunk } from "@reduxjs/toolkit";

const axios = require("axios");

export const fetchOpportunities = createAsyncThunk(
  "opportunities/fetchOpportunities",
  async ({ page }) => {
    const state = store.getState();
    const authState = state.authentificationState;
    const configState = state.configurationState;
    const opportunitiesState = state.opportunitiesState;

    if (authState.isLoggedIn === false) throw Error("User is not logged in");

    if (page > opportunitiesState.lastOpportunityIds.length + 1 || page < 1) {
      throw Error("Page requested is incorect");
    }
    // eslint-disable-next-line
    const last_id = opportunitiesState.lastOpportunityIds[page - 1];

    const url = configState.backendHostname + "/opportunities/pagination";
    const headers = {
      Authorization: `${authState.token}`,
    };
    const params = {
      limita: configState.itemsPerPage,
      last_id: opportunitiesState.lastId,
    };
    return axios
      .get(url, {
        headers: headers,
        params: params,
      })
      .then((response) => response.data);
  }
);
