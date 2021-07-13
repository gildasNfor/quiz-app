import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar__container">
      <div className="logo">
        <i class="fas fa-address-book icon"></i>
        <h3>Quiz</h3>
      </div>
      <div className="button__box">
        <button className="btn btn-lg btn-primary">New Quiz +</button>
      </div>
    </div>
  );
};

export default Sidebar;
