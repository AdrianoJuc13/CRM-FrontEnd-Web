import React, { useState } from "react";
import styles from "./TabelCompani.module.scss";
import lista from "./TabelData.json";

import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import PopUpCompanie from "../PopupCompanie/PopUpCompanie";

import { useDispatch, useSelector } from "react-redux";
import { openPopUp } from "../../features/popupcompanie/PopUpCompanieSlice";

function Compani() {
  const [popup, setPopup] = useState(true);

  const { isOpen } = useSelector((store) => store.popup);
  const dispatch = useDispatch();
  return (
    <div className={styles.tabel_compani}>
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.hdata}>Cod AX</div>
          <div className={styles.hdata}>Nume</div>
          <div className={styles.hdata}>Email</div>
          <div className={styles.hdata}>Vanzari</div>
          <div className={styles.hdata}>Segment</div>
          <div className={styles.hdata}>Telefon</div>
          <div className={styles.hdata}>Punct de lucru</div>
        </div>
        <div className={styles.rows}>
          {lista &&
            lista.map((item, index) => {
              return (
                <div
                  key={index}
                  className={styles.row}
                  onClick={() => {
                    dispatch(openPopUp(item.companie_id));
                  }}
                >
                  <div className={styles.td}>{index}</div>
                  <div className={styles.td}>{item.nume}</div>
                  <div className={styles.td}>alexandrutipa@gmail.com</div>
                  <div className={styles.td}>{item.adresa_facturare}</div>
                  <div className={styles.td}>{item.adresa_facturare}</div>
                  <div className={styles.td}>{item.adresa_facturare}</div>
                  <div className={styles.td}>{item.adresa_facturare}</div>
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
      <PopUpCompanie />
    </div>
  );
}

export default Compani;
