import {
  QUERYING_QUESTIONS_FAILURE,
  QUERYING_QUESTIONS_REQUEST,
  QUERYING_QUESTIONS_SUCCESS,
} from "./actions";

///////////////STATES////////////////

/*QUESTIONS STATE */
export interface questions {
  question: string;
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
  result: {
    questions: questions;
  };
}
export interface queryingQuestionsFailure {
  type: typeof QUERYING_QUESTIONS_FAILURE;
  errorCode: number;
}

export type queryingActions =
  | queryingQuestionsAction
  | queryingQuestionsSuccess
  | queryingQuestionsFailure;

export interface questionsStore {
  questions: questions | null;
  loadingStates: loadingStates;
  metaStates: metaStates;
}
