import React, { useState } from "react";
import styles from "./Ecrane.module.scss";
import SectiuneField from "../SectiuneField/SectiuneField";
// import SectionAdrese from "../SectionAdrese/SectionAdrese";
import SectiuneTabel from "../SectiuneTabel/SectiuneTabel";
import { useSelector } from "react-redux";

function EcranCuPagini(props) {
  const [pages, setPages] = useState(1);

  const { detalii_name, detalii_key } = useSelector((state) => state.headers);

  const names = detalii_name["compani"];
  const keys = detalii_key["compani"];

  return (
    <div className={styles.ecran_cu_pagini}>
      <div className={styles.header_butoane}>
        <div
          className={`${styles.header_titlu} ${
            pages === 1 ? styles.header_titlu_activ : null
          }`}
          onClick={() => {
            setPages(1);
            console.log(props.date);
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
                [names[0], keys[0]],
                [names[1], keys[1]],
                [names[2], keys[2]],
              ]}
            />
            <SectiuneField
              icon="TbChartArea"
              titlu="Regiune"
              details={[
                [names[3], keys[3]],
                [names[4], keys[4]],
              ]}
            />
            <SectiuneField
              icon="MdOutlineSegment"
              titlu="Segment"
              details={[
                [names[5], keys[5]],
                [names[6], keys[6]],
                [names[7], keys[7]],
                [names[8], keys[8]],
              ]}
            />
            <SectiuneField
              icon="ImMap2"
              titlu="Adresa"
              details={[
                [names[9], keys[9]],
                [names[10], keys[10]],
                [names[11], keys[11]],
              ]}
            />
          </div>
        ) : pages === 2 ? (
          <div>
            <SectiuneTabel
              data={[
                "ceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
              ]}
            />
          </div>
        ) : pages === 3 ? (
          <div>
            <div
              style={{
                fontSize: "2rem",
                marginTop: "1rem",
                display: "flex",
              }}
            >
              <div style={{ flex: 1 }}>Vizite</div>
              <select style={{ padding: "0.7rem 0.2rem" }}>
                <option>An</option>
                <option>Luna</option>
                <option>Zi</option>
              </select>
              <div style={{ margin: "0 1rem" }}>:</div>
            </div>
            <div style={{ fontSize: "1rem", marginTop: "1rem" }}>
              Total activitati
            </div>
            <div
              style={{
                fontSize: "2rem",
                // marginTop: "0.2rem",
                fontWeight: "500",
              }}
            >
              24
            </div>
            <SectiuneTabel
              data={[
                "ceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
                "altceva",
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
