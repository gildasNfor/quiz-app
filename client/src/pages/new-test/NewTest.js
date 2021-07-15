import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { IconButton } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import Sidebar from "../home/sidebar/Sidebar";
import Navbar from "../home/Navbar";
import SetQuestion from "../../components/SetQuestion";
import "./newTest.css";

const NewTest = () => {
  const [questions, setQuestions] = useState([
    { id: "d", name: "question 1" },
    { id: "o", name: "question 2" },
    { id: "q", name: "question 2" },
    { id: "c", name: "question 2" },
    { id: "b", name: "question 2" },
  ]);

  const handleOnDragEnd = result => {
    if (!result.destination) return;
    const items = Array.from(questions);
    console.log(items);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setQuestions(items);
  };

  const deleteQuestion = event => {
    const { index } = event.target;
    const temp = questions;
    temp.splice(index, 1);
    console.log(temp);
    setQuestions(questions => [...temp]);
  };
  console.log(questions);
  return (
    <div className="new__test">
      <Sidebar />
      <div className="main__div">
        <Navbar />
        <div className="quiz__name">
          <input
            className="form-control-lg name"
            type="text"
            placeholder="Quiz Name"
          />
        </div>

        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="questions">
            {provided => (
              <div
                className="questions"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {questions.map((question, index) => (
                  <Draggable
                    key={question.id}
                    draggableId={question.id}
                    index={index}
                  >
                    {provided => (
                      <div
                        className="question__box"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <h3>Question {index + 1}</h3>
                          <IconButton index={index} onClick={deleteQuestion}>
                            <ClearIcon />
                          </IconButton>
                        </div>
                        <div>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Question"
                          />
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
      </div>
    </div>
  );
};

export default NewTest;
