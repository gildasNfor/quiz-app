import React, { useState } from "react";
import axiosInstance from "../axios/axios";
import { useHistory, Link } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setUser(user => {
      return { ...user, [name]: value };
    });
  };

  const signup = event => {
    event.preventDefault();
    if (user.password !== user.confirmPassword) {
      console.log("password don't match");
    } else {
      axiosInstance
        .post(`/auth/signup`, user)
        .then(res => {
          console.log(res);
          history.push("/");
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
  return (
    <div>
      <h2>Sign Up</h2>
      <br />
      <form>
        <input
          onChange={handleChange}
          className="form-control"
          type="text"
          placeholder="username"
          name="username"
          value={user.username}
        ></input>
        <br />
        <input
          onChange={handleChange}
          className="form-control"
          type="password"
          placeholder="password"
          name="password"
          value={user.password}
        ></input>
        <br />
        <input
          onChange={handleChange}
          className="form-control"
          type="password"
          placeholder="confirmPassword"
          name="confirmPassword"
          value={user.confirmPassword}
        ></input>
        <br />
        <button onClick={signup} className="btn btn-success">
          Sign Up
        </button>
        <br />
        <Link to="/">Login</Link>
      </form>
    </div>
  );
};

export default Login;
