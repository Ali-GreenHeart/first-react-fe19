import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import todosSlice from "../../redux-toolkit/slices/todosSlice"
import style from './style.module.css'

const url = 'https://dummyjson.com/todos'

const ToDos = () => {
    const { actions } = todosSlice
    const todos = useSelector((store) => store.todos.value)
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get(url).then(({ data }) => {
            dispatch(actions.getTodos(data.todos))
        })
    }, [])
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Welcome to todos page</h1>
            <div className={style.todosContainer}>
                {
                    todos.map((todo) => {
                        return (
                            <div
                                onClick={() => dispatch(actions.toggleDone(todo.id))}
                                style={{
                                    backgroundColor: todo.completed ? 'darkgreen' : 'darkred'
                                }}
                                className={style.todo} key={todo.id}>
                                <p>{todo.todo}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default ToDos
