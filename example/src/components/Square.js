import React, { useEffect, useRef } from 'react'
import './square.css'
export default function Square() {
    const ref = useRef();
    const moveTo = event => {
        ref.current.style.left = event.clientX + 'px';
        ref.current.style.top = event.clientY + 'px';
    }
    useEffect(() => {
        document.body.addEventListener('click', event => {
            moveTo(event)
        })
    }, [])
    return (
        <div ref={ref} className="square">
            
        </div>
    )
}
