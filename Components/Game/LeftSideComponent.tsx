import React from "react";
import Character from "./Character";
import styles from "./SideComponent.module.scss"
const LeftSideComponent = () => {
  return (
    <div className={styles.leftcolumn}>
      <div className={styles.card}>
      <aside>
      <Character />
    </aside>
      </div>
    
    </div>
  );
};

export default LeftSideComponent;
