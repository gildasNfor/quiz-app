import React from "react";

const MCQ = ({ name, answer, setAnswer }) => {
  const handleChange = e => {
    setAnswer(answer);
  };
  return (
    <div>
      <input
        onChange={handleChange}
        id={answer}
        type="radio"
        name={name}
        value={answer}
      />
      <label>{answer}</label>
      <br />
    </div>
  );
};

export default MCQ;
