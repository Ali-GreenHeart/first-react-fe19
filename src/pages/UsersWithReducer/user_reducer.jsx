import { v4 } from "uuid";

export const USER_ACTIONS = {
    "GET_USERS": 0,
    "RM_LAST_USER": 1,
    'RM_MID_USER': 2,
    "DELETE_USER": 3,
    "ADD_USER": 4
}

export const userReducer = (state = [], action) => {
    switch (action.type) {
        case USER_ACTIONS.GET_USERS:
            return action.payload;
        case USER_ACTIONS.RM_LAST_USER:
            let a = [...state]
            a.pop()
            return a;
        case USER_ACTIONS.RM_MID_USER:
            let _state = [...state]
            _state.splice(state.length / 2, 1)
            return _state;
        case USER_ACTIONS.DELETE_USER:
            const areYouSure = confirm('are you sure? :) ')
            if (areYouSure) {
                const newState = state.filter(({ id }) => id !== action.payload)
                return newState;
            } else {
                alert('zarafat eyleme qurbanin olum....')
                return state;
            }
        case USER_ACTIONS.ADD_USER:
            const username = prompt('enter new username')
            const email = prompt('enter new email')
            const id = v4()
            // return [...state, { id, username, email }]
            return state.concat({ id, username, email })
        default:
            return state;
    }
}
