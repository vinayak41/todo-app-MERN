import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      {/* <Link to="/login">Login</Link>
            <Link to="/signup">Login</Link>
            <Link to="/todo_list">Login</Link> */}
      <p>Todo app can help you to make list of your tasks</p>
      <button>
        <Link to="/login">Get Started</Link>
      </button>
    </div>
  );
}
