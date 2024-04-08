import styles from './Counter.module.css';
import { useState } from 'react'
function Counter(){

    const [count, setCount] = useState(0)


    return (
        <div>
            <h1>My Counter</h1>
            <h1><span>{count}</span></h1>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button>
            <button className={styles.reset} onClick={()=>setCount(0)} >reset</button>
        </div>
    )
}


export default Counter;