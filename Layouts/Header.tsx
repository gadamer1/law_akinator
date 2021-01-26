import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";

interface Props {}

function Header(props: Props) {
  const {} = props;

  return (
    <header>
      <div className={styles.overlay}>
        <Link href="./">
          <a>
            <img src={"https://ifh.cc/g/VyXTti.png"}></img>
          </a>
        </Link>
        <h1>나홀LAW 판례분석 서비스</h1>
        <div className={styles.line}>
          <hr></hr>
        </div>
      </div>
    </header>
  );
}

export default Header;
