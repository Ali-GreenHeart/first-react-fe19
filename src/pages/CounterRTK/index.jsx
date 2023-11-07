import { useDispatch, useSelector } from "react-redux"
import counterSlice from "../../redux-toolkit/slices/counterSlice"

const CounterRTK = () => {
    const { actions } = counterSlice
    const counterValue = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <>
            <h1>{counterValue}</h1>
            <button onClick={() => dispatch(actions.inc())}>+</button>
            <button onClick={() => dispatch(actions.dec())}>-</button>
            <button onClick={() => dispatch(actions.reset())}>reset</button>
            <button onClick={() => dispatch(actions.special(+prompt('enter new number')))}>special</button>
        </>
    )
}
export default CounterRTK
