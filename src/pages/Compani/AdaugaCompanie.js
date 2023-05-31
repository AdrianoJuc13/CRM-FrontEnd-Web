import React, { useState } from "react";
import styles from "../../styles/adaugaCompanie.module.scss";

import AddBtn from "../../components/Butoane/AddBtn";

import { icons } from "../../styles/icons";
// import axios from "axios";
import InputCuTitlu from "../../components/InputCuTitlu/InputCuTitlu";
import SelectCuTitlu from "../../components/SelectCuTitlu/SelectCuTitlu";

function AdaugaCompanie() {
  const [formular, setFormular] = useState({
    nume: "Burdujeni Records de test",
    // numar_inregistrare: "test numar inregistrare",
    // vanzari_totale: 6969420,
    adresa_livrare: "Calea Burdujeni ",
    adresa_facturare: "tesdf t",
    // numar_angajati: 20,
    // cifra_afaceri: 222222,
    // locatie_gps: "asdasd",
    nisa_id: "2ab1b898-8acc-4953-975e-5c4795033dfb",
    marime_companie_id: "3dfe4ec2-9a1a-4d97-be36-f5c1dde181c9",
    activitate_companie_id: "d26448d2-d9d9-4522-9c78-a05721aa90ac",
    angajat_responsabil: "266caa08-f7c7-4620-8168-0198f33aa63b",
    punct_lucru_id: "b0fbaff2-943b-4d21-a834-01942bf2a7c1",
  });
  const { nume, companie_cod_fiscalj, adresa_livrare, adresa_facturare } =
    formular;

  const [formularContact, setFormularContact] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormular((values) => ({ ...values, [name]: value }));
  };
  const handleChangeContact = (event) => {
    const { name, value } = event.target;
    setFormularContact((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert(JSON.stringify(formular));
    alert(JSON.stringify(formularContact));
    console.log(formular);
    console.log(formularContact);

    //--------------------------------------------------------------------------------------------------

    // if (Object.keys(formularContact).length < 5)
    //   alert("Completeaza toate campurile pentru a continua");
    // else {
    //   axios.post(`${process.env.PUBLIC_URL}/companii`, formular).then(
    //     (response) => {
    //       console.log(response);
    //       if (response.status === 200)
    //         axios
    //           .post(
    //             `${process.env.PUBLIC_URL}/persoaneContact`,
    //             formularContact
    //           )
    //           .then(
    //             (response) => {
    //               console.log(response);
    //             },
    //             (error) => {
    //               console.log(error);
    //             }
    //           );
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
    //   setFormularContact({});
    // }
  };

  return (
    <div className={styles.compani}>
      <div className={styles.header_top}>
        <AddBtn
          icon={
            <div className={styles.arrow}>{icons.BsArrowLeftCircleFill}</div>
          }
          name={`Inapoi`}
          link="/compani"
        />

        <div className={styles.titlu}>Formular pentru adaugat companii</div>
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

          <InputCuTitlu
            disabled={false}
            label="Adresa Sociala"
            type="text"
            value={adresa_facturare}
            placeholder="cod ax"
            name="adresa_facturare"
            onChange={handleChange}
          />
          <InputCuTitlu
            disabled={false}
            label="Adresa Livrare"
            type="text"
            value={adresa_livrare}
            placeholder="cod ax"
            name="adresa_livrare"
            onChange={handleChange}
          />
        </div>
        <div className={styles.header}>Segment</div>
        <div className={styles.row}>
          <SelectCuTitlu
            disabled={false}
            label="Punct de lucru"
            type="text"
            // value={punct_lucru_id}
            placeholder="pct. de lucru"
            // name="punct_lucru_id"
            onChange={handleChange}
            optiuni={["optiune 1", "optiune 2", "optiune 3", "optiune 4"]}
          />
          <SelectCuTitlu
            disabled={false}
            label="Angajat responsabil"
            type="text"
            // value={punct_lucru_id}
            placeholder="Angajat responsabil"
            // name="punct_lucru_id"
            onChange={handleChange}
            optiuni={["optiune 1", "optiune 2", "optiune 3", "optiune 4"]}
          />
          <SelectCuTitlu
            disabled={false}
            label="Segment de piata"
            type="text"
            // value={punct_lucru_id}
            placeholder="Segment de piata"
            // name="punct_lucru_id"
            onChange={handleChange}
            optiuni={["optiune 1", "optiune 2", "optiune 3", "optiune 4"]}
          />
          <SelectCuTitlu
            disabled={false}
            label="Tip Client"
            type="text"
            // value={punct_lucru_id}
            placeholder="Tip Client"
            // name="punct_lucru_id"
            onChange={handleChange}
            optiuni={["optiune 1", "optiune 2", "optiune 3", "optiune 4"]}
          />
        </div>
        <div className={styles.header}>Persona de contact</div>
        <div className={styles.tabel}>
          <div className={styles.theader}>
            <div className={styles.hdata}>Nume</div>
            <div className={styles.hdata}>Prenume</div>
            <div className={styles.hdata}>Email</div>
            <div className={styles.hdata}>Functia</div>
            <div className={styles.hdata}>Telefon</div>
          </div>
          <div className={styles.theader}>
            <div className={styles.hdata}>
              <input
                className={styles.input}
                name="nume"
                value={formularContact.nume || ""}
                placeholder="nume"
                onChange={handleChangeContact}
              />
            </div>
            <div className={styles.hdata}>
              <input
                className={styles.input}
                name="prenume"
                value={formularContact.prenume || ""}
                placeholder="prenume"
                onChange={handleChangeContact}
              />
            </div>
            <div className={styles.hdata}>
              <input
                className={styles.input}
                name="adresa_email"
                value={formularContact.adresa_email || ""}
                placeholder="adresa_email"
                onChange={handleChangeContact}
              />
            </div>
            <div className={styles.hdata}>
              <input
                className={styles.input}
                name="descriere"
                value={formularContact.descriere || ""}
                placeholder="descriere"
                onChange={handleChangeContact}
              />
            </div>
            <div className={styles.hdata}>
              <input
                className={styles.input}
                name="numar_telefon"
                value={formularContact.numar_telefon || ""}
                placeholder="numar_telefon"
                onChange={handleChangeContact}
              />
            </div>
          </div>
        </div>

        <button className={styles.btn_salveaza} type="submit">
          Salveaza
        </button>
      </form>
    </div>
  );
}

export default AdaugaCompanie;
