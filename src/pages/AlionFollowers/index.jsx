import { useReducer } from "react"
import PageContainer from "../../components/PageContainer"
import alion_followers_reducer, { _actions, getFollowers, initialStore } from "./reducer"
import { useEffect } from "react"




const AlionFollowers = ({ }) => {
    const [store, dispatch] = useReducer(alion_followers_reducer, initialStore)

    useEffect(() => {
        getFollowers().then((data) => {
            dispatch({ type: _actions.get_followers, payload: data })
        })
    }, [])
    console.log(store)


    return (
        <PageContainer>
            <h1>Welcome to alion's followers page! </h1>
            {

                store.followers?.map((fol) => {
                    return (
                        <div key={fol.id}>
                            <h1>{fol.login}</h1>
                        </div>
                    )
                })
            }
        </PageContainer>
    )
}
export default AlionFollowers
