import { useState, useEffect } from 'react'
export default function Effect() {
    const [count, setCount] = useState(0);
    // 不传入第二个参数，一旦组件状态有变更就会执行effect函数，组件状态变更之前执行clean函数
    // 第二个参数传人空数组 effect函数在组件挂载之后执行 clean函数在组件卸载之前执行
    // 第二个参数传入参数之后，effect会在挂载之后，更新之后执行，clean函数会在卸载之前，更新之前执行
    useEffect(() => {
        console.log('effect');
        return () => {
        console.log('clean')
        }
    }, [count])    
    return <h1 onClick={() => setCount(count+1)}>{count}</h1>
}