import axios from "axios"
import { useEffect, useReducer } from "react"
import PageContainer from "../../components/PageContainer"
import { USER_ACTIONS, userReducer } from "./user_reducer"
import Button from "../../components/Button"

const _url = 'https://jsonplaceholder.typicode.com/users'


const UsersWithReducer = () => {
    const [users, dispatch] = useReducer(userReducer, [])
    useEffect(() => {
        axios.get(_url).then(({ data }) => {
            const action = { type: USER_ACTIONS.GET_USERS, payload: data }
            dispatch(action)
        })
    }, [])

    return (
        <PageContainer>
            <Button
                onClick={() => dispatch({ type: USER_ACTIONS.ADD_USER })}
                title="add user"
            />
            <Button
                onClick={() => dispatch({ type: USER_ACTIONS.RM_MID_USER })}
                title="remove middle user"
            />
            <Button
                onClick={() => dispatch({ type: USER_ACTIONS.RM_LAST_USER })}
                title="remove last user"
            />
            {
                users.map(({ id, username, email }) => {
                    return (
                        <div key={id}>
                            <h1> {id}. {username} - {email} <button
                                onClick={() => dispatch({ type: USER_ACTIONS.DELETE_USER, payload: id })}
                            >❌</button> </h1>
                        </div>
                    )
                })
            }
        </PageContainer>
    )
}
export default UsersWithReducer
