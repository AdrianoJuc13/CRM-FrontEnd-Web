import React from "react";

import styles from "./Compani.module.scss";
import TabelCompani from "./TabelCompani/TabelCompani";
import { useNavigate } from "react-router-dom";

function Compani() {
  const navigate = useNavigate();
  return (
    <div className={styles.compani}>
      <div className={styles.header}>
        <div className={styles.titlu}>Companii </div>
        <button
          className={styles.addbtn}
          onClick={() => {
            navigate("/adauga_companie");
          }}
        >
          Adauga companie
        </button>
      </div>

      <TabelCompani />
    </div>
  );
}

export default Compani;
