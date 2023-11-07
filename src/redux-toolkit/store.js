import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import todosSlice from "./slices/todosSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        todos: todosSlice.reducer,
    }
})

export default store;
