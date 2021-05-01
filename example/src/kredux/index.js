export function createStore(reducer, middlewareFn) {
    if (middlewareFn) {
        return middlewareFn(createStore)(reducer);
    }
    let state;
    const listeners = [];

    function getState() {
        return state;
    }

    function dispatch(args) {
        console.log('dispatchOld ', args);
        const currState = reducer(state, args);
        state = currState;
        listeners.forEach(listener => listener())
    }

    function subscribe(listener) {
        listeners.push(listener);
        return () => {
            listeners.splice(listeners.indexOf(listener), 1);
        }
    }
    const defaultType = 'DEFAULT' + new Date().getTime();
    dispatch({
        type: defaultType
    });
    return {
        getState,
        dispatch,
        subscribe
    }
}
// export function applyMiddleware(...middlewares) {
//     return createStore => reducer => {
//         const store = createStore(reducer);
//         let dispatch = store.dispatch;
//         const midApi = {
//             getState: store.getState,
//             dispatch: (action, ...args) => dispatch(action, ...args)
//         };
//         const middlewareChain = middlewares.map(middleware => middleware(midApi));
//         dispatch = compose(...middlewareChain)(store.dispatch);
//         return {
//             ...store,
//             dispatch
//             // 加强版的dispatch dispatch
//         };
//     };
// }
// function compose(...funcs) {
//     if (funcs.length === 0) {
//         return arg => arg;
//     }
//     if (funcs.length === 1) {
//         return funcs[0];
//     }
//     return funcs.reduce((a, b) => (...args) => a(b(...args)));
// }

export function applyMiddleware(...middlewares) {
    // createStore(reducer, applyMiddleware());
    return (createStore) => reducer => {
        // return reducer => {
            const store = createStore(reducer);
            let dispatchOld = store.dispatch;
            const midApi = {
                getState: store.getState,
                dispatch: (...args) => {
                    console.log(...args);
                    return dispatchOld(...args)
                }
            }
            // next 
            const middleAPIs = middlewares.map(middleware => middleware(midApi));
            dispatchOld = compose(...middleAPIs)(dispatchOld);
            // middleAPI
            return {
                ...store,
                dispatch: dispatchOld
            }
        // }
    }
}
// function compose(...funcs) {
//     if (funcs.length === 0) {
//       return arg => arg;
//     }
//     if (funcs.length === 1) {
//       return funcs[0];
//   }
//     return funcs.reduce((a, b) => (...args) => a(b(...args)));
// }
function compose(...fns){
    console.log('componse', fns);
    const dispatch = fns.reduce((prev, next) => {
        console.log('prev', prev);
        console.log('next', next)
        // 1 thunk(promise())
        // dispatchOld
        // action
        // args 是dispatchold方法 对应中间件中的next
        return (...args) => {
            console.log(args[0].toString())
            return prev(next(...args));
        }
    });
    return dispatch;
    // return fns.reduce((prev, next) => (...args) => prev(next(...args)));
} 