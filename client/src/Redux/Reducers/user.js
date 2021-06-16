import { SIGNUP_FAIL, SIGNUP_SUCCESS } from "../TypeConstants/typeConstants";

export default (state = {}, action) => {
    switch(action.type) {
        case SIGNUP_FAIL: 
            history.push('./login');
            return {
                ...state,
            }
        case SIGNUP_SUCCESS: 
        history.push('./login');                         
            return {
                ...state
            }
    }
}