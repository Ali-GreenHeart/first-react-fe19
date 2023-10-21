import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Link, NavLink } from 'react-router-dom'

const reactRootElement = ReactDOM.createRoot(document.getElementById('root'))

reactRootElement.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)
