import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//---------------------------------

//styles imports
import styles from "../../styles/GeneralPagesFormat.module.scss";
//---------------------------------

// redux imports
import { setItemsPerPageCompanies } from "../../features/company/companiesSlice";
import {
  clearErrorCompanies,
  openPopup,
  setCurrentCompanyState,
  closePopUp,
} from "../../features/company/companiesSlice";
//---------------------------------

// my imports
import AddBtn from "../../components/Butoane/AddBtn";
import Tabel from "../../components/Tabel/Tabel";
import { PopUp } from "./Popup/PopUp";
//---------------------------------

function Reports() {
  // const dispatch = useDispatch();
  const { isPopupOpen } = useSelector((state) => state.companiesState);

  // default request for companies
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  //---------------------------------

  return (
    <div className={styles.pagina_principala}>
      {/* Top part contains title and add new element page */}
      <div className={styles.header}>
        <div className={styles.titlu}>Rapoarte</div>
        <AddBtn name="Adauga un contact" link="/adauga_contact" />
      </div>
      {/* ------------------------------------- */}

      {/* Main table with the corensponding elements */}
      <Tabel
        table_column_name="contacte_tabel"
        table_column_key="contacts_keys_table"
        state_name="companies"
        setItemsPerPage={setItemsPerPageCompanies}
        clearErrorState={clearErrorCompanies}
        openPopup={openPopup}
        setCurrentState={setCurrentCompanyState}
      />
      {/* ------------------------------------- */}

      {/* popup call with details about each element */}
      <PopUp trigger={isPopupOpen} closePopUp={closePopUp} />
      {/* ------------------------------------- */}
    </div>
  );
}

export default Reports;
