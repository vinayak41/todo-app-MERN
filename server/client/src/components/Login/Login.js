import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import {login, resetErrMsg} from '../../Redux/Actions/user'
import "./Login.css";
import { Link } from 'react-router-dom'
 
export default function Login() {
  const dispatch = useDispatch();
  const errorMsg = useSelector(state => state.user.errorMsg);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password))
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
          onChange={(e) => setEmail(e.target.value)}
        />
        <label for="password"> Password </label>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMsg ? <div className="error-msg"><p>{errorMsg}</p></div> : <></>}
        <button type="submit">Login</button>
      </form>
      <button className="text-btn" onClick={() => dispatch(resetErrMsg())} ><Link to="/signup"><h4>New User ? <span>Sign Up</span></h4></Link></button>
    </div>
  );
}
