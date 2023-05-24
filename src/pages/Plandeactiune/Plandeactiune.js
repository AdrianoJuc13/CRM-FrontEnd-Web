import React, { useEffect } from "react";
import styles from "../../styles/PaginaLayout1.module.scss";
import Tabel from "../../components/Tabel/Tabel";
import { useDispatch, useSelector } from "react-redux";
import AddBtn from "../../components/Butoane/AddBtn";
import { fetchPlandeactiune } from "../../features/plandeactiune/PlandeactiuneSlice";

function Plandeactiune() {
  const { header_tabel } = useSelector((state) => state.headers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlandeactiune());
  }, [dispatch]);

  const plandeactiune = useSelector((state) => state.plandeactiune);

  return ( 
    <div className={styles.rapoarte}>
      <div className={styles.header}>
        <div className={styles.titlu}>Plan de actiuni</div>
        <AddBtn name="Creaza Actiune" link="/adauga_raport" />
      </div>
      <Tabel headers={header_tabel["plan_de_actiune"]} date={plandeactiune} />
    </div>
  );
}

export default Plandeactiune;
