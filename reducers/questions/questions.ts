import produce from "immer";

import {
  QUERYING_QUESTIONS_FAILURE,
  QUERYING_QUESTIONS_REQUEST,
  QUERYING_QUESTIONS_SUCCESS,
} from "./actions";
import { queryingActions, questionsStore } from "./interfaces";

const initialState: questionsStore = {
  questions: null,
  loadingStates: {
    isQuerying: false,
  },
  metaStates: {
    requestError: false,
  },
};

const mockQuestions = {
  questions: "변호사와 관련이 있습니까?",
};

const questionsReducer = (state = initialState, action: queryingActions) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case QUERYING_QUESTIONS_REQUEST: {
        draft.loadingStates.isQuerying = true;
        draft.metaStates.requestError = false;
        break;
      }
      case QUERYING_QUESTIONS_SUCCESS: {
        draft.loadingStates.isQuerying = false;
        draft.metaStates.requestError = false;
        draft.questions = action.result.questions;
      }
      case QUERYING_QUESTIONS_FAILURE: {
        draft.loadingStates.isQuerying = true;
        draft.metaStates.requestError = true;
        draft.questions.question = "오류가 발생했습니다";
      }
      default:
        return draft;
    }
  });
};

export default questionsReducer;
