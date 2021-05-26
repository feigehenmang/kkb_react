import React from 'react'

export default React.forwardRef(function TransferRef(props, ref) {
    // console.log(props, ref);
    return (
        <div ref={ref}>
            TransferRef
        </div>
    )
})
