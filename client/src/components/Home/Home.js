import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import todoImg from "../../assets/images/todo.png"

export default function Home() {
  return (
    <div className="home">
      <div className="left">
        <p>Todo app can help you to make list of your tasks</p>
        <button>
          <Link to="/login">Get Started</Link>
        </button>
      </div>
      <div className="img-wrapper">
        <img src={todoImg} alt="todo-img" />
      </div>
    </div>
  );
}
