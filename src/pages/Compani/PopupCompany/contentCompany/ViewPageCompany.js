// react imports
import React, { useState } from "react";
import "./style.scss";
//---------------------------

//my imports
import { Page1 } from "./pagesForCompany/Page1";
import { Page2 } from "./pagesForCompany/Page2";
import { Page3 } from "./pagesForCompany/Page3";
import { Page4 } from "./pagesForCompany/Page4";
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
            <Page1 />
          ) : pages === 2 ? (
            <Page2 />
          ) : pages === 3 ? (
            <Page3 />
          ) : pages === 4 ? (
            <Page4 />
          ) : null}
        </div>
      </div>
    </div>
  );
};
