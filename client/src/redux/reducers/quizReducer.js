import { actionTypes } from "../actions/quizActions";

const initialState = {
  quiz: null,
  quizzes: [],
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_QUIZ:
      return { ...state, quiz: action.quiz };

    case actionTypes.SET_QUIZZES:
      return { ...state, quizzes: action.quizzes };

    default:
      return state;
  }
};

export default quizReducer;
