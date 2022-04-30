import React, { useState } from "react";
import { GiMountainCave } from "react-icons/gi";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

import DemoUser from "../DemoUser";

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
        <div>
          <GiMountainCave />
        </div>
        <h3>Log in to NatureClikr</h3>
      </div>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label>
        Username or Email
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit" className="">
        Log In
      </button>
      <DemoUser />
    </form>
  );
}

export default LoginForm;
