// import {createStore, applyMiddleware} from '../kredux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import userReducer from './user';
const defaultState = 0;
function countReducer(state = defaultState, action) {
    switch(action.type) {
        case 'ADD':
            return state+1;
        case 'INC':
            return state -1;
        case 'ANOTHER':
            return state + action.count;
        default:
            return state;
    }
}

export default createStore(combineReducers({count: countReducer, user: userReducer}),
    applyMiddleware(promise, thunk, logger)
);