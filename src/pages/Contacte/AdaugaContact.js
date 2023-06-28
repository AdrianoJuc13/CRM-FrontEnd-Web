import React, { useState } from "react";

import styles from "../../styles/pagini_adauga/adaugaContact.module.scss";
import { icons } from "../../styles/icons";

import AddBtn from "../../components/Butoane/AddBtn";
import InputCuTitlu from "../../components/InputCuTitlu/InputCuTitlu";

function AdaugaContact() {
  const [formular, setFormular] = useState({});

  const { nume, prenume, numar_telefon, adresa_email, functie, companie_nume } =
    formular;

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
        <div className={styles.header}>Date personale</div>
        <div className={styles.row}>
          <InputCuTitlu
            type="text"
            value={nume}
            placeholder="Ex: Ion"
            label="Nume"
            name="nume"
            onChange={handleChange}
          />
          <InputCuTitlu
            type="text"
            value={prenume}
            placeholder="Ex: Popescu"
            label="Prenume"
            name="prenume"
            onChange={handleChange}
          />

          <InputCuTitlu
            // disabled={true}
            type="text"
            value={numar_telefon}
            placeholder="Ex: 0751234567"
            label="Telefon"
            name="numar_telefon"
            onChange={handleChange}
          />
          <InputCuTitlu
            disabled={true}
            label="Email"
            type="text"
            value={adresa_email}
            placeholder="Ex: exemplu@exemplu.com"
            name="adresa_email"
            onChange={handleChange}
          />
        </div>
        <div className={styles.header}></div>
        <div className={styles.row}>
          <InputCuTitlu
            disabled={true}
            label="Functie"
            type="text"
            value={functie}
            placeholder="Ex: Director de vanzari"
            name="functie"
            onChange={functie}
          />
          <InputCuTitlu
            disabled={true}
            label="Companie"
            type="text"
            value={companie_nume}
            placeholder="Ex: Dedeman Constanta"
            name="companie_nume"
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

export default AdaugaContact;
