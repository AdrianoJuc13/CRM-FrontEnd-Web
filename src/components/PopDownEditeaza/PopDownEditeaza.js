import React from "react";
import styles from "./PopDownEditeaza.module.scss";
import SaveBtn from "../Butoane/SaveBtn";
import SectiuneFieldEdit from "../SectiuneFieldEdit/SectiuneFieldEdit";

function PopDownEditeaza(props) {
  // const [formular, setFormular] = useState({});

  function handleSubmit(e) {
    alert("");
  }

  return (
    <form className={styles.PopDownEditeaza} onSubmit={handleSubmit}>
      <div
        onClick={() => {
          console.log(props.date);
        }}
      >
        {" "}
        buton
      </div>
      <SectiuneFieldEdit
        icon="BIEdit"
        titlu="Date fiscale"
        details={[
          ["Nr. inmatric.", "cu valoare"],
          ["Nr. .", "cu valoare"],
          //   [names[0], keys[0]],
          //   [names[1], keys[1]],
          //   [names[2], keys[2]],
        ]}
      />
      <SectiuneFieldEdit
        icon="TbChartArea"
        titlu="Regiune"
        details={
          [
            // [names[3], keys[3]],
            // [names[4], keys[4]],
          ]
        }
      />
      <SectiuneFieldEdit
        icon="MdOutlineSegment"
        titlu="Segment"
        details={
          [
            // [names[5], keys[5]],
            // [names[6], keys[6]],
            // [names[7], keys[7]],
            // [names[8], keys[8]],
          ]
        }
      />
      <SectiuneFieldEdit
        icon="ImMap2"
        titlu="Adresa"
        details={
          [
            // [names[9], keys[9]],
            // [names[10], keys[10]],
            // [names[11], keys[11]],
          ]
        }
      />
      <SaveBtn />
    </form>
  );
}

export default PopDownEditeaza;
