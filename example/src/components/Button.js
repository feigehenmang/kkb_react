import React from 'react'

export default React.memo(function Button({clickHandle, children}) {
    return (
        <button onClick={clickHandle}>{children}{Math.random()}</button>
    )
})
