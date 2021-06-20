import {LOGIN_SUCCESS, SIGNUP_SUCCESS, SIGNUP_FAIL, LOGIN_FAIL, IS_LOGIN_TRUE, IS_LOGIN_FALSE} from '../TypeConstants/typeConstants';
import axios from 'axios';
const api = 'http://localhost:8000/user'

export const login = (email, password) => {
    return (dispatch) => {
        axios.post(`${api}/login`, {email, password}).then(result => {
            if(result.status === 200) {
                console.log(result.data.token)
                dispatch({
                    type: LOGIN_SUCCESS,
                    playload: result.data.token
                })
            }
        }).catch( (error) => {
            if(error.response.status === 400) {
                dispatch({
                    type: LOGIN_FAIL,
                    playload: { message: error.response.data.error}
                })
            }
        })
    }
}

export const signup = (name, email, password) => {
    return (dispatch) => {
        axios.post(`${api}/signup`, {name, email, password}).then(result => {
            if(result.status === 409) {
                dispatch({
                    type: SIGNUP_FAIL
                })
            }
            if(result.status === 200) {
                dispatch({
                    type: SIGNUP_SUCCESS,
                })
            }
        })
    }
}

export const isLogin = (token) => {
    return (dispatch) => {
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
        }).catch(()=> {
            dispatch({
                type: IS_LOGIN_FALSE
            })
        })
    }
}
