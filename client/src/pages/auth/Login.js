import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";

const Login = () => {
  return (
    <div className="box">
      <div className="login__container">
        <h3 className="header">Welcome Back</h3>
        <p>Enter your credentials to access your account</p>
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
              className="form-control input-field"
              placeholder="Enter your Password"
            />
          </div>
          <div className="form-group">
            <button className="form-control btn-lg button">Sign In</button>
          </div>
          <div className="form-group">
            <p className="header">
              Don't have an account ? <Link to="signup">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
