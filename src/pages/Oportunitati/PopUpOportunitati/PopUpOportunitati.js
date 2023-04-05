import React from "react";
import styles from "./PopUpOportunitati.module.scss";
import { FaWindowClose } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";

import {
  closePopUp,
  // changePage,
} from "../../../features/oportunitati/OportunitatiSlice";

import Main1 from "./Main1.js";

function PopUpOportunitati() {
  const dispatch = useDispatch();
  const {
    isOpen,
    currentId,
    //  page
  } = useSelector((store) => store.oportunitati);

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
          <div className={styles.title}>Oportunitatea sdada</div>
          <FaWindowClose
            className={styles.exit_btn}
            onClick={() => {
              dispatch(closePopUp());
            }}
          />
        </div>

        {currentId}

        <div className={styles.main}>
          <Main1 />
        </div>
      </div>
    </div>
  );
}

export default PopUpOportunitati;
