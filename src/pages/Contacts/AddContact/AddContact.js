import React, { useState } from "react";

//styling
import styles from "./AddContact.module.scss";
import { icons } from "../../../styles/icons";

//my imports
import InputCuTitlu from "../../../components/InputCuTitlu/InputCuTitlu";
import SelectCuTitlu from "../../../components/SelectCuTitlu/SelectCuTitlu";
import SaveBtn from "../../../components/Butoane/SaveBtn";
import BackBtn from "../../../components/Butoane/BackBtn";

function AddContact() {
  const [formular, setFormular] = useState({});
  const {
    nume,
    prenume,
    tip_angajat_id,
    functie_angajat_id,
    email,
    numar_telefon,
    punct_lucru_id,
  } = formular;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormular((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert(JSON.stringify(formular));
    console.log(formular);

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

        <div className={styles.titlu}>Formular pentru adaugat contact</div>
      </div>

      <form className={styles.body} onSubmit={handleSubmit}>
        <div className={styles.header}>Date Personale</div>
        <div className={styles.row}>
          <InputCuTitlu
            disabled={false}
            type="text"
            value={nume}
            placeholder="Nume"
            label="Nume"
            name="nume"
            onChange={handleChange}
          />

          <InputCuTitlu
            disabled={false}
            type="text"
            value={prenume}
            placeholder="Prenume"
            label="Prenume"
            name="prenume"
            onChange={handleChange}
          />
          <InputCuTitlu
            disabled={false}
            label="Email"
            type="text"
            value={email}
            placeholder="Ex: email@primagra.ro"
            name="email"
            onChange={handleChange}
          />
          <InputCuTitlu
            disabled={false}
            label="Telefon"
            type="text"
            value={numar_telefon}
            placeholder="Ex: 0732456345"
            name="numar_telefon"
            onChange={handleChange}
          />
        </div>
        <div className={styles.header}>Oficiu</div>
        <div className={styles.row}>
          <InputCuTitlu
            disabled={false}
            type="text"
            value={tip_angajat_id}
            placeholder="Ex: Director"
            label="Tip Angajat"
            name="tip_angajat_id"
            onChange={handleChange}
          />
          <InputCuTitlu
            disabled={false}
            label="Functie"
            type="text"
            value={functie_angajat_id}
            placeholder="Ex: Director de vanzari"
            name="functie_angajat_id"
            onChange={handleChange}
          />
          <SelectCuTitlu
            disabled={false}
            label="Punct de lucru"
            type="text"
            value={punct_lucru_id}
            placeholder="Constanta"
            name="punct_lucru_id"
            onChange={handleChange}
            optiuni={["Aiud", "Iasi", "Suceava", "Timisoara"]}
          />
        </div>

        <SaveBtn />
      </form>
    </div>
  );
}

export default AddContact;
