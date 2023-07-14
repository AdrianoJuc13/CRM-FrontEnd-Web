import React from "react"; // , { useEffect }
import {
  // useDispatch,
  useSelector,
} from "react-redux";
//---------------------------------

//styles imports
import styles from "../../styles/GeneralPagesFormat.module.scss";
//---------------------------------

// redux imports
import { setItemsPerPageProspecting } from "../../features/prospecting/prospectingSlice";
import {
  clearErrorProspecting,
  openPopup,
  setCurrentProspectingState,
  closePopUp,
} from "../../features/prospecting/prospectingSlice";
//---------------------------------

// my imports
import AddBtn from "../../components/Butoane/AddBtn";
import Tabel from "../../components/Tabel/Tabel";
import { PopUp } from "./Popup/PopUp";
// import { fetchProspecting } from "../../features/prospecting/actions/crud/fetchProspecting";
//---------------------------------

function ProspectingVisit() {
  // const dispatch = useDispatch();
  const { isPopupOpen } = useSelector((state) => state.prospectingState);

  // default request for companies
  // useEffect(() => {
  //   dispatch(fetchProspecting());
  // }, [dispatch]);
  //---------------------------------

  return (
    <div className={styles.pagina_principala}>
      {/* Top part contains title and add new element page */}
      <div className={styles.header}>
        <div className={styles.titlu}>Vizite de prospectare</div>
        <AddBtn
          name="Adauga o vizita de prospectare"
          link="/adauga_prospectare"
        />
      </div>
      {/* ------------------------------------- */}

      {/* Main table with the corensponding elements */}
      <Tabel
        table_column_name="prospecting_visit_table"
        table_column_key="prospecting_visit_keys_table"
        state_name="prospecting"
        setItemsPerPage={setItemsPerPageProspecting}
        clearErrorState={clearErrorProspecting}
        openPopup={openPopup}
        setCurrentState={setCurrentProspectingState}
      />
      {/* ------------------------------------- */}

      {/* popup call with details about each element */}
      <PopUp trigger={isPopupOpen} closePopUp={closePopUp} />
      {/* ------------------------------------- */}
    </div>
  );
}

export default ProspectingVisit;
