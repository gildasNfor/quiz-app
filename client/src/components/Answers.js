import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { getItemStyle, getAnswerListStyle } from "../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";

const Answers = props => {
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const { question, questionNum, deleteAnswer } = props;

  const handleClick = e => {
    const { index } = e.target;
    deleteAnswer(questionNum, index);
  };
  return (
    <Droppable droppableId={`droppable${question.id}`} type={`${questionNum}`}>
      {(provided, snapshot) => (
        <div className="answers__div" ref={provided.innerRef}>
          {question.answers.map((answer, index) => {
            return (
              <Draggable
                key={`${questionNum}${index}`}
                draggableId={`${questionNum}${index}`}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    className="answer__box"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                  >
                    <span {...provided.dragHandleProps}>
                      <FontAwesomeIcon
                        icon={"grip-vertical"}
                        style={{ float: "left", marginTop: "1rem" }}
                      />
                    </span>
                    <h6 style={{ marginTop: "0.8rem", marginLeft: "0.5rem" }}>
                      {letters[index]}
                    </h6>
                    <input
                      className="form-control answers"
                      type="text"
                      placeholder="Answer"
                    />
                    <IconButton style={{ color: "green" }}>
                      <CheckIcon />
                    </IconButton>
                    <IconButton index={index} onClick={handleClick}>
                      <ClearIcon />
                    </IconButton>
                  </div>
                )}
              </Draggable>
            );
          })}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Answers;
