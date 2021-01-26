import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../../reducers/types";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Result from "./Result";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

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
        <Spin indicator={antIcon} />
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
