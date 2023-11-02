import axios from 'axios'

export const initialStore = {
    count: 0,
    followers: []
}
const _url = `https://api.github.com/users/Ali-GreenHeart/followers`

export const _actions = {
    'get_followers': 0,
    'remove_follower': 1
}

const alion_followers_reducer = (store, action) => {
    switch (action.type) {
        case _actions.get_followers:
            return { ...store, followers: action.payload };
        case _actions.remove_follower:
            return {
                ...store,
                followers: store.followers.filter(({ id }) => id !== action.payload)
            }
        default:
            return store;
    }
}


export async function getFollowers() {
    const { data } = await axios.get(_url)
    return data;
}

export default alion_followers_reducer;
