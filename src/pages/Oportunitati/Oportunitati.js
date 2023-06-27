import React, { useEffect } from "react";
import styles from "../../styles/PaginaLayout1.module.scss";
import Tabel from "../../components/Tabel/Tabel";
import { useDispatch, useSelector } from "react-redux";
import AddBtn from "../../components/Butoane/AddBtn";
import { fetchOportunitati } from "../../features/oportunitati/OportunitatiSlice";

function Oportunitati() {
  const { header_tabel } = useSelector((state) => state.headers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOportunitati());
  }, [dispatch]);

  const oportunitati = useSelector((state) => state.oportunitati);

  return (
    <div className={styles.pagina_principala}>
      <div className={styles.header}>
        <div
          className={styles.titlu}
          onClick={() => {
            console.log(oportunitati);
          }}
        >
          Oportunitati
        </div>
        <AddBtn name="Creaza oportunitate" link="/adauga_oportunitate" />
      </div>
      <Tabel table_column_name="oportunitatii_tabel" />
    </div>
  );
}

export default Oportunitati;
