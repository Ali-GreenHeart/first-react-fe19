import { useEffect } from "react";
import { createContext } from "react";
import axios from 'axios'
export const UserContext = createContext({});
const url = 'https://jsonplaceholder.typicode.com/users'

const UserContextProvider = ({ children }) => {
    return (
        <UserContext.Provider value={[]}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider
