import React from "react";
import styles from "./PopUpContacte.module.scss";
import { FaWindowClose } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";

import {
  closePopUp,
  openPopDown,
  // changePage,
} from "../../../features/contacte/ContacteSlice";

import Main1 from "./Main1.js";

function PopUpContacte() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.contacte);

  return (
    <div
      className={`${styles.popup_open}  ${isOpen ? null : styles.popup_closed}`}
    >
      <div
        className={`${styles.white_screen}  ${
          isOpen ? null : styles.white_screen_closed
        }`}
      >
        <div className={styles.header}>
          <div className={styles.title}>Andrei Vasiliu</div>
          <FaWindowClose
            className={styles.exit_btn}
            onClick={() => {
              dispatch(closePopUp());
            }}
          />
        </div>
        <div className={styles.main}>
          <div className={styles.buttons}>
            <div
              className={styles.edit_btn}
              onClick={() => {
                dispatch(closePopUp());
                dispatch(openPopDown());
              }}
            >
              Editeaza Compania
            </div>
          </div>
          <Main1 />
        </div>
      </div>
    </div>
  );
}

export default PopUpContacte;
