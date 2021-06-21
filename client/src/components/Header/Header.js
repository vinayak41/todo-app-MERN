import React from "react";
import todoLogo from "../../assets/images/todo-icon.jpg";
import {useDispatch, useSelector} from 'react-redux'
import { Router, Link } from "react-router-dom";
import "./Header.css";
import { logout } from "../../Redux/Actions/user";

export default function Header() {
  const isLogin = useSelector((state) => state.user.isLogin);
  const dispatch = useDispatch();
  return (
    <div className="header">
      <div className="logo-container">
        <img src={todoLogo} alt="todo-logo" />
      </div>
      <h1 className="title">Todo</h1>
      {isLogin ? <button className="logout-btn" onClick={() => dispatch(logout())}>Log Out</button> : <></>}
    </div>
  );
}
