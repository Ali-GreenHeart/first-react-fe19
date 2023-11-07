import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import todosSlice from "../../redux-toolkit/slices/todosSlice"

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
            {
                todos.map((todo) => {
                    return (
                        <p key={todo.id}>
                            {todo.todo}
                        </p>
                    )
                })
            }
        </>
    )
}
export default ToDos
