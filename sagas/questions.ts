import {
  all,
  takeLatest,
  put,
  call,
  delay,
  fork,
  takeEvery,
} from "redux-saga/effects";
import {
  QUERYING_QUESTIONS_SUCCESS,
  QUERYING_QUESTIONS_FAILURE,
  QUERYING_QUESTIONS_REQUEST,
  CONNECT_SOCKET_REQUEST,
  CONNECT_SOCKET_SUCCESS,
  CONNECT_SOCKET_FAILURE,
} from "../reducers/questions/actions";
import {
  queryingQuestionsAction,
  connectSocketRequestAction,
} from "../reducers/questions/interfaces";

function* queryingQuestions(action: queryingQuestionsAction) {
  try {
    console.log(action);
    yield delay(1000);
    yield put({
      type: QUERYING_QUESTIONS_SUCCESS,
      result: {
        question: action.payload.question,
      },
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: QUERYING_QUESTIONS_FAILURE,
    });
  }
}

function* watchQueryingQuestions() {
  yield takeEvery(QUERYING_QUESTIONS_REQUEST, queryingQuestions);
}

function* connectSocketRequest(action: connectSocketRequestAction) {
  try {
    yield put({
      type: CONNECT_SOCKET_SUCCESS,
      result: action.payload.socket,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: CONNECT_SOCKET_FAILURE,
    });
  }
}

function* watchConnectSocketRequest() {
  yield takeLatest(CONNECT_SOCKET_REQUEST, connectSocketRequest);
}

export default function* questionsSaga() {
  yield all([fork(watchQueryingQuestions), fork(watchConnectSocketRequest)]);
}
