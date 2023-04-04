import React from "react";
import styles from "./PopUpContacte.module.scss";
import { FaWindowClose } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";

import {
  closePopUp,
  changePage,
} from "../../../features/contacte/ContacteSlice";

function PopUpContacte() {
  const dispatch = useDispatch();
  const { isOpen, currentId, page } = useSelector((store) => store.contacte);

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

        {currentId}
        {/* <div>
          <h2>Detaliile companiei</h2>

          {compani.loading && <div>Loading...</div>}

          {!compani.loading && compani.error ? (
            <div>Error: {compani.error}</div>
          ) : null}

          {!compani.loading && compani.payload.length ? (
            <ul>
              {compani.payload.map((compani) => (
                <li key={compani.id}>{compani.name}</li>
              ))}
            </ul>
          ) : // <div>{toString(compani.payload)}</div>
          null}
        </div> */}
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
              istoric Vizite
            </div>
            <div
              className={styles.button_name}
              onClick={() => {
                dispatch(changePage(4));
              }}
              style={page === 4 ? { borderBottom: "2px solid blue" } : null}
            >
              Vanzari Client
            </div>
          </div>
          {/* {page === 1 ? (
            <Main1 />
          ) : page === 2 ? (
            <Main2 />
          ) : page === 3 ? (
            <Main3 />
          ) : page === 4 ? (
            <Main4 />
          ) : null} */}
        </div>
      </div>
    </div>
  );
}

export default PopUpContacte;
