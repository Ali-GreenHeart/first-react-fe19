import { v4 } from "uuid";

export const reducer_pakize = (state = [], action) => {
    switch (action.type) {
        case "GET_USERS":
            return action.payload;
        case "RM_LAST_USER":
            let a = [...state]
            a.pop()
            return a;
        case "DELETE_USER":
            const areYouSure = confirm('are you sure? :) ')
            if (areYouSure) {
                const newState = state.filter(({ id }) => id !== action.payload)
                return newState;
            } else {
                alert('zarafat eyleme qurbanin olum....')
                return state;
            }
        case "ADD_USER":
            const username = prompt('enter new username')
            const email = prompt('enter new email')
            const id = v4()
            // return [...state, { id, username, email }]
            return state.concat({ id, username, email })
        default:
            return []
    }
}
