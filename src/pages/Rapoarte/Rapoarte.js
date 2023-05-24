import React, { useEffect } from "react";
import styles from "../../styles/PaginaLayout1.module.scss";
import Tabel from "../../components/Tabel/Tabel";
import { useDispatch, useSelector } from "react-redux";
import AddBtn from "../../components/Butoane/AddBtn";
import { fetchRapoarte } from "../../features/rapoarte/RapoarteSlice";

function Rapoarte() {
  const { header_tabel } = useSelector((state) => state.headers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRapoarte());
  }, [dispatch]);

  const rapoarte = useSelector((state) => state.rapoarte);

  return ( 
    <div className={styles.rapoarte}>
      <div className={styles.header}>
        <div className={styles.titlu}>Rapoarte</div>
        <AddBtn name="Adauga Raport" link="/adauga_raport" />
      </div>
      <Tabel headers={header_tabel["rapoarte"]} date={rapoarte} />
    </div>
  );
}

export default Rapoarte;
