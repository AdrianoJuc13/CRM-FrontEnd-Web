import React, { useState } from "react";

//styling
import styles from "./AddProspectingVisit.module.scss";
import { icons } from "../../../styles/icons";

//my imports
import InputCuTitlu from "../../../components/InputCuTitlu/InputCuTitlu";
import SelectCuTitlu from "../../../components/SelectCuTitlu/SelectCuTitlu";
import SaveBtn from "../../../components/Butoane/SaveBtn";
import BackBtn from "../../../components/Butoane/BackBtn";
import { PickerDate } from "../../../components/PickerDate/PickerDate";

function AddProspectingVisit() {
  const [formular, setFormular] = useState({});
  const {
    tip_actiune,
    status,
    receptor_id,
    emitator_id,
    descriere,
    data_creare_initiala,
    data_emitere,
    due_date,
    oportunitate_id,
  } = formular;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormular((values) => ({ ...values, [name]: value }));
  };

  const handleChangeDate = (date, dateString, name) => {
    setFormular((values) => ({ ...values, [name]: dateString }));
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

        <div className={styles.titlu}>Formular pentru adaugat contacte</div>
      </div>

      <form className={styles.body} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <SelectCuTitlu
            disabled={false}
            label="Tip de actiune"
            type="text"
            value={tip_actiune}
            placeholder="Ex: Research"
            name="tip_actiune"
            onChange={handleChange}
            optiuni={["Research", "Vizita"]}
          />
          <SelectCuTitlu
            disabled={false}
            label="Status"
            type="text"
            value={status}
            placeholder="Status"
            name="status"
            onChange={handleChange}
            optiuni={["In proces", "Finalizat", "Neinceput"]}
          />

          <SelectCuTitlu
            disabled={false}
            label="Receptor id"
            placeholder="receptor_id"
            type="text"
            value={receptor_id}
            name="receptor_id"
            onChange={handleChange}
            optiuni={["Vasile", "George", "Andrei "]}
          />

          <SelectCuTitlu
            disabled={false}
            label="Emitator"
            placeholder="Emitator ID"
            type="text"
            value={emitator_id}
            name="emitator_id"
            onChange={handleChange}
            optiuni={["Andrei ", "Vasile", "George"]}
          />
        </div>
        <div className={styles.header}>Date fiscale</div>
        <div className={styles.row}>
          <InputCuTitlu
            disabled={false}
            label="Descriere"
            placeholder="Descriere"
            type="text"
            value={descriere}
            name="descriere"
            onChange={handleChange}
          />
          <PickerDate
            label="Data creearii"
            handleChangeDate={handleChangeDate}
            name="data_creare_initiala"
            value={data_creare_initiala}
          />
          <PickerDate
            label="Data emitere"
            handleChangeDate={handleChangeDate}
            name="data_emitere"
            value={data_emitere}
          />
          <PickerDate
            label="Data limita"
            handleChangeDate={handleChangeDate}
            name="due_date"
            value={due_date}
          />

          <InputCuTitlu
            disabled={true}
            label="Oportunitate"
            type="text"
            value={oportunitate_id}
            placeholder="OportunitateId"
            name="oportunitate_id"
            onChange={handleChange}
          />
        </div>

        <SaveBtn />
      </form>
    </div>
  );
}

export default AddProspectingVisit;
