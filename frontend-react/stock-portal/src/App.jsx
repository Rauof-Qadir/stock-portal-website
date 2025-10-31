import React from 'react'
import './assets/css/style.css'
import Main from './assets/components/Main.jsx'
import Register from './assets/components/Register.jsx'
import Header from './assets/components/Header.jsx'
import Footer from './assets/components/Footer.jsx'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
      <Header /> {/* Adding Header component here so that it appears on all pages */}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer /> {/* Adding Footer component here so that it appears on all pages */}
    </BrowserRouter>
     
    </>
  )
}

export default App
