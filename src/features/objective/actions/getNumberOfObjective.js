import { store } from "../../../store";
import { createAsyncThunk } from "@reduxjs/toolkit";

const axios = require("axios");

export const getNumberOfObjective = createAsyncThunk(
  "objective/getNumberOfObjective",
  async () => {
    const state = store.getState();
    const authState = state.authentificationState;
    const objectiveState = state.objectiveState;
    const configState = state.configurationState;
    if (authState.isLoggedIn === false) throw Error("User is not logged in");

    const url = configState.backendHostname + "/prospectare/getNumber";
    const headers = {
      Authorization: `${authState.token}`,
    };
    const params = {
      limit: objectiveState.itemsPerPage,
      page: objectiveState.currentPage,
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
