import React from 'react'
import {useSelector, useDispatch} from '../kredux/react-redux'
export default function ReactReduxHookPage() {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    return (
        <div>
            ReactReduxHookPage
            <h1>{count}</h1>
            <button onClick={() => dispatch({type: 'ANOTHER', count: 3})}>add</button>
        </div>
    )
}
