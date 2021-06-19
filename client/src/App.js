import { useSelector } from "react-redux";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Header from "./components/Header/Header";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  const redirectTo = useSelector((state) => state.user.redirectTo);
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Router>
          {redirectTo ? <Redirect to={redirectTo} /> : <></>}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <PrivateRoute path="/todos" component={<TodoList />} />
            <PublicRoute restricted={true} path="/login" component={<Login/>} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
