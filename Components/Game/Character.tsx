import React from "react";
import Image from "next/image";
import styles from "./SideComponent.module.scss";
interface Props {}

function Character(props: Props) {
  const {} = props;

  return (
    <div className={styles.lehends}>
      <div className={styles.img}>
        <Image src="/character2.jpg" width={500} height={500}></Image>
      </div>
    </div>
  );
}

export default Character;
