import React, { useState } from "react";
import styles from "../../styles/adaugaCompanie.module.scss";

import AddBtn from "../../components/Butoane/AddBtn";

import { icons } from "../../styles/icons";
import axios from "axios";

function AdaugaCompanie() {
  const [formular, setFormular] = useState({
    // nume: "Burdujeni Records de test",
    // numar_inregistrare: "test numar inregistrare",
    // vanzari_totale: 6969420,
    // adresa_livrare: "Calea Burdujeni ",
    // adresa_facturare: "tesdf t",
    // numar_angajati: 20,
    // cifra_afaceri: 222222,
    // locatie_gps: "asdasd",
    nisa_id: "2ab1b898-8acc-4953-975e-5c4795033dfb",
    marime_companie_id: "3dfe4ec2-9a1a-4d97-be36-f5c1dde181c9",
    activitate_companie_id: "d26448d2-d9d9-4522-9c78-a05721aa90ac",
    angajat_responsabil: "266caa08-f7c7-4620-8168-0198f33aa63b",
    punct_lucru_id: "b0fbaff2-943b-4d21-a834-01942bf2a7c1",
  });
  const [formularContact, setFormularContact] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormular((values) => ({ ...values, [name]: value }));
  };
  const handleChangeContact = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormularContact((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // alert(JSON.stringify(formular));
    // alert(JSON.stringify(formularContact));
    // console.log(formular);
    // console.log(formularContact);
    if (Object.keys(formularContact).length < 5)
      alert("Completeaza toate campurile pentru a continua");
    else {
      axios.post(`${process.env.PUBLIC_URL}/companii`, formular).then(
        (response) => {
          console.log(response);
          if (response.status === 200)
            axios
              .post(
                `${process.env.PUBLIC_URL}/persoaneContact`,
                formularContact
              )
              .then(
                (response) => {
                  console.log(response);
                },
                (error) => {
                  console.log(error);
                }
              );
        },
        (error) => {
          console.log(error);
        }
      );
      setFormularContact({});
    }
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
          <div className={styles.form_input}>
            <div className={styles.subheading}>Nume Societate</div>
            <input
              className={styles.input}
              type="text"
              name="nume"
              value={formular.nume || ""}
              onChange={handleChange}
              placeholder="Nume"
            />
          </div>
          <div className={styles.form_input}>
            <div className={styles.subheading}>Cod CAEN</div>
            <input
              disabled // ---------------------------
              className={styles.input}
              type="text"
              name="caen"
              // value={formular.C A E N || ""}
              // onChange={handleChange}
              placeholder="C A E N"
            />
          </div>
        </div>
        <div className={styles.header}>Date fiscale</div>
        <div className={styles.row}>
          <div className={styles.form_input}>
            <div className={styles.subheading}>Numar fiscal (J)</div>
            <input
              disabled // ---------------------------
              className={styles.input}
              type="text"
              name="companie_cod_fiscalj"
              value={formular.companie_cod_fiscalj || ""}
              onChange={handleChange}
              placeholder="companie_cod_fiscalj"
            />
          </div>
          <div className={styles.form_input}>
            <div className={styles.subheading}>Cod fiscal</div>
            <input
              disabled // ---------------------------
              className={styles.input}
              type="text"
              name="companie_cod_ax"
              // value={formular.companie_cod_ax || ""}
              // onChange={handleChange}
              placeholder="A X"
            />
          </div>
          <div className={styles.form_input}>
            <div className={styles.subheading}>Adresa Sociala</div>

            <input
              className={styles.input}
              type="text"
              name="adresa_facturare"
              value={formular.adresa_facturare || ""}
              onChange={handleChange}
              placeholder="adresa_facturare"
            />
          </div>
          <div className={styles.form_input}>
            <div className={styles.subheading}>Adresa Livrare</div>

            <input
              className={styles.input}
              type="text"
              name="adresa_livrare"
              value={formular.adresa_livrare || ""}
              onChange={handleChange}
              placeholder="adresa_livrare"
            />
          </div>
        </div>
        <div className={styles.header}>Segment</div>
        <div className={styles.row}>
          <div className={styles.form_select}>
            <div className={styles.subheading}>Punct de lucru</div>

            <select
              disabled // ---------------------------
              className={styles.select}
              name="punct_lucru_id"
              value={formular.punct_lucru_id || ""}
              placeholder="punct_lucru_id"
              onChange={handleChange}
            >
              <option>-</option>

              <option>Bucuresti</option>
            </select>
          </div>
          <div className={styles.form_select}>
            <div className={styles.subheading}>Angajat responsabil</div>

            <select
              disabled // ---------------------------
              className={styles.select}
              placeholder="Nume"
            >
              <option>Craciun Paul</option>
            </select>
          </div>

          <div className={styles.form_select}>
            <div className={styles.subheading}> Segment de piata</div>

            <select
              disabled // ---------------------------
              className={styles.select}
              placeholder="Nume"
            >
              <option>Agricultura</option>
            </select>
          </div>
          <div className={styles.form_select}>
            <div className={styles.subheading}>Tip Client</div>
            <select
              className={styles.select}
              disabled // ---------------------------
            >
              <option>Client mare</option>
            </select>
          </div>
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
