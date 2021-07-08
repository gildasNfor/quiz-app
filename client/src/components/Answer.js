import React from "react";

const Answer = ({ answer, addCorrectAnswer }) => {
  const handleChange = e => {
    addCorrectAnswer(answer, e.target.checked);
  };
  return (
    <div>
      <input
        onChange={handleChange}
        type="checkbox"
        id=""
        name=""
        value={answer}
      ></input>
      <label for="">{answer}</label>
      <br />
    </div>
  );
};

export default Answer;
