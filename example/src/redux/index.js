// import {createStore, applyMiddleware} from '../kredux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import userReducer from './user';
import { commitReducer } from './commit';
import rootSaga from './saga';
import { userSaga } from './saga/commit';
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

const sagaMiddleWare = createSagaMiddleware(rootSaga);
const store = createStore(combineReducers({count: countReducer, user: userReducer, commit: commitReducer}),
applyMiddleware(sagaMiddleWare, promise, thunk, logger)
);
sagaMiddleWare.run(rootSaga)

export default store;