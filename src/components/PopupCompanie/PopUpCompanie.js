import React from "react";
import styles from "./PopUpCompanie.module.scss";
import { FaWindowClose } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";

import { closePopUp, changePage } from "../../features/compani/CompaniSlice";
import Main1 from "./Main1";
import Main2 from "./Main2";
import Main3 from "./Main3";
import Main4 from "./Main4";

function PopUpCompanie() {
  const dispatch = useDispatch();
  const { isOpen, currentId, page } = useSelector((store) => store.compani);

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
          <div className={styles.title}>EGGER</div>
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
/*
"companie_id": "be06ca78-3577-4c55-9718-d73b00f9cead",
"nume": "Poligon Tech",
"numar_inregistrare": "test numar inregistrare",
"nisa_id": "9c7d8ec7-ec66-4910-9b78-56bd242956a8",
"marime_companie_id": "9bc0f1d8-acc6-4ddc-81b7-e65e7a18512f",
"activitate_companie_id": "27790647-5601-45ba-a44f-905a67438c04",
"vanzari_totale": 88888,
"adresa_livrare": "strada terst",
"adresa_facturare": "tesdf t",
"numar_angajati": 20,
"cifra_afaceri": 222222,
"locatie_gps": "asdasd",
"angajat_responsabil": "d12c96f0-1433-4399-be22-8e46ba02ae41",
"punct_lucru_id": "f1ceb2e2-77d5-421d-89df-0fdf63e1591c"
*/

export default PopUpCompanie;
