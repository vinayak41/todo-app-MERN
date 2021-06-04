import { Provider } from 'react-redux';
import './App.css';
import TodoList from './components/TodoList/TodoList'
import store from './store'


function App() {
  return (
    <Provider store={store}>
    <div className="app">
      <h1>Todo</h1>
      <TodoList />
    </div>
    </Provider>
  );
}

export default App;
