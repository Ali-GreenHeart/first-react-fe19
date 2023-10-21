import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Link, NavLink } from 'react-router-dom'

const reactRootElement = ReactDOM.createRoot(document.getElementById('root'))

reactRootElement.render(
    <React.StrictMode>
        <BrowserRouter>
            <Link to="/todo">go to todo</Link>
            <NavLink
                to="/contacts"
                // className={({ isActive, isPending }) =>}
                style={({ isActive }) => ({ color: isActive ? 'red' : 'initial' })}
            >
                contacts
            </NavLink>;
            <App />
        </BrowserRouter>
    </React.StrictMode>
)
