import React, { useState } from "react";

import styles from "../../styles/pagini_adauga/adaugaContact.module.scss";
import { icons } from "../../styles/icons";

import AddBtn from "../../components/Butoane/AddBtn";
import SelectCuTitlu from "../../components/SelectCuTitlu/SelectCuTitlu";
import { TextArea } from "../../components/TextArea/TextArea";

function AdaugaPlanDeActiune() {
  const [formular, setFormular] = useState({});
  const { status_id, tip_actiune_id, descriere } = formular;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormular((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert(JSON.stringify(formular));
    console.log(formular);
  };
  return (
    <div className={styles.pagina_adauga}>
      <div className={styles.header_top}>
        <AddBtn
          icon={
            <div className={styles.arrow}>{icons.BsArrowLeftCircleFill}</div>
          }
          name={`Inapoi`}
          link="/contacte"
        />

        <div className={styles.titlu}>Formular pentru adaugat actiune</div>
      </div>

      <form className={styles.body} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <SelectCuTitlu
            disabled={false}
            type="text"
            value={tip_actiune_id}
            placeholder="Tip de actiune"
            label="Tip de Actiune"
            name="tip_actiune_id"
            onChange={handleChange}
            optiuni={["optiune 1", "optiune 2"]}
          />

          <SelectCuTitlu
            disabled={false}
            type="text"
            value={status_id}
            placeholder="Status"
            label="Status"
            name="status_id"
            onChange={handleChange}
            optiuni={["da", "nu"]}
          />
        </div>
        <div className={styles.header}>Date</div>
        <div className={styles.row}>
          <TextArea
            type="text"
            label="Descriere Actiune"
            value={descriere}
            placeholder="Ex: Aceasta actiune se desfasoara ..."
            name="descriere"
            onChange={handleChange}
          />
        </div>
        <button className={styles.btn_salveaza} type="submit">
          Salveaza
        </button>
      </form>
    </div>
  );
}

export default AdaugaPlanDeActiune;
