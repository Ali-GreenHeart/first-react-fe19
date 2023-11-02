import axios from 'axios'

export const initialStore = {
    count: 0,
    followers: []
}
const _url = `https://api.github.com/users/Ali-GreenHeart/followers`

export const _actions = {
    'get_followers': 0,
}

const alion_followers_reducer = (store, action) => {
    switch (action.type) {
        case _actions.get_followers:
            return { ...store, followers: action.payload };
        default:
            return store;
    }
}


export async function getFollowers() {
    const { data } = await axios.get(_url)
    return data;
}

export default alion_followers_reducer;
