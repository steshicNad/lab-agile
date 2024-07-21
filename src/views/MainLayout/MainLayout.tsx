import {Outlet } from "react-router-dom";
import { useState } from "react";
import React from "react";

import Sidebar from '@/components/SideLeftBar/SideLeftBar'
import Header from 'core-digital-marketplace-dashboards/src/components/Header';

import styles from './style.module.sass';
import cn from "classnames";



export default function MainLayout(){
   const [visible, setVisible] = useState(false);
   return <>
   <div  className={styles.page}>
      <Sidebar 
         className={cn(styles.sidebar, {
                    [styles.visible]: visible,
             })}
                onClose={() => setVisible(false)}
         />
      <Header onOpen={() => setVisible(true)} />
      <div className={styles.inner}>
         <Outlet /> {/* Это место, где будут рендериться дочерние маршруты */}
      </div>
   </div>
</>
}