import { configureStore } from "@reduxjs/toolkit";
import sidemenuReducer from "./features/sidemenu/SideMenuSlice";
import companiReducer from "./features/compani/CompaniSlice";
import contacteReducer from "./features/contacte/ContacteSlice";
import oportunitatiReducer from "./features/oportunitati/OportunitatiSlice";
import plandeactiuneReducer from "./features/plandeactiune/PlandeactiuneSlice";
import prospectareReducer from "./features/prospectare/ProspectareSlice";
import obiectiveReducer from "./features/obiective/ObiectiveSlice";
import rapoarteReducer from "./features/rapoarte/RapoarteSlice";

export const store = configureStore({
  reducer: {
    sidemenu: sidemenuReducer,
    compani: companiReducer,
    contacte: contacteReducer,
    oportunitati: oportunitatiReducer,
    plandeactiune: plandeactiuneReducer,
    prospectare: prospectareReducer,
    obiective: obiectiveReducer,
    rapoarte: rapoarteReducer,
  },
});
