import React from 'react'
import ReactDOM from 'react-dom/client'
import { FirstElement } from './FirstElement'
// import App from './App.jsx'
// import './index.css'

const reactRootElement = ReactDOM.createRoot(document.getElementById('root'))

reactRootElement.render(
  <div>
    <FirstElement ad='ali' soyad='isiyev' />
    <FirstElement ad='lale' soyad='quliyeva' />
    <FirstElement ad='leman' soyad='qehremanov' />
    <FirstElement ad='ali' soyad='ismayilov' />
  </div>
)
