import React from "react";
import styles from "./StartButton.module.scss";
import Link from "next/link";

function StartButton(props) {
  const {} = props;

  return (
    <div>
    <a href="./game"><button className={styles.startButton}>시작하기</button></a>
  </div>

  );
}

export default StartButton;

