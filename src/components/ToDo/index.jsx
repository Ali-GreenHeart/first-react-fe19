import { useState } from "react";
import Button from "../Button"
import Input from "../Input";
import styles from "./index.module.css"

const onDelete = (_todoName, setTodos) => {
    setTodos((preTodos) => preTodos.filter((tn) => tn !== _todoName))
}

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

    const addToDo = () => {
        setTodos([...todos, value])
        setValue('')
    }

    return (
        <>
            <div className={styles.container}>
                <Input
                    onEnter={addToDo}
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                    }}
                />
                <Button
                    title="add todo"
                    onClick={addToDo}
                />
                {todos.map((todoName) => (
                    <div className={styles.todo_container} key={todoName}>
                        <p>{todoName}</p>
                        <button onClick={() => onEdit(todoName)}>🖋</button>
                        <button onClick={() => onDelete(todoName, setTodos)}>❌</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ToDo;
// konvensiya olaraq. component-in ozunu oz faylindan default olaraq export edin
// atomar
