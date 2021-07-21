import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Main from "./Main";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Home;
