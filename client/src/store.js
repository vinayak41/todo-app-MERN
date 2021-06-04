import { createStore, applyMiddleware } from "redux";
import rootReducer from './Redux/Reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware()));

export default store;