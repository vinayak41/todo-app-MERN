import {LOGIN_SUCCESS, SIGNUP_SUCCESS, SIGNUP_FAIL} from '../TypeConstants/typeConstants';
import axios from 'axios';
const api = 'http://localhost:8000/user'

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
    return (dispatch) => {
        axios.post(`${api}/signup`, {name, email, password}).then(result => {
            console.log(name, email, password)
            if(result.status === 409) {
                dispatch({
                    type: SIGNUP_FAIL,
                    playload: {
                        message: result.data.message
                    }
                })
            }
            if(result.status === 200) {
                dispatch({
                    type: SIGNUP_SUCCESS
                })
            }
        })
    }
}
