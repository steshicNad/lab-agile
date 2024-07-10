import React,{ ReactNode } from "react";
import cn from "classnames";
import styles from "core-digital-marketplace-dashboards/src/screens/Settings/Item";


interface ItemProps{
    className: string, classTitle: string, title: string, 
    children: ReactNode
}

const Item = (props: ItemProps) => {
  return (
    <div className={cn(styles.item, props.className)}>
      <div className={cn(props.classTitle, styles.title)}>{props.title}</div>
      {props.children}
    </div>
  );
};

export default Item;
