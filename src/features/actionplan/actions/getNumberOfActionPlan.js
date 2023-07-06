import { store } from "../../../store";
import { createAsyncThunk } from "@reduxjs/toolkit";

const axios = require("axios");

export const getNumberOfActionPlan = createAsyncThunk(
  "actionplan/getNumberOfActionPlan",
  async () => {
    const state = store.getState();
    const authState = state.authentificationState;
    const actionPlanState = state.actionPlanState;
    const configState = state.configurationState;
    if (authState.isLoggedIn === false) throw Error("User is not logged in");

    const url = configState.backendHostname + "/actionplan/getNumber";
    const headers = {
      Authorization: `${authState.token}`,
    };
    const params = {
      limit: actionPlanState.itemsPerPage,
      page: actionPlanState.currentPage,
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
