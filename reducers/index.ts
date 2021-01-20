import { combineReducers } from "redux";
import questions from "./questions/questions";
import { HYDRATE } from "next-redux-wrapper";

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  questions,
});

export default rootReducer;
