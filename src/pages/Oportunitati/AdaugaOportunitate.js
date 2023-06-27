import React, { useState } from "react";

import styles from "../../styles/pagini_adauga/adaugaContact.module.scss";
import { icons } from "../../styles/icons";

import AddBtn from "../../components/Butoane/AddBtn";
import InputCuTitlu from "../../components/InputCuTitlu/InputCuTitlu";
import SelectCuTitlu from "../../components/SelectCuTitlu/SelectCuTitlu";
import { TextArea } from "../../components/TextArea/TextArea";

function AdaugaOportunitate() {
  const [formular, setFormular] = useState({});
  const { titlu, tip_oportunitate_id, descriere } = formular;

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
          link="/oportunitati"
        />

        <div className={styles.titlu}>
          Formular pentru adaugat o oportunitate
        </div>
      </div>

      <form className={styles.body} onSubmit={handleSubmit}>
        <div className={styles.header}>Date</div>
        <div className={styles.row}>
          <InputCuTitlu
            type="text"
            label="Titlu Oportunitate"
            value={titlu}
            placeholder="Titlu"
            name="titlu"
            onChange={handleChange}
          />
          <SelectCuTitlu
            disabled={false}
            label="Tip Oportunitate"
            type="text"
            value={tip_oportunitate_id}
            placeholder="Tip Client"
            name="tip_oportunitate_id"
            onChange={handleChange}
            optiuni={["optiune 1", "optiune 2", "optiune 3", "optiune 4"]}
          />
        </div>
        <div className={styles.header}>Detalii</div>
        <div className={styles.row}>
          <TextArea
            type="text"
            label="Descriere Oportunitate"
            value={descriere}
            placeholder="Ex: Aceasta oportunitate se desfasoara ..."
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

export default AdaugaOportunitate;
