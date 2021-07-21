import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar__container">
      <div className="logo">
        <i class="fas fa-address-book icon"></i>
        <span>Quizer</span>
      </div>
      <div className="button__box">
        <button className="btn block primary block"><span>New Quiz</span><i class="fa fa-plus-circle fa-lg" aria-hidden="true"></i></button>
      </div>
    </div>
  );
};

export default Sidebar;
