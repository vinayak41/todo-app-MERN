import { ADD_TODO, FETCH_TODOS_SUCCESS, DELETE_TODO, DONE_TODO, UNDONE_TODO, LOGIN_SUCCESS, SHOW_LOGIN_PAGE, SIGNUP_SUCCESS} from '../TypeConstants/typeConstants';
import axios from 'axios';
const api = 'http://localhost:8000/todo'

export const addTodo = (text) => {
    const id = Date.now();
    axios.post(api, { text: text, id: id});
    return {
        type: ADD_TODO,
        playload: {
            text,
            id: id,
            isDone: false
        }
    }
}

export const fetchTodos = (todos) => {
    return (dispatch) => {
        axios.get(api).then( res => {
            dispatch ({
                type: FETCH_TODOS_SUCCESS,
                playload: res.data.todos
            })
        })
    }
}

export const deleteTodo = (id) => {
    axios.delete(`${api}/${id}`).then((res) => console.log(res))
    return {
        type: DELETE_TODO,
        playload: id
    }
}

export const doneTodo = (id) => {
    axios.put(api, {id: id})
    return {
        type: DONE_TODO,
        playload: id
    }
}

export const undoneTodo = (id) => {
    axios.put(api, {id: id})
    // .then(res => console.log(res)).catch(error => console.log(error))
    return {
        type: UNDONE_TODO,
        playload: id
    }
}

export const login = (email, password) => {
    return {
        type: LOGIN_SUCCESS,
        playload: {
            email,
            password
        }
    }
}

export const signup = (name, email, password) => {
    return {
        type: SIGNUP_SUCCESS,
        playload: {
            name,
            email,
            password
        }
    }
}
export const showLoginPage = () => {
    return {
        type: SHOW_LOGIN_PAGE
    }
}