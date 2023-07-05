import { combineReducers } from "@reduxjs/toolkit";

import AuthReducer from "./authentification/authentificationSlice";
import configurationReducer from "./configuration/configurationSlice";
import sideMenuReducer from "./sidemenu/SideMenuSlice";
import tableReducer from "./table/TableSlice";

//pages state
import companiesPageReducer from "./company/companiesSlice";
import contactsPageReducer from "./contact/contactsSlice";
import opportunitiesPageReducer from "./opportunity/opportunitiesSlice";
import actionPlanPageReducer from "./actionplan/actionPlanSlice";

const rootReducer = combineReducers({
  authentificationState: AuthReducer,
  configurationState: configurationReducer,
  sideMenuState: sideMenuReducer,
  tableState: tableReducer,

  //pages state
  companiesState: companiesPageReducer,
  contactsState: contactsPageReducer,
  opportunitiesState: opportunitiesPageReducer,
  actionPlanState: actionPlanPageReducer,
});

export default rootReducer;
