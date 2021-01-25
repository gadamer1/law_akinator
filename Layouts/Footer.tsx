import React from "react";
import styles from './Header.module.scss'
import Link from "next/link";

interface Props {}

function Footer(props: Props) {
  const {} = props;

  return (
  <footer>
    <div className={styles.footleft}>
      <h5>Mimisbrunnr 대표이사 우희준</h5>
      <br></br>
      <h5>2020 CCP Project</h5>
      </div>
    <div className={styles.footright}>
      <h5>@Page copyright 2021 by gadamer1 & svrain98</h5>
      <br></br>
    <Link href="https://github.com/gadamer1/law_akinator"><h5>https://github.com/gadamer1/law_akinator</h5></Link>
      </div>
</footer>);
}

export default Footer;
