import React, { useEffect} from "react";
// import todoList from "../../todoList";
import TodoItem from "../TodoItem/TodoItem";
import AddTodo from "../AddTodo/AddTodo";
import { useSelector, useDispatch } from 'react-redux'
import "./TodoList.css";
import { fetchTodos } from '../../Redux/Actions/todo'


export default function TodoList() {
  const todoList = useSelector(state => state.todo.todoList);
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(fetchTodos())
  },[])

  return (
    <div className="todo-list">
      <AddTodo />
      {todoList.length > 0 ? (
        todoList.map((item) => <TodoItem key={item.id} item={item} />)
      ) : (
        <h1 className="no-todo">No Todo</h1>
      )}
    </div>
  );
}
