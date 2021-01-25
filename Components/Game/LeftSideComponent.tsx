import React from "react";
import Character from "./Character";
import styles from "./SideComponent.module.scss"
const LeftSideComponent = () => {
  return (
    <div className={styles.leftcolumn}>
      <aside>
      <Character />
      </aside>    
    </div>
  );
};

export default LeftSideComponent;
