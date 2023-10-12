import { useState } from "react";
import Button from '../Button'
import styles from './index.module.css'
export default function Counter() {
    // hook use* ;  xususi bir isleri gorurler. 
    // class component-ler (stateful): state, lifecycle
    // functional (stateless)
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>{count}</h1>
            <div className={styles.btn_container}>
                <Button title="+" onClick={() => setCount(count + 1)} />
                <Button title="-" onClick={() => setCount(count - 1)} />
                <Button title="reset" onClick={() => setCount(0)} />
                <Button title="console" onClick={() => console.log(count)} />
                <Button title="special" onClick={() => setCount(+prompt('eded daxil edin: '))} />
            </div>
        </>
    )
}
