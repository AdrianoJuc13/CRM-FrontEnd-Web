import React from "react";
import styles from "./TabelCompani.module.scss";
import lista from "./TabelData.json";

import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

function Compani() {
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
                <div key={index} className={styles.row}>
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
    </div>
  );
}

export default Compani;
