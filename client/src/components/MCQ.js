import React from "react";

const MCQ = ({ name, answer, setAnswer }) => {
  const handleChange = e => {
    e.preventDefault();
    setAnswer(answer);
  };
  return (
    <div>
      <input type="radio" name={name} value={answer} />
      <label>{answer}</label>
      <br />
    </div>
  );
};

export default MCQ;
