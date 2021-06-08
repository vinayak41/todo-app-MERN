import { useSelector } from "react-redux";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

function App() {
  const isLogin = useSelector((state) => state.todo.isLogin);
  const showSignUpPage = useSelector((state) => state.todo.showSignUpPage);
  console.log(showSignUpPage);
  return (
    <div className="app">
      {isLogin ? (
        ((<h1>Todo</h1>), (<TodoList />))
      ) : showSignUpPage ? (
        <SignUp />
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
