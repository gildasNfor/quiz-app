import React from "react";
import Sidebar from "../home/sidebar/Sidebar";
import Navbar from "../home/Navbar";
import Question from "../../components/Question";
import "./take-test.css";

const TakeTest = () => {
  return (
    <div className="new__test">
      <Sidebar />
      <div className="main__div">
        <Navbar />
        <Question />
      </div>
    </div>
  );
};

export default TakeTest;
