import React, { useEffect, useState } from 'react'

export default function Radom() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      if (count === 0) {
        const randomNum = 10 + Math.random()*200
        setCount(10 + Math.random()*200);
      }
    }, [count]);
  
    return (
        <div onClick={() => setCount(0)}>{count}</div>
    );
}
