import {
  QUERYING_QUESTIONS_FAILURE,
  QUERYING_QUESTIONS_REQUEST,
  QUERYING_QUESTIONS_SUCCESS,
  RESET_RESULTS,
  DISCONNECT_SOCKET,
  CONNECT_SOCKET_REQUEST,
  CONNECT_SOCKET_SUCCESS,
  CONNECT_SOCKET_FAILURE,
  SAVE_RESULTS,
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
    question: string;
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

export interface connectSocketRequestAction {
  type: typeof CONNECT_SOCKET_REQUEST;
  payload: {
    socket: any;
  };
}
export interface connectSocketSuccessAction {
  type: typeof CONNECT_SOCKET_SUCCESS;
  result: any;
}

export interface connectSocketFailureAction {
  type: typeof CONNECT_SOCKET_FAILURE;
  errorCode: number;
}

export interface disconnectSocket {
  type: typeof DISCONNECT_SOCKET;
}

export interface resetResults {
  type: typeof RESET_RESULTS;
}

export interface saveResults {
  type: typeof SAVE_RESULTS;
  payload: {
    results: any;
  };
}

export type queryingActions =
  | queryingQuestionsAction
  | queryingQuestionsSuccess
  | queryingQuestionsFailure
  | resetResults
  | saveResults
  | connectSocketRequestAction
  | connectSocketSuccessAction
  | connectSocketFailureAction
  | disconnectSocket;

export interface questionsStore {
  questions: questions | null;
  socket: any;
  loadingStates: loadingStates;
  metaStates: metaStates;
}
