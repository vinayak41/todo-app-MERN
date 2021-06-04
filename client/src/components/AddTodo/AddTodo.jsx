import React, { useState } from "react";
import "./AddTodo.css";
import {useDispatch} from 'react-redux';
import {addTodo} from '../../Redux/Actions/todo'


export default function AddTodo() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(text))
    setText('')
  }

  const handleClick = () => {
    dispatch(addTodo(text))
    setText('')
  }

  return (
    <div className="add-todo">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="add todo..." onChange={handleChange} value={text}></input>
      </form>
      <button className="add-btn" onClick={handleClick}>
        <i class="fas fa-plus-circle fa-2x"></i>
      </button>
    </div>
  );
}
