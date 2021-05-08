import React, { useContext, useEffect, useLayoutEffect, useReducer } from 'react';
// step1 create Context
const Context = React.createContext();

// step2 使用provider
export function Provider({store, children}) {
    console.log(store, children, Context)
    return (
        <Context.Provider value={store}>
            {children}
        </Context.Provider>
    )
}

// step3 取值

export const connect = (mapStateToProps, mapDispatchToProps) => {
    return WrappedComponent => {
        return (props) => {
            console.log(mapStateToProps, mapDispatchToProps, props)
            const store = useContext(Context);
            let stateToProps = mapStateToProps(store.getState());
            let dispatchToProps = {dispatch: store.dispatch};
            if(typeof mapDispatchToProps === 'function') {
                dispatchToProps = mapDispatchToProps(store.dispatch);
            } else if (typeof mapDispatchToProps === 'object') {
                dispatchToProps = bindActionCreators(mapDispatchToProps, store.dispatch)
            }
            let forceUpdate = useForceUpdate();
            // useEffect(() => {
            //     store.subscribe(() => {
            //         forceUpdate();
            //     })
            // }, [])
            useLayoutEffect(() => {
                store.subscribe(() => {
                    forceUpdate();
                })
            }, [])
            return <WrappedComponent {...props} {...stateToProps} {...dispatchToProps}/>
        }
    }
}
export function bindActionCreator(creator, dispatch) {
    return (...args) => {
        dispatch(creator(...args))
    }
}
export function bindActionCreators(creators, dispatch) {
    let result = {};
    for (const key in creators) {
        result[key] = bindActionCreator(creators[key], dispatch);
    }
    return result;
}

export function useSelector(selector) {
    const store = useContext(Context);
    return selector(store.getState())
}
export function useDispatch() {
    const store = useContext(Context);
    const forceUpdate = useForceUpdate();
    useLayoutEffect(() => {
        store.subscribe(() => {
            forceUpdate();
        })
    }, [])
    return store.dispatch
}
export function useForceUpdate() {
    let [, forceUpdate] = useReducer(x=>x+1, 0);
    return forceUpdate
}