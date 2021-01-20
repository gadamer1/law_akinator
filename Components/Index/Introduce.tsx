import React from "react";

interface Props {}

function Introduce(props: Props) {
  const {} = props;

  return (
    <article>
      <h1>안녕하세요 내 상황에 맞는 판례를 찾아주는 나홀로 도우미 입니다</h1>
      <h2>주어진 질문에 대답을 하시면 상황에 적절한 판례를 찾아줍니다</h2>
      <p>현재는 데모 버전으로 운영되고 있습니다</p>
    </article>
  );
}

export default Introduce;
