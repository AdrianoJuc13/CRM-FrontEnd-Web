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
    <div className={styles.pagina_principala}>
      <div className={styles.header}>
        <div className={styles.titlu}>Plan de actiuni</div>
        <AddBtn name="Creaza Actiune" link="/adauga_plan_de_actiune" />
      </div>
      <Tabel table_column_name="plan_de_actiuni_tabel" />
    </div>
  );
}

export default Plandeactiune;
