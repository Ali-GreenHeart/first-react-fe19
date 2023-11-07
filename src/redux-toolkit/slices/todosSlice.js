import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        value: []
    },
    reducers: {
        getTodos: (store, { payload }) => {
            store.value = payload
        }
    }
})
export default todosSlice;
