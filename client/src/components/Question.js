import React, { useState } from "react";

const Question = () => {
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

  const [questions, setQuestions] = useState([
    {
      question: "Who is the best player in the World ?",
      answers: ["Ronaldo", "Messi", "Neymar"],
    },
    {
      question: "Which team won Euro 2020 ?",
      answers: ["Italy", "Germany", "France", "Portugal"],
    },
    {
      question: "Which football club won the champions league in 2021 ?",
      answers: [
        "Manchester City",
        "Manchester United",
        "Chelsea",
        "Real Madrid",
      ],
    },
  ]);

  const handleClick = e => {
    const { id: index, value } = e.target;

    const buttons = document.querySelectorAll(`.question-${index}`);
    buttons.forEach(button => {
      button.classList.remove("green");
    });
    console.log(value);
    e.target.classList.add("green");
  };
  return (
    <>
      {questions.map((question, questionIndex) => {
        return (
          <div className="question__box">
            <h6>Question {questionIndex + 1}</h6>
            <h4>
              {questionIndex + 1}. {question.question}
            </h4>

            {question.answers.map((answer, index) => {
              return (
                <div style={{ display: "flex", paddingLeft: "1rem" }}>
                  <button
                    className={`question-${questionIndex}`}
                    id={questionIndex}
                    onClick={handleClick}
                    name={question.question}
                    value={answer}
                  >
                    {letters[index]}.
                  </button>
                  <span className="answer">{answer}</span>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default Question;
