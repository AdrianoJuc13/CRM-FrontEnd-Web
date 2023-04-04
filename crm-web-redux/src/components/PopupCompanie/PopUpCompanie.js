import React from "react";
import styles from "./PopUpCompanie.module.scss";
import { FaWindowClose } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";

import { closePopUp } from "../../features/popupcompanie/PopUpCompanieSlice";

function PopUpCompanie() {
  const dispatch = useDispatch();
  const { currentId } = useSelector((store) => store.popup);

  return (
    <div className={styles.popup}>
      <div className={styles.white_screen}>
        <FaWindowClose
          className={styles.exit_btn}
          onClick={() => {
            dispatch(closePopUp());
          }}
        />
        {currentId}
      </div>
    </div>
  );
}

export default PopUpCompanie;
