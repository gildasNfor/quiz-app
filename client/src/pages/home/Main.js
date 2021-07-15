import React from "react";
import Navbar from "./Navbar";
import Quiz from "../../components/Quiz";
import "./home.css";

const Main = () => {
  return (
    <div className="main__div">
      <Navbar />
      <div className="table__header">
        <div className="col-4">Quiz Name</div>
        <div className="col-4">Taken</div>
        <div className="col-4">Score</div>
      </div>
      <hr />
      <Quiz />
      <Quiz />
      <Quiz />
      <Quiz />
      <Quiz />
      <Quiz />
      <Quiz />
      <Quiz />
      <Quiz />
      <Quiz />
      <Quiz />
      <Quiz />
      <Quiz />
      <Quiz />
      <Quiz />
      <Quiz />
      <Quiz />
      <Quiz />
      <Quiz />
      <Quiz />
      <Quiz />
      <Quiz />
      <Quiz />
      <Quiz />
      <Quiz />
    </div>
  );
};

export default Main;
