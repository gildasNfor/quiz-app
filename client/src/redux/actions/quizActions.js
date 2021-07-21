export const actionTypes = {
  SET_QUIZ: "SET_QUIZ",
  SET_QUIZZES: "SET_QUIZZES",
};

export const setQuiz = quiz => {
  return {
    type: actionTypes.SET_QUIZ,
    quiz,
  };
};

export const setQuizzes = quizzes => {
  return {
    type: actionTypes.SET_QUIZZES,
    quizzes,
  };
};
