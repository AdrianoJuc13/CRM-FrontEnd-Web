import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//---------------------------------

//styles imports
import styles from "../../styles/GeneralPagesFormat.module.scss";
//---------------------------------

// redux imports
import { setItemsPerPageContacts } from "../../features/contact/contactsSlice";
import {
  clearErrorContacts,
  openPopup,
  setCurrentContactState,
  closePopUp,
} from "../../features/contact/contactsSlice";
//---------------------------------

// my imports
import AddBtn from "../../components/Butoane/AddBtn";
import Tabel from "../../components/Tabel/Tabel";
import { PopUp } from "./Popup/PopUp";
// import { fetchContacts } from "../../features/contact/actions/crud/fetchContact";
//---------------------------------

function Contacts() {
  const dispatch = useDispatch();
  const { isPopupOpen } = useSelector((state) => state.contactsState);

  // default request for contacts
  useEffect(() => {
    // dispatch(fetchContacts());
  }, [dispatch]);
  //---------------------------------

  return (
    <div className={styles.pagina_principala}>
      {/* Top part contains title and add new element page */}
      <div className={styles.header}>
        <div className={styles.titlu}>Contacte</div>
        <AddBtn name="Adauga un contact" link="/adauga_contact" />
      </div>
      {/* ------------------------------------- */}

      {/* Main table with the corensponding elements */}
      <Tabel
        table_column_name="contacts_table"
        table_column_key="contacts_keys_table"
        state_name="contacts"
        setItemsPerPage={setItemsPerPageContacts}
        clearErrorState={clearErrorContacts}
        openPopup={openPopup}
        setCurrentState={setCurrentContactState}
      />
      {/* ------------------------------------- */}

      {/* popup call with details about each element */}
      <PopUp trigger={isPopupOpen} closePopUp={closePopUp} />
      {/* ------------------------------------- */}
    </div>
  );
}

export default Contacts;
