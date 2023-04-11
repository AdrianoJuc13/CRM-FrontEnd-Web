import React from "react";
import styles from "./PopUpCompanie.module.scss";

import { FaReadme } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { BiHomeAlt } from "react-icons/bi";
import { AiOutlinePhone } from "react-icons/ai";
import { ImMap2 } from "react-icons/im";

function Main1() {
  const dispatch = useDispatch();
  const { isOpenUp, page, currentId, payload } = useSelector(
    (store) => store.compani
  );

  const getPayloadByName = (target) => {
    var i = 0;
    if (payload)
      for (i = 0; i < payload.length; i++)
        if (payload[i].companie_id === currentId) return payload[i][target];
    return "-";
  };

  return (
    <div className={styles.screen}>
      <div className={styles.zona}>
        <div className={styles.row}>
          <BiHomeAlt className={styles.icon} />
          <div className={styles.title}>Date Companie</div>
        </div>
        <div className={styles.row2}>
          <div className={styles.title}>Nume: {getPayloadByName("nume")}</div>
          <div className={styles.title}>
            Numar inregistrare: {getPayloadByName("numar_inregistrare")}
          </div>
        </div>
        <div className={styles.row2}>
          <div className={styles.title}>
            Numar fiscal (J): {getPayloadByName("nume")}
          </div>
        </div>
      </div>
      <div className={styles.zona}>
        <div className={styles.row}>
          <AiOutlinePhone className={styles.icon} />
          <div className={styles.title}>Datele de contact</div>
        </div>
        <div className={styles.row2}>
          <div className={styles.title}>
            Telefon: {getPayloadByName("numar_telefon")}
          </div>
          <div className={styles.title}>Email: {getPayloadByName("email")}</div>
        </div>
      </div>
      <div className={styles.zona}>
        <div className={styles.row}>
          <FaReadme className={styles.icon} />
          <div className={styles.title}>Sector</div>
        </div>
        <div className={styles.row2}>
          <div className={styles.title}>
            Marime companie:{getPayloadByName("marime_companie_id")}
          </div>
          <div className={styles.title}>
            Activitate companie:{getPayloadByName("activitate_companie_id")}
          </div>
        </div>
        <div className={styles.row2}>
          <div className={styles.title}>Nisa:{getPayloadByName("nisa_id")}</div>
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
