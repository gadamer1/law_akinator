import React from "react";
import Title from "./Title";
import Answer from "./Answer";

interface Props {}

function RightSideComponent({ socket }) {
  return (
    <article>
      <Title />
      <Answer />
    </article>
  );
}

export default RightSideComponent;
