// react imports
import React from "react";
import "./style.scss";
//---------------------------

//my imports
import SectiuneField from "../../../../components/SectiuneField/SectiuneField";
import { useSelector } from "react-redux";
//---------------------------

export const ViewPage = () => {
  const { currentContactState } = useSelector((state) => state.contactsState);
  return (
    <div className="view_page">
      <SectiuneField
        icon="BIEdit"
        titlu="Date personale"
        details={[
          ["Prenume", currentContactState.angajat_prenume],
          ["Nume", currentContactState.angajat_nume],
          ["Email", currentContactState.angajat_email],
          ["Telefon", currentContactState.angajat_numar_telefon],
        ]}
      />
      <SectiuneField
        icon="BIEdit"
        titlu="Date companie"
        details={[
          ["ID", currentContactState.angajat_id],
          ["Functie", currentContactState.angajat_functie],
        ]}
      />
      <SectiuneField
        icon="BIEdit"
        titlu="Pct de lucru"
        details={[
          ["ID", currentContactState.angajat_id],
          ["Functie", currentContactState.angajat_functie],
        ]}
      />
    </div>
  );
};
