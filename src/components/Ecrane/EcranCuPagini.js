import React, { useState } from "react";
import styles from "./Ecrane.module.scss";
import SectiuneField from "../SectiuneField/SectiuneField";
// import SectionAdrese from "../SectionAdrese/SectionAdrese";
import SectiuneTabel from "../SectiuneTabel/SectiuneTabel";
import { useDispatch, useSelector } from "react-redux";
import { fetchOportunitati } from "../../features/oportunitati/OportunitatiSlice";
function EcranCuPagini(props) {
  const [pages, setPages] = useState(1);

  const { detalii_name, detalii_key } = useSelector((state) => state.headers);
  const { payload } = useSelector((state) => state.oportunitati);

  const names = detalii_name["compani"];
  const keys = detalii_key["compani"];

  const dispatch = useDispatch();

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
            dispatch(fetchOportunitati());
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
          <div className={styles.page_data}>
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
          <div className={styles.page_data}>
            <div className={styles.element_data}>
              <div className={styles.titlu_data}>Oportunitati</div>
              <select className={styles.select_data}>
                <option>An</option>
                <option>Luna</option>
                <option>Zi</option>
              </select>
            </div>
            <div className={styles.element_data}>Total oportunitati</div>
            <div className={styles.element_data}>
              {payload ? payload.length : 0}
            </div>
            <SectiuneTabel
              data={
                payload
                  ? payload.map((item) => {
                      return [
                        item["obiectiv_titlu"],
                        item["oportunitate_data_creare_initiala"],
                        item["oportunitate_data_emitere"],
                        item["oportunitate_descriere"],
                        item["oportunitate_due_date"],
                      ];
                    })
                  : ["Empty"]
              }
              headers={["ceva 1", "ceva 2", "ceva 3", "ceva 4", "Status"]}
            />
          </div>
        ) : pages === 3 ? (
          <div className={styles.page_data}>
            <div className={styles.element_data}>
              <div className={styles.titlu_data}>Vizite</div>
              <select className={styles.select_data}>
                <option>An</option>
                <option>Luna</option>
                <option>Zi</option>
              </select>
            </div>
            <div className={styles.element_data}>Total activitati</div>
            <div className={styles.element_data}>24</div>
            <SectiuneTabel
              data={
                payload
                  ? payload.map((item) => {
                      return [
                        item["obiectiv_titlu"],
                        item["oportunitate_data_creare_initiala"],
                        item["oportunitate_data_emitere"],
                        item["oportunitate_descriere"],
                        item["oportunitate_due_date"],
                      ];
                    })
                  : ["Empty"]
              }
              headers={["ceva 1", "ceva 2", "ceva 3", "ceva 4", "Status"]}
            />
          </div>
        ) : pages === 4 ? (
          <div className={styles.page_data}>
            <div className={styles.element_data}>
              <div className={styles.titlu_data}>Vanzari</div>
              <select className={styles.select_data}>
                <option>An</option>
                <option>Luna</option>
                <option>Zi</option>
              </select>
            </div>
            <div className={styles.element_data}>Total comenzi</div>
            <div className={styles.element_data}>24</div>
            <SectiuneTabel
              data={
                payload
                  ? payload.map((item) => {
                      return [
                        item["obiectiv_titlu"],
                        item["oportunitate_data_creare_initiala"],
                        item["oportunitate_data_emitere"],
                        item["oportunitate_descriere"],
                        item["oportunitate_due_date"],
                      ];
                    })
                  : ["Empty"]
              }
              headers={["ceva 1", "ceva 2", "ceva 3", "ceva 4", "Status"]}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default EcranCuPagini;
