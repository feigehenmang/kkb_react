import React, { useContext } from 'react'
import { RouterContext } from './context';
export default function Link({to, children}) {
    const {history} = useContext(RouterContext);
    const handelClick = e => {
        e.preventDefault();
        history.push(to);
    }
    return (
        <a onClick={handelClick}>{children}</a>
    )
}
