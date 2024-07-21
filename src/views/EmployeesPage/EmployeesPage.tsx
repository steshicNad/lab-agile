import React, { useState } from "react";
import cn from "classnames";
import Form from "core-digital-marketplace-dashboards/src/components/Form";
import Filters from "core-digital-marketplace-dashboards/src/components/Filters";
// import Settings from "./Settings";
import Table from "@/components/Table/Table.tsx"
// import Panel from "./Panel";
// import Details from "./Details";

import { employees } from './data'

import styles from './style.module.sass';

const filterList = ["Все сотрудники", "Моя команда"];

export const EmployeesPage =  (props: {title: string})=>{
    const [activeIndex, setActiveIndex] = useState(0);
    const [search, setSearch] = useState("");
    const [visible, setVisible] = useState(false);

    const handleSubmit = (e) => {
        alert();
    };

    return (
      <> 
        <div className={cn("h3", styles.container, styles.title)}>{props.title}</div>
        <div className={cn(styles.card)}>            
            <div className={cn(styles.head)}>
                <Form
                    className={styles.form}
                    value={search}
                    setValue={setSearch}
                    onSubmit={() => handleSubmit()}
                    placeholder="Search by name or email"
                    type="text"
                    name="search"
                    icon="search"
                />
                <div className={styles.nav}>
                 {filterList.map((x, index) => (
                    <button
                    className={cn(styles.link, {
                    [styles.active]: index === activeIndex,
                  })}
                  onClick={() => setActiveIndex(index)}
                  key={index}
                >
                  {x}
                </button>
              ))}
                </div>
                <Filters
                    className={styles.filters}
                    title="Showing 10 of 24 customer"
                >
                    {/* <Settings /> */}
                </Filters>
            </div>
            <div className={cn(styles.row, { [styles.flex]: visible })}>
        
          <Table
            listEmployees={employees}
            className={styles.table}
            activeTable={visible}
            setActiveTable={setVisible}
          />
          {/* <Details
            className={styles.details}
            onClose={() => setVisible(false)}
          /> */}
        </div>
        </div>
      {/* <Panel /> */}
      </>
    )
}

export default EmployeesPage;
