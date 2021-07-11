import React, { useState, useEffect } from "react";
import axiosInstance from "../axios/axios";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setQuiz } from "../redux/actions/quizActions";
import MCQ from "../components/MCQ";

const Quiz = props => {
  const [questions, setQuestions] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answerSheet, setAnswerSheet] = useState([]);

  useEffect(() => {
    setQuestions(props.quiz.questions);
  }, []);

  const nextQuestion = e => {
    e.preventDefault();
    if (questionNumber < questions.length - 1) {
      setQuestionNumber(questionNumber + 1);
    }
  };

  const previousQuestion = e => {
    e.preventDefault();
    if (questionNumber !== 0) {
      setQuestionNumber(questionNumber - 1);
    }
  };

  const setAnswer = answer => {
    console.log("yh");
  };
  console.log(answerSheet);
  console.log(questionNumber);
  return (
    <div>
      <div>
        <p>{questions ? questions[questionNumber]?.question : "Questions"}</p>
        {questions &&
          questions[questionNumber]?.answers.map((answer, index) => (
            <MCQ
              key={index}
              name={questions[questionNumber]?.question}
              answer={answer}
              setAnswer={setAnswer}
            />
          ))}
        <button onClick={previousQuestion}>Previous Question</button>
        <button onClick={nextQuestion}>Next Question</button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth, quiz }) => {
  return {
    currentUser: auth.user,
    quiz: quiz.quiz,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setQuiz }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
