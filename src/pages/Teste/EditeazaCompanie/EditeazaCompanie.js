import React from "react";
import styles from "./EditeazaCompanie.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  closePopDown,
  openPopUp,
} from "../../../features/compani/CompaniSlice";
import { FaReadme, FaWindowClose } from "react-icons/fa";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlinePhone } from "react-icons/ai";
import { ImMap2 } from "react-icons/im";

function EditeazaCompanie() {
  const { isOpenDown } = useSelector((store) => store.compani);
  const dispatch = useDispatch();

  return (
    <div
      className={`${styles.popdown_open}  ${
        isOpenDown ? null : styles.popdown_closed
      }`}
    >
      <div
        className={`${styles.white_screen}  ${
          isOpenDown ? null : styles.white_screen_closed
        }`}
      >
        <div className={styles.header}>
          <div className={styles.title}>Editeaza Egger</div>
          <FaWindowClose
            className={styles.exit_btn}
            onClick={() => {
              dispatch(closePopDown());
              dispatch(openPopUp());
            }}
          />
        </div>
        <form className={styles.form}>
          <div className={styles.zona}>
            <div className={styles.row}>
              <BiHomeAlt className={styles.icon} />
              <div className={styles.title}>Date Companie</div>
            </div>
            <div className={styles.row2}>
              <div className={styles.label}>
                <div className={styles.title}>Nume:</div>
                <input className={styles.input} placeholder="introdu un nume" />
              </div>
              <div className={styles.label}>
                <div className={styles.title}>Numar inregistrare: </div>
                <input
                  className={styles.input}
                  placeholder="introdu un numar de inregistrare"
                />
              </div>
            </div>
            <div className={styles.row2}>
              <div className={styles.label}>
                <div className={styles.title}>Numar fiscal (J):</div>
                <input
                  className={styles.input}
                  placeholder="introdu un numar fiscal J"
                />
              </div>
            </div>
          </div>
          <div className={styles.zona}>
            <div className={styles.row}>
              <AiOutlinePhone className={styles.icon} />
              <div className={styles.title}>Datele de contact</div>
            </div>
            <div className={styles.row2}>
              <div className={styles.label}>
                <div className={styles.title}>Telefon: </div>
                <input
                  className={styles.input}
                  placeholder="introdu un numar de telefon"
                />
              </div>
              <div className={styles.label}>
                <div className={styles.title}>Email: </div>
                <input
                  className={styles.input}
                  placeholder="introdu un email"
                />
              </div>
            </div>
          </div>
          <div className={styles.zona}>
            <div className={styles.row}>
              <FaReadme className={styles.icon} />
              <div className={styles.title}>Sector</div>
            </div>
            <div className={styles.row2}>
              <div className={styles.label}>
                <div className={styles.title}>Marime companie:</div>
                <input
                  className={styles.input}
                  placeholder="introdu o dimensiune"
                />
              </div>
              <div className={styles.label}>
                <div className={styles.title}>Activitate companie:</div>
                <input
                  className={styles.input}
                  placeholder="introdu o activitate"
                />
              </div>
            </div>
            <div className={styles.row2}>
              <div className={styles.label}>
                <div className={styles.title}>Nisa:</div>
                <input className={styles.input} placeholder="alege o nisa" />
              </div>
            </div>
          </div>
          <div className={styles.zona}>
            <div className={styles.row}>
              <ImMap2 className={styles.icon} />
              <div className={styles.title}>Adresa</div>
            </div>
            <div className={styles.tabel}>
              <div className={styles.theader}>
                <div className={styles.th}> No</div>
                <div className={styles.th}> Judet</div>
                <div className={styles.th}> Oras</div>
                <div className={styles.th}> Strada, nr</div>
              </div>
              <div className={styles.trow}>
                <div className={styles.td}>Social</div>
                <div className={styles.td}>Suceava</div>
                <div className={styles.td}>Radauti</div>
                <div className={styles.td}>Egger fabrica radauti</div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditeazaCompanie;
