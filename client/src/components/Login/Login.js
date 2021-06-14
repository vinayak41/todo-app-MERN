import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import {login} from '../../Redux/Actions/todo'
import "./Login.css";
import { Link } from 'react-router-dom'
 
export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password))
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChnage = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
        <h1>Login</h1>
        <label for="email"> Email </label>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={(e) => handleEmailChange(e)}
        />
        <label for="password"> Password </label>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => handlePasswordChnage(e)}
        />
        <button type="submit">Login</button>
      </form>
      <button className="text-btn"><Link to="/signup"><h4>New User ? <span>Sign Up</span></h4></Link></button>
    </div>
  );
}
