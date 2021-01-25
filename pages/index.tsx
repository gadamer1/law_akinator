import React from "react";
import styles from "./index.module.scss";
import Introduce from "../Components/Index/Introduce";
import StartButton from "../Components/Index/StartButton";
import AppLayout from '../Layouts/AppLayout'
interface Props {}

function Index(props: Props) {
  const {} = props;

  return (
    <AppLayout>
    <Introduce>
    </Introduce>
  <StartButton/>
  </AppLayout>
  );
}

export default Index;
