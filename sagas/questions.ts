import { all, takeLatest, put, call } from "redux-saga/effects";
import {
  QUERYING_QUESTIONS_SUCCESS,
  QUERYING_QUESTIONS_FAILURE,
  QUERYING_QUESTIONS_REQUEST,
} from "../reducers/questions/actions";
import Axios from "axios";
import { queryingQuestionsAction } from "../reducers/questions/interfaces";

function queryingQuestionsAPI(data: any | number) {
  return Axios.post("/questions", data);
}

function* queryingQuestions(action: queryingQuestionsAction) {
  try {
    const questions = yield call(queryingQuestionsAPI, action.payload);
    yield put({
      type: QUERYING_QUESTIONS_SUCCESS,
      result: questions,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: QUERYING_QUESTIONS_FAILURE,
    });
  }
}

function* watchQueryingQuestions() {
  yield takeLatest(QUERYING_QUESTIONS_REQUEST, queryingQuestions);
}

export default function* questionsSaga() {
  yield all([watchQueryingQuestions]);
}
