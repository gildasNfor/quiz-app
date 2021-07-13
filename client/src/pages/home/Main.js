import React from "react";
import Quiz from "../../components/Quiz";
import "./home.css";

const Main = () => {
  return (
    <div className="main__div">
      <div className="heading">
        <div style={{ display: "flex" }}>
          <div style={{ paddingTop: "12px" }}>
            <p className="user__name">Nfor Gildas</p>
          </div>
          <img
            className="profile__pic"
            src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
            alt="profile pic"
          />
        </div>
      </div>
      <hr />
      <div className="table__header">
        <div className="col-4">Quiz Name</div>
        <div className="col-4">Taken</div>
        <div className="col-4">Score</div>
      </div>
      <hr />
      <Quiz />
      <Quiz />
      <Quiz />
      <Quiz />
      <Quiz />
      <Quiz />
      <Quiz />
      <Quiz />
      <Quiz />

      <Quiz />
    </div>
  );
};

export default Main;
