import React from "react";
import Title from "./Title";
import Answer from "./Answer";

interface Props {}

function RightSideComponent(props: Props) {
  const {} = props;

  return (
    <article>
      <Title />
      <Answer />
    </article>
  );
}

export default RightSideComponent;
