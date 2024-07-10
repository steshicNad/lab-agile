import React from "react";
import cn from "classnames";
import styles from "./style.module.sass";
import Item from "@/components/BlockItem/Item";
import TextInput from "core-digital-marketplace-dashboards/src/components/TextInput";

interface AccountProps {
    className?: string;
    title: string;
}

const Account = (props: AccountProps) => {

  return (
    <Item
      className={cn(styles.card, props.className)}
      title={props.title}
      classTitle="title-purple"
    >
      <div className={styles.fieldset}>
        <TextInput
          className={styles.field}
          label="Текущий пароль"
          name="old-password"
          type="password"
          tooltip="Maximum 100 characters. No HTML or emoji allowed"
          required
        />
        <div className={styles.row}>
          <TextInput
            className={styles.field}
            label="Новый пароль"
            name="new-password"
            type="password"
            tooltip="Maximum 100 characters. No HTML or emoji allowed"
            required
          />
          <TextInput
            className={styles.field}
            label="Повторите новый пароль"
            name="confirm-password"
            type="password"
            tooltip="Maximum 100 characters. No HTML or emoji allowed"
            required
          />
        </div>
        <button className={cn("button-stroke", styles.button)}>
            Обновить пароль
        </button>
      </div>
    </Item>
  );
};

export default Account;
