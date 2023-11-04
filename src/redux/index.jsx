
const initialStore = {
    count: 0,
    users: [],
    contacts: []
}


const rootReducer = (store = initialStore, action) => {
    switch (action.type) {
        case 'inc':
            return { ...store, count: store.count + 1 }
        case 'dec':
            return { ...store, count: store.count - 1 }
        case 'get_users':
            return { ...store, users: action.payload }
        case 'get_contacts':
            return { ...store, contacts: action.payload }
        case 'add_contact':
            const newContact = {
                "id": "1234rtyhtrbdsastrg",
                "age": 28,
                "name": "Davis Grimes",
                "gender": "male",
                "company": "TECHADE",
                "email": "davisgrimes@techade.com",
                "photo": "https://randomuser.me/api/portraits/men/35.jpg"
            }
            return { ...store, contacts: store.contacts.concat(newContact) }
        default:
            return store;
    }

}

export default rootReducer;
