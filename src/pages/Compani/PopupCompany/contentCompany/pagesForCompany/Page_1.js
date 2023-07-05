import React from "react";
import SectiuneField from "../../../../../components/SectiuneField/SectiuneField";
import { useSelector } from "react-redux";

export const Page_1 = () => {
  const { currentCompanyState } = useSelector((state) => state.companiesState);

  return (
    <div className="page_data">
      <SectiuneField
        icon="BIEdit"
        titlu="Date fiscale"
        details={[
          ["Adresa de livrare", currentCompanyState.adresa_livrare],
          ["Adresa de facturare", currentCompanyState.adresa_facturare],
          ["Angajat responsabil", currentCompanyState.angajat_responsabil],
        ]}
      />
      <SectiuneField
        icon="TbChartArea"
        titlu="Regiune"
        details={[
          ["Cifra de afaceri", currentCompanyState.cifra_afaceri],
          ["Comp ID", currentCompanyState.companie_id],
          ["GPS", currentCompanyState.locatie_gps],
        ]}
      />
      <SectiuneField
        icon="MdOutlineSegment"
        titlu="Segment"
        details={[
          ["Marime Companie", currentCompanyState.marime_companie_id],
          ["Nisa ID", currentCompanyState.nisa_id],
          ["Numar angajati", currentCompanyState.numar_angajati],
        ]}
      />
      <SectiuneField
        icon="ImMap2"
        titlu="Adresa"
        details={[
          ["Pct. de lucru", currentCompanyState.punct_lucru_id],
          ["Vanzari totale", currentCompanyState.vanzari_totale],
        ]}
      />
    </div>
  );
};
