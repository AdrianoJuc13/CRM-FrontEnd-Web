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
import { setItemsPerPageObjective } from "../../features/objective/objectiveSlice";
import {
  clearErrorObjective,
  openPopup,
  setCurrentObjectiveState,
  closePopUp,
} from "../../features/objective/objectiveSlice";
//---------------------------------

// my imports
import AddBtn from "../../components/Butoane/AddBtn";
import Tabel from "../../components/Tabel/Tabel";
import { PopUp } from "./Popup/PopUp";
// import { fetchObjective } from "../../features/objective/actions/crud/fetchObjective";
//---------------------------------

function Objectives() {
  // const dispatch = useDispatch();
  const { isPopupOpen } = useSelector((state) => state.objectivesState);

  // default request for companies
  // useEffect(() => {
  //   dispatch(fetchObjective());
  // }, [dispatch]);
  //---------------------------------

  return (
    <div className={styles.pagina_principala}>
      {/* Top part contains title and add new element page */}
      <div className={styles.header}>
        <div className={styles.titlu}>Obiective</div>
        <AddBtn name="Adauga un obiectiv" link="/adauga_obiectiv" />
      </div>
      {/* ------------------------------------- */}

      {/* Main table with the corensponding elements */}
      <Tabel
        table_column_name="objective_table"
        table_column_key="objective_keys_table"
        state_name="objectives"
        setItemsPerPage={setItemsPerPageObjective}
        clearErrorState={clearErrorObjective}
        openPopup={openPopup}
        setCurrentState={setCurrentObjectiveState}
      />
      {/* ------------------------------------- */}

      {/* popup call with details about each element */}
      <PopUp trigger={isPopupOpen} closePopUp={closePopUp} />
      {/* ------------------------------------- */}
    </div>
  );
}

export default Objectives;
