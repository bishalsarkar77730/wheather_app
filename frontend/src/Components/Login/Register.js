import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/signup", {
        username,
        firstname,
        lastname,
        city,
        password,
      });
      alert("Your Account is created Successfully please Login");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section>
        <h1>Signup</h1>
        <div className="login-form centerr">
          <h4>Username</h4>
          <div className="username-input">
            <input
              type="text"
              placeholder="Type your username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <h4>First-Name</h4>
          <div className="username-input">
            <input
              type="text"
              placeholder="Type your Firstname"
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <h4>Last-Name</h4>
          <div className="username-input">
            <input
              type="text"
              placeholder="Type your Lastname"
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <h4>City</h4>
          <div className="username-input">
            <input
              type="text"
              placeholder="Type your City"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <h4>Password</h4>
          <div className="password-input">
            <input
              type="password"
              placeholder="Type your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button className="login-btn" onClick={handleSignup}>SIGNUP</button>
        <div className="alternative-signup">
          <p>
            Already a member?{" "}
            <Link to="/">
              <span>Login</span>
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Register;
