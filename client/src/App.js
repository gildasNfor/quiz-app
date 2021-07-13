import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import SetQuiz from "./pages/SetQuiz";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import SetQuestion from "./pages/SetQuestion";
import QuizList from "./pages/QuizList";
import Quizzes from "./pages/Quizzes";
import Quiz from "./pages/Quiz";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom";
import axiosInstance from "./axios/axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setUser } from "./redux/actions/authActions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./pages/auth/auth.css";

function App({ setUser }) {
  // useEffect(() => {
  //   axiosInstance
  //     .get(`/auth/get-user`)
  //     .then(res => {
  //       setUser(res.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/login" exact render={() => <Login />} />
          <Route path="/signup" exact render={() => <SignUp />} />
          <Redirect to="/login"></Redirect>
          {/* <Route path="/home" exact render={() => <Home />} />
            <Route path="/" exact render={() => <Login />} />
            <Route path="/signup" exact render={() => <SignUp />} />
            <Route path="/set-quiz" exact render={() => <SetQuiz />} />
            <Route path="/set-question" exact render={() => <SetQuestion />} />
            <Route path="/update-quiz" exact render={() => <QuizList />} />
            <Route path="/select-quiz" exact render={() => <Quizzes />} />
            <Route path="/take-quiz" exact render={() => <Quiz />} /> */}
        </Switch>
      </Router>
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
