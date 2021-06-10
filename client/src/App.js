import { useSelector } from "react-redux";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" ><Home /></Route>
          <Route path="/login" ><Login /></Route>
          <Route path="/signup" ><SignUp /></Route>
          <Route path="/todo_list" ><TodoList /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
