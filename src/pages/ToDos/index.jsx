import axios from "axios"
import { useEffect } from "react"

const url = 'https://dummyjson.com/todos'

const ToDos = ({ }) => {
    useEffect(() => {
        axios.get(url).then(({ data }) => {
            console.log(data.todos)
        })
    }, [])
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Welcome to todos page</h1>
        </>
    )
}
export default ToDos
