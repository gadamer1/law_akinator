import React from "react";
import { useSelector } from "react-redux";
import { store } from "../../reducers/types";
interface Props {}

function Title(props: Props) {
  const { questions } = useSelector((state: store) => state.questions);
  const { isQuerying } = useSelector(
    (state: store) => state.questions.loadingStates
  );

  return (
    <>
      {isQuerying ? (
        <div className="fa-3x">
          <i className="fas fa-sync fa-spin"></i>
        </div>
      ) : (
        <h1>{questions?.question}</h1>
      )}
    </>
  );
}

export default Title;
