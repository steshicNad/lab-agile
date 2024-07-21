import React, { useState } from "react";
import cn from "classnames";
import styles from "./style.module.sass";

import Item from "@/components/BlockItem/Item";
import Icon from "core-digital-marketplace-dashboards/src/components/Icon";
import TextInput from "core-digital-marketplace-dashboards/src/components/TextInput";
import Editor from "core-digital-marketplace-dashboards/src/components/Editor";

import ProfileImg from '@/assets/icons/profile_icon.svg';

interface ProfileProps {
  className?: string;
  title: string;
}


const ProfileInformation = (props: ProfileProps) => {
  const [content, setContent] = useState();

  return (
    
    <Item
      className={cn(styles.card, props.className)}
      title={props.title}
      classTitle="title-green"
    >
      <div className={styles.profile}>
        <div className={styles.avatar}>
          <img src={ProfileImg} />
          <button className={styles.remove}>
            <Icon name="close" />
          </button>
        </div>
        <div className={styles.file}>
          <input type="file" />
          <button className={cn("button", styles.button)} type="button">
            <Icon name="add" size="24" />
            <span>Новая фотография</span>
          </button>
        </div>
        <button className={cn("button-stroke", styles.button)}>Убрать</button>
      </div>
      <div className={styles.fieldset}>
        <TextInput
          className={styles.field}
          label="ФИО"
          name="display-name"
          type="text"
          tooltip="Maximum 100 characters. No HTML or emoji allowed"
          required
        />
        <TextInput
          className={styles.field}
          label="Почта"
          name="email"
          type="email"
          tooltip="Maximum 100 characters. No HTML or emoji allowed"
          required
        />
        <TextInput
          className={styles.field}
          label="Формат работы"
          name="location"
          type="text"
          tooltip="Maximum 100 characters. No HTML or emoji allowed"
          required
        />
        <Editor
          state={content}
          onChange={setContent}
          classEditor={styles.editor}
          label="О себе"
          tooltip="Описание"
        />
      </div>
    </Item>
  );
};

export default ProfileInformation;
