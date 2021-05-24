import React, { useEffect, useRef, useState } from 'react'
import ClickOutSide from '../utils/clickOutSide';

export default function SubMenu() {
    const ref = useRef(null);
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    }
    const currClickOutSideFn = () => {
        if(show) {
            handleClick()
        }
    }
    const stopHandle = event => {
        event.stopPropagation()
    }
   
    return (
        <ClickOutSide clickOutSideFn={currClickOutSideFn}>
            <div onClick={handleClick} ref={ref}>
                Ref
                {show && <div onClick={stopHandle}>show</div>}
            </div>
        </ClickOutSide>
        
    )
}
