import React, { useEffect } from "react";
import styles from "../../styles/PaginaLayout1.module.scss";
import Tabel from "../../components/Tabel/Tabel";
import { useDispatch, useSelector } from "react-redux";
import AddBtn from "../../components/Butoane/AddBtn";
import { fetchContacte } from "../../features/contacte/ContacteSlice";

function Contacte() {
  const { header_tabel } = useSelector((state) => state.headers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacte());
  }, [dispatch]);

  const contacte = useSelector((state) => state.contacte);

  return (
    <div className={styles.rapoarte}>
      <div className={styles.header}>
        <div className={styles.titlu}>Contacte</div>
        <AddBtn name="Adauga un nou contact" link="/adauga_contact" />
      </div>
      {/* <Tabel headers={header_tabel["obiectivee"]} date={contacte} /> */}
    </div>
  );
}

export default Contacte;
