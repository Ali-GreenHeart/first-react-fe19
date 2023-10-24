import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import AuthContextProvider from './context-api/AuthContext'
import ModeContextProvider from './context-api/ModeContext'
import "./index.css"

const reactRootElement = ReactDOM.createRoot(document.getElementById('root'))

reactRootElement.render(
    <React.StrictMode>
        <AuthContextProvider>
            <ModeContextProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ModeContextProvider>
        </AuthContextProvider>
    </React.StrictMode>
)
