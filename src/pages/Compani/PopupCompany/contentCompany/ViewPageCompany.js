// react imports
import React, { useState } from "react";
import "./style.scss";
//---------------------------

//my imports
import { Page_1 } from "./pagesForCompany/Page_1";
import { Page_2 } from "./pagesForCompany/Page_2";
import { Page_3 } from "./pagesForCompany/Page_3";
import { Page_4 } from "./pagesForCompany/Page_4";
//---------------------------

export const ViewPageCompany = () => {
  const [pages, setPages] = useState(1);

  return (
    <div className="view_page">
      <div className="ecran_cu_pagini">
        {/* the buttons for selecting the page content type */}
        <div className="header_butoane">
          <div
            className={`header_titlu ${
              pages === 1 ? "header_titlu_activ" : null
            }`}
            onClick={() => {
              setPages(1);
            }}
          >
            Info
          </div>
          <div
            className={`header_titlu ${
              pages === 2 ? "header_titlu_activ" : null
            }`}
            onClick={() => {
              setPages(2);
            }}
          >
            Oportunitati
          </div>
          <div
            className={`header_titlu ${
              pages === 3 ? "header_titlu_activ" : null
            }`}
            onClick={() => {
              setPages(3);
            }}
          >
            Istoric
          </div>
          <div
            className={`header_titlu ${
              pages === 4 ? "header_titlu_activ" : null
            }`}
            onClick={() => {
              setPages(4);
            }}
          >
            Vanzari
          </div>
        </div>
        {/* ----------------------------------------------- */}

        {/* the data */}
        <div className="screen_date">
          {pages === 1 ? (
            <Page_1 />
          ) : pages === 2 ? (
            <Page_2 />
          ) : pages === 3 ? (
            <Page_3 />
          ) : pages === 4 ? (
            <Page_4 />
          ) : null}
        </div>
      </div>
    </div>
  );
};
