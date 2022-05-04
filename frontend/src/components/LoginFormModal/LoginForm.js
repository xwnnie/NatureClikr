import React, { useState } from "react";
import { GiMountainCave } from "react-icons/gi";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

import DemoUser from "../DemoUser";
import "./LoginForm.css";

// css: SignupForm.css

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <div>
        <div className="login-signup-logo">
          <GiMountainCave />
        </div>
        <h3 className="login-signup-msg">Log in to NatureClikr</h3>
      </div>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      {/* <label>Username or Email</label> */}
      <input
        type="text"
        value={credential}
        onChange={(e) => setCredential(e.target.value)}
        placeholder="Username or Email"
        required
      />

      {/* <label>Password</label> */}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />

      <button type="submit" className="login-signup-btn">
        Log In
      </button>
      <DemoUser />
    </form>
  );
}

export default LoginForm;
