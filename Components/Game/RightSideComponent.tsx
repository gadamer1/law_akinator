import React from "react";
import Title from "./Title";
import Answer from "./Answer";
import styles from "./SideComponent.module.scss"

interface Props {}

function RightSideComponent(props: Props) {
  const {} = props;

  return (
    <div className={styles.rightcolumn}>
      <div className={styles.card}>
      <article>
      <Title />
      <Answer />
    </article>
      </div>
  </div>

  );
}

export default RightSideComponent;
