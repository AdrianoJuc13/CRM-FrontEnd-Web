import React, { useEffect } from "react";
import styles from "../../styles/PaginaLayout1.module.scss";
import Tabel from "../../components/Tabel/Tabel";
import { useDispatch, useSelector } from "react-redux";
import AddBtn from "../../components/Butoane/AddBtn";
import { fetchProspectare } from "../../features/prospectare/ProspectareSlice";

function Prospectare() {
  const { header_tabel } = useSelector((state) => state.headers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProspectare());
  }, [dispatch]);

  const prospectare = useSelector((state) => state.prospectare);

  return (
    <div className={styles.pagina_principala}>
      <div className={styles.header}>
        <div className={styles.titlu}>Plan de prospectare</div>
        <AddBtn name="Adauga Vizita Prospectare" link="/adauga_prospectare" />
      </div>
      {/* <Tabel headers={header_tabel["prospectare"]} date={prospectare} /> */}
    </div>
  );
}

export default Prospectare;
