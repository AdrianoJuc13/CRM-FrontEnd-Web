import { configureStore } from "@reduxjs/toolkit";
import sidemenuReducer from "./features/sidemenu/SideMenuSlice";
import companiReducer from "./features/compani/CompaniSlice";
import contacteReducer from "./features/contacte/ContacteSlice";
import oportunitatiReducer from "./features/oportunitati/OportunitatiSlice";
export const store = configureStore({
  reducer: {
    sidemenu: sidemenuReducer,
    compani: companiReducer,
    contacte: contacteReducer,
    oportunitati: oportunitatiReducer,
  },
});
