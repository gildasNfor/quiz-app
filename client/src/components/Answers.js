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
                    <div class="answer__list" {...provided.dragHandleProps}>
                      <FontAwesomeIcon
                        className="grip"
                        icon={"grip-vertical"}
                      />
                      <span> {letters[index]}</span>
                    </div>
                    <input
                      className="form-control answers"
                      type="text"
                      placeholder="Answer"
                    />
                   <div className="check-button">
                     <i class="fas fa-check success" aria-hidden="true"></i>
                   </div>
                    <div className="check-button neutral" onClick={handleClick}>
                     <i class="fas fa-times" aria-hidden="true"></i>
                   </div>
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
