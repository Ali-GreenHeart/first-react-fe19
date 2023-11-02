import { useReducer } from "react"
import PageContainer from "../../components/PageContainer"
import alion_followers_reducer, { _actions, getFollowers, initialStore } from "./reducer"
import { useEffect } from "react"

const style = { display: 'flex', gap: 10, alignItems: 'center' }
const omgStyle = { width: 150, height: 150, objectFit: 'cover' }

const AlionFollowers = ({ }) => {
    const [store, dispatch] = useReducer(alion_followers_reducer, initialStore)

    useEffect(() => {
        (async () => {
            const folks = await getFollowers()
            dispatch({ type: _actions.get_followers, payload: folks })
        })()
    }, [])


    return (
        <PageContainer>
            <h1>Welcome to alion's followers page! </h1>
            <button onClick={() => dispatch({ type: _actions.RM_last_follower })}>remove last follower</button>
            <button onClick={() => dispatch({ type: _actions.RM_first_with_a })}>remove first follower with a/A</button>
            {

                store.followers.map((fol) => {
                    return (
                        <div style={style} key={fol.id}>
                            <h1>{fol.login}</h1>
                            <button
                                onClick={() => dispatch({ type: _actions.remove_follower, payload: fol.id })}
                            >
                                ❌
                            </button>
                            <img style={omgStyle} src={fol.avatar_url} alt={`${fol.login}'s image`} />
                        </div>
                    )
                })
            }
        </PageContainer>
    )
}
export default AlionFollowers
