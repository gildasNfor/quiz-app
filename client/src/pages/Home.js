import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

const Home = ({ currentUser }) => {
  return (
    <div>
      <Link to={currentUser?.isAdmin && "/set-quiz"}>
        <button className="btn btn-lg btn-primary">Set a Quiz</button>
      </Link>
      <hr />
      <Link to={currentUser?.isAdmin && "/update-quiz"}>
        <button className="btn btn-lg btn-primary">Update a Quiz</button>
      </Link>
      <hr />
      <Link to="select-quiz">
        <button className="btn btn-lg btn-primary">Take a Quiz</button>
      </Link>
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  return {
    currentUser: auth.user,
  };
};

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ setUser }, dispatch);
// };

export default connect(mapStateToProps)(Home);
