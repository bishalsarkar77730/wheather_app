import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css";

// Redux Imports
import {
  loginStart,
  loginFailure,
  loginSuccess,
} from "../../redux/Slices/UserSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/auth/signin", {
        username,
        password,
      });
      dispatch(loginSuccess(res.data));
      navigate("/");
    } catch (error) {
      dispatch(loginFailure());
      alert("Login Fail");
      navigate("/");
    }
  };

  return (
    <div>
      <section>
        <h1>Login</h1>
        <div className="login-form">
          <h4>Username</h4>
          <div className="username-input">
            <i className="fas fa-user"></i>
            <input
              type="text"
              placeholder="Type your username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <h4>Password</h4>
          <div className="password-input">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              placeholder="Type your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button className="login-btn" onClick={handleLogin}>
          LOGIN
        </button>
        <div className="alternative-signup">
          <p>
            Not a member?{" "}
            <Link to="/signup">
              <span>Sign-up</span>
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;
