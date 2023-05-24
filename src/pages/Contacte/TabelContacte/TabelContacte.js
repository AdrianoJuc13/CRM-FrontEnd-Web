import React, { useEffect } from "react";
import styles from "./TabelContacte.module.scss";
// import lista from "./TabelData.json";

import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchContacte,
  openPopUp,
} from "../../../features/contacte/ContacteSlice.js";

import PopUpContacte from "../PopUpContacte/PopUpContacte";
import PopDownContacte from "../PopDownContacte/PopDownContacte";

function TabelContacte() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacte());
  }, [dispatch]);

  const contacte = useSelector((state) => state.contacte);
  return (
    <div className={styles.tabel_contacte}>
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.hdata}>Nume</div>
          <div className={styles.hdata}>Prenume</div>
          <div className={styles.hdata}>Telefon</div>
          <div className={styles.hdata}>Email</div>
          <div className={styles.hdata}>Nume Companie</div>
          <div className={styles.hdata}>Functia</div>
        </div>
        <div className={styles.rows}>
          {contacte.loading && <div>Loading...</div>}

          {!contacte.loading && contacte.error ? (
            <div>Error: {contacte.error}</div>
          ) : null}

          {contacte &&
            contacte.payload.map((item, index) => {
              return (
                <div
                  key={index}
                  className={styles.row}
                  onClick={() => {
                    dispatch(openPopUp(item.companie_id));
                  }}
                >
                  <div className={styles.td}>{index}</div>
                  <div className={styles.td}>{item.name}</div>
                  <div className={styles.td}>{item.email}</div>
                  <div className={styles.td}>{item.username}</div>
                  <div className={styles.td}>{item.website}</div>
                  <div className={styles.td}>{item.phone}</div>
                </div>
              );
            })}
        </div>
      </div>
      <div className={styles.arrows}>
        <BsFillArrowLeftSquareFill className={styles.arrow} />
        <div className={styles.numerotare}>1</div>
        <BsFillArrowRightSquareFill className={styles.arrow} />
      </div>
      <PopUpContacte />
      <PopDownContacte />
    </div>
  );
}

export default TabelContacte;
