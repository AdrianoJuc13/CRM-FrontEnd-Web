import React, { useState } from "react";
import styles from "./AdaugaCompanie.module.scss";

import { BsArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

// const example = {
//   companie_id: "a32f348e-5bee-44af-89ea-3f156aa31391",
//   nume: "Poligon Tech UPDATED2",
//   numar_inregistrare: "test numar inregistrare",
//   nisa_id: "9c7d8ec7-ec66-4910-9b78-56bd242956a8",
//   marime_companie_id: "9bc0f1d8-acc6-4ddc-81b7-e65e7a18512f",
//   activitate_companie_id: "27790647-5601-45ba-a44f-905a67438c04",
//   vanzari_totale: 88888,
//   adresa_livrare: "strada terst",
//   adresa_facturare: "tesdf t",
//   numar_angajati: 20,
//   cifra_afaceri: 222222,
//   locatie_gps: "asdasd",
//   angajat_responsabil: "d12c96f0-1433-4399-be22-8e46ba02ae41",
//   punct_lucru_id: "f1ceb2e2-77d5-421d-89df-0fdf63e1591c",
// };

function AdaugaCompanie() {
  const navigate = useNavigate();
  const [formular, setFormular] = useState({
    // companie_id: "",
    // nume: "",
    // numar_inregistrare: "",
    // nisa_id: "",
    // marime_companie_id: "",
    // activitate_companie_id: "",
    // vanzari_totale: 0,
    // adresa_livrare: "",
    // adresa_facturare: "",
    // numar_angajati: 0,
    // cifra_afaceri: 0,
    // locatie_gps: "",
    // angajat_responsabil: "",
    // punct_lucru_id: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormular((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formular));
  };

  return (
    <div className={styles.compani}>
      <div className={styles.header}>
        <button
          className={styles.addbtn}
          onClick={() => {
            navigate("/compani");
          }}
        >
          <div className={styles.arrow}>
            <BsArrowLeftCircleFill />
          </div>
          <div className={styles.text}>Inapoi</div>
        </button>
        <div className={styles.titlu}>adauga companii </div>
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
              className={styles.input}
              type="text"
              name="nume"
              // value={formular.nume || ""}
              // onChange={handleChange}
              placeholder="Cod Caen"
            />
          </div>
        </div>
        <div className={styles.header}>Date fiscale</div>
        <div className={styles.row}>
          <div className={styles.form_input}>
            <div className={styles.subheading}>Numar fiscal (J)</div>
            <input
              className={styles.input}
              type="text"
              // name="nume"
              // value={formular.nume || ""}
              // onChange={handleChange}
              placeholder="Numar fiscal J"
            />
          </div>
          <div className={styles.form_input}>
            <div className={styles.subheading}>Cod fiscal</div>
            <input
              className={styles.input}
              type="text"
              // name="nume"
              // value={formular.nume || ""}
              // onChange={handleChange}
              placeholder="Nume"
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

            <select className={styles.select} placeholder="Nume">
              <option>Bucuresti</option>
            </select>
          </div>
          <div className={styles.form_select}>
            <div className={styles.subheading}>Angajat responsabil</div>

            <select className={styles.select} placeholder="Nume">
              <option>Craciun Paul</option>
            </select>
          </div>
          <div className={styles.form_select}>
            <div className={styles.subheading}> Segment de piata</div>

            <select className={styles.select} placeholder="Nume">
              <option>Agricultura</option>
            </select>
          </div>
          <div className={styles.form_select}>
            <div className={styles.subheading}>Tip Client</div>
            <select className={styles.select}>
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
              <input className={styles.input} />
            </div>
            <div className={styles.hdata}>
              <input className={styles.input} />
            </div>
            <div className={styles.hdata}>
              <input className={styles.input} />
            </div>
            <div className={styles.hdata}>
              <input className={styles.input} />
            </div>
            <div className={styles.hdata}>
              <input className={styles.input} />
            </div>
          </div>
        </div>

        <div className={styles.btn_salveaza}>
          <button className={styles.button} type="submit">
            Salveaza
          </button>
        </div>
      </form>
    </div>
  );
}
export default AdaugaCompanie;
