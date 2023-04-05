import React from "react";
import styles from "./PopUpContacte.module.scss";
import { BiHomeAlt } from "react-icons/bi";
import { SlNote } from "react-icons/sl";

function Main1() {
  return (
    <div className={styles.screen}>
      <div className={styles.zona}>
        <div className={styles.row}>
          <BiHomeAlt className={styles.icon} />
          <div className={styles.title}>Date Personale</div>
        </div>
        <div className={styles.row2}>
          <div className={styles.title}>Nume: Vasiliu</div>
          <div className={styles.title}>Prenume: Andrei</div>
        </div>
        <div className={styles.row2}>
          <div className={styles.title}>Telefon: 00742395786</div>
          <div className={styles.title}>Email: andrei.vasiliu@gmail.com</div>
        </div>
      </div>
      <div className={styles.zona}>
        <div className={styles.row}>
          <BiHomeAlt className={styles.icon} />
          <div className={styles.title}>Date</div>
        </div>

        <div className={styles.row2}>
          <div className={styles.title}>Nume Companie: Egger</div>
          <div className={styles.title}>Functia: Director vanzari</div>
        </div>
      </div>
      <div className={styles.zona}>
        <div className={styles.row}>
          <SlNote className={styles.icon} />
          <div className={styles.title}>Notite</div>
        </div>
        <div className={styles.notite}>Ceva despre persoana de mai sus</div>
      </div>
    </div>
  );
}

export default Main1;
