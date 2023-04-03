import React from "react";
import styles from "./AdaugaCompanie.module.scss";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function AdaugaCompanie() {
  const navigate = useNavigate();
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

      <div className={styles.body}>
        <div className={styles.row}>
          <div className={styles.form_input}>
            <div className={styles.subheading}>Nume Societate</div>
            <input className={styles.input} placeholder="Nume"></input>
          </div>
          <div className={styles.form_input}>
            <div className={styles.subheading}>Cod CAEN</div>
            <input className={styles.input} placeholder="Nume"></input>
          </div>
        </div>
        <div className={styles.header}>Date fiscale</div>
        <div className={styles.row}>
          <div className={styles.form_input}>
            <div className={styles.subheading}>Numar fiscal (J)</div>
            <input className={styles.input} placeholder="Nume"></input>
          </div>
          <div className={styles.form_input}>
            <div className={styles.subheading}>Cod fiscal</div>
            <input className={styles.input} placeholder="Nume"></input>
          </div>
          <div className={styles.form_input}>
            <div className={styles.subheading}>Adresa Sociala</div>
            <input className={styles.input} placeholder="Nume"></input>
          </div>
          <div className={styles.form_input}>
            <div className={styles.subheading}>Adresa Livrare</div>
            <input className={styles.input} placeholder="Nume"></input>
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
              <input className={styles.input}></input>
            </div>
            <div className={styles.hdata}>
              <input className={styles.input}></input>
            </div>
            <div className={styles.hdata}>
              <input className={styles.input}></input>
            </div>
            <div className={styles.hdata}>
              <input className={styles.input}></input>
            </div>
            <div className={styles.hdata}>
              <input className={styles.input}></input>
            </div>
          </div>
        </div>

        <div className={styles.btn_salveaza}>
          <button className={styles.button}>Salveaza</button>
        </div>
      </div>
    </div>
  );
}
export default AdaugaCompanie;
