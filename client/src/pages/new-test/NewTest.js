import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Sidebar from "../home/sidebar/Sidebar";
import Navbar from "../home/Navbar";
import SetQuestion from "../../components/SetQuestion";
import "./newTest.css";

const NewTest = () => {
  const [questions, setQuestions] = useState([
    {
      id: uuidv4(),
      name: "question 1",
      answers: [{ id: uuidv4() }, { id: uuidv4() }],
    },
    {
      id: uuidv4(),
      name: "question 1",
      answers: [{ id: uuidv4() }, { id: uuidv4() }],
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
    // {
    //   id: uuidv4(),
    //   name: "question 1",
    //   answers: [{ id: uuidv4() }, { id: uuidv4() }],
    // },
  ]);

  const handleOnDragEnd = result => {
    console.log(result);
    // if (!result.destination) return;
    // const items = Array.from(questions);
    // console.log(items);
    // const [reorderedItem] = items.splice(result.source.index, 1);
    // items.splice(result.destination.index, 0, reorderedItem);
    // setQuestions(items);
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
        <SetQuestion />
      </div>
    </div>
  );
};

export default NewTest;

// <Droppable droppableId="questions">
//   {provided => (
//     <div
//       className="questions"
//       {...provided.droppableProps}
//       ref={provided.innerRef}
//     >
//       {questions.map((question, questionIndex) => (
//         <Draggable
//           key={question.id}
//           draggableId={question.id}
//           index={questionIndex}
//         >
//           {provided => (
//             <div
//               className="question__box"
//               ref={provided.innerRef}
//               {...provided.draggableProps}
//               {...provided.dragHandleProps}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                 }}
//               >
//                 <h3>Question {questionIndex + 1}</h3>
//                 <IconButton
//                   index={questionIndex}
//                   onClick={deleteQuestion}
//                 >
//                   <ClearIcon />
//                 </IconButton>
//               </div>
//               <div>
//                 <input
//                   style={{ width: "100%" }}
//                   className="form-control-lg"
//                   type="text"
//                   placeholder="Question"
//                 />
//               </div>
//               <Droppable droppableId="answers">
//                 {provided => (
//                   <div>
//                     <div
//                       className="answers__div"
//                       {...provided.droppableProps}
//                       ref={provided.innerRef}
//                     >
//                       {question.answers.map((answer, answerIndex) => {
//                         let index = -1;
//                         const answerArray =
//                           questions[questionIndex].answers;
//                         for (let i = 0; i < questionIndex; i++) {
//                           for (let j = 0; j < answerArray.length; j++) {
//                             index++;
//                           }
//                         }
//                         index = index + answerArray.indexOf(answer) + 1;
//                         console.log(index);
//                         return (
//                           <Draggable
//                             key={answer.id}
//                             draggableId={answer.id}
//                             index={index}
//                           >
//                             {provided => (
//                               <div
//                                 className="answer__box"
//                                 ref={provided.innerRef}
//                                 {...provided.draggableProps}
//                                 {...provided.dragHandleProps}
//                               >
//                                 <input
//                                   className="form-control answers"
//                                   type="text"
//                                   placeholder="Answer"
//                                 />
//                                 <IconButton style={{ color: "green" }}>
//                                   <CheckIcon />
//                                 </IconButton>
//                                 <IconButton>
//                                   <ClearIcon />
//                                 </IconButton>
//                               </div>
//                             )}
//                           </Draggable>
//                         );
//                       })}
//                       {provided.placeholder}
//                     </div>
//                   </div>
//                 )}
//               </Droppable>
//             </div>
//           )}
//         </Draggable>
//       ))}
//       {provided.placeholder}
//     </div>
//   )}
// </Droppable>;
