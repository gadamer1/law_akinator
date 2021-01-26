import React from "react";
import { useSelector } from "react-redux";
import { store } from "../../reducers/types";
interface Props {}

function Title(props: Props) {
  const { questions, socket } = useSelector((state: store) => state.questions);
  const { isQuerying } = useSelector(
    (state: store) => state.questions.loadingStates
  );

  return (
    <>
      {isQuerying ? (
        <div className=""></div>
      ) : (
        <h4>
          {questions?.results ? "결과가 나왔습니다!" : questions?.question}
        </h4>
      )}
    </>
  );
}

export default Title;
