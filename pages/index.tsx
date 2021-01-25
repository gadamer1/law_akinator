import React from "react";
import styles from "./index.module.scss";
import Introduce from "../Components/Index/Introduce";
import StartButton from "../Components/Index/StartButton";
import AppLayout from '../Layouts/AppLayout'
import Example from '../Components/Index/Example'
interface Props {}

function Index(props: Props) {
  const {} = props;

  return (
    <AppLayout>
    <Introduce>
    </Introduce>
    <Example></Example>
    <StartButton/>
  </AppLayout>
  );
}

export default Index;
