import axios from "axios"
import { useEffect, useReducer } from "react"
import PageContainer from "../../components/PageContainer"
import { reducer_pakize } from "./user_reducer"
import Button from "../../components/Button"

const _url = 'https://jsonplaceholder.typicode.com/users'


const UsersWithReducer = () => {
    const [users, dispatch] = useReducer(reducer_pakize, [])
    useEffect(() => {
        axios.get(_url).then(({ data }) => {
            const action = { type: "GET_USERS", payload: data }
            dispatch(action)
        })
    }, [])

    return (
        <PageContainer>
            <Button
                onClick={() => dispatch({ type: "ADD_USER" })}
                title="add user"
            />
            <Button
                onClick={() => dispatch({ type: "RM_LAST_USER" })}
                title="remove last user"
            />
            {
                users.map(({ id, username, email }) => {
                    return (
                        <div key={id}>
                            <h1> {id}. {username} - {email} <button
                                onClick={() => dispatch({ type: "DELETE_USER", payload: id })}
                            >❌</button> </h1>
                        </div>
                    )
                })
            }
        </PageContainer>
    )
}
export default UsersWithReducer
