import { combineReducers } from "redux";
import authReducer from "./authReducer";
import quizReducer from "./quizReducer";

const allReducers = combineReducers({
  auth: authReducer,
  quiz: quizReducer,
});

export default allReducers;
