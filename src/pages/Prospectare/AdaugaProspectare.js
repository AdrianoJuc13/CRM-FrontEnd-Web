import React, { useState } from "react";

import styles from "../../styles/pagini_adauga/adaugaContact.module.scss";
import { icons } from "../../styles/icons";

import AddBtn from "../../components/Butoane/AddBtn";
import InputCuTitlu from "../../components/InputCuTitlu/InputCuTitlu";

function AdaugaProspectare() {
  const [formular, setFormular] = useState({});
  const { nume, companie_cod_fiscalj } = formular;
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

        <div className={styles.titlu}>Formular pentru adaugat contacte</div>
      </div>

      <form className={styles.body} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <InputCuTitlu
            type="text"
            value={nume}
            placeholder="Nume"
            label="Nume Societate"
            name="nume"
            onChange={handleChange}
          />

          <InputCuTitlu
            disabled
            type="text"
            // value={CAEN}
            placeholder="caen"
            label="Cod Caen"
            name="caen"
            onChange={handleChange}
          />
        </div>
        <div className={styles.header}>Date fiscale</div>
        <div className={styles.row}>
          <InputCuTitlu
            disabled
            type="text"
            value={companie_cod_fiscalj}
            placeholder="cod j"
            label="Numar fiscal (J)"
            name="companie_cod_fiscalj"
            onChange={handleChange}
          />
          <InputCuTitlu
            disabled={true}
            label="Cod fiscal"
            type="text"
            // value={companie_cod_ax}
            placeholder="cod ax"
            name="companie_cod_ax"
            // onChange={handleChange}
          />
        </div>

        <button className={styles.btn_salveaza} type="submit">
          Salveaza
        </button>
      </form>
    </div>
  );
}

export default AdaugaProspectare;
