import React, { useState } from "react";
import cn from "classnames";
import styles from "./style.module.sass";

import Item from "@/components/BlockItem/Item";
import Tooltip from "core-digital-marketplace-dashboards/src/components/Tooltip";
import Switch from "core-digital-marketplace-dashboards/src/components/Switch";

const notificationsList = [
  {
    id: 0,
    title: "Личные сообщения",
    tooltip: "Small description",
  },
  {
    id: 1,
    title: "Комментарии",
    tooltip: "Small description",
  },
];


interface NotificationsProps {
    className?: string;
    title: string;
  }
  

const Notifications = ( props: NotificationsProps ) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleChange = (id) => {
    if (selectedFilters.includes(id)) {
      setSelectedFilters(selectedFilters.filter((x) => x !== id));
    } else {
      setSelectedFilters((selectedFilters) => [...selectedFilters, id]);
    }
  };

  return (
    <Item
      className={cn(styles.card, props.className)}
      title={props.title}
      classTitle="title-red"
    >
      <div className={styles.list}>
        {notificationsList.map((x, index) => (
          <div className={styles.line} key={index}>
            <div className={styles.title}>
              {x.title}{" "}
              <Tooltip
                className={styles.tooltip}
                title={x.tooltip}
                icon="info"
                place="top"
              />
            </div>
            <Switch
              className={styles.switch}
              value={selectedFilters.includes(x.id)}
              onChange={() => handleChange(x.id)}
            />
          </div>
        ))}
      </div>
    </Item>
  );
};

export default Notifications;
