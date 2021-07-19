import React from "react";
import Navbar from "./Navbar";
import Quiz from "../../components/Quiz";
import "./home.css";

const Main = () => {
  return (
    <div className="main__div">
      <Navbar />
      <div className="table__header">
        <div className="col-6">Quiz Name</div>
        <div className="col-3">Category</div>
        <div className="col-1">Taken</div>
        <div className="col-2">Date</div>
      </div>
      <hr />
      <div className="table__body">
        {new Array(20).fill("",0,20).map((_,i) => <Quiz key={i}/>)}
      </div>
    </div>
  );
};

export default Main;
