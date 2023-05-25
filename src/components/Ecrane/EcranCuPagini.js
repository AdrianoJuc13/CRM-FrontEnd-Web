import React, { useState } from "react";
import styles from "./Ecrane.module.scss";
import SectiuneField from "../SectiuneField/SectiuneField";
import SectionAdrese from "../SectionAdrese/SectionAdrese";

function EcranCuPagini() {
  const [pages, setPages] = useState(1);
  return (
    <div className={styles.ecran_cu_pagini}>
      <div className={styles.header_butoane}>
        <div
          className={`${styles.header_titlu} ${
            pages === 1 ? styles.header_titlu_activ : null
          }`}
          onClick={() => {
            setPages(1);
          }}
        >
          Info
        </div>
        <div
          className={`${styles.header_titlu} ${
            pages === 2 ? styles.header_titlu_activ : null
          }`}
          onClick={() => {
            setPages(2);
          }}
        >
          Oportunitati
        </div>
        <div
          className={`${styles.header_titlu} ${
            pages === 3 ? styles.header_titlu_activ : null
          }`}
          onClick={() => {
            setPages(3);
          }}
        >
          Istoric
        </div>
        <div
          className={`${styles.header_titlu} ${
            pages === 4 ? styles.header_titlu_activ : null
          }`}
          onClick={() => {
            setPages(4);
          }}
        >
          Vanzari
        </div>
      </div>
      <div className={styles.screen_date}>
        {pages === 1 ? (
          <div>
            <SectiuneField
              icon="BIEdit"
              titlu="Date fiscale"
              details={[
                ["Cod caen", "125"],
                ["Cod inreg", "988372"],
                ["Nr. inm", "J33/232/33"],
              ]}
            />
            <SectiuneField
              icon="BIEdit"
              titlu="Regiune"
              details={[["Cod caen", "125"]]}
            />
          </div>
        ) : pages === 2 ? (
          <div>
            <SectiuneField
              icon="BIEdit"
              titlu="Date fiscale"
              details={[
                ["Cod caen", "125"],
                ["Cod inreg", "988372"],
                ["Nr. inm", "J33/232/33"],
              ]}
            />
          </div>
        ) : pages === 3 ? (
          <div>
            <SectionAdrese
              icon="BIEdit"
              titlu="Adrese"
              details={[
                ["Cod caen", "125"],
                ["Cod inreg", "988372"],
                ["Nr. inm", "J33/232/33"],
              ]}
            />
          </div>
        ) : pages === 4 ? (
          <div>grafic</div>
        ) : null}
      </div>
    </div>
  );
}

export default EcranCuPagini;
