import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from "./const";


const defaultState = {
    isLoading: false,
    isLogin: false,
    userInfo: {
        name: '',
        password: ''
    },
    error: ''
}
export default function userReducer(state = defaultState, action) {
    switch(action.type) {
        case LOGIN_REQUEST:
            return {...state, isLoading: true}
        case LOGIN_SUCCESS:
            return {isLogin: true, isLoading: false, userInfo: action.payload}
        case LOGIN_FAILED:
            return {...state, isLoading: false, isLogin: false, error: action.payload.error}
        default: 
            return state;
    }
}