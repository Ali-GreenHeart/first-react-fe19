import axios from "axios"
import { useEffect } from "react"
import { connect } from "react-redux"
import Button from "../../components/Button"
import PageContainer from "../../components/PageContainer"

const _url = 'https://jsonplaceholder.typicode.com/users'


const UsersWithRedux = ({ users, dispatch }) => {
    useEffect(() => {
        axios.get(_url).then(({ data }) => {
            const action = { type: 'get_users', payload: data }
            dispatch(action)
        })
    }, [])

    return (
        <PageContainer>
            <Button
                onClick={() => dispatch({ type: '' })}
                title="add user"
            />
            <Button
                onClick={() => dispatch({ type: '' })}
                title="remove middle user"
            />
            <Button
                onClick={() => dispatch({ type: '' })}
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

const mapStoreToProps = (store) => store;
export default connect(mapStoreToProps)(UsersWithRedux)
