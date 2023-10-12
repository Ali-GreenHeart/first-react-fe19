import React from 'react'
import './App.css'
import FirstElement from "./components/FirstElement"
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
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
