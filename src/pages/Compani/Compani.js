import React, { useEffect } from "react";
import styles from "../../styles/PaginaLayout1.module.scss";
import Tabel from "../../components/Tabel/Tabel";
import { useDispatch, useSelector } from "react-redux";
import AddBtn from "../../components/Butoane/AddBtn";
import { fetchCompani } from "../../features/compani/CompaniSlice";

function Compani() {
  const { header_name, header_key } = useSelector((state) => state.headers);

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
      <Tabel
        header_name={header_name["compani"]}
        header_key={header_key["compani"]}
        // detalii_name={detalii_name['compani']}
        // detalii_key={detalii_key['compani']}
        date={compani}
      />
    </div>
  );
}

export default Compani;
