import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Login from './Pages/Login'
import Register from './Pages/Register'
import Feed from './Pages/feed'

import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'


function App() {
  useEffect(() => {
    //async function getData
      }, [])

  return (
    <>
    
    <Navbar/>
      <Routes>
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/register" element={<Register/>}/>
        <Route path = "/feed" element={<Feed/>}/>
      </Routes>
      
    </>
  )
}

export default App
