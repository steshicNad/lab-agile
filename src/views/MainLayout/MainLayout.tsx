import {Outlet } from "react-router-dom";
import { useState } from "react";

import Sidebar from 'core-digital-marketplace-dashboards/src/components/Sidebar';
import Header from 'core-digital-marketplace-dashboards/src/components/Header';

import styles from "core-digital-marketplace-dashboards/src/components/Sidebar/Sidebar.module.sass";
import cn from "classnames";


export default function Settings(){
 
const [visible, setVisible] = useState(false);
return <>
 <div className="flex w-full h-full">
      <Sidebar 
         className={cn(styles.sidebar, {
                    [styles.visible]: visible,
             })}
                onClose={() => setVisible(false)}
         />
      <div className="flex flex-col w-full">
        <Header></Header>
        <Outlet /> {/* Это место, где будут рендериться дочерние маршруты */}
      </div>
      
     </div>
 
</>
}