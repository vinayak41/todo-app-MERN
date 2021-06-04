import { ADD_TODO, FETCH_TODO, DELETE_TODO, DONE_TODO, UNDONE_TODO } from '../TypeConstants/typeConstants';

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        playload: {
            text,
            id: Date.now(),
            isDone: false
        }
    }
}

export const fetchTodo = () => {
    return {
        type: FETCH_TODO,
        playload: [],
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        playload: id
    }
}

export const doneTodo = (id) => {
    return {
        type: DONE_TODO,
        playload: id
    }
}

export const undoneTodo = (id) => {
    return {
        type: UNDONE_TODO,
        playload: id
    }
}