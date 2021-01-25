import React from "react";
import Image from 'next/image'
import styles from './SideComponent.module.scss'
interface Props {}

function Character(props: Props) {
  const {} = props;

  return (
    <div className={styles.lehends}>
    <img src={"https://ifh.cc/g/E0FoYM.jpg"}></img>
    </div>
  )
}

export default Character;
