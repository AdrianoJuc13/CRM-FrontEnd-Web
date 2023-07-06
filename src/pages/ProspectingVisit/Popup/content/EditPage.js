import React, { useState } from "react";
import "./style.scss";

import SaveBtn from "../../../../components/Butoane/SaveBtn";
import SectiuneFieldEdit from "../../../../components/SectiuneFieldEdit/SectiuneFieldEdit";
import { useSelector } from "react-redux";

export const EditPage = () => {
  const { currentCompanyState } = useSelector((state) => state.companiesState);
  const [formular, setFormular] = useState(currentCompanyState);
  const {
    // activitate_companie_id,
    adresa_facturare,
    adresa_livrare,
    angajat_responsabil,
    cifra_afaceri,
    companie_id,
    locatie_gps,
    marime_companie_id,
    nisa_id,
    numar_angajati,
    // numar_inregistrare,
    nume,
    punct_lucru_id,
    vanzari_totale,
  } = formular;

  function handleSubmit(e) {
    e.preventDefault();
    // alert(JSON.stringify(formular));
    console.log(formular);
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormular((values) => ({ ...values, [name]: value }));
  };
  return (
    <div className="edit_page">
      <div>
        <div className="pop_header">
          <div className="pop_titlu">
            {currentCompanyState && currentCompanyState.nume
              ? currentCompanyState.nume
              : "Nu are un nume"}
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <SectiuneFieldEdit
            icon="BIEdit"
            titlu="Date fiscale"
            details={[
              ["Nume", nume, "nume"],
              ["Adresa de livrare", adresa_livrare, "adresa_livrare"],
              ["Adresa de facturare", adresa_facturare, "adresa_facturare"],
              [
                "Angajat responsabil",
                angajat_responsabil,
                "angajat_responsabil",
              ],
            ]}
            handle={handleChange}
          />
          <SectiuneFieldEdit
            icon="TbChartArea"
            titlu="Regiune"
            details={[
              ["Cifra de afaceri", cifra_afaceri, "cifra_afaceri"],
              ["Comp ID", companie_id, "cifra_afaceri"],
              ["GPS", locatie_gps, "locatie_gps"],
            ]}
            handle={handleChange}
          />
          <SectiuneFieldEdit
            icon="MdOutlineSegment"
            titlu="Segment"
            details={[
              ["Marime Companie", marime_companie_id, "marime_companie_id"],
              ["Nisa ID", nisa_id, "nisa_id"],
              ["Numar angajati", numar_angajati, "numar_angajati"],
            ]}
            handle={handleChange}
          />
          <SectiuneFieldEdit
            icon="ImMap2"
            titlu="Adresa"
            details={[
              ["Pct. de lucru", punct_lucru_id, "punct_lucru_id"],
              ["Vanzari totale", vanzari_totale, "vanzari_totale"],
            ]}
            handle={handleChange}
          />
          <SaveBtn />
        </form>
      </div>
    </div>
  );
};
