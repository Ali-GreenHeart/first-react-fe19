import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const reactRootElement = ReactDOM.createRoot(document.getElementById('root'))

reactRootElement.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
