import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Login from './Pages/Login'
import Register from './Pages/Register'
import Feed from './Pages/feed'

import Navbar from './components/Navbar'
import {Routes,Route, Navigate} from 'react-router-dom'


function App() {

  //bring in user info
const { user } = useUser()

console.log(user)


  // useEffect(() => {
  //   //async function getData
  //     }, [])

 return (
    <>
    
    
    <Navbar/>

    {user ? <Routes>
      <Route path = "/feed" element={<Feed/>}/>
      <Route path = "*" element={<Navigate to ="/feed"/>}/>
    </Routes>
    :
    <Routes>

        <Route path = "/login" element={<Login/>}/>
        <Route path = "/register" element={<Register/>}/>
        
      </Routes>} 
      
      
    </>
  )
}

export default App
