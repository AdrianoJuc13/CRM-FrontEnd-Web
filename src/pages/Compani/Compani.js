import React, { useEffect } from "react";
import styles from "../../styles/PaginaLayout1.module.scss";
import Tabel from "../../components/Tabel/Tabel";
import { useDispatch, useSelector } from "react-redux";
import AddBtn from "../../components/Butoane/AddBtn";
import { fetchCompani } from "../../features/compani/CompaniSlice";

function Compani() {
  const { header_tabel } = useSelector((state) => state.headers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompani());
  }, [dispatch]);

  const compani = useSelector((state) => state.compani);

  return (
    <div className={styles.rapoarte}>
      <div className={styles.header}>
        <div className={styles.titlu}>Companii</div>
        <AddBtn name="Adauga o noua companie" link="/adauga_raport" />
      </div>
      <Tabel headers={header_tabel["obiectivee"]} date={compani} />
    </div>
  );
}

export default Compani;
