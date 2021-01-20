import { all, takeLatest, put, call, delay, fork } from "redux-saga/effects";
import {
  QUERYING_QUESTIONS_SUCCESS,
  QUERYING_QUESTIONS_FAILURE,
  QUERYING_QUESTIONS_REQUEST,
  QUERYING_FIRST_QUESTION_REQUEST,
  QUERYING_FIRST_QUESTION_SUCCESS,
  QUERYING_FIRST_QUESTION_FAILURE,
} from "../reducers/questions/actions";
import Axios from "axios";
import { queryingQuestionsAction } from "../reducers/questions/interfaces";

// function queryingQuestionsAPI(data) {
//   return Axios.post("/questions", data.answer);
// }

let mockData = "!와 관련이 있습니까?";

function* queryingQuestions(action: queryingQuestionsAction) {
  try {
    // const questions = yield call(queryingQuestionsAPI, action.payload);
    yield delay(1000);
    let questions = mockData;

    yield put({
      type: QUERYING_QUESTIONS_SUCCESS,
      result: {
        question: questions,
        results: "결과입니다",
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
  yield takeLatest(QUERYING_QUESTIONS_REQUEST, queryingQuestions);
}

// function queryingFirstQuestionAPI(data) {
//   return Axios.post("/questions", data.answer);
// }

let mockData2 = "!!!!와 관련이 있습니까?";

function* queryingFirstQuestion(action: queryingQuestionsAction) {
  try {
    // const questions = yield call(queryingFirstQuestionAPI, action.payload);
    let questions = mockData2;
    yield delay(1000);
    yield put({
      type: QUERYING_FIRST_QUESTION_SUCCESS,
      result: {
        question: questions,
      },
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: QUERYING_FIRST_QUESTION_FAILURE,
    });
  }
}

function* watchQueryingFirstQuestion() {
  yield takeLatest(QUERYING_FIRST_QUESTION_REQUEST, queryingFirstQuestion);
}

export default function* questionsSaga() {
  yield all([fork(watchQueryingQuestions), fork(watchQueryingFirstQuestion)]);
}
