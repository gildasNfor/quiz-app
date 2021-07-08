import React, { useState, useEffect } from "react";
import axiosInstance from "../axios/axios";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setQuiz } from "../redux/actions/quizActions";

const QuizList = ({ setQuiz }) => {
  const history = useHistory();
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`/quiz/`)
      .then(res => {
        console.log(res);
        setQuizzes(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const Quiz = ({ quiz }) => {
    const handleClick = () => {
      setQuiz(quiz);
      history.push("/set-question");
    };
    return (
      <div onClick={handleClick} className="note others">
        {quiz.name}
      </div>
    );
  };

  return (
    <div>
      {quizzes.map((quiz, index) => {
        return <Quiz key={index} quiz={quiz} />;
      })}
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  return {
    currentUser: auth.user,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setQuiz }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizList);
