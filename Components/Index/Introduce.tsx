import React from "react";
import styles from './Introduce.module.scss'
interface Props {}

function Introduce(props: Props) {
  const {} = props;

  return (
      <div className={styles.intro_wrap}>
      <div className={styles.intro_section}>
      <h2>안녕하세요 내 상황에 맞는 판례를 찾아주는 나홀로 도우미 입니다</h2>
      <h3>주어진 질문에 대답을 하시면 상황에 적절한 판례를 찾아줍니다</h3>
      <h3>현재는 데모 버전으로 운영되고 있습니다</h3>
      </div>
      </div>
  );
}

export default Introduce;
