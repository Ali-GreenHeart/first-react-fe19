import { useState } from "react";
import Button from "../Button"
import Input from "../Input";
import styles from "./index.module.css"
import { useNavigate } from "react-router";

const onDelete = (_todoName, setTodos) => {
    setTodos((preTodos) => preTodos.filter((tn) => tn !== _todoName))
}

const ToDo = () => {
    const [error, setError] = useState('')
    const [value, setValue] = useState('')
    const [todos, setTodos] = useState([])
    const navigate = useNavigate()

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
        if (value.length < 4) { // 4-den kicik olmasin
            setError("uzunlugu 4-den kicik todo olmur!")
            setTimeout(() => {
                setError('')
            }, 1000);
            return;
        }
        setTodos([...todos, value])
        setValue('')
        navigate("/contacts")
    }

    return (
        <>
            <div className={styles.container}>
                {
                    error && <p className={styles.error}>{error}</p>
                }
                <Input
                    placeholder="what are you going TO DO?"
                    onEnter={addToDo}
                    value={value}
                    onChange={setValue}
                />
                <Button
                    title="add todo"
                    onClick={addToDo}
                />
                <div className={styles.todoContainer}>
                    {todos.map((todoName) => (
                        <div className={styles.todo_container} key={todoName}>
                            <p>{todoName}</p>
                            <div className={styles.btn_container}>
                                <button onClick={() => onEdit(todoName)}>🖋</button>
                                <button onClick={() => onDelete(todoName, setTodos)}>❌</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ToDo;
// konvensiya olaraq. component-in ozunu oz faylindan default olaraq export edin
// atomar
