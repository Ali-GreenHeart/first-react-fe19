import React from 'react'
import './App.css'
import FirstElement from "./components/FirstElement"
import Footer from './components/Footer'

function App() {
  return (
    <>
      <FirstElement ad='ali' soyad='isiyev' />
      <FirstElement ad='lale' soyad='quliyeva' />
      <FirstElement ad='leman' soyad='qehremanov' />
      <FirstElement ad='ali' soyad='ismayilov' />
      {/* self-closed */}
      <Footer />
    </>
  )
}

export default App
