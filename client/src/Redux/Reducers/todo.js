import {
  FETCH_TODOS_SUCCESS,
  DELETE_TODO,
  DONE_TODO,
  UNDONE_TODO,
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  ADD_TODO_SUCCESS,
} from "../TypeConstants/typeConstants";
const initialState = {
  todoList: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            _id: action.playload._id,
            text: action.playload.text,
            isDone: action.playload.isDone,
          },
        ],
      };
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todoList: action.playload,
      };
    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((item) => item._id !== action.playload),
      };
    case DONE_TODO:
      console.log('i am here')
      return {
        ...state,
        todoList: state.todoList.map((item) => {
          if (item._id === action.playload) {
            item.isDone = true;
          }
          return item;
        }),
      };
    case UNDONE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((item) => {
          if (item._id === action.playload) {
            item.isDone = false;
          }
          return item;
        }),
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
      };
    case SIGNUP_SUCCESS: 
    return {
      ...state,
    }
    default:
      return state;
  }
};
