import {
  QUERYING_QUESTIONS_FAILURE,
  QUERYING_QUESTIONS_REQUEST,
  QUERYING_QUESTIONS_SUCCESS,
  QUERYING_FIRST_QUESTION_REQUEST,
  QUERYING_FIRST_QUESTION_SUCCESS,
  QUERYING_FIRST_QUESTION_FAILURE,
  RESET_RESULTS,
} from "./actions";

///////////////STATES////////////////

/*QUESTIONS STATE */
export interface questions {
  question: string;
  results: any;
}

/* 로딩 상태 */
export interface loadingStates {
  isQuerying: boolean;
}

/* meta states */
export interface metaStates {
  requestError: boolean;
}

///////////// ACTIONS////////////////////

/* 질문 가져오는 행위들 */
export interface queryingQuestionsAction {
  type: typeof QUERYING_QUESTIONS_REQUEST;
  payload: {
    answer: number;
  };
}
export interface queryingQuestionsSuccess {
  type: typeof QUERYING_QUESTIONS_SUCCESS;
  result: questions;
}
export interface queryingQuestionsFailure {
  type: typeof QUERYING_QUESTIONS_FAILURE;
  errorCode: number;
}

export interface queryingFirstQuestionAction {
  type: typeof QUERYING_FIRST_QUESTION_REQUEST;
}
export interface queryingFirstQuestionSuccess {
  type: typeof QUERYING_FIRST_QUESTION_SUCCESS;
  result: questions;
}
export interface queryingFirstQuestionFailure {
  type: typeof QUERYING_FIRST_QUESTION_FAILURE;
  errorCode: number;
}

export interface resetResults {
  type: typeof RESET_RESULTS;
}

export type queryingActions =
  | queryingQuestionsAction
  | queryingQuestionsSuccess
  | queryingQuestionsFailure
  | queryingFirstQuestionAction
  | queryingFirstQuestionSuccess
  | queryingFirstQuestionFailure
  | resetResults;

export interface questionsStore {
  questions: questions | null;
  loadingStates: loadingStates;
  metaStates: metaStates;
}
