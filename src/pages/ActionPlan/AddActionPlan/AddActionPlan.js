import React, { useState } from "react";

//styling
import styles from "./AddActionPlan.module.scss";
import { icons } from "../../../styles/icons";

//my imports
import InputCuTitlu from "../../../components/InputCuTitlu/InputCuTitlu";
import SelectCuTitlu from "../../../components/SelectCuTitlu/SelectCuTitlu";
import SaveBtn from "../../../components/Butoane/SaveBtn";
import BackBtn from "../../../components/Butoane/BackBtn";

function AddActionPlan() {
  const [formular, setFormular] = useState({});
  const {
    nume,
    companie_cod_fiscalj,
    adresa_livrare,
    adresa_facturare,
    companie_cod_ax,
    punct_lucru_id,
  } = formular;

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
    <div className={styles.pagina_adauga}>
      <div className={styles.header_top}>
        <BackBtn
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
            disabled={false}
            type="text"
            value={nume}
            placeholder="Nume"
            label="Nume Societate"
            name="nume"
            onChange={handleChange}
          />

          <InputCuTitlu
            disabled={true}
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
            disabled={false}
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
            value={companie_cod_ax}
            placeholder="cod ax"
            name="companie_cod_ax"
            onChange={handleChange}
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
            value={punct_lucru_id}
            placeholder="pct. de lucru"
            name="punct_lucru_id"
            onChange={handleChange}
            optiuni={["optiune 1", "optiune 2", "optiune 3", "optiune 4"]}
          />
          <SelectCuTitlu
            disabled={false}
            label="Angajat responsabil"
            type="text"
            value={punct_lucru_id}
            placeholder="Angajat responsabil"
            name="punct_lucru_id"
            onChange={handleChange}
            optiuni={["optiune 1", "optiune 2", "optiune 3", "optiune 4"]}
          />
          <SelectCuTitlu
            disabled={false}
            label="Segment de piata"
            type="text"
            value={punct_lucru_id}
            placeholder="Segment de piata"
            name="punct_lucru_id"
            onChange={handleChange}
            optiuni={["optiune 1", "optiune 2", "optiune 3", "optiune 4"]}
          />
          <SelectCuTitlu
            disabled={true}
            label="Tip Client"
            type="text"
            value={punct_lucru_id}
            placeholder="Tip Client"
            name="punct_lucru_id"
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

        <SaveBtn />
      </form>
    </div>
  );
}

export default AddActionPlan;
