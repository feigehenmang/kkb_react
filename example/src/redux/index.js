import {createStore, applyMiddleware} from '../kredux';
// import {createStore, applyMiddleware} from 'redux';
// import {applyMiddleware} from 'redux';
// import promise from 'redux-promise';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';
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
function isPromise(val) {
    return val instanceof Promise || val.then
}
function isFunc(val) {
    return typeof val === 'function';
}
// 执行第一次拿到dispatch
function promise({dispatch}) {
    // 第二次执行compare拿到next操作
    return next => {
        // 拿到真实dispatch传入的参数 可以是
        return action => {
            console.log('promise', next, action)
            if(isPromise(action)) {
                return action.then(dispatch);
            } else {
                return next(action);
            }
        }
    }
}

function thunk({dispatch}) {
    return next => {
        return action => {
            console.log('thunk', next, action);
            if(isFunc(action)) {
                return action(dispatch);
            }
            return next(action);
        }
    }
}
function logger({getState}) {
    // console.log(getState)
    // next为dispatch函数
    return next => {
        // console.log(next);
        // action 为type
        return action => {
            console.log('action', action, next);
            const prevState = getState();
            console.log('prevState', prevState);
            const result = next(action);
            console.log(action.type)
            const currState = getState();
            console.log('currState', currState);
            return result;
        }
    }
}


function combineReducers(reducers) {
    // reducers action {type: 'ADD'}
    // action执行的reducer
    return (state={}, action) => {
        console.log(state);
        let nextState = {}, hasChange = false;
        for (const key in reducers) {
            // 针对每个reducer进行state的更新
            const reducer = reducers[key]; // 每个具体的reducer函数
            const prevStateForKey = state[key]; // 上次state
            nextState[key] = reducer(prevStateForKey, action); // 执行reducer 获取最新state
            console.log(nextState)
            hasChange = hasChange || nextState[key] !== prevStateForKey;
        }
        console.log(hasChange)
        return hasChange ? nextState:state;

    }
}


// reducer => state, action return newState
// export default createStore(countReducer, applyMiddleware(logger));
// export default createStore(countReducer, applyMiddleware(promise, thunk, logger));
export default createStore(combineReducers({count: countReducer}), applyMiddleware(promise, thunk, logger));