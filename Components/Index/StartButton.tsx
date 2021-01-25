import React from "react";
import styles from "./StartButton.module.scss";
import Link from "next/link";

function StartButton(props) {
  const {} = props;

  return (
    <div><Link href="/game">
    <button className={styles.startButton}>시작하기</button>
  </Link></div>

  );
}

export default StartButton;

