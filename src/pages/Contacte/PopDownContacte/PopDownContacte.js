import React from "react";
import styles from "./PopDownContacte.module.scss";
import { FaWindowClose } from "react-icons/fa";
import { BiHomeAlt } from "react-icons/bi";
import { SlNote } from "react-icons/sl";

import { useDispatch, useSelector } from "react-redux";

import {
  closePopDown,
  openPopUp,
} from "../../../features/contacte/ContacteSlice";

function PopDownContacte() {
  const dispatch = useDispatch();
  const { isOpenDown } = useSelector((store) => store.contacte);

  return (
    <div
      className={`${styles.popdown_open}  ${
        isOpenDown ? null : styles.popdown_closed
      }`}
    >
      <div
        className={`${styles.white_screen}  ${
          isOpenDown ? null : styles.white_screen_closed
        }`}
      >
        <div className={styles.header}>
          <div className={styles.title}>Editeaza Contactul</div>
          <FaWindowClose
            className={styles.exit_btn}
            onClick={() => {
              dispatch(closePopDown());
              dispatch(openPopUp());
            }}
          />
        </div>

        <div className={styles.form}>
          <div className={styles.zona}>
            <div className={styles.row}>
              <BiHomeAlt className={styles.icon} />
              <div className={styles.title}>Date Personale</div>
            </div>
            <div className={styles.row2}>
              <div className={styles.title}>Nume: </div>
              <input className={styles.input} placeholder="introdu un nume" />
            </div>
            <div className={styles.row2}>
              <div className={styles.title}>Prenume:</div>
              <input className={styles.input} placeholder="introdu un nume" />
            </div>
            <div className={styles.row2}>
              <div className={styles.title}>Telefon:</div>
              <input className={styles.input} placeholder="introdu un nume" />
            </div>
            <div className={styles.row2}>
              <div className={styles.title}>Email:</div>
              <input className={styles.input} placeholder="introdu un nume" />
            </div>
          </div>
          <div className={styles.zona}>
            <div className={styles.row}>
              <BiHomeAlt className={styles.icon} />
              <div className={styles.title}>Date</div>
            </div>

            <div className={styles.row2}>
              <div className={styles.title}>Nume Companie: </div>
              <input className={styles.input} placeholder="introdu un nume" />
            </div>
            <div className={styles.row2}>
              <div className={styles.title}>Functia: </div>
              <input className={styles.input} placeholder="alege o functie" />
            </div>
          </div>
          <div className={styles.zona}>
            <div className={styles.row}>
              <SlNote className={styles.icon} />
              <div className={styles.title}>Notite</div>
            </div>
            <textarea
              className={styles.notite}
              placeholder="Ceva despre persoana de mai sus"
            />
          </div>
          <div className={styles.zona}>
            <button className={styles.saveBtn}>Salveaza</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopDownContacte;
