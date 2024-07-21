import React from "react";
import cn from "classnames";
import styles from "./style.module.sass";

import Item from "@/components/BlockItem/Item";
import Tooltip from "core-digital-marketplace-dashboards/src/components/Tooltip";


interface PaymentProps {
    className?: string;
    title: string;
}
const dataPayment  ={
    number: 'МИР 1222 2333 4444 5555',
}

const Payment = (props: PaymentProps) => {
  return (
    <Item
      className={cn(styles.card, props.className)}
      title={props.title}
      classTitle="title-green"
    >
      <div className={styles.line}>
        <div className={styles.title}>
          {dataPayment.number}
          <Tooltip
            className={styles.tooltip}
            title="Small description"
            icon="info"
            place="top"
          />
        </div>
        <button className={cn("button-stroke button-small", styles.button)}>
          Изменить
        </button>
      </div>
    </Item>
  );
};

export default Payment;
