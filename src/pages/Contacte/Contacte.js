import React from "react";
import styles from "../../styles/GeneralPagesFormat.module.scss";
import Tabel from "../../components/Tabel/Tabel";
// import {
//   useDispatch,
//   useSelector
// } from "react-redux";
import AddBtn from "../../components/Butoane/AddBtn";
// import { fetchContacte } from "../../features/contacte/ContacteSlice";

function Contacte() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacte());
  // }, [dispatch]);

  // const contacte = useSelector((state) => state.contacte);

  return (
    <div className={styles.pagina_principala}>
      <div className={styles.header}>
        <div className={styles.titlu}>Contacte</div>
        <AddBtn name="Adauga un nou contact" link="/adauga_contact" />
      </div>
      <Tabel table_column_name="contacte_tabel" />
    </div>
  );
}

export default Contacte;
