import React, { useState } from "react";

//styling
import styles from "./AddObjectives.module.scss";
import { icons } from "../../../styles/icons";

//my imports
import InputCuTitlu from "../../../components/InputCuTitlu/InputCuTitlu";
import SelectCuTitlu from "../../../components/SelectCuTitlu/SelectCuTitlu";
import SaveBtn from "../../../components/Butoane/SaveBtn";
import BackBtn from "../../../components/Butoane/BackBtn";
import { PickerDate } from "../../../components/PickerDate/PickerDate";

function AddObjectives() {
  const [formular, setFormular] = useState({});
  const {
    tip_obiectiv,
    titlu_obiectiv,
    nisa_id,
    punct_lucru_id,
    companie_id,
    vanzari_totale,
    data_creare_initiala,
    data_emitere,
    numar_luni,
    data_limita,
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
          link="/obiective"
        />

        <div className={styles.titlu}>Formular pentru adaugat obiective</div>
      </div>

      <form className={styles.body} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <InputCuTitlu
            disabled={false}
            type="text"
            value={tip_obiectiv}
            placeholder="Tip obiectiv"
            label="Tip Obiectiv"
            name="tip_obiectiv"
            onChange={handleChange}
          />

          <InputCuTitlu
            disabled={true}
            type="text"
            value={titlu_obiectiv}
            placeholder="caen"
            label="Titlu Obiectiv"
            name="titlu_obiectiv"
            onChange={handleChange}
          />
        </div>
        <div className={styles.header}>Date fiscale</div>
        <div className={styles.row}>
          <InputCuTitlu
            disabled={false}
            type="text"
            value={nisa_id}
            placeholder="cod j"
            label="Nisa"
            name="nisa_id"
            onChange={handleChange}
          />
          <InputCuTitlu
            disabled={true}
            label="Pct. de lucru"
            type="text"
            value={punct_lucru_id}
            placeholder="cod ax"
            name="punct_lucru_id"
            onChange={handleChange}
          />

          <InputCuTitlu
            disabled={false}
            label="companie ID"
            type="text"
            value={companie_id}
            placeholder="cod ax"
            name="companie_id"
            onChange={handleChange}
          />
          <InputCuTitlu
            disabled={false}
            label="Vanzari totale"
            type="text"
            value={vanzari_totale}
            placeholder="cod ax"
            name="vanzari_totale"
            onChange={handleChange}
          />
        </div>
        <div className={styles.header}>Segment</div>
        <div className={styles.row}>
          <SelectCuTitlu
            disabled={false}
            label="Punct de lucru"
            type="text"
            value={data_creare_initiala}
            placeholder="pct. de lucru"
            name="data_creare_initiala"
            onChange={handleChange}
            optiuni={["optiune 1", "optiune 2", "optiune 3", "optiune 4"]}
          />
          <PickerDate
            label="Data Emitere"
            value={data_emitere}
            name="data_emitere"
            handleChangeDate={handleChangeDate}
          />
          <SelectCuTitlu
            disabled={false}
            label="Segment de piata"
            type="text"
            value={numar_luni}
            placeholder="Segment de piata"
            name="numar_luni"
            onChange={handleChange}
            optiuni={["optiune 1", "optiune 2", "optiune 3", "optiune 4"]}
          />
          <SelectCuTitlu
            disabled={true}
            label="Tip Client"
            type="text"
            value={data_limita}
            placeholder="Tip Client"
            name="data_limita"
            onChange={handleChange}
            optiuni={["optiune 1", "optiune 2", "optiune 3", "optiune 4"]}
          />
        </div>

        <SaveBtn />
      </form>
    </div>
  );
}

export default AddObjectives;
