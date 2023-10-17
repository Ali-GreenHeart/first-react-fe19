import React, { useState } from 'react'
import './App.css'
import Users from './components/Users'

function App() {
  const [show, setShow] = useState(false)

  return (
    <>
      <button onClick={() => setShow(!show)}>show/hide users</button>
      {
        show && <Users />
      }
    </>
  )
}

export default App
