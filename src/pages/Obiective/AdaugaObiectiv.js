import React, { useState } from "react";

import styles from "../../styles/pagini_adauga/adaugaContact.module.scss";
import { icons } from "../../styles/icons";

import AddBtn from "../../components/Butoane/AddBtn";
import InputCuTitlu from "../../components/InputCuTitlu/InputCuTitlu";
import SelectCuTitlu from "../../components/SelectCuTitlu/SelectCuTitlu";

function AdaugaObiectiv() {
  const [formular, setFormular] = useState({});
  const { titlu, tip_obiectiv_id, nisa, pct_lucru, companie } = formular;

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
          link="/obiective"
        />

        <div className={styles.titlu}>Formular pentru adaugat obiectiv</div>
      </div>

      <form className={styles.body} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <InputCuTitlu
            type="text"
            value={titlu}
            placeholder="Titlu"
            label="Titlu Obiectiv"
            name="titlu"
            onChange={handleChange}
          />

          <InputCuTitlu
            type="text"
            value={tip_obiectiv_id}
            placeholder="tip_obiectiv_id"
            label="Tip de obiectiv"
            name="tip_obiectiv_id"
            onChange={handleChange}
          />
        </div>
        <div className={styles.header}>Date despre obiectiv</div>
        <div className={styles.row}>
          <SelectCuTitlu
            disabled={false}
            label="Nisa"
            type="text"
            value={nisa}
            placeholder="Selecteaza Nisa"
            name="nisa"
            onChange={handleChange}
            optiuni={["optiune 1", "optiune 2", "optiune 3", "optiune 4"]}
          />
          <SelectCuTitlu
            disabled={false}
            label="Punct de lucru"
            type="text"
            value={pct_lucru}
            placeholder="Selecteaza punctul de lucru"
            name="pct_lucru"
            onChange={handleChange}
            optiuni={["optiune 1", "optiune 2", "optiune 3", "optiune 4"]}
          />
          <SelectCuTitlu
            disabled={true}
            label="Companie"
            type="text"
            value={companie}
            placeholder="Selecteaza Compania"
            name="companie"
            onChange={handleChange}
            optiuni={["optiune 1", "optiune 2", "optiune 3", "optiune 4"]}
          />
        </div>

        <button className={styles.btn_salveaza} type="submit">
          Salveaza
        </button>
      </form>
    </div>
  );
}

export default AdaugaObiectiv;
