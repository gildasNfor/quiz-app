import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";

const SignUp = () => {
  return (
    <div className="box">
      <div className="login__container">
        <h3 className="header">Welcome</h3>
        <p>Fill the form to create an account</p>
        <form>
          <div className="form-group">
            <i class="fas fa-user icons"></i>
            <input
              className="form-control input-field"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <i class="fas fa-lock icons"></i>
            <input
              type="password"
              className="form-control input-field"
              placeholder="Enter your Password"
            />
          </div>
          <div className="form-group">
            <i class="fas fa-lock icons"></i>
            <input
              type="password"
              className="form-control input-field"
              placeholder="Confirm Password"
            />
          </div>
          <div className="form-group">
            <button className="form-control btn-lg button">Sign In</button>
          </div>
          <div className="form-group">
            <p className="header">
              Already have an account? <Link to="signin">Sign In</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
