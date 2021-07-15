import React from "react";
import { IconButton } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";

const SetQuestion = ({ number }) => {
  const handleClick = e => {
    e.preventDefault();
    // deleteQuestion(number);
  };
  return (
    <div className="question__box">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Question {number}</h3>
        <IconButton onClick={handleClick}>
          <ClearIcon />
        </IconButton>
      </div>
      <div>
        <input className="form-control" type="text" placeholder="Question" />
      </div>
    </div>
  );
};

export default SetQuestion;
