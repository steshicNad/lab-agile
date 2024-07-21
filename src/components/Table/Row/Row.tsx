import React, { lazy,useState } from "react";
import cn from "classnames";
import styles from "./style.module.sass";
import Checkbox from "core-digital-marketplace-dashboards/src/components/Checkbox";
import Balance from "core-digital-marketplace-dashboards/src/components/Balance";


const Row = ({
    item,
    value,
    onChange,
    activeTable,
    setActiveTable,
    activeId,
    setActiveId,
}) => {
    
    const handleClick = (id) => {
        setActiveTable(true);
        setActiveId(id);
    };

    return (
        <>
            <div
                className={cn(
                    styles.row,
                    { [styles.selected]: activeId === item.id },
                    { [styles.active]: activeTable }
                )}
            >
                <div className={styles.col}>
                    <Checkbox
                        className={styles.checkbox}
                        value={value}
                        onChange={onChange}
                    />
                </div>
                <div className={styles.col}>
                    <div
                        className={styles.item}
                        onClick={() => handleClick(item.id)}
                    >
                       <div className={styles.avatar}>
                            <img src={require(`../../../assets/icons/${item.avatar}.svg`).default} alt="Avatar" />
                        </div>
                        <div className={styles.details}>
                            <div className={styles.user}>{item.user}</div>
                            <div className={styles.login}>{item.login}</div>
                            <div className={styles.email}>{item.email}</div>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.email}>{item.email}</div>
                </div>
                <div className={styles.col}>
                    <div className={cn("status-green-dark", styles.purchase)}>
                        {item.level}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Row;

