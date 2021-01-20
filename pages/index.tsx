import React from "react";
import styles from "./index.module.scss";
import Introduce from "../Components/Index/Introduce";
import StartButton from "../Components/Index/StartButton";
interface Props {}

function Index(props: Props) {
  const {} = props;

  return (
    <article>
      <Introduce />
      <StartButton />
    </article>
  );
}

export default Index;
