import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import AuthContextProvider from './context-api/AuthContext'
import ModeContextProvider from './context-api/ModeContext'
import UserContextProvider from './context-api/UsersContext'
import "./index.css"
import ManyModeContextProvider from './context-api/ManyModeContext'

const reactRootElement = ReactDOM.createRoot(document.getElementById('root'))

reactRootElement.render(
    <React.StrictMode>
        <AuthContextProvider>
            {/* <ModeContextProvider> */}
            <ManyModeContextProvider>
                <UserContextProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </UserContextProvider>
            </ManyModeContextProvider>
            {/* </ModeContextProvider> */}
        </AuthContextProvider>
    </React.StrictMode>
)
