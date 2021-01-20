import React, { useEffect } from "react";
import LeftSideComponent from "../Components/Game/LeftSideComponent";
import RightSideComponent from "../Components/Game/RightSideComponent";
import { useDispatch } from "react-redux";
import socketIOClient from "socket.io-client";
import {
  CONNECT_SOCKET_REQUEST,
  QUERYING_QUESTIONS_REQUEST,
  SAVE_RESULTS,
} from "../reducers/questions/actions";
interface Props {}

const backendURL = "localhost:5000";

function Game() {
  const dispatch = useDispatch();
  const socket = socketIOClient(backendURL);

  useEffect(() => {
    dispatch({
      type: CONNECT_SOCKET_REQUEST,
      payload: {
        socket: socket,
      },
    });
    socket.emit("request question");
    socket.on("receive question", (question: string) => {
      dispatch({
        type: QUERYING_QUESTIONS_REQUEST,
        payload: {
          question: question,
        },
      });
    });
    socket.on("result", (results: any) => {
      dispatch({
        type: SAVE_RESULTS,
        payload: {
          results,
        },
      });
    });
  }, []);

  useEffect(() => {}, []);
  return (
    <>
      <LeftSideComponent />
      <RightSideComponent />
    </>
  );
}

export default Game;
