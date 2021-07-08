import React from "react";

const SetQuestion = () => {
  return (
    <div>
      <div>
        <textarea
          type="text"
          placeholder="Write the question here"
          rows="3"
          cols="35"
        />
        <hr />
        <input className="form-control" type="text" placeholder="Answers" />
        <br />
        <button className="btn btn-primary">Add to Answers</button>
        {}
      </div>
    </div>
  );
};

export default SetQuestion;
