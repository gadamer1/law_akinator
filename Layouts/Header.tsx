import React from "react";
import styles from './Header.module.scss'
import Link from "next/link";

interface Props {}

function Header(props: Props) {
  const {} = props;
 
  return (
  <header>
	  <div className={styles.overlay}>
      <Link href="./">
      <img src={'https://ifh.cc/g/VyXTti.png'}></img>
      </Link>
      <h1>판례분석 서비스</h1>
	  </div>
</header>
)
}

export default Header;
