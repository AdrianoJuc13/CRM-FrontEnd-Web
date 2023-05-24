import React from "react";
import styles from "./PopUpCompanie.module.scss";
import { FaWindowClose } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";

import {
  closePopUp,
  changePage,
  openPopDown,
} from "../../../features/compani/CompaniSlice";
import Main1 from "./Main1";
import Main2 from "./Main2";
import Main3 from "./Main3";
import Main4 from "./Main4";

function PopUpCompanie() {
  const dispatch = useDispatch();
  const { isOpenUp, page, currentId, payload } = useSelector(
    (store) => store.compani
  );

  const getName = () => {
    var i;
    if (payload)
      for (i = 0; i < payload.length; i++)
        if (payload[i].companie_id === currentId) return payload[i].nume;
    return "No name";
  };

  return (
    <div
      className={`${styles.popup_open}  ${
        isOpenUp ? null : styles.popup_closed
      }`}
    >
      <div
        className={`${styles.white_screen}  ${
          isOpenUp ? null : styles.white_screen_closed
        }`}
      >
        <div className={styles.header}>
          <div className={styles.title}>{getName()}</div>
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
              className={styles.button_name}
              onClick={() => {
                dispatch(changePage(1));
              }}
              style={page === 1 ? { borderBottom: "2px solid blue" } : null}
            >
              Contact info
            </div>
            <div
              className={styles.button_name}
              onClick={() => {
                dispatch(changePage(2));
              }}
              style={page === 2 ? { borderBottom: "2px solid blue" } : null}
            >
              Oportunitati
            </div>

            <div
              className={styles.button_name}
              onClick={() => {
                dispatch(changePage(3));
              }}
              style={page === 3 ? { borderBottom: "2px solid blue" } : null}
            >
              Taskuri
            </div>
            <div
              className={styles.button_name}
              onClick={() => {
                dispatch(changePage(4));
              }}
              style={page === 4 ? { borderBottom: "2px solid blue" } : null}
            >
              Vanzari
            </div>
            <div
              className={styles.edit_btn}
              onClick={() => {
                dispatch(openPopDown());
                dispatch(closePopUp());
              }}
            >
              Editeaza Compania
            </div>
          </div>
          {page === 1 ? (
            <Main1 />
          ) : page === 2 ? (
            <Main2 />
          ) : page === 3 ? (
            <Main3 />
          ) : page === 4 ? (
            <Main4 />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default PopUpCompanie;
