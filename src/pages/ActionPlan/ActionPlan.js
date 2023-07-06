import React from "react"; // , { useEffect }
import {
  //  useDispatch,
  useSelector,
} from "react-redux";
//---------------------------------

//styles imports
import styles from "../../styles/GeneralPagesFormat.module.scss";
//---------------------------------

// redux imports
import { setItemsPerPageActionPlan } from "../../features/actionplan/actionPlanSlice";
import {
  clearErrorActionPlan,
  openPopup,
  setCurrentActionPlanState,
  closePopUp,
} from "../../features/actionplan/actionPlanSlice";
//---------------------------------

// my imports
import AddBtn from "../../components/Butoane/AddBtn";
import Tabel from "../../components/Tabel/Tabel";
import { PopUp } from "./Popup/PopUp";
// import { fetchActionPlan } from "../../features/actionplan/actions/crud/fetchActionPlan";
//---------------------------------

function ActionPlan() {
  // const dispatch = useDispatch();
  const { isPopupOpen } = useSelector((state) => state.actionPlanState);

  // default request for action plan
  // useEffect(() => {
  //   dispatch(fetchActionPlan());
  // }, [dispatch]);
  //---------------------------------

  return (
    <div className={styles.pagina_principala}>
      {/* Top part contains title and add new element page */}
      <div className={styles.header}>
        <div className={styles.titlu}>Plan de actiuni</div>
        <AddBtn name="Adauga o actiune" link="/adauga_actiune" />
      </div>
      {/* ------------------------------------- */}

      {/* Main table with the corensponding elements */}
      <Tabel
        table_column_name="action_plan_table"
        table_column_key="action_plan_keys_table"
        state_name="actionPlan"
        setItemsPerPage={setItemsPerPageActionPlan}
        clearErrorState={clearErrorActionPlan}
        openPopup={openPopup}
        setCurrentState={setCurrentActionPlanState}
      />
      {/* ------------------------------------- */}

      {/* popup call with details about each element */}
      <PopUp trigger={isPopupOpen} closePopUp={closePopUp} />
      {/* ------------------------------------- */}
    </div>
  );
}

export default ActionPlan;
