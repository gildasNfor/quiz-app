import React from "react";

const Quiz = () => {
  return (
    <>
      <div className="quiz__div">
        <div className="col-6"><i class="far fa-file fa-lg"></i> <span class="quiz-name">Quiz Name</span></div>
        <div className="col-3">Category</div>
        <div className="col-1"><i class="fas fa-check-square success"></i></div>
        <div className="col-2 table-date">17/07/2021</div>
      </div>
      <hr className="quiz__hr" />
    </>
  );
};

export default Quiz;
