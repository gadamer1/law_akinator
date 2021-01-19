import { combineReducers } from "redux";
import questions from "./questions/questions";

const rootReducer = combineReducers({
  questions,
});

export default rootReducer;
