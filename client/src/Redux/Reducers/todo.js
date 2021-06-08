import {
  ADD_TODO,
  FETCH_TODOS_SUCCESS,
  DELETE_TODO,
  DONE_TODO,
  UNDONE_TODO,
  LOGIN_SUCCESS,
  SHOW_LOGIN_PAGE,
  SIGNUP_SUCCESS,
  SHOW_SIGNUP_PAGE,
} from "../TypeConstants/typeConstants";
const initialState = {
  todoList: [],
  showSignUpPage: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: action.playload.id,
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
        todoList: state.todoList.filter((item) => item.id !== action.playload),
      };
    case DONE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((item) => {
          if (item.id === action.playload) {
            item.isDone = true;
          }
          return item;
        }),
      };
    case UNDONE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((item) => {
          if (item.id === action.playload) {
            item.isDone = false;
          }
          return item;
        }),
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
      };
    case SHOW_LOGIN_PAGE:
      return {
        ...state,
        showSignUpPage: false,
      };
    case SHOW_SIGNUP_PAGE: 
    return {
      ...state,
      showSignUpPage: true
    }
    case SIGNUP_SUCCESS: 
    return {
      ...state,
      showSignUpPage: false,
    }
    default:
      return state;
  }
};
