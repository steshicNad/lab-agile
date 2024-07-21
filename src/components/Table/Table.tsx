import React, { useState } from "react";
import styles from "./style.module.sass";
import cn from "classnames";
import Checkbox from "core-digital-marketplace-dashboards/src/components/Checkbox";
import Loader from "core-digital-marketplace-dashboards/src/components/Loader";
import Row from "./Row/Row.tsx";

export interface Employee {
    id: number,
    user: string,
    login: string,
    avatar: string,
    email: string,
    level: number,
}
interface TableProps {
    listEmployees: Array<Employee>,
    className: string,
    activeTable: boolean,
    setActiveTable: boolean,
}

const Table = (props: TableProps) => {
  const [chooseAll, setСhooseAll] = useState(false);
  const [activeId, setActiveId] = useState(props.listEmployees[0].id);

  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleChange = (id: number) => {
    if (selectedFilters.includes(id)) {
      setSelectedFilters(selectedFilters.filter((x) => x !== id));
    } else {
      setSelectedFilters((selectedFilters) => [...selectedFilters, id]);
    }
  };

  return (
    <div className={cn(styles.wrapper, props.className)}>
      <div className={cn(styles.table)}>
        <div className={cn(styles.row, { [styles.active]: props.activeTable })}>
          <div className={styles.col}>
            <Checkbox
              className={styles.checkbox}
              value={chooseAll}
              onChange={() => setСhooseAll(!chooseAll)}
            />
          </div>
          <div className={styles.col}>Имя</div>
          <div className={styles.col}>Почта</div>
          <div className={styles.col}>Уровень</div>
        </div>
        {props.listEmployees.map((x, index) => (
          <Row
          item={x}
          key={index}
          activeTable={props.activeTable}
          setActiveTable={props.setActiveTable}
          activeId={activeId}
          setActiveId={setActiveId}
          value={selectedFilters.includes(x.id)}
          onChange={() => handleChange(x.id)}
          />
        ))}
      </div>
      <div className={styles.foot}>
        <button className={cn("button-stroke button-small", styles.button)}>
          <Loader className={styles.loader} />
          <span>Load more</span>
        </button>
      </div>
    </div>
  );
};

export default Table;
