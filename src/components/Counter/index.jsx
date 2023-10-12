import { useState } from "react";

export default function Counter() {
    // hook use* ;  xususi bir isleri gorurler. 
    // class component-ler (stateful): state, lifecycle
    // functional (stateless)
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(0)}>reset</button>
            <button onClick={() => console.log(count)}>console</button>
            <button onClick={() => setCount(+prompt('eded daxil edin: '))}>special</button>
        </>
    )
}
