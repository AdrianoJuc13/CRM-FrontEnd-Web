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
import { setItemsPerPageOpportunities } from "../../features/opportunity/opportunitiesSlice";
import {
  clearErrorOpportunities,
  openPopup,
  setCurrentOpportunityState,
  closePopUp,
} from "../../features/opportunity/opportunitiesSlice";
//---------------------------------

// my imports
import AddBtn from "../../components/Butoane/AddBtn";
import Tabel from "../../components/Tabel/Tabel";
import { PopUp } from "./Popup/PopUp";
// import { fetchOpportunities } from "../../features/opportunity/actions/crud/fetchOpportunities";
//---------------------------------

function Opportunitites() {
  // const dispatch = useDispatch();
  const { isPopupOpen } = useSelector((state) => state.opportunitiesState);

  // default request for opportunities
  // useEffect(() => {
  //   dispatch(fetchOpportunities());
  // }, [dispatch]);
  //---------------------------------

  return (
    <div className={styles.pagina_principala}>
      {/* Top part contains title and add new element page */}
      <div className={styles.header}>
        <div className={styles.titlu}>Oportunitati</div>
        <AddBtn name="Adauga o oportunitate" link="/adauga_oportunitate" />
      </div>
      {/* ------------------------------------- */}

      {/* Main table with the corensponding elements */}
      <Tabel
        table_column_name="oportunity_table"
        table_column_key="oportunity_keys_table"
        state_name="opportunities"
        setItemsPerPage={setItemsPerPageOpportunities}
        clearErrorState={clearErrorOpportunities}
        openPopup={openPopup}
        setCurrentState={setCurrentOpportunityState}
      />
      {/* ------------------------------------- */}

      {/* popup call with details about each element */}
      <PopUp trigger={isPopupOpen} closePopUp={closePopUp} />
      {/* ------------------------------------- */}
    </div>
  );
}

export default Opportunitites;
