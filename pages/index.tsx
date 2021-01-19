import React from "react";
import styles from "./index.module.scss";
interface Props {}

function Index(props: Props) {
  const {} = props;

  return (
    <div>
      <div className={styles.abcd}>home</div>
      <div className={styles.blue}>blue</div>
    </div>
  );
}

export default Index;
