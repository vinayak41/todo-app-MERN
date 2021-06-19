import { LOGIN_FAIL, LOGIN_SUCCESS, SIGNUP_FAIL, SIGNUP_SUCCESS } from "../TypeConstants/typeConstants";
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
            console.log("login success");
            return {
                ...state,
                token: action.playload,
                redirectTo: '/todos',
                isLogin: true
            }
        default :
            return state
    }
}