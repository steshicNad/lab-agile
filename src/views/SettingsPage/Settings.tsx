import React from 'react';
import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import cn from "classnames";

import Account from './Account/Account';
import ProfileInformation from './Profile/ProfileInformation';
import Notifications from './Notifications/Notifications';
import Payment from './Payment/Payment';

import Dropdown from "core-digital-marketplace-dashboards/src/components/Dropdown";
import styles from './Settings.module.sass';

interface Navigation {title: string, action:  () => void }

export const Settings =  (props: {title: string})=>{
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
 
  const scrollToProfile = useRef<HTMLDivElement>(null);
  const scrollToAccount = useRef<HTMLDivElement>(null);
  const scrollToNotification = useRef<HTMLDivElement>(null);
  const scrollToPayment = useRef<HTMLDivElement>(null);

  const listNavigation: Array<Navigation> = [
    {
      title: "Профиль",
      action: () =>
        scrollToProfile.current.scrollIntoView({ behavior: "smooth" }),
    },
    {
      title: "Аккаунт",
      action: () =>
        scrollToAccount.current.scrollIntoView({ behavior: "smooth" }),
    },
    {
      title: "Уведомления",
      action: () =>
        scrollToNotification.current.scrollIntoView({ behavior: "smooth" }),
    },
    {
      title: "Подписка",
      action: () =>
        scrollToPayment.current.scrollIntoView({ behavior: "smooth" }),
    },
  ];
  const options: Array<string> = listNavigation.map((x) => x.title);

  const [activeTab, setActiveTab] = useState(options[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  function handleClick(item: Navigation, index: number){
    setActiveIndex(index);
    item.action();
  }

    return (
      <> 
        <div className={cn("h3", styles.container, styles.title)}>{props.title}</div>
        <div className={styles.settings}>
          <div className={styles.menu}>
          {listNavigation.map((item, index) => (
            <button
              className={cn(styles.button, {
                [styles.active]: activeIndex === index,
              })}
              key={index}
              onClick={() => handleClick(item, index)}
            >
              {item.title}
            </button>
          ))}
          </div>
          <div className={styles.wrapper}>
          <Dropdown
            className={styles.dropdown}
            classDropdownHead={styles.dropdownHead}
            value={activeTab}
            setValue={setActiveTab}
            options={options}
          />
          <div className={styles.list}>
            <div
              className={cn(styles.item, {
                [styles.active]: activeTab === options[0],
              })}
            >
              <div className={styles.anchor} ref={scrollToProfile}></div>
              <ProfileInformation title={options[0]} />
            </div>
            <div
              className={cn(styles.item, {
                [styles.active]: activeTab === options[1],
              })}
            >
              <div className={styles.anchor} ref={scrollToAccount}></div>
              <Account title={options[1]}/>
            </div>
            <div
              className={cn(styles.item, {
                [styles.active]: activeTab === options[2],
              })}
            >
              <div className={styles.anchor} ref={scrollToNotification}></div>
              <Notifications title={options[2]} />
            </div>
            <div
              className={cn(styles.item, {
                [styles.active]: activeTab === options[3],
              })}
            >
              <div className={styles.anchor} ref={scrollToPayment}></div>
              <Payment  title='Оплата'/>
            </div>
          </div>
          <button className={cn("button", styles.button)}>Save</button>
          </div>
        </div>
      </>
    )
}