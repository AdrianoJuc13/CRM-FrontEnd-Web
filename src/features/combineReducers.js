import { combineReducers } from "@reduxjs/toolkit";

import AuthReducer from "./authentification/authentificationSlice";
import configurationReducer from "./configuration/configurationSlice";
import companiesPageReducer from "./company/companiesSlice";
import sideMenuReducer from "./sidemenu/SideMenuSlice";
import tableReducer from "./table/TableSlice";

const rootReducer = combineReducers({
  authentificationState: AuthReducer,
  configurationState: configurationReducer,
  companiesState: companiesPageReducer,
  sideMenuState: sideMenuReducer,
  tableState: tableReducer,
});

export default rootReducer;
