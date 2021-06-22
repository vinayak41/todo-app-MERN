import { IS_LOGIN_TRUE, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, RESET_ERR_MSG, SIGNUP_FAIL, SIGNUP_SUCCESS } from "../TypeConstants/typeConstants";
const initialState = {}

export default (state = initialState, action) => {
    switch(action.type) {
        case SIGNUP_FAIL: 
            return {
                ...state,
                errorMsg: action.playload.message
            }
        case SIGNUP_SUCCESS: 
            return {
                ...state,
                redirectTo: "/login"
            }
        case LOGIN_FAIL: 
            return {
                ...state,
                errorMsg: action.playload.message
            }
        case LOGIN_SUCCESS:
            localStorage.setItem("token", action.playload)
            return {
                ...state,
                token: action.playload,
                redirectTo: '/todos',
                isLogin: true,
                errorMsg: false
            }
        case IS_LOGIN_TRUE: 
            return {
                ...state,
                isLogin: true,
                token: localStorage.getItem("token")
            }
        case LOGOUT:
            return {
                ...state,
                token: "",
                isLogin: false
            }
        case RESET_ERR_MSG: 
            return {
                ...state,
                errorMsg: false
            }
        default :
            return state
    }
}