import { FETCH_TODOS_SUCCESS, DELETE_TODO, DONE_TODO, UNDONE_TODO, ADD_TODO_SUCCESS} from '../TypeConstants/typeConstants';
import axios from 'axios';
const api = `/todo`;

export const addTodo = (text) => {
    return (dispatch) => {
        axios({
            method: "POST",
            url: api,
            data: {
                text
            },
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then((result) => {
            console.log(result.data._id)
            dispatch({
                type: ADD_TODO_SUCCESS,
                playload: {
                    _id: result.data._id,
                    text,
                    isDone: false
                }
            })
        }).catch(error => {
            console.log(error.response)
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

export const deleteTodo = (_id) => {
    return (dispatch) => {
        axios({
            method: "DELETE",
            url: `${api}/${_id}`,
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(() => {
            dispatch({
                type: DELETE_TODO,
                playload: _id
            })
        }).catch((error) => {
            console.log(error)
        })
    }
}

export const doneTodo = (_id) => {
    return (dispatch) => {
        axios({
            method: "PUT",
            url: api,
            data: {
                id: _id
            },
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(() => {
            console.log("request success")
            dispatch({
                type: DONE_TODO,
                playload: _id
            })
        }).catch(error => {
            console.log(error.response)
        })
    }
}

export const undoneTodo = (_id) => {
    return (dispatch) => {
        axios({
            method: "PUT",
            data: {
                id: _id
            },
            url: api,
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(() => {
            dispatch({
                type: UNDONE_TODO,
                playload: _id
            })
        })
    }
}

