import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Registration'
import AdminPanel from './Pages/AdminPanel'
function App() {
  return (
   <>
  <Header />
   <Navbar />
   <div>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about-us" element={<About />} />
    <Route path="/login" element={<Login />} />
    <Route path="/registration" element={<Register />} />
    <Route path="/admin-panel" element={<AdminPanel />} />
   </Routes>
   </div></> 
  )
}

export default App