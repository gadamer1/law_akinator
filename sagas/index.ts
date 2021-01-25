import { all, fork } from "redux-saga/effects";
import questions from "./questions";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3200/api";

export default function* rootSaga() {
  yield all([fork(questions)]);
}
