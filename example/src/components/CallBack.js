import React, { useCallback, useState } from 'react'
import Button from './Button'

export default function CallBack() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const add1 = () => setCount1(count1+1);
    const add2 = useCallback(
        () => {
            setCount2(count2+1)
        },
        [count2],
    )
    return (
        <div>
            <Button clickHandle={add1}>Btn1 const</Button>    
            <Button clickHandle={add2}>Btn2 useCallBack</Button>    
            <Button clickHandle={() => setCount3(count3+1)}>Btn3 line</Button>    
        </div>
    )
}
