import React, { useState } from "react";
import axiosInstance from "../axios/axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setUser } from "../redux/actions/authActions";
import { useHistory, Link } from "react-router-dom";

const Login = props => {
  const history = useHistory();
  const [user, updateUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = event => {
    const { name, value } = event.target;
    updateUser(user => {
      return { ...user, [name]: value };
    });
  };

  const login = event => {
    event.preventDefault();

    axiosInstance
      .post(`/auth/login`, user)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.jwtToken);
        props.setUser(res.data.userDetails);
        history.push("/home");
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
      <h2>Login</h2>
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
        <button onClick={login} className="btn btn-success">
          Login
        </button>
        <br />
        <Link to="/signup">Sign Up</Link>
      </form>
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  return {
    currentUser: auth.user,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setUser }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
