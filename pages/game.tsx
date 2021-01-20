import React, { useEffect } from "react";
import LeftSideComponent from "../Components/Game/LeftSideComponent";
import RightSideComponent from "../Components/Game/RightSideComponent";
import { useDispatch } from "react-redux";
import { QUERYING_FIRST_QUESTION_REQUEST } from "../reducers/questions/actions";
interface Props {}

function Game(props: Props) {
  const {} = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: QUERYING_FIRST_QUESTION_REQUEST,
    });
  }, []);
  return (
    <>
      <LeftSideComponent />
      <RightSideComponent />
    </>
  );
}

export default Game;
