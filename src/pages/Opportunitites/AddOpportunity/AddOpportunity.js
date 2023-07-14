import React, { useState } from "react";
//styling
import styles from "./AddOpportunity.module.scss";
import { icons } from "../../../styles/icons";

//my imports
import InputCuTitlu from "../../../components/InputCuTitlu/InputCuTitlu";
import SelectCuTitlu from "../../../components/SelectCuTitlu/SelectCuTitlu";
import SaveBtn from "../../../components/Butoane/SaveBtn";
import BackBtn from "../../../components/Butoane/BackBtn";
import { PickerDate } from "../../../components/PickerDate/PickerDate";
import { PickerRangeDate } from "../../../components/PickerRangeDate/PickerRangeDate";

function AddOpportunity() {
  const [formular, setFormular] = useState({});
  const {
    descriere,
    titlu_oportunitate,
    tip_oportunitate,
    data_creare_initiala,
    data_emitere,
    perioada_desfasurare,
    data_limita,
    obiectiv_id,
    identificat_de,
    vanzari_totale,

    //  Warning: A component is changing an uncontrolled input to be controlled.
    //  This is likely caused by the value changing from undefined to a defined value, which should not happen.
    //  Decide between using a controlled or uncontrolled input element for the lifetime
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
          link="/oportunitati"
        />

        <div className={styles.titlu}>Formular pentru adaugat contacte</div>
      </div>

      <form className={styles.body} onSubmit={handleSubmit}>
        <div className={styles.header}>Date principale</div>
        <div className={styles.row}>
          <InputCuTitlu
            disabled={false}
            type="text"
            value={titlu_oportunitate}
            placeholder="Titlu"
            label="Titlu"
            name="titlu_oportunitate"
            onChange={handleChange}
          />
          <InputCuTitlu
            disabled={false}
            type="text"
            value={descriere}
            placeholder="Prezinta caracterisiticile oportunitatii"
            label="Descriere"
            name="descriere"
            onChange={handleChange}
          />
        </div>
        <div className={styles.header}>Perioda</div>

        <div className={styles.row}>
          <InputCuTitlu
            disabled={false}
            label="Tipul oportunitatii"
            type="text"
            value={tip_oportunitate}
            placeholder="Ex: Vanzare"
            name="tip_oportunitate"
            onChange={handleChange}
          />

          <PickerDate
            label={"Data Crearii"}
            handleChangeDate={handleChangeDate}
            name={"data_creare_initiala"}
            value={data_creare_initiala}
          />

          <PickerDate
            label="Data emitere"
            handleChangeDate={handleChangeDate}
            name="data_emitere"
            value={data_emitere}
          />

          <PickerRangeDate
            label="Perioada de desfasurare"
            handleChangeDate={handleChangeDate}
            name="perioada_desfasurare"
            value={perioada_desfasurare}
          />
          <PickerDate
            label="Data limita"
            handleChangeDate={handleChangeDate}
            name="data_limita"
            value={data_limita}
          />
        </div>
        <div className={styles.header}>Particularitati</div>
        <div className={styles.row}>
          <SelectCuTitlu
            disabled={false}
            label="Identificat de "
            type="text"
            value={identificat_de}
            placeholder="Albert Popovici"
            name="identificat_de"
            onChange={handleChange}
            optiuni={["Marius", "Andrei", "Vasile", "Ion"]}
          />
          <InputCuTitlu
            disabled={false}
            label="Vanzari totale"
            type="text"
            value={vanzari_totale}
            placeholder="Ex: 30000 (ron)"
            name="vanzari_totale"
            onChange={handleChange}
          />
          <InputCuTitlu
            disabled={true}
            label="Obiectiv_id automat"
            type="text"
            value={obiectiv_id}
            placeholder="obiectiv_id"
            name="obiectiv_id"
            onChange={handleChange}
            optiuni={["optiune 1", "optiune 2", "optiune 3", "optiune 4"]}
          />
        </div>

        <SaveBtn />
      </form>
    </div>
  );
}

export default AddOpportunity;
