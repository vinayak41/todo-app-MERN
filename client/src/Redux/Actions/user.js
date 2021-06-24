import {LOGIN_SUCCESS, SIGNUP_SUCCESS, SIGNUP_FAIL, LOGIN_FAIL, IS_LOGIN_TRUE, IS_LOGIN_FALSE, LOGOUT, RESET_ERR_MSG} from '../TypeConstants/typeConstants';
import axios from 'axios';
const api = `${"https://todo-app-mern41.herokuapp.com" || 'http://localhost:8000'}/user`

export const login = (email, password) => {
    return (dispatch) => {
        axios.post(`${api}/login`, {email, password}).then(result => {
            if(result.status === 200) {
                dispatch({
                    type: LOGIN_SUCCESS,
                    playload: result.data.token
                })
            }
        }).catch( (error) => {
                dispatch({
                    type: LOGIN_FAIL,
                    playload: { message: error.response.data.error}
                })
        })
    }
}

export const signup = (name, email, password) => {
    return (dispatch) => {
        axios.post(`${api}/signup`, {name, email, password}).then( () => {
            dispatch({
                type: SIGNUP_SUCCESS,
            })
        }).catch(error => {
            dispatch({
                type: SIGNUP_FAIL,
                playload: {message: error.response.data.message}
            })
        })
    }
}

export const checkLogin = (token) => {
    return (dispatch) => {
        if(token) {
            axios({
                method: "get",
                url: api,
                headers : {
                    authorization: `Bearer ${token}`
                }
            }).then( () => {
                dispatch({
                    type: IS_LOGIN_TRUE,
                })
            }).catch((error)=> {
                console.log(error)
                dispatch({
                    type: IS_LOGIN_FALSE
                })
            })
        }
    }
}

export const logout = () => {
    localStorage.setItem("token", "");
    return {
        type: LOGOUT
    }
}

export const resetErrMsg = () => {
    return {
        type: RESET_ERR_MSG
    }
}
