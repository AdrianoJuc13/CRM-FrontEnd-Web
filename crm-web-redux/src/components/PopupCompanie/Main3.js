import React from "react";
import styles from "./PopUpCompanie.module.scss";

import { BiHomeAlt } from "react-icons/bi";
import { AiOutlinePhone } from "react-icons/ai";
import { ImMap2 } from "react-icons/im";

function Main3() {
  return (
    <div className={styles.screen}>
      <div className={styles.zona}>
        <div className={styles.row}>
          <BiHomeAlt className={styles.icon} />
          <div className={styles.title}>Date Personale</div>
          <div className={styles.edit_btn}>Editeaza Compania</div>
        </div>
        <div className={styles.row2}>
          <div className={styles.title}>Nume: Alexandru</div>
          <div className={styles.title}>Prenume: Tipa</div>
        </div>
        <div className={styles.row2}>
          <div className={styles.title}>Functia: Manager</div>
        </div>
      </div>
      <div className={styles.zona}>
        <div className={styles.row}>
          <AiOutlinePhone className={styles.icon} />
          <div className={styles.title}>Comunicare</div>
        </div>
        <div className={styles.row2}>
          <div className={styles.title}>Telefon: Alexandru</div>
          <div className={styles.title}>Email: alexandrutipa@primagra.ro</div>
        </div>
        <div className={styles.row2}>
          <div className={styles.title}>Telefon Companie: 00452343234</div>
          <div className={styles.title}>Email Companie: office@primagra.ro</div>
        </div>
      </div>
      <div className={styles.zona}>
        <div className={styles.row}>
          <ImMap2 className={styles.icon} />
          <div className={styles.title}>Adresa</div>
        </div>
        <div className={styles.tabel}>
          <div className={styles.theader}>
            <div className={styles.th}> No</div>
            <div className={styles.th}> Judet</div>
            <div className={styles.th}> Oras</div>
            <div className={styles.th}> Strada, nr</div>
          </div>
          <div className={styles.trow}>
            <div className={styles.td}>Social</div>
            <div className={styles.td}>Suceava</div>
            <div className={styles.td}>Radauti</div>
            <div className={styles.td}>Egger fabrica radauti</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main3;
