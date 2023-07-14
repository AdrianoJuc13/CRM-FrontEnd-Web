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
import { setItemsPerPageReport } from "../../features/report/reportSlice";
import {
  clearErrorReport,
  openPopup,
  setCurrentReportState,
  closePopUp,
} from "../../features/report/reportSlice";
//---------------------------------

// my imports
import AddBtn from "../../components/Butoane/AddBtn";
import Tabel from "../../components/Tabel/Tabel";
import { PopUp } from "./Popup/PopUp";
// import { fetchReport } from "../../features/report/actions/crud/fetchReport";
//---------------------------------

function Reports() {
  // const dispatch = useDispatch();
  const { isPopupOpen } = useSelector((state) => state.reportsState);

  // default request for companies
  // useEffect(() => {
  // dispatch(fetchReport());
  // }, [dispatch]);
  //---------------------------------

  return (
    <div className={styles.pagina_principala}>
      {/* Top part contains title and add new element page */}
      <div className={styles.header}>
        <div className={styles.titlu}>Rapoarte</div>
        <AddBtn name="Adauga un raport" link="/adauga_raport" />
      </div>
      {/* ------------------------------------- */}

      {/* Main table with the corensponding elements */}
      <Tabel
        table_column_name="report_table"
        table_column_key="report_keys_table"
        state_name="reports"
        setItemsPerPage={setItemsPerPageReport}
        clearErrorState={clearErrorReport}
        openPopup={openPopup}
        setCurrentState={setCurrentReportState}
      />
      {/* ------------------------------------- */}

      {/* popup call with details about each element */}
      <PopUp trigger={isPopupOpen} closePopUp={closePopUp} />
      {/* ------------------------------------- */}
    </div>
  );
}

export default Reports;
