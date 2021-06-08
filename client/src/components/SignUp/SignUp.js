import React from "react";
import {useDispatch} from 'react-redux';
import { showLoginPage, signup } from "../../Redux/Actions/todo";
import "./SignUp.css";

export default function SignUp() {
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signup())
    }
  return (
    <div className="signup-page">
      <form className="signup-form" onSubmit={(e) => handleSubmit(e)}>
        <h1>Sign Up</h1>
        <label for="name">Name</label>
        <input type="text" name="name" placeholder="name" />
        <label for="email">Email</label>
        <input type="email" name="email" placeholder="email" />
        <label for="password">Name</label>
        <input type="password" name="password" placeholder="password" />
        <button className="signup-btn" type="submit">Sign Up</button>
      </form>
        <button className="text-btn" onClick={() => dispatch(showLoginPage())}><h4>Already have acount ? <span>Login</span></h4></button>
    </div>
  );
}
