import React, { useState } from "react";
import axiosInstance from "../axios/axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Answer from "../components/Answers";

const SetQuestion = props => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);

  const submitQuestion = e => {
    e.preventDefault();
    axiosInstance
      .put(`/quiz/${props.quiz._id}`, {
        newQuestion: { question, answers, correctAnswers },
      })
      .then(res => {
        console.log(res);
        setQuestion("");
        setAnswers([]);
        setCorrectAnswers("");
      })
      .catch(err => {
        console.log(err);
      });
  };

  const updateQuestion = e => {
    setQuestion(e.target.value);
  };

  const addAnswer = e => {
    e.preventDefault();
    if (answer) {
      setAnswers(answers => [...answers, answer]);
      setAnswer("");
    }
  };

  const updateAnswer = e => {
    setAnswer(e.target.value);
  };

  const addCorrectAnswer = (answer, checked) => {
    if (checked) {
      if (correctAnswers.indexOf(answer) === -1) {
        return setCorrectAnswers(correctAnswers => [...correctAnswers, answer]);
      }
    } else {
      setCorrectAnswers(
        correctAnswers.filter(correctAnswer => correctAnswer !== answer)
      );
    }
  };
  console.log(correctAnswers);
  return (
    <div>
      <div>
        <h3>{props.quiz.name}</h3>
        <textarea
          onChange={updateQuestion}
          type="text"
          placeholder="Write the question here"
          rows="3"
          cols="35"
          value={question}
        />
        <hr />
        <input
          onChange={updateAnswer}
          className="form-control"
          type="text"
          placeholder="Enter an Answer"
          value={answer}
        />
        <br />
        <button onClick={addAnswer} className="btn btn-primary">
          Add to Answers
        </button>
        <br />
        <span>Tick the correct Answer(s)</span>
        <br />
        {answers?.map((answer, index) => (
          <Answer
            key={index}
            answer={answer}
            addCorrectAnswer={addCorrectAnswer}
          />
        ))}
      </div>
      <button onClick={submitQuestion} className="btn btn-success">
        Submit Question
      </button>
    </div>
  );
};

const mapStateToProps = ({ auth, quiz }) => {
  return {
    currentUser: auth.user,
    quiz: quiz.quiz,
  };
};

export default connect(mapStateToProps)(SetQuestion);
