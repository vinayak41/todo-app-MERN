import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import {signup } from "../../Redux/Actions/user";
import "./SignUp.css";
import { Link } from "react-router-dom";

export default function SignUp() {
    const dispatch = useDispatch()
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const handelValueChange = (e) => {
      if(e.target.name === "name"){
        setName(e.target.value)
      } else if(e.target.name === "email"){
        setEmail(e.target.value)
      } else {
        setPassword(e.target.value)
      }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signup(name, email, password));
    }

  return (
    <div className="signup-page">
      <form className="signup-form" onSubmit={(e) => handleSubmit(e)}>
        <h1>Sign Up</h1>
        <label for="name">Name</label>
        <input type="text" name="name" placeholder="name" onChange={ (e) => {handelValueChange(e)} } />
        <label for="email">Email</label>
        <input type="email" name="email" placeholder="email" onChange={ (e) => {handelValueChange(e)} } />
        <label for="password">Password</label>
        <input type="password" name="password" placeholder="password" onChange={ (e) => {handelValueChange(e)} } />
        <button className="signup-btn" type="submit">Sign Up</button>
      </form>
        <button className="text-btn"><Link to="/login"><h4>Already have acount ? <span>Login</span></h4></Link></button>
    </div>
  );
}
