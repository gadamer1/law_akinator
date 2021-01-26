import React, { useEffect } from "react";
import LeftSideComponent from "../Components/Game/LeftSideComponent";
import AppLayout from "../Layouts/AppLayout";
import RightSideComponent from "../Components/Game/RightSideComponent";
import { useDispatch } from "react-redux";
import socketIOClient from "socket.io-client";
import styles from "./game.module.scss";
import {
  CONNECT_SOCKET_REQUEST,
  QUERYING_QUESTIONS_REQUEST,
  SAVE_RESULTS,
} from "../reducers/questions/actions";
interface Props {}

const backendURL = "localhost:5000";

function Game() {
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = socketIOClient(backendURL);
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
      console.log(results);
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
    <AppLayout>
      <div className={styles.row}>
        <LeftSideComponent />
        <RightSideComponent />
      </div>
    </AppLayout>
  );
}

export default Game;
