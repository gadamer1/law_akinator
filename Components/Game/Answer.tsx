import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../../reducers/types";
import { QUERYING_QUESTIONS_REQUEST } from "../../reducers/questions/actions";
import Result from "./Result";

function Answer() {
  const { isQuerying } = useSelector(
    (state: store) => state.questions.loadingStates
  );

  const { results } = useSelector((state: store) => state.questions.questions);
  const { socket } = useSelector((state: store) => state.questions);

  const onClickAnswerButton = (number) => () => {
    socket.emit("answer", { answer: number });
  };

  const AnswerComponent = () => {
    return (
      <ul>
        <li onClick={onClickAnswerButton(0)}>아니요</li>
        <li onClick={onClickAnswerButton(1)}>아닐겁니다</li>
        <li onClick={onClickAnswerButton(2)}>모르겠네요</li>
        <li onClick={onClickAnswerButton(3)}>그럴겁니다</li>
        <li onClick={onClickAnswerButton(4)}>네</li>
      </ul>
    );
  };

  return (
    <>
      {isQuerying ? (
        <div className="fa-3x">
          <i className="fas fa-sync fa-spin"></i>
        </div>
      ) : results ? (
        <Result results={results} />
      ) : socket?.connected ? (
        <AnswerComponent />
      ) : (
        <p>오류 발생..</p>
      )}
    </>
  );
}

export default Answer;
