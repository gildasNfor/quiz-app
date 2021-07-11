import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import SetQuiz from "./pages/SetQuiz";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import SetQuestion from "./pages/SetQuestion";
import QuizList from "./pages/QuizList";
import Quizzes from "./pages/Quizzes";
import Quiz from "./pages/Quiz";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import axiosInstance from "./axios/axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setUser } from "./redux/actions/authActions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App({ setUser }) {
  useEffect(() => {
    axiosInstance
      .get(`/auth/get-user`)
      .then(res => {
        setUser(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <Switch>
            <Route path="/home" exact render={() => <Home />} />
            <Route path="/" exact render={() => <Login />} />
            <Route path="/signup" exact render={() => <SignUp />} />
            <Route path="/set-quiz" exact render={() => <SetQuiz />} />
            <Route path="/set-question" exact render={() => <SetQuestion />} />
            <Route path="/update-quiz" exact render={() => <QuizList />} />
            <Route path="/select-quiz" exact render={() => <Quizzes />} />
            <Route path="/take-quiz" exact render={() => <Quiz />} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

const mapStateToProps = ({ auth }) => {
  return {
    currentUser: auth.user,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setUser }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
