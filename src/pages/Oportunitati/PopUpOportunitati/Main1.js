import React from "react";
import styles from "./PopUpOportunitati.module.scss";
import { BiHomeAlt } from "react-icons/bi";

function Main1() {
  return (
    <div className={styles.screen}>
      <div className={styles.zona}>
        <div className={styles.row}>
          <BiHomeAlt className={styles.icon} />
          <div className={styles.title}>Obiectiv</div>
        </div>
        <div className={styles.row2}>
          <div className={styles.title}>
            Grad de realizare obiectiv: Vasiliu
          </div>
          <div className={styles.title}>P</div>
        </div>
        <div className={styles.row2}>
          <div className={styles.title}>T</div>
          <div className={styles.title}>E</div>
        </div>
      </div>
      <div className={styles.zona}>
        <div className={styles.row}>
          <BiHomeAlt className={styles.icon} />
          <div className={styles.title}>Plan de actiuni</div>
        </div>
        <div className={styles.tabel}>
          <div className={styles.theader}>
            <div className={styles.th}>Titlu</div>
            <div className={styles.th}>Data emiterii</div>
            <div className={styles.th}>Data finalizare</div>
            <div className={styles.th}>Prioritate</div>
            <div className={styles.th}>Emitatori actiune</div>
          </div>
          <div className={styles.trow}>
            <div className={styles.td}>Ceva</div>
            <div className={styles.td}>Ceva</div>
            <div className={styles.td}>Ceva</div>
            <div className={styles.td}>Ceva</div>
            <div className={styles.td}>Ceva</div>
          </div>
        </div>
      </div>
      {/* <div className={styles.zona}>
        <div className={styles.row}>
          <SlNote className={styles.icon} />
          <div className={styles.title}>Notite</div>
        </div>
        <div className={styles.notite}>Ceva despre persoana de mai sus</div>
      </div> */}
    </div>
  );
}

export default Main1;
