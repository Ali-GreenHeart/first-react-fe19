import { useState } from "react";
import Button from "../Button"
import Input from "../Input";
import styles from "./index.module.css"

const ToDo = () => {
    const [value, setValue] = useState('')
    const [todos, setTodos] = useState([])

    return (
        <>
            <div className={styles.container}>
                <Input
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                    }}
                />
                <Button title="add todo" onClick={() => {
                    setTodos([...todos, value])
                    setValue('')
                }} />
                <Button title="show todos on console" onClick={() => { console.log(todos) }} />
            </div>
        </>
    )
}

export default ToDo;
// konvensiya olaraq. component-in ozunu oz faylindan default olaraq export edin
// atomar
