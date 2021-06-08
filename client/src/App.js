import { useSelector } from 'react-redux';
import './App.css';
import TodoList from './components/TodoList/TodoList'
import Login from './components/Login/Login'


function App() {
  const isLogin = useSelector(state => state.todo.isLogin)
  return (
    <div className="app">
      {isLogin ? (<h1>Todo</h1>,
      <TodoList />) : <Login />}
    </div>
  );
}

export default App;
