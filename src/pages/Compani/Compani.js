import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//---------------------------------

//styles imports
import styles from "../../styles/GeneralPagesFormat.module.scss";
//---------------------------------

// redux imports
// import { fetchCompanies } from "../../features/company/actions/crud/fetchCompanies";
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
import { PopUpCompany } from "./PopupCompany/PopUpCompany";
//---------------------------------

function Compani() {
  const dispatch = useDispatch();
  const { isPopupOpen } = useSelector((state) => state.companiesState);

  // default request for companies
  useEffect(() => {
    // dispatch(fetchCompanies());
  }, [dispatch]);
  //---------------------------------

  return (
    <div className={styles.pagina_principala}>
      {/* Top part contains title and add new element page */}
      <div className={styles.header}>
        <div className={styles.titlu}>Companii</div>
        <AddBtn name="Adauga o noua companie" link="/adauga_companie" />
      </div>
      {/* ------------------------------------- */}

      {/* Main table with the corensponding elements */}
      <Tabel
        table_column_name="companii_tabel"
        table_column_key="company_keys_table"
        state_name="companies"
        setItemsPerPage={setItemsPerPageCompanies}
        clearErrorState={clearErrorCompanies}
        openPopup={openPopup}
        setCurrentState={setCurrentCompanyState}
      />
      {/* ------------------------------------- */}

      {/* popup call with details about each element */}
      <PopUpCompany trigger={isPopupOpen} closePopUp={closePopUp} />
      {/* ------------------------------------- */}
    </div>
  );
}

export default Compani;
