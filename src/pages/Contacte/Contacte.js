import React from "react";
import styles from "./Contacte.module.scss";
import { useNavigate } from "react-router-dom";
import TabelContacte from "./TabelContacte/TabelContacte";

function Contacte() {
  const navigate = useNavigate();
  return (
    <div className={styles.contacte}>
      <div className={styles.header}>
        <div className={styles.titlu}>Contacte </div>

        <button
          className={styles.addbtn}
          onClick={() => {
            navigate("/adauga_contact");
          }}
        >
          Adauga contact
        </button>
      </div>
      <TabelContacte />
    </div>
  );
}

export default Contacte;
