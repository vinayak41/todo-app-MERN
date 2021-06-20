import { IS_LOGIN_TRUE, LOGIN_FAIL, LOGIN_SUCCESS, SIGNUP_FAIL, SIGNUP_SUCCESS } from "../TypeConstants/typeConstants";
const initialState = {}

export default (state = initialState, action) => {
    switch(action.type) {
        case SIGNUP_FAIL: 
            return state
        case SIGNUP_SUCCESS: 
            return {
                ...state,
                redirectTo: "/login"
            }
        case LOGIN_FAIL: 
            console.log(action.playload.message)
            return state
        case LOGIN_SUCCESS:
            localStorage.setItem("token", action.playload)
            return {
                ...state,
                token: action.playload,
                redirectTo: '/todos',
                isLogin: true
            }
        case IS_LOGIN_TRUE: 
            return {
                ...state,
                isLogin: true
            }
        case IS_LOGIN_TRUE: 
            return {
                ...state,
                isLogin: false
            }
        default :
            return state
    }
}