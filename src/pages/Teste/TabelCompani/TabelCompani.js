import React, { useEffect } from "react";
import styles from "./TabelCompani.module.scss";
import { useDispatch, useSelector } from "react-redux";

import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

import {
  fetchCompani,
  openPopUp,
  setIdPop,
} from "../../../features/compani/CompaniSlice";

import PopUpCompanie from "../PopupCompanie/PopUpCompanie";
import EditeazaCompanie from "../EditeazaCompanie/EditeazaCompanie";

function Compani() {
  const dispatch = useDispatch();

  const compani = useSelector((store) => store.compani);
  const nise = useSelector((store) => store.nise);
  const punctelucru = useSelector((store) => store.punctelucru);

  useEffect(() => {
    dispatch(fetchCompani());
  }, [dispatch]);

  const returnNisaByID = (id) => {
    var i;
    for (i = 0; i < nise.payload.length; i++)
      if (id === nise.payload[i].nisa_id) return nise.payload[i].nume_nisa;
    return "Nu are nisa";
  };

  const returnPunctLucruByID = (id) => {
    var i;
    for (i = 0; i < punctelucru.payload.length; i++) {
      if (id === punctelucru.payload[i].punct_lucru_id)
        return punctelucru.payload[i].nume_punct_lucru;
    }
    return "Nu are punct de lucru";
  };

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
          {/* Loading screen */}
          {compani.loading && <div>Loading...</div>}
          {/* error  */}
          {!compani.loading && compani.error ? (
            <div>Error: {compani.error}</div>
          ) : null}
          {/* fullfield */}
          {compani &&
            compani.payload.map((item, index) => {
              return (
                <div
                  key={index}
                  className={styles.row}
                  onClick={() => {
                    dispatch(openPopUp());
                    dispatch(setIdPop(item.companie_id));
                  }}
                >
                  <div className={styles.td}>{index}</div>
                  <div className={styles.td}>{item.nume}</div>
                  <div className={styles.td}>{item.email}</div>
                  <div className={styles.td}>{item.vanzari_totale}</div>
                  <div className={styles.td}>
                    {returnNisaByID(item.nisa_id)}
                  </div>
                  <div className={styles.td}>{item.numar_telefon}</div>
                  <div className={styles.td}>
                    {returnPunctLucruByID(item.punct_lucru_id)}
                  </div>
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
      <EditeazaCompanie />
    </div>
  );
}

export default Compani;
