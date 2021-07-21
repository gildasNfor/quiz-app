import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Reorder, getItemStyle, getQuestionListStyle } from "../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";
import Answers from "./Answers";

const SetQuestion = () => {
  const [questions, setQuestions] = useState([
    {
      id: uuidv4(),
      question: "",
      answers: [""],
    },
    {
      id: uuidv4(),
      question: "",
      answers: [""],
    },
    {
      id: uuidv4(),
      question: "",
      answers: [""],
    },
    // {
    //   id: uuidv4(),
    //   name: "question 1",
    //   answers: [{ id: uuidv4() }, { id: uuidv4() }],
    // },
    // {
    //   id: uuidv4(),
    //   name: "question 1",
    //   answers: [{ id: uuidv4() }, { id: uuidv4() }],
    // },
  ]);

  const onDragEnd = result => {
    if (!result.destination) {
      return;
    }

    if (result.type === "QUESTIONS") {
      console.log(result);
      const newQuestions = Reorder(
        questions,
        result.source.index,
        result.destination.index
      );
      setQuestions(newQuestions);
    } else {
      const answers = Reorder(
        questions[parseInt(result.type, 10)].answers,
        result.source.index,
        result.destination.index
      );

      const newQuestions = JSON.parse(JSON.stringify(questions));

      newQuestions[result.type].answers = answers;

      setQuestions(newQuestions);
    }
  };

  const deleteQuestion = event => {
    const { index } = event.target;
    const temp = questions;
    temp.splice(index, 1);
    console.log(temp);
    setQuestions(questions => [...temp]);
  };

  const addQuestion = event => {
    const question = {
      id: uuidv4(),
      question: "",
      answers: ["", ""],
    };
    setQuestions(questions => [...questions, question]);
  };

  const deleteAnswer = (questionIndex, answerIndex) => {
    const temp = Array.from(questions);
    temp[questionIndex].answers.splice(answerIndex, 1);
    setQuestions(questions => [...temp]);
  };

  const addAnswer = event => {
    const { id } = event.target;
    const temp = questions;
    temp[parseInt(id, 10)].answers.push("");
    setQuestions(questions => [...temp]);
  };

  return (
    <div style={{ paddingBottom: "1rem" }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" type="QUESTIONS">
          {(provided, snapshot) => (
            <div className="questions" ref={provided.innerRef}>
              {questions.map((question, index) => (
                <Draggable
                  key={question.id}
                  draggableId={question.id}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      className="question__box"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                       <div className="question__number">
                          <span {...provided.dragHandleProps}>
                            <FontAwesomeIcon
                              className="grip"
                              icon={"grip-vertical"}
                            />
                          </span>
                          <span className="number">Question {index + 1}</span>
                        </div>
                        <IconButton index={index} onClick={deleteQuestion}>
                          <i class="fas fa-times" aria-hidden="true"></i>
                        </IconButton>
                      </div>
                      <div>
                        <input
                          style={{ width: "100%" }}
                          className="form-control-lg"
                          type="text"
                          placeholder="Question"
                        />
                      </div>

                      <Answers
                        questionNum={index}
                        question={question}
                        deleteAnswer={deleteAnswer}
                      />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row-reverse",
                        }}
                      >
                        <span className="add-answer"
                          id={index}
                          onClick={addAnswer}
                        >
                          add answer +
                        </span>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <button className="btn primary block" onClick={addQuestion}>Add question</button>
    </div>
  );
};

export default SetQuestion;
