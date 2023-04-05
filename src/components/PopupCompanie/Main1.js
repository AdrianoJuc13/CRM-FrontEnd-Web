import React from "react";
import styles from "./PopUpCompanie.module.scss";

import { BiHomeAlt } from "react-icons/bi";
import { AiOutlinePhone } from "react-icons/ai";
import { ImMap2 } from "react-icons/im";

function Main1() {
  return (
    <div className={styles.screen}>
      <div className={styles.zona}>
        <div className={styles.row}>
          <BiHomeAlt className={styles.icon} />
          <div className={styles.title}>Date Companie</div>
        </div>
        <div className={styles.row2}>
          <div className={styles.title}>Nume: Egger</div>
          <div className={styles.title}>Numar inregistrare: Tipa</div>
        </div>
        <div className={styles.row2}>
          <div className={styles.title}>Numar fiscal (J): Manager</div>
        </div>
      </div>
      <div className={styles.zona}>
        <div className={styles.row}>
          <AiOutlinePhone className={styles.icon} />
          <div className={styles.title}>Datele de contact</div>
        </div>
        <div className={styles.row2}>
          <div className={styles.title}>Telefon: Alexandru</div>
          <div className={styles.title}>Email: alexandrutipa@primagra.ro</div>
        </div>
      </div>
      <div className={styles.zona}>
        <div className={styles.row}>
          <AiOutlinePhone className={styles.icon} />
          <div className={styles.title}>Sector</div>
        </div>
        <div className={styles.row2}>
          <div className={styles.title}>Marime companie:</div>
          <div className={styles.title}>Activitate companie:</div>
        </div>
        <div className={styles.row2}>
          <div className={styles.title}>Nisa:</div>
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

export default Main1;
