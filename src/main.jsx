import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import AuthContextProvider from './context-api/AuthContext'
import ModeContextProvider from './context-api/ModeContext'
import UserContextProvider from './context-api/UsersContext'
import "./index.css"
import ManyModeContextProvider from './context-api/ManyModeContext'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux'
import store from './redux-toolkit/store'
const reactRootElement = ReactDOM.createRoot(document.getElementById('root'))

// const store = createStore(rootReducer)
// 1. obyektdir, immutable olmalidir!

reactRootElement.render(
    <AuthContextProvider>
        {/* <ModeContextProvider> */}
        <Provider store={store}>
            <ManyModeContextProvider>
                <UserContextProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </UserContextProvider>
            </ManyModeContextProvider>
        </Provider>
        {/* </ModeContextProvider> */}
    </AuthContextProvider>
)
