import axios from "axios"
import { useEffect, useState } from "react"


const _url = 'https://jsonplaceholder.typicode.com/users'
const Users = () => {
    const [users, setUsers] = useState(0)

    useEffect(() => {
        console.log('men yarandim!')
    }, [])
    useEffect(() => {
        console.log('users deyisildi dostum')
    }, [users])
    useEffect(() => {
        return () => {
            console.log('RIP')
        }
        // clean-up funksiyasi
    }, [])

    return (
        <div>
            <h1>Users sehifesi</h1>
            <button
                onClick={() => {
                    setUsers(users + 1)
                }}
            >users deyisildi</button>
        </div>
    )
}
export default Users
