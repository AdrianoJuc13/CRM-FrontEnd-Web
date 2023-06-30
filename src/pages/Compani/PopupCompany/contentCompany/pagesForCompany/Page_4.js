import React from "react";
import SectiuneTabel from "../../../../../components/SectiuneTabel/SectiuneTabel";

export const Page_4 = () => {
  return (
    <div className="page_data">
      <div className="element_data">
        <div className="titlu_data">Vanzari</div>
        <select className="select_data">
          <option>An</option>
          <option>Luna</option>
          <option>Zi</option>
        </select>
      </div>
      <div className="element_data">Total comenzi</div>
      <div className="element_data">24</div>
      <SectiuneTabel
        // data={
        //   payload
        //     ? payload.map((item) => {
        //         return [
        //           item["obiectiv_titlu"],
        //           item["oportunitate_data_creare_initiala"],
        //           item["oportunitate_data_emitere"],
        //           item["oportunitate_descriere"],
        //           item["oportunitate_due_date"],
        //         ];
        //       })
        //     : ["Empty"]
        // }
        headers={["ceva 1", "ceva 2", "ceva 3", "ceva 4", "Status"]}
      />
    </div>
  );
};
