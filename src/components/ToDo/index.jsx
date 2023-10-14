import { useState } from "react";
import Button from "../Button"
import Input from "../Input";
import styles from "./index.module.css"

const ToDo = () => {
    const [value, setValue] = useState('')
    const [todos, setTodos] = useState([])

    const onEdit = (_todoName) => {
        let newTodos = todos.map((todoName) => {
            if (todoName === _todoName) {
                return prompt('yeni todo adini yazin: ', _todoName)
            }
            return todoName;
        })
        setTodos(newTodos)
    }
    const onDelete = (_todoName) => {
        // let newTodos = todos.filter((tn) => tn !== _todoName)
        // setTodos(newTodos)
        setTodos((preTodos) => preTodos.filter((tn) => tn !== _todoName))
    }

    return (
        <>
            <div className={styles.container}>
                <Input
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                    }}
                />
                <Button
                    title="add todo"
                    onClick={() => {
                        setTodos([...todos, value])
                        setValue('')
                    }}
                />
                {todos.map((todoName) => (
                    <div className={styles.todo_container} key={todoName}>
                        <p>{todoName}</p>
                        <button onClick={() => onEdit(todoName)}>🖋</button>
                        <button onClick={() => onDelete(todoName)}>❌</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ToDo;
// konvensiya olaraq. component-in ozunu oz faylindan default olaraq export edin
// atomar
