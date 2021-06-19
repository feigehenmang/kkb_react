import React from 'react'
import ReactDOM from 'react-dom'
import {getParentElement} from './utils'
export default function Modal({selectElement}) {
    const parentElement = getParentElement(selectElement);
    return (ReactDOM.createPortal(<div></div>, ))
}
