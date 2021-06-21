import { FETCH_TODOS_SUCCESS, DELETE_TODO, DONE_TODO, UNDONE_TODO, ADD_TODO_SUCCESS} from '../TypeConstants/typeConstants';
import axios from 'axios';
const api = 'http://localhost:8000/todo';
const auth = `Bearer ${localStorage.getItem("token")}`;

export const addTodo = (text) => {
    return (dispatch) => {
        axios({
            method: "POST",
            url: api,
            data: {
                text
            },
            headers: {
                authorization: auth
            }
        }).then((result) => {
            dispatch({
                type: ADD_TODO_SUCCESS,
                playload: {
                    _id: result.data._id,
                    text,
                    isDone: false
                }
            })
        })
    }
}

export const fetchTodos = (token) => {
    return (dispatch) => {
        axios({
            method:  "GET",
            url: api,
            headers: {
                authorization: `Bearer ${token}`
            }
        }).then( (result) => {
            dispatch({
                type: FETCH_TODOS_SUCCESS,
                playload: result.data.todos
            })
        }).catch(error => {
            console.log(error.response)
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

