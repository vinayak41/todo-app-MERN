import React from "react";
import { useDispatch } from 'react-redux'
import "./TodoItem.css"
import { doneTodo, undoneTodo, deleteTodo } from '../../Redux/Actions/todo'


export default function TodoItem(props) {
  const dispatch = useDispatch()
  const { id, text, isDone } = props.item;

  const toggleDone = () => {
    if(isDone) dispatch(undoneTodo(id));
    else dispatch(doneTodo(id))
  }
  return (
    <div className="todo-item">
      <button className="done-btn" onClick={() => toggleDone()}>
        {isDone ? (
          <i class="far fa-check-circle fa-2x"></i>
        ) : (
          <i class="far fa-circle fa-2x"></i>
        )}
      </button>
      <span className="text">{text}</span>
      <button className="delete-btn" onClick={ () => dispatch(deleteTodo(id))}>
        <i class="fas fa-trash-alt fa-2x"></i>
      </button>
    </div>
  );
}
