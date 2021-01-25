import React from "react";
import styles from "./StartButton.module.scss";
import Link from "next/link";

function StartButton(props) {
  const {} = props;

  return (
    <Link href="/game">
      <button className={styles.startButton}>시작하기</button>
    </Link>
  );
}

export default StartButton;

