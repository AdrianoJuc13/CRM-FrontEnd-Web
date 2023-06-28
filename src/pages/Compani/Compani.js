import React, { useEffect } from "react";
import Tabel from "../../components/Tabel/Tabel";
import { useDispatch, useSelector } from "react-redux";
import AddBtn from "../../components/Butoane/AddBtn";
import { fetchCompanies } from "../../features/company/actions/fetchCompanies";

import styles from "../../styles/PaginaLayout1.module.scss";

function Compani() {
  const dispatch = useDispatch();

  const { header_name, header_key } = useSelector((state) => state.headers);
  const compani = useSelector((state) => state.companiesPage);

  useEffect(() => {
    dispatch(fetchCompanies());
  }, [dispatch]);

  return (
    <div className={styles.pagina_principala}>
      <div className={styles.header}>
        <div className={styles.titlu}>Companii</div>
        <AddBtn name="Adauga o noua companie" link="/adauga_companie" />
      </div>
      {/* <div
        onClick={() => {
          console.log(compani);
        }}
      >
        button
      </div> */}
      {/* <Tabel
        header_name={header_name["compani"]}
        header_key={header_key["compani"]}
        date={compani}
      /> */}
      <Tabel table_column_name="companii_tabel" />
    </div>
  );
}

export default Compani;
