import React from "react";
import styles from "./PopUpCompanie.module.scss";
import { FaWindowClose } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";

import { closePopUp } from "../../features/popupcompanie/PopUpCompanieSlice";

function PopUpCompanie() {
  const dispatch = useDispatch();
  const { isOpen, currentId } = useSelector((store) => store.popup);

  return (
    <div
      className={`${styles.popup_open}  ${isOpen ? null : styles.popup_closed}`}
    >
      <div
        className={`${styles.white_screen}  ${
          isOpen ? null : styles.white_screen_closed
        }`}
      >
        <FaWindowClose
          className={styles.exit_btn}
          onClick={() => {
            dispatch(closePopUp());
          }}
        />
        nimic
        {currentId}
      </div>
    </div>
  );
}

export default PopUpCompanie;
