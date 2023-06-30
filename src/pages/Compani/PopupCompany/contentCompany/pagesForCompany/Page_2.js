import React from "react";
import SectiuneTabel from "../../../../../components/SectiuneTabel/SectiuneTabel";

export const Page_2 = () => {
  const payload = false;
  return (
    <div className="page_data">
      <div className="element_data">
        <div className="titlu_data">Oportunitati</div>
        <select className="select_data">
          <option>An</option>
          <option>Luna</option>
          <option>Zi</option>
        </select>
      </div>
      <div className="element_data">Total oportunitati</div>
      <div className="element_data">{payload ? payload.length : 0}</div>
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
