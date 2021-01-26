import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../../reducers/types";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Result from "./Result";
import { Checkbox, Row, Col, Button } from "antd";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function Answer() {
  const { isQuerying } = useSelector(
    (state: store) => state.questions.loadingStates
  );

  const { results } = useSelector((state: store) => state.questions.questions);
  const { socket } = useSelector((state: store) => state.questions);

  const onClickAnswerButton = (number) => () => {
    console.log("checked = ", number);

    socket.emit("answer", { answer: number });
  };
  const AnswerComponent = () => {
    return (
      <>
        <Checkbox.Group style={{ width: "100%", lineHeight: "300%" }}>
          <Row>
            <Col span={8}>
              <Checkbox onClick={onClickAnswerButton(0)} value="0">
                <li>아니요</li>
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox onClick={onClickAnswerButton(1)} value="1">
                <li>아닐겁니다</li>
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox onClick={onClickAnswerButton(2)} value="2">
                <li>잘모르겠습니다</li>
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox onClick={onClickAnswerButton(3)} value="3">
                <li>그럴겁니다</li>
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox onClick={onClickAnswerButton(4)} value="4">
                <li>네</li>
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </>
    );
  };

  const AnswerCmponent = () => {
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
      ) : (
        <AnswerComponent />
      )}
    </>
  );
}

export default Answer;
